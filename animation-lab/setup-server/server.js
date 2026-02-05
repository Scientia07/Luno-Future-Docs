/*
==============================================================================
FILE METADATA
==============================================================================
filename:       server.js
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Express server for animation framework setup and management
==============================================================================
*/

const express = require('express');
const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3456;

// Paths
const ANIMATION_LAB = path.resolve(__dirname, '..');
const REMOTION_DIR = path.join(ANIMATION_LAB, 'remotion');
const MANIM_DIR = path.join(ANIMATION_LAB, 'manim');
const THREEJS_DIR = path.join(ANIMATION_LAB, 'threejs');

// Track running processes
const runningProcesses = {};

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================================
// STATUS ENDPOINTS
// ============================================================================

// Check if Remotion is set up
app.get('/api/status/remotion', (req, res) => {
    const nodeModulesExists = fs.existsSync(path.join(REMOTION_DIR, 'node_modules'));
    const packageJsonExists = fs.existsSync(path.join(REMOTION_DIR, 'package.json'));

    res.json({
        framework: 'remotion',
        installed: nodeModulesExists,
        hasConfig: packageJsonExists,
        running: !!runningProcesses.remotion,
        path: REMOTION_DIR
    });
});

// Check if Manim is set up
app.get('/api/status/manim', async (req, res) => {
    const venvExists = fs.existsSync(path.join(MANIM_DIR, 'venv'));
    const requirementsExists = fs.existsSync(path.join(MANIM_DIR, 'requirements.txt'));

    // Check if manim is installed in venv
    let manimInstalled = false;
    if (venvExists) {
        const pipPath = path.join(MANIM_DIR, 'venv', 'bin', 'pip');
        try {
            await execPromise(`${pipPath} show manim`);
            manimInstalled = true;
        } catch {
            manimInstalled = false;
        }
    }

    res.json({
        framework: 'manim',
        venvExists,
        installed: manimInstalled,
        hasConfig: requirementsExists,
        path: MANIM_DIR
    });
});

// Check Three.js status (always ready)
app.get('/api/status/threejs', (req, res) => {
    const demoExists = fs.existsSync(path.join(THREEJS_DIR, 'physics-demo.html'));

    res.json({
        framework: 'threejs',
        installed: true,
        ready: demoExists,
        path: THREEJS_DIR,
        note: 'Three.js runs directly in browser - no setup needed'
    });
});

// Get all statuses
app.get('/api/status', async (req, res) => {
    const remotionStatus = await getRemotionStatus();
    const manimStatus = await getManimStatus();
    const threejsStatus = getThreejsStatus();

    res.json({
        remotion: remotionStatus,
        manim: manimStatus,
        threejs: threejsStatus
    });
});

// ============================================================================
// SETUP ENDPOINTS (with SSE streaming)
// ============================================================================

// Install Remotion dependencies
app.get('/api/setup/remotion', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    sendEvent(res, 'log', '📦 Installing Remotion dependencies...\n');
    sendEvent(res, 'log', `Working directory: ${REMOTION_DIR}\n\n`);

    const proc = spawn('npm', ['install'], {
        cwd: REMOTION_DIR,
        shell: true
    });

    proc.stdout.on('data', (data) => {
        sendEvent(res, 'log', data.toString());
    });

    proc.stderr.on('data', (data) => {
        sendEvent(res, 'log', data.toString());
    });

    proc.on('close', (code) => {
        if (code === 0) {
            sendEvent(res, 'complete', '✅ Remotion setup complete!');
        } else {
            sendEvent(res, 'error', `❌ Setup failed with code ${code}`);
        }
        res.end();
    });

    req.on('close', () => proc.kill());
});

// Setup Manim (create venv + install)
app.get('/api/setup/manim', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    sendEvent(res, 'log', '🐍 Setting up Manim environment...\n');
    sendEvent(res, 'log', `Working directory: ${MANIM_DIR}\n\n`);

    const venvPath = path.join(MANIM_DIR, 'venv');
    const venvExists = fs.existsSync(venvPath);

    // Build command sequence
    let commands;
    if (venvExists) {
        sendEvent(res, 'log', '📁 Virtual environment exists, installing packages...\n\n');
        commands = `source ${venvPath}/bin/activate && pip install -r requirements.txt`;
    } else {
        sendEvent(res, 'log', '📁 Creating virtual environment...\n\n');
        commands = `cd ${MANIM_DIR} && python3 -m venv venv && source venv/bin/activate && pip install --upgrade pip && pip install -r requirements.txt`;
    }

    const proc = spawn('bash', ['-c', commands], {
        cwd: MANIM_DIR
    });

    proc.stdout.on('data', (data) => {
        sendEvent(res, 'log', data.toString());
    });

    proc.stderr.on('data', (data) => {
        sendEvent(res, 'log', data.toString());
    });

    proc.on('close', (code) => {
        if (code === 0) {
            sendEvent(res, 'complete', '✅ Manim setup complete!');
        } else {
            sendEvent(res, 'error', `❌ Setup failed with code ${code}`);
        }
        res.end();
    });

    req.on('close', () => proc.kill());
});

// ============================================================================
// LAUNCH ENDPOINTS
// ============================================================================

