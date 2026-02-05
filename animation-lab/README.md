<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-27
updated:        2026-01-27
version:        1.1.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
description:    Animation Framework Lab - Setup and usage guide
==============================================================================
-->

# Animation Framework Lab

Test and compare animation frameworks for LunoLabs documentation: **Remotion**, **Manim**, and **Three.js**.

## Quick Start

### Web UI Setup (Recommended)

The easiest way to set up all frameworks:

```bash
# From the animation-lab directory
./setup.sh

# Opens at http://localhost:3456
```

This launches a web dashboard where you can:
- Check system dependencies (Node, Python, FFmpeg, LaTeX)
- Install each framework with one click
- Launch Remotion Studio
- Render Manim scenes
- View Three.js demos

### Manual Setup

| Framework | Setup Time | Run Command |
|-----------|------------|-------------|
| **Three.js** | None | Open `threejs/physics-demo.html` in browser |
| **Remotion** | ~2 min | `cd remotion && npm install && npm start` |
| **Manim** | ~5 min | See Python setup below |

---

## Framework Comparison

| Use Case | Best Framework | Why |
|----------|----------------|-----|
| Data Flow / Architecture | Remotion | React components, reusable |
| Math / Equations | Manim | LaTeX, precise rendering |
| Code Walkthroughs | Remotion | Syntax highlighting, web-native |
| Charts / Data Viz | Remotion + D3 | Dynamic data binding |
| Process Diagrams | Remotion | SVG animations |
| Physics Simulations | Three.js / Manim | Interactive / Mathematical |

---

## Remotion Setup

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
cd animation-lab/remotion
npm install
```

### Development

```bash
# Start Remotion Studio (live preview)
npm start

# Opens at http://localhost:3000
```

### Rendering

```bash
# Render single composition
npm run build:dataflow

# Render all compositions
npm run build:all

# Output: ./out/*.mp4
```

### Available Compositions

| Composition | Description | Duration |
|-------------|-------------|----------|
| `DataFlow` | System architecture animation | 5s |
| `CodeWalkthrough` | Syntax-highlighted code explanation | 7.5s |
| `AnimatedChart` | Bar chart with spring animations | 4s |
| `ProcessDiagram` | Step-by-step workflow | 6s |

### Creating New Compositions

1. Create `src/compositions/MyAnimation.tsx`
2. Register in `src/Root.tsx`
3. Add build script to `package.json`

**Tip:** The Remotion skill is installed globally. Claude Code will automatically use best practices when you work on `.tsx` files in this directory.

---

## Manim Setup

### Prerequisites
- Python 3.8+
- LaTeX (for math rendering)
- FFmpeg

### Linux/WSL Installation

```bash
# Install system dependencies
sudo apt update
sudo apt install -y python3-pip ffmpeg texlive-full

# Setup Python environment
cd animation-lab/manim
python3 -m venv venv
source venv/bin/activate

# Install Manim
pip install -r requirements.txt
```

### macOS Installation

```bash
# Install dependencies
brew install python ffmpeg
brew install --cask mactex

# Setup environment
cd animation-lab/manim
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Rendering Scenes

```bash
# Activate virtual environment
source venv/bin/activate

# Low quality preview (fast)
manim -pql scenes/math_equations.py EquationScene

# High quality
manim -pqh scenes/math_equations.py EquationScene

# 4K render
manim -qk scenes/math_equations.py EquationScene

# Export as GIF
manim -qh --format=gif scenes/math_equations.py EquationScene
```

### Available Scenes

**math_equations.py:**
- `EquationScene` - Euler's Identity derivation
- `QuadraticFormula` - Step-by-step quadratic formula
- `FourierSeries` - Square wave approximation
- `ComplexPlane` - Complex number visualization

**physics_sim.py:**
- `PendulumScene` - Simple harmonic motion
- `WaveInterference` - Superposition visualization
- `VectorField` - Electric field from two charges
- `ProjectileMotion` - Animated projectile with equations

### Creating New Scenes

```python
from manim import *

class MyScene(Scene):
    def construct(self):
        # Your animation code here
        circle = Circle()
        self.play(Create(circle))
        self.wait(1)
```

---

## Three.js

### No Setup Required!

Three.js runs directly in the browser. Just open:

```
animation-lab/threejs/physics-demo.html
```

### For Local Development

```bash
# Optional: serve with live reload
npx serve animation-lab/threejs

# Opens at http://localhost:3000
```

### Features

- Interactive 3D particle physics
- Real-time parameter adjustment
- Camera controls (orbit, zoom)
- Screenshot export
- FPS monitoring

### Controls

| Input | Action |
|-------|--------|
| Click + Drag | Rotate camera |
| Scroll | Zoom in/out |
| Space | Pause/Resume |

---

## Output Directory

Rendered videos are saved to:

```
animation-lab/
├── outputs/           # Final renders
│   ├── remotion/      # MP4/WebM from Remotion
│   └── manim/         # MP4/GIF from Manim
├── remotion/out/      # Remotion build output
└── manim/media/       # Manim render output
```

---

## Claude Code Integration

The **Remotion skill** is installed globally (`~/.claude/skills/remotion/`). When working in this directory, Claude Code will automatically:

1. Read relevant rule files for best practices
2. Use proper Remotion patterns (interpolate, spring, Sequence)
3. Follow composition structure guidelines
4. Handle timing and animation correctly

### Trigger Keywords

Say any of these to activate the skill:
- "Create a video composition"
- "Animate this chart"
- "Add a transition"
- "Make a code walkthrough"

---

## Resources

- [Remotion Docs](https://www.remotion.dev/docs)
- [Manim Community Docs](https://docs.manim.community/)
- [Three.js Docs](https://threejs.org/docs/)
- [3Blue1Brown YouTube](https://www.youtube.com/c/3blue1brown) (Manim inspiration)

---

*Last updated: 2026-01-27*
