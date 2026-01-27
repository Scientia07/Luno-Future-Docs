<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ****
author:         Joel + Claude
related_docs:   [index.html, ../docs/frameworks/threejs/integration-plan.md]
description:    Quick reference guide for Three.js 3D WebGL demo
==============================================================================
-->

# Three.js 3D WebGL Demo

> Immersive geometric art visualization powered by WebGL

---

## Quick Start

Open `index.html` in a modern browser with WebGL support.

```
threejs/
└── index.html     # Main demo file (self-contained)
```

---

## Features

| Feature | Description |
|---------|-------------|
| Central Shape | Icosahedron with wireframe overlay |
| Orbiting Objects | TorusKnot, Octahedron, Dodecahedron, Tetrahedron |
| Particle System | 2000 floating particles with project colors |
| Dynamic Lighting | Ambient + directional + 3 colored point lights |
| OrbitControls | Mouse drag to rotate, scroll to zoom |
| Background | Dual grid system for depth perception |

---

## Controls

| Input | Action |
|-------|--------|
| Mouse drag | Orbit camera around scene |
| Scroll wheel | Zoom in/out |
| `R` key | Reset camera to default position |
| `Space` key | Toggle animation / Override reduced motion |

---

## Technical Details

### Dependencies (CDN)

- Three.js r160 (ES Modules via jsDelivr)
- OrbitControls addon

### Colors Used

```css
--color-primary: #6366f1   /* Indigo */
--color-secondary: #ec4899 /* Pink */
--color-accent: #10b981    /* Emerald */
```

### Performance

- Pixel ratio capped at 2x
- ~2000 particles (adjustable)
- 60 FPS target on modern hardware
- Fog for depth culling
- `prefers-reduced-motion` respected

---

## Accessibility

- Skip link for keyboard navigation
- ARIA labels on canvas container
- Screen reader text alternative
- `prefers-reduced-motion` support
- Keyboard controls (R, Space)
- WebGL fallback message

---

## Browser Support

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 14+ |
| Edge | 80+ |

Requires WebGL 1.0 or 2.0 support.

---

## Customization

Edit the `CONFIG` object in `index.html`:

```javascript
const CONFIG = {
    bgColor: 0x050510,
    primaryColor: 0x6366f1,
    secondaryColor: 0xec4899,
    accentColor: 0x10b981,
    cameraFOV: 60,
    cameraZ: 8,
    particleCount: 2000,
    autoRotateSpeed: 0.5
};
```

---

## Related Documentation

- [Integration Plan](../docs/frameworks/threejs/integration-plan.md)
- [PRD](../docs/frameworks/threejs/prd-threejs.md)
- [Research Notes](../docs/research/active/3d-webgl/threejs-research.md)

---

*Part of [Luno-Future-Docs](../README.md) showcase*
