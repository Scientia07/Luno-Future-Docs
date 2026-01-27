<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-rive.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★☆☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../research/active/animation/rive-research.md, ../../INDEX.md]
description:    Product Requirements Document for Rive interactive animation framework
==============================================================================
-->

# PRD: Rive

> **Framework:** Rive
> **Version:** Latest (WebAssembly Runtime)
> **Status:** Planned
> **Last Evaluated:** 2026-01-27
> **Demo:** [Link to demo](/rive/) *(Not yet implemented)*

---

## 1. Overview

### 1.1 Summary

Rive is a modern interactive animation platform that differentiates itself from traditional animation tools through **built-in state machines**. Unlike Lottie, which exports static animations from After Effects, Rive provides a web-based editor and runtime that enables animations to respond to user input without custom JavaScript. This makes it ideal for interactive UI elements like buttons, toggles, loading indicators, and data-driven visualizations.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [https://rive.app/](https://rive.app/) |
| Documentation | [https://rive.app/docs/](https://rive.app/docs/) |
| GitHub | [https://github.com/rive-app/rive-wasm](https://github.com/rive-app/rive-wasm) |
| NPM/CDN | [@rive-app/canvas](https://www.npmjs.com/package/@rive-app/canvas) |
| Community Assets | [https://rive.app/community/](https://rive.app/community/) |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [x] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [ ] Hybrid/Other

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| @rive-app/canvas | Latest | Yes | Yes (unpkg/jsdelivr) |
| WebAssembly Support | N/A | Yes | Browser native |

**CDN Options:**
```html
<!-- unpkg -->
<script src="https://unpkg.com/@rive-app/canvas@latest"></script>

<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@rive-app/canvas@latest"></script>
```

### 2.2 File Structure

```
/rive/
├── index.html              # Main demo file
├── assets/
│   └── animations/
│       ├── button.riv      # Interactive button animation
│       ├── toggle.riv      # Toggle switch animation
│       ├── loader.riv      # Progress loader animation
│       └── character.riv   # Interactive character (optional)
└── README.md               # Quick reference
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 57+ | WebAssembly support required |
| Firefox | 52+ | WebAssembly support required |
| Safari | 11+ | WebAssembly support required |
| Edge | 16+ | WebAssembly support required |
| Mobile Chrome | 57+ | Touch events work with state machines |
| Mobile Safari | 11+ | Touch events work with state machines |

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | TBD | <2s |
| Runtime size | ~150KB | <200KB |
| Animation file size | Variable | <50KB per .riv |
| Lighthouse Performance | TBD | 90+ |

### 2.5 Runtime Comparison

| Runtime | Size | Use Case |
|---------|------|----------|
| @rive-app/canvas | ~150KB | Standard use, Canvas-based rendering |
| @rive-app/webgl | ~200KB | Complex animations, better performance |

**Recommendation:** Use `@rive-app/canvas` for our demo (smaller size, sufficient for interactive UI elements).

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes | .riv files can be bundled locally |
| Keyboard navigation | Partial | State machine inputs can be triggered via JS |
| Touch support | Yes | Native touch event handling |
| Print/PDF export | No | Animation-focused, not static content |
| Real-time control | Yes | Animations respond to runtime inputs |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Vector graphics | Yes | Native |
| Raster images | Yes | Embedded in .riv |
| Video | No | Not supported |
| Text (dynamic) | Yes | Text runs can be modified at runtime |
| Meshes | Yes | Mesh deformation for advanced effects |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| Timeline animations | Yes | Low |
| State machines | Yes | Medium |
| Input-driven animations | Yes | Medium |
| Procedural animation | Yes | High |
| Blend states | Yes | High |

### 3.4 State Machine Features (Key Differentiator)

| Feature | Description |
|---------|-------------|
| **Triggers** | One-shot events (e.g., button click) |
| **Booleans** | Toggle states (e.g., hover on/off) |
| **Numbers** | Numeric inputs (e.g., progress 0-100) |
| **Listeners** | React to pointer events automatically |
| **Blend States** | Mix multiple animations based on inputs |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Requires manual ARIA labels |
| 1.4.3 Contrast | AA | N/A | Depends on animation design |
| 2.1.1 Keyboard | A | Partial | JS bridge required for keyboard |
| 2.4.7 Focus Visible | AA | Partial | Custom implementation needed |
| 2.3.1 Three Flashes | A | Partial | Designer responsibility |

### 4.2 Accessibility Features

- [ ] Skip links (manual implementation required)
- [ ] ARIA landmarks (wrap canvas in semantic HTML)
- [x] Screen reader compatible (via aria-label on canvas)
- [x] Reduced motion support (`prefers-reduced-motion` can pause animations)
- [ ] High contrast mode (depends on animation design)

### 4.3 Accessibility Implementation

```javascript
// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const riveInstance = new rive.Rive({
    src: 'animation.riv',
    canvas: document.getElementById('canvas'),
    autoplay: !prefersReducedMotion,
    // ...
});

// Add ARIA label
document.getElementById('canvas').setAttribute('aria-label', 'Interactive button animation');
document.getElementById('canvas').setAttribute('role', 'img');
```

### 4.4 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Canvas not inherently accessible | Medium | Add ARIA labels, provide text alternatives |
| Keyboard focus on canvas | Medium | Use tabindex and custom key handlers |
| Animation speed control | Low | Implement playback rate controls |

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

    /* Rive-specific (canvas container styling) */
    --rive-canvas-bg: transparent;
    --rive-container-padding: 2rem;
}
```

**Note:** Rive animations have colors baked into the .riv file. For theming, either:
1. Create animation variants
2. Use Rive's runtime color modification (if exposed)

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `src` | string | required | Path to .riv file |
| `canvas` | HTMLCanvasElement | required | Target canvas element |
| `autoplay` | boolean | true | Auto-start animation |
| `stateMachines` | string | undefined | State machine name to load |
| `artboard` | string | undefined | Specific artboard to render |
| `fit` | Fit | Fit.Contain | How animation fits canvas |
| `alignment` | Alignment | Alignment.Center | Animation position |

### 5.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom inputs | Easy | Trigger state machine inputs via JS |
| Event listeners | Easy | Listen to state changes |
| Dynamic text | Medium | Modify text runs at runtime |
| Color changes | Hard | Limited runtime support |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rive Demo</title>
    <script src="https://unpkg.com/@rive-app/canvas@latest"></script>
    <style>
        #rive-canvas {
            width: 400px;
            height: 400px;
        }
    </style>
</head>
<body>
    <canvas id="rive-canvas" aria-label="Interactive animation"></canvas>

    <script>
        const r = new rive.Rive({
            src: 'animation.riv',
            canvas: document.getElementById('rive-canvas'),
            autoplay: true,
            stateMachines: 'State Machine 1',
            onLoad: () => {
                r.resizeDrawingSurfaceToCanvas();
            }
        });
    </script>
</body>
</html>
```

### 6.2 Interactive Button Example

```html
<canvas id="button-canvas"
        role="button"
        tabindex="0"
        aria-label="Submit button"
        style="width: 200px; height: 60px; cursor: pointer;">
</canvas>

<script>
    const button = new rive.Rive({
        src: 'button.riv',
        canvas: document.getElementById('button-canvas'),
        autoplay: true,
        stateMachines: 'Button',
        onLoad: () => {
            button.resizeDrawingSurfaceToCanvas();
        }
    });

    // The state machine handles hover/click automatically via Listeners
    // For keyboard support:
    document.getElementById('button-canvas').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            // Trigger the click input
            const inputs = button.stateMachineInputs('Button');
            const clickInput = inputs.find(i => i.name === 'Click');
            if (clickInput) clickInput.fire();
        }
    });
