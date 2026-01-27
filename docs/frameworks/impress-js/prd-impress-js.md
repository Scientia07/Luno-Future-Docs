<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-impress-js.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../research/active/presentation/impress-js-research.md]
description:    Product Requirements Document for Impress.js 3D spatial presentation framework
==============================================================================
-->

# PRD: Impress.js

> **Framework:** Impress.js
> **Version:** 2.0.0
> **Status:** Planned
> **Last Evaluated:** 2026-01-27
> **Demo:** [Link to demo](/impress-js/) *(not yet implemented)*

---

## 1. Overview

### 1.1 Summary

Impress.js is a presentation framework that leverages CSS3 3D transforms to create dynamic, spatially-positioned presentations. Unlike traditional slide-based tools, Impress.js positions content on an infinite 2D/3D canvas, allowing viewers to zoom, rotate, and fly through content in three dimensions. This framework fills the identified gap in our portfolio for true 3D spatial presentations, complementing our existing Reveal.js implementation with a fundamentally different paradigm focused on spatial storytelling and conceptual visualization.

**Key Value Proposition:** Open-source alternative to Prezi with zero dependencies, providing wow-factor presentations through 3D navigation that traditional slide frameworks cannot achieve.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [https://impress.js.org/](https://impress.js.org/) |
| Documentation | [GitHub DOCUMENTATION.md](https://github.com/impress/impress.js/blob/master/DOCUMENTATION.md) |
| GitHub | [https://github.com/impress/impress.js](https://github.com/impress/impress.js) |
| CDN | [jsDelivr](https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js) |
| Getting Started | [GettingStarted.md](https://github.com/impress/impress.js/blob/master/GettingStarted.md) |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [x] Hybrid/Other: **3D Spatial Presentation**

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| impress.js | 2.0.0 | Yes | Yes (jsDelivr) |
| jQuery | N/A | No | N/A |
| Node.js | N/A | No (dev only) | N/A |

**Zero external runtime dependencies** - Impress.js is entirely self-contained, aligning perfectly with our pure HTML/CSS/JS stack.

### 2.2 File Structure

```
/impress-js/
├── index.html              # Main demo file with metadata
├── assets/                 # Local assets
│   ├── images/            # Presentation images
│   └── styles/            # Custom CSS (optional)
├── lib/                   # Optional: local impress.js copy
│   └── impress.js         # For offline capability
└── README.md              # Quick reference
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Excellent - hardware acceleration |
| Firefox | 90+ | Full support |
| Safari | 14+ (iOS 14+) | Full support with `-webkit` prefixes |
| Edge | 90+ | Full support (Chromium-based) |
| Opera | 76+ | Full support |
| IE | Not Supported | Graceful degradation with fallback |

**Required Browser APIs:**
- CSS 3D Transforms
- CSS Transitions
- classList API
- dataset API
- Hardware acceleration (recommended)

**Graceful Degradation:**
Impress.js automatically adds `.impress-not-supported` class to body when requirements aren't met, enabling fallback content display.

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | ~100ms | <500ms |
| Bundle size (raw) | ~100-120KB | <150KB |
| Bundle size (gzip) | ~25-35KB | <50KB |
| Lighthouse Performance | N/A | 85+ |
| Transition FPS | 60fps | 60fps |
| Memory baseline | ~15-20MB | <30MB |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes | Can bundle locally |
| Keyboard navigation | Yes | Arrow keys, space, page up/down |
| Touch support | Partial | Basic swipe, not optimized |
| Print/PDF export | Partial | Requires manual styling |
| Speaker notes | Yes | Built-in plugin (P key) |
| Presenter console | Yes | Dual-screen support |
| Autoplay | Yes | Configurable timing |
| Overview mode | Yes | Bird's eye view step |
| Deep linking | Yes | Hash-based navigation |
| Markdown support | Yes | Plugin (extras) |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes | Native HTML |
| Video | Yes | HTML5 video embed |
| Code blocks | Yes | Custom styling needed |
| Charts | Yes | Chart.js integration |
| 3D content | Yes | Native - core strength |
| Lottie animations | Yes | Lottie player embed |
| SVG | Yes | Native |
| iframes | Yes | Embedded content |

### 3.3 3D Positioning Capabilities

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `data-x` | X-axis position (pixels) | `data-x="1000"` |
| `data-y` | Y-axis position (pixels) | `data-y="500"` |
| `data-z` | Z-axis depth (pixels) | `data-z="-1000"` |
| `data-rotate` | Z-axis rotation (degrees) | `data-rotate="45"` |
| `data-rotate-x` | X-axis tilt (degrees) | `data-rotate-x="30"` |
| `data-rotate-y` | Y-axis turn (degrees) | `data-rotate-y="60"` |
| `data-rotate-z` | Z-axis rotation (degrees) | `data-rotate-z="45"` |
| `data-scale` | Scale factor | `data-scale="2"` |
| `data-rotate-order` | Rotation order | `data-rotate-order="xyz"` |

### 3.4 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | Yes | Low - automatic |
| 3D transforms | Yes | Medium - core feature |
| Scroll-triggered | No | N/A |
| Timeline-based | No | Use CSS animations |
| Substep reveals | Yes | Plugin-based |

### 3.5 Plugin Ecosystem

| Plugin | Purpose | Default |
|--------|---------|---------|
| navigation | Keyboard/mouse controls | Yes |
| autoplay | Auto-advance timing | Yes (config) |
| toolbar | Visual nav controls | Yes |
| progress | Progress indicator | Yes |
| goto | Jump to step | Yes |
| rel | Relative positioning | Yes |
| help | Help overlay (H key) | Yes |
| impressConsole | Presenter console (P key) | Yes |
| speaker-notes | Hidden presenter notes | Yes |
| substep | Incremental reveals | Yes |
| form | Form navigation | Yes |
| markdown | Markdown content | Extra |
| mermaid | Diagram support | Extra |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Requires manual alt text |
| 1.4.3 Contrast | AA | Pass | Controlled via CSS |
| 2.1.1 Keyboard | A | Pass | Full keyboard navigation |
| 2.1.2 No Keyboard Trap | A | Pass | Escape exits help |
| 2.4.1 Bypass Blocks | A | Partial | Needs skip link |
| 2.4.3 Focus Order | A | Partial | Step order determines focus |
| 2.4.7 Focus Visible | AA | Partial | Needs custom styling |
| 2.5.4 Motion Actuation | A | Partial | Needs reduced motion |

### 4.2 Accessibility Features

- [x] Keyboard navigation (arrows, space, enter)
- [x] Tab navigation through steps
- [ ] Skip links (needs implementation)
- [ ] ARIA landmarks (needs implementation)
- [ ] Screen reader compatible (needs testing)
- [ ] Reduced motion support (needs `prefers-reduced-motion`)
- [ ] High contrast mode (needs custom CSS)

### 4.3 Known Accessibility Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| 3D motion may cause disorientation | Medium | Add reduced motion CSS |
| No ARIA live regions for step changes | Medium | Add programmatically |
| Focus indicator not visible on steps | Low | Add custom focus styles |
| No skip to content link | Low | Add manually |

### 4.4 Accessibility Remediation Plan

```css
/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    .impress-enabled .step {
        transition-duration: 0.1s !important;
    }
    #impress {
        perspective: none !important;
    }
}

/* Focus visible for steps */
.step:focus {
    outline: 3px solid var(--color-primary);
    outline-offset: 4px;
}
```

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

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

    /* Impress.js specific */
    --impress-transition-duration: 1000ms;
    --impress-perspective: 1000px;
    --impress-step-width: 900px;
    --impress-step-padding: 40px;
    --impress-step-bg: rgba(255,255,255,0.05);
    --impress-step-border: rgba(255,255,255,0.1);
    --impress-step-radius: 16px;
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `data-transition-duration` | number | 1000 | Transition time in ms |
| `data-perspective` | number | 1000 | 3D perspective depth |
| `data-autoplay` | number | 0 | Auto-advance seconds (0=off) |
| `data-min-scale` | number | 0 | Minimum scale factor |
| `data-max-scale` | number | 3 | Maximum scale factor |
| `data-width` | number | 1024 | Viewport width |
| `data-height` | number | 768 | Viewport height |

### 5.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | CSS overrides only |
| Step animations | Easy | CSS keyframes |
| Custom plugins | Medium | Event-based API |
| New navigation | Medium | API hooks available |
| Core modification | Hard | Not recommended |

### 5.4 Step Styling Template

```css
/* Standard step styling */
.step {
    width: var(--impress-step-width);
    padding: var(--impress-step-padding);
    background: var(--impress-step-bg);
    border: 1px solid var(--impress-step-border);
    border-radius: var(--impress-step-radius);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

/* Gradient text for headings */
.step h1,
.step h2 {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Active step highlight */
.impress-enabled .step.active {
    opacity: 1;
}

.impress-enabled .step {
    opacity: 0.3;
    transition: opacity 0.5s;
}
```

---

## 6. Integration Guide

### 6.1 Quick Start (Minimal Setup)

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★☆☆
author:         Joel + Claude
related_docs:   [docs/frameworks/impress-js/prd-impress-js.md]
description:    Impress.js 3D spatial presentation demo for LunoLabs
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LunoLabs - Impress.js Demo</title>
    <style>
        body {
            background: #0f172a;
            color: #fff;
            font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .step {
            width: 900px;
            padding: 40px;
            background: rgba(255,255,255,0.05);
            border-radius: 16px;
        }
    </style>
</head>
<body>

<div id="impress" data-transition-duration="1000">
    <div id="intro" class="step" data-x="0" data-y="0">
        <h1>Welcome</h1>
    </div>
    <div id="features" class="step" data-x="1200" data-y="0">
        <h2>Features</h2>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js"></script>
<script>impress().init();</script>

</body>
</html>
```

### 6.2 With Project Standards

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="LunoLabs TechEd Academy - Interactive 3D Presentation">

    <!-- Open Graph -->
    <meta property="og:title" content="LunoLabs - 3D Spatial Presentation">
    <meta property="og:description" content="Explore our interactive 3D presentation">
    <meta property="og:type" content="website">

    <title>TechEd Academy - 3D Spatial Presentation</title>

    <style>
        :root {
            --color-primary: #6366f1;
            --color-secondary: #ec4899;
            --color-accent: #10b981;
            --bg-dark: #0f172a;
            --text-primary: #ffffff;
            --text-muted: rgba(255,255,255,0.75);
        }

        body {
            background: var(--bg-dark);
            color: var(--text-primary);
            font-family: 'Segoe UI', system-ui, sans-serif;
            margin: 0;
            padding: 0;
        }

        /* Fallback for unsupported browsers */
        .fallback-message {
            display: none;
            text-align: center;
            padding: 100px 20px;
        }
        .impress-not-supported .fallback-message {
            display: block;
        }
        .impress-not-supported #impress {
            display: none;
        }

        /* Step styling */
        .step {
            width: 900px;
            padding: 40px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }

        .step h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .step h2 {
            font-size: 2rem;
            color: var(--color-primary);
        }

        .step p {
            font-size: 1.25rem;
            color: var(--text-muted);
            line-height: 1.6;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
            .impress-enabled .step {
                transition-duration: 0.1s !important;
            }
        }
    </style>
</head>
<body>

<!-- Accessibility: Skip link -->
<a href="#impress" class="skip-link">Skip to presentation</a>

<!-- Fallback for unsupported browsers -->
<div class="fallback-message" role="alert">
    <h1>Browser Not Supported</h1>
    <p>Your browser doesn't support the features required for this presentation.</p>
    <p>Please use a modern browser like Chrome, Firefox, Safari, or Edge.</p>
</div>

<div id="impress"
     data-transition-duration="1000"
     data-perspective="1000"
     role="main"
     aria-label="3D Presentation">

    <!-- Step 1: Title -->
    <div id="title" class="step"
         data-x="0" data-y="0" data-scale="2"
         aria-label="Title slide">
        <h1>TechEd Academy</h1>
        <p>Explore learning in 3D space</p>
    </div>

    <!-- Step 2: Features -->
    <div id="features" class="step"
         data-x="1500" data-y="0" data-rotate-z="5"
         aria-label="Features slide">
        <h2>Key Features</h2>
        <ul>
            <li>3D spatial navigation</li>
            <li>Infinite canvas</li>
            <li>Smooth transitions</li>
        </ul>
    </div>

    <!-- Step 3: Deep dive -->
    <div id="deep" class="step"
         data-x="1500" data-y="0" data-z="-2000" data-rotate-x="30"
         aria-label="Deep dive slide">
        <h2>Going Deeper</h2>
        <p>Content positioned in true 3D space</p>
    </div>

    <!-- Step 4: Overview -->
    <div id="overview" class="step"
         data-x="750" data-y="500" data-z="1000" data-scale="4"
         aria-label="Overview slide">
        <h2>The Big Picture</h2>
    </div>

</div>

<!-- Impress.js -->
<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js"></script>
<script>
    // Initialize with feature detection
    if (!document.body.classList.contains('impress-not-supported')) {
        impress().init();
    }
</script>

<!-- Shared navigation component -->
<script src="/shared/nav-component.js"></script>

</body>
</html>
```

### 6.3 Common Patterns

**Pattern 1: Circular Layout**
```html
<!-- Steps arranged in a circle -->
<div class="step" data-x="0" data-y="-500" data-rotate="0">Step 1</div>
<div class="step" data-x="500" data-y="0" data-rotate="90">Step 2</div>
<div class="step" data-x="0" data-y="500" data-rotate="180">Step 3</div>
<div class="step" data-x="-500" data-y="0" data-rotate="270">Step 4</div>
```

**Pattern 2: Zoom Sequence**
```html
<!-- Progressive zoom in -->
<div class="step" data-x="0" data-y="0" data-scale="10">Overview</div>
<div class="step" data-x="0" data-y="0" data-scale="5">Category</div>
<div class="step" data-x="0" data-y="0" data-scale="1">Detail</div>
```

**Pattern 3: 3D Cube**
```html
<!-- Content on faces of a virtual cube -->
<div class="step" data-x="0" data-y="0" data-z="500">Front</div>
<div class="step" data-x="0" data-y="0" data-z="-500" data-rotate-y="180">Back</div>
<div class="step" data-x="500" data-y="0" data-z="0" data-rotate-y="90">Right</div>
<div class="step" data-x="-500" data-y="0" data-z="0" data-rotate-y="-90">Left</div>
```

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 18 | 20 | Zero deps, CDN ready, good perf |
| User Experience | 16 | 20 | Amazing 3D, partial mobile |
| Content Quality | 15 | 20 | No templates, needs design work |
| **Total** | **49** | **60** | Strong overall |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) | Notes |
|----------|-----------|-------|
| Technical presentations | 3 | Reveal.js better for code |
| Story-driven content | 5 | Ideal - spatial narrative |
| Conceptual explanations | 5 | Perfect for abstract concepts |
| Quick creation | 2 | Requires planning |
| Offline delivery | 4 | Can bundle locally |
| Premium stakeholders | 5 | High wow-factor |
| Mobile delivery | 2 | Desktop preferred |

### 7.3 Overall Rating

**Rating: 4/5**

**Strengths:**
- Unique 3D spatial capability fills portfolio gap
- Zero dependencies matches project stack
- Active maintenance and large community
- High visual impact for stakeholder presentations
- Complementary to Reveal.js (not competing)

**Weaknesses:**
- Steeper learning curve than Reveal.js
- No built-in templates or themes
- Mobile support is secondary
- Accessibility requires additional work

---

## 8. Roadmap

### 8.1 Completed

- [x] Research evaluation completed
- [x] PRD created
- [x] Integration plan created

### 8.2 Planned Improvements

| Improvement | Priority | Target Version | Effort |
|-------------|----------|----------------|--------|
| Basic demo implementation | High | 1.0.0 | 2-3 hours |
| LunoLabs branding applied | High | 1.0.0 | 1-2 hours |
| Plugin configuration | Medium | 1.1.0 | 1 hour |
| Accessibility improvements | Medium | 1.1.0 | 2 hours |
| Mobile fallback view | Low | 1.2.0 | 2 hours |
| Additional demos | Low | 1.2.0 | 3 hours |

### 8.3 Version Milestones

| Version | Description | Target Date |
|---------|-------------|-------------|
| 1.0.0 | Basic working demo with branding | 2026-01-31 |
| 1.1.0 | Plugins + accessibility | 2026-02-07 |
| 1.2.0 | Mobile fallback + polish | 2026-02-14 |

---

## 9. Cross-References

### 9.1 Related Documents

| Document | Path | Description |
|----------|------|-------------|
| Integration Plan | [integration-plan.md](integration-plan.md) | Phased implementation guide |
| Research Notes | [impress-js-research.md](../../research/active/presentation/impress-js-research.md) | Original research evaluation |
| Demo Implementation | [/impress-js/](/impress-js/) | Live demo (planned) |
| Project Index | [INDEX.md](../../INDEX.md) | Documentation index |

### 9.2 Similar Frameworks Comparison

| Framework | Key Difference |
|-----------|----------------|
| Reveal.js | 2D slides with nested structure; better for code presentations |
| Slidev | Markdown-based; requires build step |
| Scrollytelling | Scroll-driven narrative; linear progression |
| Framer | Motion design tool; heavier dependency |
| Prezi | Commercial; similar 3D concept but not open-source |

### 9.3 When to Use Impress.js vs Reveal.js

| Scenario | Recommendation |
|----------|----------------|
| Technical tutorial with code | Reveal.js |
| Conceptual explanation | Impress.js |
| Conference presentation | Either |
| Spatial storytelling | Impress.js |
| Quick markdown slides | Reveal.js |
| High-impact stakeholder demo | Impress.js |
| Mobile-first delivery | Reveal.js |

---

## 10. Appendix

### 10.1 API Reference

```javascript
// Initialize presentation
const api = impress();
api.init();

// Navigation methods
api.next();           // Go to next step
api.prev();           // Go to previous step
api.goto(stepId);     // Go to specific step by ID or index

// Event listeners
document.addEventListener('impress:stepenter', function(event) {
    console.log('Entered step:', event.target.id);
});

document.addEventListener('impress:stepleave', function(event) {
    console.log('Left step:', event.target.id);
});

// Tear down (for SPA)
api.tear();
```

### 10.2 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space / Page Down / Right / Down | Next step |
| Page Up / Left / Up | Previous step |
| Home | First step |
| End | Last step |
| H | Toggle help overlay |
| P | Open presenter console |
| Tab | Navigate through steps |

### 10.3 CDN Links

```html
<!-- Production (v2.0.0) -->
<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js"></script>

<!-- Legacy (v1.1.0) -->
<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@1.1.0/js/impress.js"></script>

<!-- Latest (not recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/impress/impress.js/js/impress.js"></script>
```

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial PRD based on research evaluation |

---

*PRD Version: 1.0.0 | See [INDEX.md](../../INDEX.md) for complete documentation index*
