<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-threejs.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../research/active/3d-webgl/threejs-research.md]
description:    Product Requirements Document for Three.js 3D WebGL framework
==============================================================================
-->

# PRD: Three.js

> **Framework:** Three.js
> **Version:** 0.160+
> **Status:** Planned
> **Last Evaluated:** 2026-01-27
> **Demo:** [Link to demo](/threejs/) *(not yet implemented)*

---

## 1. Overview

### 1.1 Summary

Three.js is a JavaScript library that makes WebGL accessible by abstracting complex 3D rendering into a scene-graph based API. It enables creation of interactive 3D experiences in the browser without requiring deep graphics programming knowledge. This framework fills the **3D/WebGL gap** in the current portfolio, providing capabilities not achievable with any existing framework.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [threejs.org](https://threejs.org/) |
| Documentation | [threejs.org/docs](https://threejs.org/docs/) |
| GitHub | [github.com/mrdoob/three.js](https://github.com/mrdoob/three.js) |
| CDN | [cdn.jsdelivr.net/npm/three](https://cdn.jsdelivr.net/npm/three@0.160/) |
| Examples | [threejs.org/examples](https://threejs.org/examples/) |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [x] Hybrid/Other: **3D WebGL Rendering**

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| three.min.js | 0.160+ | Yes | Yes |
| OrbitControls.js | 0.160+ | Recommended | Yes |
| GLTFLoader.js | 0.160+ | Optional | Yes |

**Total Bundle Size:** ~600KB core + ~70KB addons

### 2.2 File Structure

```
/threejs/
├── index.html              # Main demo file
├── assets/
│   ├── models/             # Optional: GLTF/GLB models
│   ├── textures/           # Optional: texture files
│   └── hdri/               # Optional: environment maps
├── js/
│   └── scene.js            # Scene configuration (optional)
└── README.md               # Quick reference
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Best WebGL2 support |
| Firefox | 90+ | Good performance |
| Safari | 15+ | WebGL2 since Safari 15 |
| Edge | 90+ | Chromium-based |
| Mobile | Varies | GPU-dependent, test required |

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | N/A | <4s |
| Bundle size | ~670KB | <700KB |
| Lighthouse Performance | N/A | 80+ |
| Frame rate | N/A | 60fps |

**Note:** 3D content inherently has higher performance requirements than 2D frameworks.

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes | After initial load |
| Keyboard navigation | Partial | Requires custom implementation |
| Touch support | Yes | Via OrbitControls |
| Print/PDF export | No | Not applicable for 3D |
| Speaker notes | No | Not applicable |
| WebGL fallback | Yes | Detect and show message |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes | Textures |
| Video | Yes | Video textures |
| Code blocks | No | Not native |
| Charts | Yes | 3D data visualization |
| 3D content | Yes | **Primary purpose** |
| Lottie animations | No | Different paradigm |

### 3.3 3D Capabilities

| Capability | Complexity | Demo Inclusion |
|------------|------------|----------------|
| Basic geometries (Box, Sphere, etc.) | Low | Yes |
| Custom materials | Medium | Yes |
| Lighting (Ambient, Directional, Point) | Low | Yes |
| OrbitControls (rotate, zoom, pan) | Low | Yes |
| GLTF model loading | Medium | Optional |
| Post-processing effects | High | No |
| Physics simulation | High | No |
| VR/AR support | High | No |

### 3.4 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | No | N/A |
| Scroll-triggered | Possible | Medium |
| Timeline-based | Yes | Medium |
| Physics-based | Optional | High |
| **Render loop animation** | Yes | Low |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Requires text alternative |
| 1.4.3 Contrast | AA | N/A | 3D content not applicable |
| 2.1.1 Keyboard | A | Partial | Custom implementation needed |
| 2.4.7 Focus Visible | AA | N/A | Canvas-based |

**Important:** 3D WebGL content is inherently challenging for accessibility. Mitigation strategies are required.

### 4.2 Accessibility Features

- [ ] Skip links (to bypass 3D content)
- [ ] ARIA landmarks (around canvas)
- [ ] Screen reader compatible (text alternative)
- [x] Reduced motion support (`prefers-reduced-motion`)
- [ ] High contrast mode (N/A for 3D)

### 4.3 Accessibility Strategy

| Strategy | Implementation |
|----------|----------------|
| Text alternative | Provide descriptive text below canvas |
| Keyboard controls | Document available keyboard shortcuts |
| Reduced motion | Disable auto-rotation when preferred |
| Fallback content | Static image if WebGL not supported |
| Skip link | Allow users to skip 3D section |

### 4.4 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Canvas not screen-reader friendly | High | Provide text description |
| No native keyboard nav | Medium | Custom implementation |
| Motion can cause discomfort | Medium | Respect `prefers-reduced-motion` |

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

```css
:root {
    /* Project standard colors */
    --color-primary: #6366f1;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --bg-dark: #0f172a;
    --bg-darker: #0a0a1a;
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);

    /* Three.js specific - mapped to 3D scene */
    --threejs-bg-color: #0f172a;
    --threejs-primary-color: #6366f1;
    --threejs-accent-color: #10b981;
    --threejs-ambient-intensity: 0.4;
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| antialias | boolean | true | Smooth edges (performance impact) |
| pixelRatio | number | window.devicePixelRatio | Resolution scaling |
| autoRotate | boolean | true | Auto-rotate scene |
| enableZoom | boolean | true | Allow zoom controls |
| enablePan | boolean | false | Allow pan controls |
| cameraFOV | number | 75 | Camera field of view |

### 5.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes (colors) | Easy | JavaScript color values |
| Add geometries | Easy | Three.js API |
| Custom materials | Medium | Shader knowledge helpful |
| Model loading | Medium | GLTF recommended |
| Post-processing | Hard | Requires effect composer |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js Demo</title>
    <style>
        body { margin: 0; overflow: hidden; }
        #canvas-container { width: 100vw; height: 100vh; }
    </style>
</head>
<body>
    <div id="canvas-container"></div>

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

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0f172a);

        const camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        // Geometry
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x6366f1 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Lighting
        scene.add(new THREE.AmbientLight(0x404040));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.005;
            cube.rotation.y += 0.005;
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // Resize Handler
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>
```

### 6.2 With Project Standards

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-XX-XX
updated:        2026-XX-XX
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/threejs/prd-threejs.md]
description:    Three.js 3D showcase demo for TechEd Academy
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Standard meta tags -->
    <!-- Project CSS variables -->
    <!-- WebGL detection script -->
</head>
<body>
    <!-- Accessibility: Skip link -->
    <a href="#main-content" class="skip-link">Skip 3D content</a>

    <!-- 3D Canvas Container -->
    <div id="threejs-container" role="img" aria-label="Interactive 3D visualization">
        <!-- Canvas inserted by Three.js -->
    </div>

    <!-- Accessibility: Text alternative -->
    <div id="main-content" class="sr-only">
        <p>3D visualization showing [description of content]</p>
    </div>

    <!-- WebGL Fallback -->
    <noscript>
        <div class="fallback">
            <img src="assets/fallback.png" alt="Static version of 3D content">
        </div>
    </noscript>

    <!-- Navigation -->
    <script src="/shared/nav-component.js"></script>
</body>
</html>
```

### 6.3 WebGL Detection

```javascript
// Check WebGL support before initializing
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
}

if (!checkWebGLSupport()) {
    document.getElementById('threejs-container').innerHTML = `
        <div class="webgl-error">
            <h2>WebGL Not Supported</h2>
            <p>Your browser or device doesn't support WebGL.</p>
            <img src="assets/fallback.png" alt="Static preview">
        </div>
    `;
} else {
    // Initialize Three.js scene
    initScene();
}
```

### 6.4 Reduced Motion Support

```javascript
// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animate() {
    requestAnimationFrame(animate);

    if (!prefersReducedMotion) {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
    }

    controls.update();
    renderer.render(scene, camera);
}
```

---

## 7. Demo Scope Definition

### 7.1 Recommended Scope: Medium

Based on research findings, the demo should be **Medium complexity** - an interactive 3D showcase that demonstrates capability without overwhelming maintenance burden.

### 7.2 Demo Content

| Element | Included | Description |
|---------|----------|-------------|
| Scene background | Yes | Dark theme matching project |
| Primary geometry | Yes | Custom shape (TechEd logo or abstract) |
| Secondary geometries | Yes | Supporting visual elements |
| Ambient lighting | Yes | Base illumination |
| Directional lighting | Yes | Key light with shadows optional |
| OrbitControls | Yes | User interaction |
| Auto-rotation | Yes | With reduced motion support |
| GLTF models | Optional | If suitable model available |
| Particle effects | No | Scope limitation |
| Post-processing | No | Scope limitation |

### 7.3 Demo Ideas (Choose One)

| Idea | Complexity | Visual Impact | Maintenance |
|------|------------|---------------|-------------|
| Rotating TechEd logo | Low | Medium | Easy |
| Interactive 3D data chart | Medium | High | Medium |
| **Product showcase with lighting** | Medium | High | Medium |
| Animated 3D infographic | Medium-High | Very High | Hard |

**Recommendation:** Product showcase or abstract geometric composition that demonstrates lighting, materials, and interactivity.

---

## 8. Evaluation Scores

### 8.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 16 | 20 | Large bundle size |
| User Experience | 17 | 20 | Unique interactive capability |
| Content Quality | 18 | 20 | Professional 3D content |
| **Total** | 51 | 60 | |

### 8.2 Use Case Fit

| Use Case | Fit (1-5) |
|----------|-----------|
| Technical presentations | 3 |
| Story-driven content | 2 |
| Quick creation | 2 |
| Offline delivery | 4 |
| **Premium stakeholders** | 5 |
| **Product showcases** | 5 |
| **Immersive experiences** | 5 |

### 8.3 Overall Rating

**Rating:** ★★★★☆ (4/5)

**Rationale:** Fills a unique capability gap (3D/WebGL) that no other framework in the portfolio provides. Higher learning curve and larger bundle size are acceptable tradeoffs for premium, immersive experiences.

---

## 9. Risk Assessment

### 9.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Performance on low-end devices | Medium | Medium | Quality settings, fallback |
| Learning curve for maintenance | Medium | Medium | Keep demo scope minimal, good documentation |
| WebGL not supported | Low | High | Detection and fallback image |
| Mobile performance issues | Medium | Medium | Reduce geometry complexity on mobile |

### 9.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep | Medium | Medium | Strict demo boundaries defined |
| Hard to modify content | Medium | Low | Comprehensive documentation |
| Outdated library version | Low | Low | Pin version, update periodically |

---

## 10. Roadmap

### 10.1 Completed

- [x] Research evaluation completed
- [x] PRD created
- [x] Integration plan created

### 10.2 Planned Improvements

| Improvement | Priority | Target |
|-------------|----------|--------|
| Basic demo implementation | High | Q2 2026 |
| Content population | Medium | Q2 2026 |
| Accessibility audit | Medium | Q2 2026 |
| Performance optimization | Low | Q2 2026 |
| Enhanced interactions | Low | Q3 2026 |

### 10.3 Timeline

| Phase | Target | Status |
|-------|--------|--------|
| PRD Creation | Q1 2026 | Complete |
| Basic Implementation | Q2 2026 | Not Started |
| Full Demo | Q2 2026 | Not Started |
| Polish & Optimization | Q2 2026 | Not Started |

---

## 11. Cross-References

### 11.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Research Notes](../../research/active/3d-webgl/threejs-research.md)
- [Demo Implementation](../../../threejs/) *(future)*

### 11.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Babylon.js | Game-focused, larger bundle |
| A-Frame | VR/AR focus, declarative HTML |
| React Three Fiber | Requires React |
| Spline | Visual design tool, less flexible |

### 11.3 Learning Resources

| Resource | Type | URL |
|----------|------|-----|
| Official Docs | Reference | [threejs.org/docs](https://threejs.org/docs/) |
| Three.js Journey | Course | [threejs-journey.com](https://threejs-journey.com/) |
| Discover Three.js | Free Book | [discoverthreejs.com](https://discoverthreejs.com/) |
| Official Examples | Code | [threejs.org/examples](https://threejs.org/examples/) |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial PRD |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
