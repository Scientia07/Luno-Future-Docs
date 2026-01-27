<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       threejs-research.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [../../INDEX.md, ../../../frameworks/]
description:    Research evaluation for Three.js 3D WebGL library
==============================================================================
-->

# Research: Three.js

> **Research Type:** Evaluation
> **Status:** Active
> **Started:** 2026-01-27
> **Recommendation:** Proceed (Medium Priority)

---

## 1. Research Objective

### 1.1 Questions to Answer

1. **Primary:** Should we add 3D WebGL capabilities to the framework portfolio?
2. **Secondary:** Is Three.js the right choice, or are there simpler alternatives?
3. **Tertiary:** What's a realistic scope for a demo that showcases 3D without overwhelming complexity?

### 1.2 Success Criteria

- [x] Demonstrates capability not possible with other frameworks
- [x] Works without build tools (CDN available)
- [x] Active community and documentation
- [ ] Reasonable learning curve for maintenance
- [x] Fills the 3D/immersive experience gap

---

## 2. Background

### 2.1 Context

The project currently has **no 3D/WebGL content**. As web experiences become more immersive, 3D elements are increasingly common in:
- Product showcases
- Data visualization
- Interactive documentation
- Premium marketing sites

### 2.2 Why Three.js?

- **102,000+ GitHub stars** - the industry standard
- **Massive ecosystem** - plugins, examples, community
- **Proven at scale** - used by Google, Apple, Nike, etc.
- **No build required** - works with CDN imports
- **Active development** - monthly releases

### 2.3 Related Work

| Resource | Type | Key Takeaway |
|----------|------|--------------|
| [Three.js Official](https://threejs.org/) | Website | Extensive examples and docs |
| [GitHub](https://github.com/mrdoob/three.js) | Repository | 102k+ stars |
| [Three.js Journey](https://threejs-journey.com/) | Course | Popular learning resource |
| [Discover Three.js](https://discoverthreejs.com/) | Book | Free online book |

---

## 3. Findings

### 3.1 Overview

Three.js is a JavaScript library that makes WebGL accessible. It abstracts the complexity of raw WebGL into a scene-graph based API with cameras, lights, materials, and geometries. It's the de facto standard for 3D on the web.

### 3.2 Technical Analysis

#### Dependencies

| Dependency | Size | Required | Notes |
|------------|------|----------|-------|
| three.min.js | ~600KB | Yes | Core library |
| OrbitControls.js | ~20KB | Optional | Camera controls |
| GLTFLoader.js | ~50KB | Optional | 3D model loading |

#### Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best WebGL2 support |
| Firefox | ✅ Full | Good performance |
| Safari | ✅ Full | WebGL2 since Safari 15 |
| Edge | ✅ Full | Chromium-based |
| Mobile | ⚠️ Varies | GPU-dependent |

#### Core Concepts

| Concept | Description |
|---------|-------------|
| Scene | Container for all 3D objects |
| Camera | ViewPoint (Perspective, Orthographic) |
| Renderer | WebGL rendering engine |
| Mesh | Geometry + Material |
| Light | Ambient, Point, Directional, Spot |
| Controls | Orbit, Fly, Pointer Lock |

### 3.3 Alternatives Considered

| Library | Stars | Complexity | Best For |
|---------|-------|------------|----------|
| **Three.js** | 102k | Medium-High | Full 3D scenes |
| Babylon.js | 23k | Medium-High | Game-like experiences |
| A-Frame | 16k | Low | VR/AR, declarative HTML |
| Spline | - | Low | Visual 3D design |
| React Three Fiber | 27k | Medium | React integration |

**Decision:** Three.js is the best choice because:
- Largest community and resources
- Works with vanilla JS (no React needed)
- Most examples and tutorials available

### 3.4 Pros and Cons

| Pros | Cons |
|------|------|
| ✅ Industry standard (102k stars) | ❌ Steep learning curve |
| ✅ Massive example library | ❌ Large bundle (~600KB) |
| ✅ Active development | ❌ Performance tuning needed |
| ✅ Works without build tools | ❌ Can be overkill for simple 3D |
| ✅ WebGL abstraction | ❌ Debugging can be difficult |
| ✅ 3D model support (GLTF, OBJ) | |

### 3.5 Demo Scope Options

| Scope | Complexity | Content |
|-------|------------|---------|
| **Minimal** | Low | Rotating logo/shape with orbit controls |
| **Medium** | Medium | Interactive product showcase with lighting |
| **Advanced** | High | Data visualization in 3D space |
| **Complex** | Very High | Full 3D environment with navigation |

**Recommendation:** Start with **Medium** scope - an interactive 3D showcase that demonstrates the capability without overwhelming maintenance burden.

### 3.6 Code Example

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
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x6366f1 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Camera position
camera.position.z = 5;

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();
</script>
```

---

## 4. Risk Assessment

### 4.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Performance on low-end devices | Medium | Medium | Provide fallback or reduced quality |
| Learning curve for maintenance | Medium | Medium | Keep demo scope minimal |
| WebGL not supported | Low | High | Detect and show fallback message |

### 4.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep | Medium | Medium | Define strict demo boundaries |
| Hard to modify content | Medium | Low | Good documentation |

---

## 5. Recommendation

### 5.1 Summary

Three.js adds a **unique capability** not possible with any other framework in the portfolio. While the learning curve is steeper, a well-scoped demo can showcase 3D without becoming a maintenance burden.

### 5.2 Decision

| Decision | Rationale |
|----------|-----------|
| **Proceed** (Medium Priority) | Unique capability, industry standard, future-proofing |

### 5.3 Implementation Strategy

1. **Create focused demo:** `/threejs/` or `/3d-showcase/`
2. **Limited scope:** One impressive but maintainable scene
3. **Use CDN:** No build tools, ES modules via importmap
4. **Interactive:** OrbitControls for user exploration
5. **Fallback:** Detect WebGL support, show message if not available

### 5.4 Demo Content Ideas

| Idea | Complexity | Visual Impact |
|------|------------|---------------|
| Rotating TechEd logo in 3D | Low | Medium |
| Interactive 3D data chart | Medium | High |
| Product showcase with lighting | Medium | High |
| Animated 3D infographic | Medium-High | Very High |

### 5.5 Timeline

| Phase | Target |
|-------|--------|
| PRD Creation | Q1 2026 |
| Basic Implementation | Q2 2026 |
| Full Demo | Q2 2026 |

---

## 6. References

- [Three.js Official](https://threejs.org/)
- [GitHub Repository](https://github.com/mrdoob/three.js)
- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [Three.js Journey (Course)](https://threejs-journey.com/)
- [Discover Three.js (Free Book)](https://discoverthreejs.com/)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial research |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
