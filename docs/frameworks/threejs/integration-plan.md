<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       integration-plan.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [prd-threejs.md, ../../research/active/3d-webgl/threejs-research.md]
description:    Integration plan for Three.js 3D WebGL framework implementation
==============================================================================
-->

# Integration Plan: Three.js

> **Framework:** Three.js
> **Plan Status:** Not Started
> **Target Completion:** Q2 2026
> **Related PRD:** [prd-threejs.md](prd-threejs.md)

---

## 1. Pre-Integration Checklist

### 1.1 Research Complete

- [x] Official documentation reviewed
- [x] Example implementations studied
- [x] Browser compatibility verified
- [x] License reviewed (MIT)
- [x] CDN availability confirmed

### 1.2 Dependencies Identified

| Dependency | Version | Source | Fallback |
|------------|---------|--------|----------|
| three.module.js | 0.160+ | jsdelivr CDN | unpkg CDN |
| OrbitControls.js | 0.160+ | jsdelivr CDN | unpkg CDN |
| GLTFLoader.js | 0.160+ | jsdelivr CDN | None (optional) |

### 1.3 Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CDN vs Local | CDN | No build tools required, smaller repo |
| Module system | ES Modules + importmap | Modern browser support, clean imports |
| Theme approach | CSS variables mapped to JS | Consistency with project |
| Content structure | Single page demo | Focused showcase |
| Demo scope | Medium complexity | Balance of impact vs maintenance |
| Controls | OrbitControls | Industry standard, touch support |

---

## 2. Implementation Phases

### Phase 1: Basic Setup
**Duration:** 2-3 hours
**Dependencies:** None

| Task | Status | Notes |
|------|--------|-------|
| Create folder `/threejs/` | [ ] | Root level |
| Add `index.html` with metadata | [ ] | Follow template |
| Configure importmap for Three.js | [ ] | jsdelivr CDN |
| Basic scene (camera, renderer) | [ ] | Dark background |
| Add simple geometry (cube) | [ ] | Primary color |
| Basic lighting setup | [ ] | Ambient + directional |
| Add OrbitControls | [ ] | Enable interaction |
| Animation loop working | [ ] | 60fps target |

**Deliverable:** Working minimal Three.js scene with interactive controls

**Validation:**
```
[ ] Page loads without console errors
[ ] Cube renders with correct color
[ ] Orbit controls work (rotate, zoom)
[ ] Animation loop runs at 60fps
```

---

### Phase 2: Content Integration
**Duration:** 3-4 hours
**Dependencies:** Phase 1

| Task | Status | Notes |
|------|--------|-------|
| Apply project CSS variables | [ ] | Map to scene colors |
| Create demo content (choose one): | | |
| - Option A: TechEd logo in 3D | [ ] | Custom geometry |
| - Option B: Product showcase | [ ] | Multiple objects |
| - Option C: Abstract composition | [ ] | Geometric art |
| Implement scene composition | [ ] | Layout, spacing |
| Add material variety | [ ] | Standard + emissive |
| Configure lighting for mood | [ ] | Match dark theme |
| Add subtle animations | [ ] | Rotation, floating |
| Implement responsive canvas | [ ] | Window resize handler |

**Deliverable:** Visually polished demo with TechEd Academy content

**Validation:**
```
[ ] Colors match project palette
[ ] Composition looks professional
[ ] Lighting creates depth/atmosphere
[ ] Animations are smooth
[ ] Canvas resizes correctly
```

---

### Phase 3: Quality & Polish
**Duration:** 2-3 hours
**Dependencies:** Phase 2

| Task | Status | Notes |
|------|--------|-------|
| **Accessibility** | | |
| Add skip link for 3D content | [ ] | Keyboard users |
| Add ARIA labels to container | [ ] | Screen readers |
| Provide text alternative | [ ] | Below canvas |
| Implement `prefers-reduced-motion` | [ ] | Disable auto-animation |
| Add keyboard hints | [ ] | Control instructions |
| **Performance** | | |
| WebGL support detection | [ ] | Show fallback if unsupported |
| Add fallback static image | [ ] | For WebGL failure |
| Optimize geometry complexity | [ ] | Balance quality/perf |
| Implement pixel ratio capping | [ ] | Max 2 for performance |
| Test on low-end devices | [ ] | Ensure playable |
| **Polish** | | |
| Add loading indicator | [ ] | While scene initializes |
| Meta tags (SEO, OG) | [ ] | Social sharing |
| Favicon | [ ] | If different from project |
| Add shared `nav-component.js` | [ ] | Floating navigation |

**Deliverable:** Production-ready, accessible demo

**Validation:**
```
[ ] Lighthouse Performance > 80
[ ] Lighthouse Accessibility > 85
[ ] No console errors
[ ] Fallback shows when WebGL disabled
[ ] Reduced motion respected
[ ] Navigation component works
```

---

### Phase 4: Documentation & Integration
**Duration:** 1-2 hours
**Dependencies:** Phase 3