// Launch Remotion Studio
app.post('/api/launch/remotion', (req, res) => {
    if (runningProcesses.remotion) {
        return res.json({
            success: false,
            message: 'Remotion is already running',
            port: 3000
        });
    }

    const proc = spawn('npm', ['start'], {
        cwd: REMOTION_DIR,
        shell: true,
        detached: true
    });

    runningProcesses.remotion = proc;

    proc.on('close', () => {
        delete runningProcesses.remotion;
    });

    // Give it a moment to start
    setTimeout(() => {
        res.json({
            success: true,
            message: 'Remotion Studio starting...',
            url: 'http://localhost:3000',
            port: 3000
        });
    }, 1000);
});

// Stop Remotion
app.post('/api/stop/remotion', (req, res) => {
    if (runningProcesses.remotion) {
        process.kill(-runningProcesses.remotion.pid);
        delete runningProcesses.remotion;
        res.json({ success: true, message: 'Remotion stopped' });
    } else {
        res.json({ success: false, message: 'Remotion is not running' });
    }
});

// Render Manim scene
app.get('/api/render/manim/:scene', (req, res) => {
    const scene = req.params.scene;
    const quality = req.query.quality || 'l'; // l=low, h=high, k=4k

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    sendEvent(res, 'log', `🎬 Rendering Manim scene: ${scene}\n`);
    sendEvent(res, 'log', `Quality: ${quality === 'l' ? 'Low (preview)' : quality === 'h' ? 'High' : '4K'}\n\n`);

    const venvPath = path.join(MANIM_DIR, 'venv');
    const command = `source ${venvPath}/bin/activate && manim -pq${quality} scenes/math_equations.py ${scene}`;

    const proc = spawn('bash', ['-c', command], {
        cwd: MANIM_DIR
    });

    proc.stdout.on('data', (data) => {
        sendEvent(res, 'log', data.toString());
    });

    proc.stderr.on('data', (data) => {
        sendEvent(res, 'log', data.toString());
    });

    proc.on('close', (code) => {
        if (code === 0) {
            sendEvent(res, 'complete', '✅ Render complete!');
        } else {
            sendEvent(res, 'error', `❌ Render failed with code ${code}`);
        }
        res.end();
    });

    req.on('close', () => proc.kill());
});

// Serve Three.js demo
app.get('/api/launch/threejs', (req, res) => {
    res.json({
        success: true,
        message: 'Three.js runs in browser',
        url: '/threejs/physics-demo.html'
    });
});

// ============================================================================
// UTILITY ENDPOINTS
// ============================================================================

// Check system dependencies
app.get('/api/system-check', async (req, res) => {
    const checks = {};

    // Node.js
    try {
        const nodeVersion = await execPromise('node --version');
        checks.node = { installed: true, version: nodeVersion.trim() };
    } catch {
        checks.node = { installed: false };
    }

    // Python
    try {
        const pythonVersion = await execPromise('python3 --version');
        checks.python = { installed: true, version: pythonVersion.trim() };
    } catch {
        checks.python = { installed: false };
    }

    // FFmpeg
    try {
        const ffmpegVersion = await execPromise('ffmpeg -version | head -1');
        checks.ffmpeg = { installed: true, version: ffmpegVersion.trim() };
    } catch {
        checks.ffmpeg = { installed: false };
    }

    // LaTeX (for Manim)
    try {
        await execPromise('which pdflatex');
        checks.latex = { installed: true };
    } catch {
        checks.latex = { installed: false, note: 'Required for Manim math rendering' };
    }

    res.json(checks);
});

// Serve static files from animation-lab
app.use('/threejs', express.static(THREEJS_DIR));
app.use('/outputs', express.static(path.join(ANIMATION_LAB, 'outputs')));

// ============================================================================
// HELPERS
// ============================================================================

function sendEvent(res, event, data) {
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
}

function execPromise(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) reject(error);
            else resolve(stdout || stderr);
        });
    });
}

async function getRemotionStatus() {
    const nodeModulesExists = fs.existsSync(path.join(REMOTION_DIR, 'node_modules'));
    return {
        installed: nodeModulesExists,
        running: !!runningProcesses.remotion
    };
}

async function getManimStatus() {
    const venvPath = path.join(MANIM_DIR, 'venv');
    const venvExists = fs.existsSync(venvPath);
    let manimInstalled = false;

    if (venvExists) {
        try {
            await execPromise(`${venvPath}/bin/pip show manim 2>/dev/null`);
            manimInstalled = true;
        } catch {
            manimInstalled = false;
        }
    }

    return { venvExists, installed: manimInstalled };
}

function getThreejsStatus() {
    return {
        installed: true,
        ready: fs.existsSync(path.join(THREEJS_DIR, 'physics-demo.html'))
    };
}

// ============================================================================
// START SERVER
// ============================================================================

app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🎬 Animation Lab Setup Server                              ║
║                                                              ║
║   Web UI:  http://localhost:${PORT}                           ║
║                                                              ║
║   Frameworks:                                                ║
║   • Remotion (React video)                                   ║
║   • Manim (Math animations)                                  ║
║   • Three.js (3D graphics)                                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);
});
