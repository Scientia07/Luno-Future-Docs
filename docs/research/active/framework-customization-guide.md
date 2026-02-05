<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       framework-customization-guide.md
created:        2026-01-28
updated:        2026-01-28
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [threejs-research.md, ../../../animation-lab/]
description:    Practical guide for customizing colors, models, and assets across all frameworks
==============================================================================
-->

# Framework Customization Guide

> **Purpose:** Quick reference for modifying colors, models, and assets in each framework
> **Status:** Active
> **Last Updated:** 2026-01-28

---

## Quick Navigation

| Framework | [Colors](#1-color-customization) | [Models/Assets](#2-threejs-model-loading) | Config File |
|-----------|--------|--------------|-------------|
| **Three.js** | CSS + JS CONFIG | GLTFLoader | `physics-demo.html` |
| **Remotion** | Hardcoded TSX | React components | `*.tsx` files |
| **Manim** | Python constants | Code-generated | `manim.cfg` |

---

## 1. Color Customization

### 1.1 Three.js Colors

**Location:** `/animation-lab/threejs/physics-demo.html`

#### Method 1: CSS Custom Properties (UI Elements)

```css
/* Line 24-28 in physics-demo.html */
:root {
    --color-primary: #6366f1;    /* Change this → Indigo */
    --color-secondary: #ec4899;  /* Change this → Pink */
    --color-accent: #10b981;     /* Change this → Emerald */
    --bg-darker: #0a0a1a;        /* Change this → Background */
}
```

**To customize:** Edit these values directly in the `<style>` block.

#### Method 2: JavaScript CONFIG Object (3D Scene)

```javascript
/* Line 298+ in physics-demo.html */
const CONFIG = {
    // Scene colors
    BACKGROUND_COLOR: 0x0a0a1a,  /* Change this → hex without # */

    // Particle gradient (purple to pink)
    COLOR_R_BASE: 0.4,   /* Red channel start (0-1) */
    COLOR_R_RANGE: 0.6,  /* Red channel variation */
    COLOR_G_BASE: 0.2,   /* Green channel start */
    COLOR_G_RANGE: 0.3,  /* Green channel variation */
    COLOR_B_BASE: 0.9,   /* Blue channel start */
    COLOR_B_RANGE: 0.4,  /* Blue channel variation */
};
```

**To customize particles:**
1. Open `physics-demo.html`
2. Find the `CONFIG` object (line ~298)
3. Modify `COLOR_*` values (0.0 to 1.0 scale)
4. Save and refresh browser

#### Method 3: Material Colors (Objects)

```javascript
// For mesh materials
const material = new THREE.MeshStandardMaterial({
    color: 0x6366f1  // Change this hex color
});

// For point materials (particles)
const material = new THREE.PointsMaterial({
    color: 0xffffff,  // Base color
    vertexColors: true // Or use per-vertex colors
});
```

---

### 1.2 Remotion Colors

**Location:** `/animation-lab/remotion/src/compositions/*.tsx`

#### DataFlowDiagram.tsx (lines 129-189)

```tsx
// Node colors
const nodeColors = {
    primary: '#6366f1',    // Change these
    secondary: '#ec4899',
    accent: '#10b981',
    amber: '#f59e0b',
    red: '#ef4444',
};

// Background
backgroundColor: '#1e1b4b',  // Line ~45
```

#### CodeWalkthrough.tsx (lines 67-73)

```tsx
// Syntax highlighting
const syntaxColors = {
    keyword: '#c792ea',    // Purple
    number: '#f78c6c',     // Orange
    string: '#c3e88d',     // Green
    comment: '#546e7a',    // Gray
    symbol: '#89ddff',     // Cyan
    identifier: '#82aaff', // Blue
};
```

#### AnimatedChart.tsx (lines 145-146)

```tsx
// Dynamic bar colors using HSL
const hue = (value / maxValue) * 120; // 0=red, 120=green
backgroundColor: `hsl(${hue}, 70%, 55%)`,
```

**To customize:**
1. Open the `.tsx` file
2. Find color definitions (search for `#` or `hsl`)
3. Change hex values
4. Run `npm start` to preview

---

### 1.3 Manim Colors

**Location:** `/animation-lab/manim/`

#### manim.cfg (background)

```ini
[style]
background_color = #0f172a  # Change this
```

#### Python Scene Files

```python
# Use Manim color constants
from manim import RED, BLUE, GOLD, GREEN, YELLOW, PURPLE, ORANGE

# In scene code
text = Text("Hello", color=YELLOW)
circle = Circle(color=BLUE)
box = SurroundingRectangle(equation, color=GOLD)

# Custom hex colors
from manim import ManimColor
custom_color = ManimColor("#6366f1")
```

**Available Manim Colors:**
`RED`, `BLUE`, `GREEN`, `YELLOW`, `ORANGE`, `PURPLE`, `GOLD`, `WHITE`, `BLACK`, `GRAY`

---

## 2. Three.js Model Loading

### 2.1 The Process Overview

```
┌─────────────────┐    ┌──────────────┐    ┌─────────────┐    ┌─────────────┐
│  Get 3D Model   │ -> │ Add Loader   │ -> │ Load Model  │ -> │ Add to Scene│
│  (.glb/.gltf)   │    │  (GLTFLoader)│    │  (async)    │    │             │
└─────────────────┘    └──────────────┘    └─────────────┘    └─────────────┘
```

### 2.2 Step 1: Get a 3D Model

**Free Model Sources:**
| Source | URL | Format |
|--------|-----|--------|
| Sketchfab | https://sketchfab.com/search?type=models&features=downloadable | GLTF/GLB |
| Poly Pizza | https://poly.pizza | GLTF |
| Kenney Assets | https://kenney.nl/assets | GLTF |
| Three.js Examples | https://threejs.org/examples/ | GLTF |

**Recommended format:** `.glb` (binary, smaller file size)

### 2.3 Step 2: Add GLTFLoader

**Import via CDN (no build tools):**

```html
<!-- Add after three.min.js -->
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/js/loaders/GLTFLoader.js"></script>
```

**Or use ES Modules:**

```html
<script type="importmap">
{
    "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js",
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/"
    }
}
</script>

<script type="module">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
</script>
```

### 2.4 Step 3: Load the Model

**Basic Loading:**

```javascript
// Create loader instance
const loader = new THREE.GLTFLoader();

// Load model
loader.load(
    'path/to/model.glb',  // Model path (relative or URL)

    // onLoad callback
    function (gltf) {
        const model = gltf.scene;

        // Optional: adjust model
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);

        // Add to scene
        scene.add(model);
    },

    // onProgress callback (optional)
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },

    // onError callback
    function (error) {
        console.error('Error loading model:', error);
    }
);
```

**Using Async/Await (cleaner):**

```javascript
async function loadModel(path) {
    const loader = new THREE.GLTFLoader();

    try {
        const gltf = await loader.loadAsync(path);
        scene.add(gltf.scene);
        return gltf.scene;
    } catch (error) {
        console.error('Failed to load model:', error);
    }
}

// Usage
const model = await loadModel('./models/robot.glb');
```

### 2.5 Step 4: Swap Models Dynamically

**Complete Example - Model Switcher:**

```javascript
let currentModel = null;

async function switchModel(modelPath) {
    // Remove old model
    if (currentModel) {
        scene.remove(currentModel);

        // Dispose of resources (important for memory!)
        currentModel.traverse((child) => {
            if (child.isMesh) {
                child.geometry.dispose();
                if (child.material.isMaterial) {
                    child.material.dispose();
                }
            }
        });
    }

    // Load new model
    const loader = new THREE.GLTFLoader();
    const gltf = await loader.loadAsync(modelPath);

    currentModel = gltf.scene;

    // Center and scale model
    const box = new THREE.Box3().setFromObject(currentModel);
    const center = box.getCenter(new THREE.Vector3());
    currentModel.position.sub(center);  // Center at origin

    scene.add(currentModel);
}

// Usage with buttons
document.getElementById('model-1').onclick = () => switchModel('./models/car.glb');
document.getElementById('model-2').onclick = () => switchModel('./models/robot.glb');
```

### 2.6 Modify Loaded Model Colors

```javascript
loader.load('model.glb', (gltf) => {
    const model = gltf.scene;

    // Traverse all meshes and change color
    model.traverse((child) => {
        if (child.isMesh) {
            // Option 1: Change existing material color
            child.material.color.setHex(0x6366f1);

            // Option 2: Replace with new material
            child.material = new THREE.MeshStandardMaterial({
                color: 0x6366f1,
                metalness: 0.5,
                roughness: 0.5
            });
        }
    });

    scene.add(model);
});
```

### 2.7 File Structure for Models

**Recommended project structure:**

```
animation-lab/
└── threejs/
    ├── physics-demo.html
    ├── model-showcase.html   ← New demo with models
    └── models/               ← Create this folder
        ├── robot.glb
        ├── car.glb
        └── logo.glb
```

---

## 3. Complete Three.js Model Demo Template

Copy this template to create a new model showcase:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Model Showcase</title>
    <style>
        :root {
            --color-primary: #6366f1;
            --bg-dark: #0a0a1a;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg-dark); overflow: hidden; }
        #canvas-container { width: 100vw; height: 100vh; }

        .model-selector {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 10;
            display: flex;
            gap: 10px;
        }
        .model-btn {
            padding: 10px 20px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 8px;
            color: white;
            cursor: pointer;
        }
        .model-btn:hover, .model-btn.active {
            background: var(--color-primary);
        }
        .loading {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: system-ui;
            z-index: 100;
        }
    </style>
</head>
<body>
    <div id="canvas-container"></div>

    <div class="model-selector">
        <button class="model-btn active" data-model="./models/model1.glb">Model 1</button>
        <button class="model-btn" data-model="./models/model2.glb">Model 2</button>
        <button class="model-btn" data-model="./models/model3.glb">Model 3</button>
    </div>

    <div class="loading" id="loading">Loading model...</div>

    <script type="importmap">
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js",
            "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/"
        }
    }
    </script>

    <script type="module">
        import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a1a);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 2, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        // Model loading
        const loader = new GLTFLoader();
        let currentModel = null;

        async function loadModel(path) {
            document.getElementById('loading').style.display = 'block';

            // Remove old model
            if (currentModel) {
                scene.remove(currentModel);
                currentModel.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.dispose();
                        if (child.material.dispose) child.material.dispose();
                    }
                });
            }

            try {
                const gltf = await loader.loadAsync(path);
                currentModel = gltf.scene;

                // Center model
                const box = new THREE.Box3().setFromObject(currentModel);
                const center = box.getCenter(new THREE.Vector3());
                currentModel.position.sub(center);

                // Scale to fit view
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                if (maxDim > 3) {
                    currentModel.scale.setScalar(3 / maxDim);
                }

                scene.add(currentModel);
            } catch (error) {
                console.error('Error loading model:', error);
            }

            document.getElementById('loading').style.display = 'none';
        }

        // Model selector buttons
        document.querySelectorAll('.model-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                loadModel(e.target.dataset.model);
            });
        });

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            if (currentModel) {
                currentModel.rotation.y += 0.005; // Auto-rotate
            }
            renderer.render(scene, camera);
        }

        // Resize handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();

        // Load initial model (or show placeholder)
        // loadModel('./models/model1.glb');
        document.getElementById('loading').style.display = 'none';
    </script>