| Task | Status | Notes |
|------|--------|-------|
| Finalize PRD with actual metrics | [ ] | Update performance data |
| Update integration plan status | [ ] | Mark phases complete |
| Update docs/INDEX.md | [ ] | Add Three.js entry |
| Update ROADMAP.md | [ ] | Mark milestone complete |
| Update `nav-component.js` | [ ] | Add Three.js link |
| Update dashboard | [ ] | Add demo card |
| Create README.md for demo | [ ] | Quick reference |

**Deliverable:** Fully documented and integrated framework

**Validation:**
```
[ ] All documentation updated
[ ] Links work in navigation
[ ] Dashboard shows Three.js
[ ] No broken links
```

---

## 3. Technical Specifications

### 3.1 Folder Structure

```
/threejs/
├── index.html              # Main demo file with metadata
├── assets/
│   ├── fallback.png        # Static fallback image
│   ├── textures/           # Optional: texture files
│   └── models/             # Optional: GLTF models
└── README.md               # Quick reference
```

### 3.2 Required Metadata Header

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
description:    Three.js 3D WebGL showcase demo for TechEd Academy
==============================================================================
-->
```

### 3.3 CSS Variables (Required)

```css
:root {
    /* Project standard colors */
    --color-primary: #6366f1;
    --color-primary-dark: #4f46e5;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;
    --bg-dark: #0f172a;
    --bg-darker: #0a0a1a;
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);

    /* Three.js specific */
    --threejs-bg-color: var(--bg-dark);
}
```

### 3.4 Navigation Integration

```html
<!-- Add before closing </body> tag -->
<script src="/shared/nav-component.js"></script>
```

### 3.5 Import Map Configuration

```html
<script type="importmap">
{
    "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js",
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/"
    }
}
</script>
```

---

## 4. Testing Checklist

### 4.1 Functional Tests

- [ ] Loads without JavaScript errors
- [ ] Three.js scene renders correctly
- [ ] OrbitControls work (rotate, zoom, pan)
- [ ] Animations play smoothly
- [ ] Resize handler works
- [ ] Navigation component functional

### 4.2 Responsive Tests

- [ ] Mobile (320px) - may show simplified scene or fallback
- [ ] Tablet (768px) - full scene with touch controls
- [ ] Desktop (1200px) - full scene
- [ ] Large screens (1920px) - full scene, crisp rendering

### 4.3 Accessibility Tests

- [ ] Skip link works
- [ ] Text alternative present
- [ ] ARIA labels on canvas container
- [ ] `prefers-reduced-motion` stops animations
- [ ] Keyboard instructions visible
- [ ] Screen reader announces content description

### 4.4 Performance Tests

- [ ] Lighthouse Performance > 80
- [ ] Frame rate stable at 60fps (desktop)
- [ ] Frame rate acceptable on mobile (30fps+)
- [ ] No memory leaks (check after 5 minutes)
- [ ] Canvas renders at correct resolution

### 4.5 WebGL/Fallback Tests

- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Fallback shows when WebGL disabled
- [ ] Fallback shows appropriate message
- [ ] Works on iOS Safari
- [ ] Works on Android Chrome

---

## 5. Code Templates

### 5.1 Scene Initialization Template

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Configuration
const CONFIG = {
    bgColor: 0x0f172a,
    primaryColor: 0x6366f1,
    secondaryColor: 0xec4899,
    accentColor: 0x10b981,
    cameraFOV: 75,
    cameraZ: 5,
    antialias: true,
    maxPixelRatio: 2
};

// Check reduced motion preference
const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(CONFIG.bgColor);

// Camera
const camera = new THREE.PerspectiveCamera(
    CONFIG.cameraFOV,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = CONFIG.cameraZ;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: CONFIG.antialias });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.maxPixelRatio));
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = !prefersReducedMotion;
controls.autoRotateSpeed = 1;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
```

### 5.2 WebGL Detection Template

```javascript
function checkWebGLSupport() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') ||
                   canvas.getContext('webgl') ||
                   canvas.getContext('experimental-webgl');
        return !!gl;
    } catch (e) {
        return false;
    }
}

function showFallback() {
    const container = document.getElementById('canvas-container');
    container.innerHTML = `
        <div class="webgl-fallback">
            <img src="assets/fallback.png"
                 alt="3D visualization preview - WebGL not supported">
            <p>Your browser doesn't support WebGL.
               Here's a static preview of the 3D content.</p>
        </div>
    `;
}

// Initialize
if (checkWebGLSupport()) {
    initThreeJS();
} else {
    showFallback();
}
```

---

## 6. Rollback Plan

If integration fails or causes issues:

1. **Immediate:** Remove/comment out dashboard entry for Three.js
2. **Navigation:** Remove Three.js link from `nav-component.js`
3. **Files:** Move `/threejs/` to `/archive/threejs-attempt/`
4. **Documentation:** Update PRD status to "On Hold"
5. **INDEX.md:** Update status to "Integration Failed"
6. **Post-mortem:** Document issues in research notes

---

## 7. Progress Log

| Date | Phase | Progress | Blockers |
|------|-------|----------|----------|
| 2026-01-27 | 0 | PRD and Integration Plan created | None |
| | 1 | Not started | - |
| | 2 | Not started | - |
| | 3 | Not started | - |
| | 4 | Not started | - |

---

## 8. Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | | | [ ] |
| Reviewer | | | [ ] |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial integration plan |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
