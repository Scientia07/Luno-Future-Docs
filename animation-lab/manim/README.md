<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
description:    Manim setup guide and scene documentation
==============================================================================
-->

# Manim Animation Framework

Mathematical animation engine by 3Blue1Brown. Perfect for equations, proofs, and physics visualizations.

## Quick Start

### Prerequisites

- Python 3.8+
- FFmpeg
- LaTeX (for math rendering)

### Linux/WSL Installation

```bash
# Install system dependencies
sudo apt update
sudo apt install -y python3-pip python3-venv ffmpeg

# For LaTeX support (required for math equations)
sudo apt install -y texlive texlive-latex-extra texlive-fonts-extra

# Setup Python environment
cd animation-lab/manim
python3 -m venv venv
source venv/bin/activate

# Install Manim
pip install -r requirements.txt
```

### macOS Installation

```bash
# Install dependencies via Homebrew
brew install python ffmpeg
brew install --cask mactex  # LaTeX (large download ~4GB)

# Setup environment
cd animation-lab/manim
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Windows Installation

```powershell
# Install Python from python.org
# Install FFmpeg from ffmpeg.org
# Install MiKTeX from miktex.org (for LaTeX)

cd animation-lab\manim
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

---

## Rendering Scenes

### Basic Commands

```bash
# Activate virtual environment first
source venv/bin/activate  # Linux/Mac
# or: .\venv\Scripts\activate  # Windows

# Preview (low quality, fast)
manim -pql scenes/math_equations.py EquationScene

# High quality preview
manim -pqh scenes/math_equations.py EquationScene

# 4K render (production)
manim -qk scenes/math_equations.py EquationScene

# Export as GIF
manim -qh --format=gif scenes/math_equations.py EquationScene

# Render without preview
manim -ql scenes/math_equations.py EquationScene
```

### Quality Presets

| Flag | Resolution | FPS | Use Case |
|------|------------|-----|----------|
| `-ql` | 480p | 15 | Quick preview |
| `-qm` | 720p | 30 | Draft review |
| `-qh` | 1080p | 60 | Production |
| `-qk` | 4K | 60 | High-end |

---

## Available Scenes

### math_equations.py

| Scene | Description | Duration |
|-------|-------------|----------|
| `EquationScene` | Euler's Identity derivation | ~15s |
| `QuadraticFormula` | Step-by-step quadratic formula | ~20s |
| `FourierSeries` | Square wave approximation | ~18s |
| `ComplexPlane` | Complex number visualization | ~12s |

### physics_sim.py

| Scene | Description | Duration |
|-------|-------------|----------|
| `PendulumScene` | Simple harmonic motion | ~10s |
| `WaveInterference` | Superposition visualization | ~12s |
| `VectorField` | Electric field from two charges | ~15s |
| `ProjectileMotion` | Animated projectile with equations | ~12s |

---

## Output Directory

Rendered files are saved to:

```
manim/media/
├── videos/
│   └── [scene_name]/
│       └── [quality]/
│           └── [SceneName].mp4
├── images/
└── Tex/
```

---

## Troubleshooting

### LaTeX Not Found

```
Error: LaTeX not found. Install texlive.
```

**Fix:**
```bash
# Linux
sudo apt install texlive-full

# macOS
brew install --cask mactex

# Windows: Install MiKTeX from miktex.org
```

### FFmpeg Not Found

```
Error: FFmpeg not found
```

**Fix:**
```bash
# Linux
sudo apt install ffmpeg

# macOS
brew install ffmpeg

# Windows: Download from ffmpeg.org and add to PATH
```

### Cairo/Pango Errors

```
Error: cairo/pango not found
```

**Fix:**
```bash
# Linux
sudo apt install libcairo2-dev libpango1.0-dev

# macOS
brew install cairo pango
```

### Virtual Environment Issues

```bash
# Recreate virtual environment
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## Creating New Scenes

### Basic Template

```python
from manim import *

class MyScene(Scene):
    def construct(self):
        # Create objects
        circle = Circle(color=BLUE)
        square = Square(color=RED)

        # Animate
        self.play(Create(circle))
        self.play(Transform(circle, square))
        self.wait(1)
```

### Key Manim Features

| Feature | Usage |
|---------|-------|
| `MathTex()` | LaTeX equations |
| `Text()` | Plain text |
| `Create()` | Draw animation |
| `Transform()` | Morph between objects |
| `FadeIn/Out()` | Opacity transitions |
| `TransformMatchingTex()` | Semantic equation transitions |
| `always_redraw()` | Time-dependent updates |
| `ValueTracker()` | Animated parameters |

---

## Resources

- [Manim Community Docs](https://docs.manim.community/)
- [3Blue1Brown YouTube](https://www.youtube.com/c/3blue1brown)
- [Manim Examples Gallery](https://docs.manim.community/en/stable/examples.html)

---

*Last updated: 2026-01-27*