</script>
```

### 6.3 Progress Loader Example

```html
<canvas id="loader-canvas" aria-label="Loading progress"></canvas>

<script>
    let loaderInstance;

    const loader = new rive.Rive({
        src: 'loader.riv',
        canvas: document.getElementById('loader-canvas'),
        autoplay: true,
        stateMachines: 'Loader',
        onLoad: () => {
            loader.resizeDrawingSurfaceToCanvas();
            loaderInstance = loader;
        }
    });

    // Update progress (0-100)
    function setProgress(value) {
        const inputs = loaderInstance.stateMachineInputs('Loader');
        const progressInput = inputs.find(i => i.name === 'Progress');
        if (progressInput) progressInput.value = value;
    }

    // Example: Animate progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        setProgress(progress);
        if (progress >= 100) clearInterval(interval);
    }, 50);
</script>
```

### 6.4 With Project Standards

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/rive/prd-rive.md]
description:    Rive interactive animation demo for TechEd Academy
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rive Interactive Animations | TechEd Academy</title>
    <meta name="description" content="Interactive animation showcase using Rive state machines">

    <!-- Rive Runtime -->
    <script src="https://unpkg.com/@rive-app/canvas@latest"></script>

    <style>
        :root {
            --color-primary: #6366f1;
            --color-secondary: #ec4899;
            --color-accent: #10b981;
            --bg-dark: #0f172a;
            --bg-darker: #0a0a1a;
            --text-primary: #ffffff;
            --text-muted: rgba(255,255,255,0.75);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: var(--bg-dark);
            color: var(--text-primary);
            min-height: 100vh;
        }

        /* Demo-specific styles */
    </style>
</head>
<body>
    <main>
        <!-- Demo content -->
    </main>

    <!-- Shared navigation -->
    <script src="/shared/nav-component.js"></script>
</body>
</html>
```

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 16 | 20 | Excellent runtime, WebAssembly performance |
| User Experience | 18 | 20 | State machines enable rich interactivity |
| Content Quality | 14 | 20 | Depends on available assets |
| **Total** | 48 | 60 | Strong overall |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) | Notes |
|----------|-----------|-------|
| Technical presentations | 3 | Better for UI elements than full presentations |
| Interactive UI demos | 5 | Perfect fit - state machines excel here |
| Story-driven content | 2 | Not designed for narrative content |
| Data visualization | 4 | Progress indicators, dynamic charts |
| Premium stakeholders | 4 | Modern, polished look |