</body>
</html>
```

---

## 4. Quick Reference Tables

### 4.1 Color Locations Summary

| Framework | What to Change | File | Line(s) |
|-----------|---------------|------|---------|
| **Three.js** | UI colors | `physics-demo.html` | 24-28 |
| **Three.js** | Scene background | `physics-demo.html` | 300 |
| **Three.js** | Particle colors | `physics-demo.html` | 331-337 |
| **Remotion** | Node colors | `DataFlowDiagram.tsx` | 129-189 |
| **Remotion** | Syntax colors | `CodeWalkthrough.tsx` | 67-73 |
| **Remotion** | Chart colors | `AnimatedChart.tsx` | 145-146 |
| **Manim** | Background | `manim.cfg` | 65 |
| **Manim** | Object colors | `scenes/*.py` | varies |

### 4.2 Model Loading Checklist

- [ ] Download model file (.glb preferred)
- [ ] Place in `/animation-lab/threejs/models/` folder
- [ ] Add GLTFLoader import to your HTML
- [ ] Create loader instance: `new THREE.GLTFLoader()`
- [ ] Call `loader.load()` or `loader.loadAsync()`
- [ ] Add `gltf.scene` to your scene
- [ ] Optional: Center and scale the model
- [ ] Optional: Modify materials/colors

---

## 5. Troubleshooting

| Problem | Solution |
|---------|----------|
| Model not showing | Check console for CORS errors; use local server |
| Model too big/small | Use `Box3` to measure, then `scale.setScalar()` |
| Model off-center | Calculate center with `Box3.getCenter()` then subtract |
| Colors look wrong | Check if model uses textures vs vertex colors |
| Performance issues | Use `.glb` format; enable Draco compression |

---

## References

- [Three.js GLTFLoader Documentation](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
- [Discover Three.js - Load Models](https://discoverthreejs.com/book/first-steps/load-models/)
- [Three.js Examples Gallery](https://threejs.org/examples/)
- [Sketchfab Free Models](https://sketchfab.com/search?type=models&features=downloadable)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-28 | Joel + Claude | Initial guide with colors & model loading |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