### 7.3 Overall Rating

**Rating:** 4/5

**Summary:** Rive excels at interactive UI animations that respond to user input. Its state machine architecture provides capabilities that Lottie cannot match without extensive JavaScript. The smaller runtime size and modern tooling make it an excellent addition to our animation toolkit, complementing rather than replacing Lottie.

---

## 8. Demo Concept

### 8.1 Proposed Demo Structure

The Rive demo should showcase **interactivity** as the key differentiator:

| Section | Animation Type | Interaction |
|---------|---------------|-------------|
| Hero | Animated logo/character | Responds to mouse position |
| Interactive Buttons | Button states | Hover, press, disabled states |
| Toggle Components | Switches, checkboxes | Click to toggle |
| Progress Indicators | Loaders, progress bars | Drag slider to control |
| Form Validation | Input feedback | Type to see validation states |
| Comparison | Side-by-side with Lottie | Show what Rive can do that Lottie cannot |

### 8.2 Asset Requirements

| Animation | Source | State Machine Inputs |
|-----------|--------|---------------------|
| Interactive button | Rive Community / Custom | isHover (bool), isPressed (bool) |
| Toggle switch | Rive Community / Custom | isOn (bool) |
| Progress loader | Rive Community / Custom | progress (number 0-100) |
| Animated character | Rive Community | look (number), wave (trigger) |

### 8.3 Comparison with Lottie Demo

| Aspect | Lottie Demo | Rive Demo |
|--------|-------------|-----------|
| Focus | Visual animation quality | Interactivity |
| Control | Play/pause/seek | State machine inputs |
| User interaction | Passive viewing | Active participation |
| Code complexity | Simple player | Input bindings |

---

## 9. Roadmap

### 9.1 Planned

- [ ] PRD creation (this document)
- [ ] Integration plan creation
- [ ] Asset collection from Rive Community
- [ ] Basic demo implementation
- [ ] Accessibility improvements
- [ ] Full demo with all sections
- [ ] Documentation and INDEX update

### 9.2 Timeline

| Phase | Target Date | Status |
|-------|-------------|--------|
| PRD Creation | Q1 2026 | In Progress |
| Asset Collection | Q1 2026 | Not Started |
| Basic Implementation | Q2 2026 | Not Started |
| Full Demo | Q2 2026 | Not Started |

### 9.3 Planned Improvements

| Improvement | Priority | Target Version |
|-------------|----------|----------------|
| Custom animations (brand-specific) | Medium | v1.1 |
| Advanced state machine demos | Low | v1.2 |
| Performance optimization | Low | v1.2 |

---

## 10. Cross-References

### 10.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Research Notes](../../research/active/animation/rive-research.md)
- [Demo Implementation](/rive/) *(planned)*
- [Lottie PRD](../lottie/prd-lottie.md) *(if exists)*

### 10.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Lottie | Export from After Effects, limited interactivity |
| GSAP | Code-based animation, no visual editor |
| Framer Motion | React-specific, code-based |
| CSS Animations | Native, limited complexity |

### 10.3 Rive vs Lottie Decision Matrix

| Factor | Lottie | Rive | Winner |
|--------|--------|------|--------|
| Interactivity | Limited | Excellent | Rive |
| Asset availability | Extensive | Growing | Lottie |
| Runtime size | ~300KB | ~150KB | Rive |
| Creation workflow | After Effects | Web editor | Rive |
| Industry adoption | Established | Growing | Lottie |
| Learning curve | Moderate (AE) | Low (web editor) | Rive |

**Recommendation:** Use both - Lottie for complex visual animations from designers, Rive for interactive UI elements.

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial PRD |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
