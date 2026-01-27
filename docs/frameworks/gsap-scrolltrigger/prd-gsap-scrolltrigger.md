<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-gsap-scrolltrigger.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../research/active/scroll-animation/gsap-scrolltrigger-research.md, ../../research/active/scroll-animation/lenis-research.md]
description:    PRD for GSAP ScrollTrigger + Lenis advanced scroll animation framework
==============================================================================
-->

# PRD: GSAP ScrollTrigger + Lenis

> **Framework:** GSAP ScrollTrigger with Lenis Smooth Scroll
> **Version:** GSAP 3.12+ / Lenis 1.x
> **Status:** Planned
> **Last Evaluated:** 2026-01-27
> **Demo:** [/enhanced/gsap-scrolltrigger/](/enhanced/gsap-scrolltrigger/)

---

## 1. Overview

### 1.1 Summary

GSAP ScrollTrigger combined with Lenis creates a professional-grade scroll animation experience that surpasses what's achievable with vanilla JavaScript and CSS. This framework enables scrubbed animations (progress tied to scroll position), element pinning with animation sequences, smooth snapping, and buttery-smooth inertia scrolling. Following Webflow's acquisition of GreenSock, GSAP is now **100% free for commercial use** (April 2025), removing all previous cost barriers.

This demo will showcase advanced scroll-driven storytelling capabilities for the TechEd Academy content, demonstrating techniques used on 50%+ of award-winning websites.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| GSAP Website | https://gsap.com |
| GSAP Documentation | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ |
| GSAP GitHub | https://github.com/greensock/GSAP |
| Lenis GitHub | https://github.com/darkroomengineering/lenis |
| Lenis Documentation | https://lenis.darkroom.engineering/ |
| GSAP CDN | https://cdn.jsdelivr.net/npm/gsap@3/ |
| Lenis CDN | https://cdn.jsdelivr.net/npm/lenis@1/ |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [x] Scroll-driven narrative
- [x] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [ ] Hybrid/Other

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available | Size (gzip) |
|------------|---------|----------|---------------|-------------|
| GSAP Core | 3.12.5+ | Yes | Yes | ~25 KB |
| ScrollTrigger | 3.12.5+ | Yes | Yes | ~10 KB |
| Lenis | 1.x | Yes | Yes | ~15 KB |
| **Total** | - | - | - | **~50 KB** |

### 2.2 File Structure

```
/enhanced/gsap-scrolltrigger/
├── index.html              # Main demo file with metadata
├── styles.css              # Custom styles (optional, can be inline)
├── animations.js           # GSAP animation configurations
├── assets/                 # Optional: local assets
│   └── images/
└── README.md               # Quick reference
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Full support, best performance |
| Firefox | 90+ | Full support |
| Safari | 14+ | Full support including iOS |
| Edge | 90+ | Full support (Chromium-based) |
| IE 11 | Not supported | Graceful degradation |

### 2.4 Performance Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Initial load time | <3s | CDN-cached libraries |
| Bundle size (gzip) | <100 KB | ~50 KB libraries + content |
| Lighthouse Performance | 90+ | With optimizations |
| FPS during scroll | 60 FPS | GSAP optimized |
| Time to Interactive | <2s | Async script loading |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Partial | Works after initial load |
| Keyboard navigation | Yes | Tab, Arrow keys for sections |
| Touch support | Yes | Lenis touch-optimized |
| Print/PDF export | Partial | Basic print styles |
| Speaker notes | No | Not applicable |
| Reduced motion | Yes | `gsap.matchMedia()` + Lenis |

### 3.2 ScrollTrigger Capabilities

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **Scrubbing** | Animation progress tied to scroll position | `scrub: true` or `scrub: 1` |
| **Pinning** | Fix elements during scroll | `pin: true` |
| **Snapping** | Velocity-based snap to positions | `snap: 1/(n-1)` |
| **Toggle Actions** | Play/pause/reverse on scroll | `toggleActions: "play pause resume reverse"` |
| **Markers** | Visual debugging | `markers: true` (dev only) |
| **Custom Triggers** | Any element as trigger | `trigger: ".element"` |
| **Start/End Points** | Precise scroll positions | `start: "top 80%"`, `end: "bottom top"` |
| **Callbacks** | Events on scroll positions | `onEnter`, `onLeave`, `onEnterBack`, `onLeaveBack` |

### 3.3 Lenis Capabilities

| Feature | Description | Default |
|---------|-------------|---------|
| **Smooth Scroll** | Inertia-based scrolling | `duration: 1.2` |
| **Custom Easing** | Exponential easing | Custom easing function |
| **Touch Support** | Touch multiplier | `touchMultiplier: 2` |
| **Wheel Multiplier** | Scroll speed control | `wheelMultiplier: 1` |
| **Orientation** | Vertical/horizontal | `orientation: 'vertical'` |

### 3.4 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes | Native with scroll reveal |
| Video | Yes | Autoplay on scroll trigger |
| Code blocks | Yes | Syntax highlighting + reveal |
| Charts | Yes | Animated chart.js integration |
| 3D content | Partial | CSS 3D transforms |
| Lottie animations | Yes | Scroll-synced playback |
| SVG path drawing | Yes | `drawSVG`-like effects |

### 3.5 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | Yes | Low |
| Scroll-triggered | Yes | Medium |
| Timeline-based | Yes | Medium |
| Scrubbed animations | Yes | Medium |
| Physics-based | Partial | High |
| Horizontal scroll | Yes | Medium |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Target | Implementation |
|-----------|-------|--------|----------------|
| 1.1.1 Non-text Content | A | Pass | Alt text on all images |
| 1.4.3 Contrast | AA | Pass | Project color system |
| 2.1.1 Keyboard | A | Pass | Full keyboard navigation |
| 2.3.1 Three Flashes | A | Pass | No rapid flashing |
| 2.4.7 Focus Visible | AA | Pass | Custom focus indicators |
| 2.5.5 Target Size | AAA | Pass | 44x44px minimum |

### 4.2 Accessibility Features

- [x] Skip links (to main content)
- [x] ARIA landmarks (`main`, `nav`, `section`)
- [x] Screen reader compatible (proper heading hierarchy)
- [x] Reduced motion support (`prefers-reduced-motion`)
- [x] High contrast mode (CSS custom properties)
- [x] Keyboard navigation (Tab, Enter, Arrow keys)
- [x] Focus management during scroll

### 4.3 Reduced Motion Implementation

```javascript
// Built-in accessibility pattern
let mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Full animations
    initScrollAnimations();
    initLenisSmooth();
});

mm.add("(prefers-reduced-motion: reduce)", () => {
    // Simplified: instant reveals, no smooth scroll
    initReducedMotionMode();
    lenis.destroy();
});
```

### 4.4 Known Accessibility Considerations

| Consideration | Severity | Mitigation |
|---------------|----------|------------|
| Smooth scroll can be disorienting | Low | Respect `prefers-reduced-motion` |
| Pinned sections may confuse | Low | Clear progress indicators |
| Scroll hijacking perception | Low | Lenis preserves native feel |

---

## 5. Demo Content Specification

### 5.1 Sections Overview

The demo will showcase TechEd Academy content across 6 main sections:

| Section | Animation Type | Duration |
|---------|---------------|----------|
| 1. Hero | Parallax + text reveal | 100vh |
| 2. Mission | Fade-in cards with scrub | 150vh |
| 3. Programs | Horizontal scroll gallery | 300vh (pinned) |
| 4. Timeline | SVG path draw + milestones | 200vh |
| 5. Stats | Counter animations | 100vh |
| 6. CTA | Zoom + parallax | 100vh |

### 5.2 Section Details

#### Section 1: Hero (Parallax)
- **Trigger:** Immediate on load
- **Animation:**
  - Background parallax (0.3x speed)
  - Text fade-in from bottom
  - Logo scale animation
- **Scrub:** Yes (parallax only)

#### Section 2: Mission (Card Reveals)
- **Trigger:** `start: "top 80%"`
- **Animation:**
  - Cards stagger in from alternating sides
  - Opacity and Y transform
- **Scrub:** Optional (`scrub: 0.5`)

#### Section 3: Programs (Horizontal Scroll)
- **Trigger:** Section enter
- **Animation:**
  - Pin container
  - Horizontal slide of program cards
  - Progress indicator
- **Pin Duration:** 300vh of scroll = full horizontal traverse
- **Snap:** Yes, to each program card

```javascript
// Horizontal scroll pattern
gsap.to(".programs-track", {
    xPercent: -100 * (programCount - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".programs-container",
        pin: true,
        scrub: 1,
        snap: 1 / (programCount - 1),
        end: () => "+=" + container.offsetWidth * 2
    }
});
```

#### Section 4: Timeline (Path Drawing)
- **Trigger:** `start: "top center"`
- **Animation:**
  - SVG line draws as scroll progresses
  - Milestone circles pop in at intervals
  - Year labels fade in
- **Scrub:** Yes, tied to path progress

#### Section 5: Stats (Counters)
- **Trigger:** `start: "top 70%"`
- **Animation:**
  - Number counters (GSAP `snap`)
  - Scale and glow on completion
- **Scrub:** No (plays once)

#### Section 6: CTA (Finale)
- **Trigger:** `start: "top bottom"`
- **Animation:**
  - Background zoom (scale 1 to 1.1)
  - Text parallax
  - Button pulse
- **Scrub:** Yes (background only)

---

## 6. Customization Points

### 6.1 Theming (CSS Variables)

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

    /* GSAP ScrollTrigger specific */
    --scroll-progress-color: var(--color-primary);
    --pin-spacer-bg: transparent;
    --marker-color: #00ff00; /* Debug only */

    /* Lenis specific */
    --scroll-duration: 1.2;
    --scroll-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### 6.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableLenis` | boolean | `true` | Enable smooth scroll |
| `enableMarkers` | boolean | `false` | Show debug markers |
| `scrubDuration` | number | `1` | Scrub catchup time (seconds) |
| `snapDuration` | number | `0.5` | Snap animation duration |
| `respectReducedMotion` | boolean | `true` | Honor user preference |

### 6.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | CSS variable overrides |
| New sections | Easy | Copy section pattern |
| Custom animations | Medium | GSAP timeline knowledge |
| Horizontal scroll variations | Medium | Adjust pin/scrub settings |
| Plugin integration | Hard | ScrollSmoother, etc. |

---

## 7. Integration Guide

### 7.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP ScrollTrigger + Lenis Demo</title>

    <!-- Lenis CSS (optional) -->
    <style>
        html.lenis, html.lenis body {
            height: auto;
        }
        .lenis.lenis-smooth {
            scroll-behavior: auto !important;
        }
    </style>
</head>
<body>
    <main>
        <!-- Content sections here -->
    </main>

    <!-- GSAP Core -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
    <!-- ScrollTrigger Plugin -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
    <!-- Lenis -->
    <script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>

    <script>
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true
        });

        // Sync Lenis with ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            lenis.destroy();
        }
    </script>
</body>
</html>
```

### 7.2 With Project Standards

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
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/gsap-scrolltrigger/prd-gsap-scrolltrigger.md]
description:    GSAP ScrollTrigger + Lenis demo for TechEd Academy
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Advanced scroll animations with GSAP ScrollTrigger and Lenis smooth scroll">

    <!-- Open Graph -->
    <meta property="og:title" content="GSAP ScrollTrigger Demo | TechEd Academy">
    <meta property="og:description" content="Professional scroll-driven storytelling">

    <title>GSAP ScrollTrigger + Lenis | TechEd Academy</title>

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
        /* Additional styles... */
    </style>
</head>
<body>
    <!-- Skip link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <main id="main-content">
        <!-- Sections here -->
    </main>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
    <script src="/shared/nav-component.js"></script>
</body>
</html>
```

### 7.3 Common Animation Patterns

#### Pattern 1: Fade In on Scroll
```javascript
gsap.utils.toArray('.fade-in').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
```

#### Pattern 2: Staggered Cards
```javascript
gsap.from('.card', {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.cards-container',
        start: "top 70%"
    }
});
```

#### Pattern 3: Parallax Background
```javascript
gsap.to('.parallax-bg', {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
```

#### Pattern 4: Progress Bar
```javascript
gsap.to('.progress-bar', {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
    }
});
```

---

## 8. Evaluation Scores

### 8.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 18 | 20 | ~50KB bundle is acceptable |
| User Experience | 19 | 20 | Best-in-class scroll feel |
| Content Quality | 17 | 20 | Depends on implementation |
| **Total** | **54** | **60** | |

### 8.2 Use Case Fit

| Use Case | Fit (1-5) | Notes |
|----------|-----------|-------|
| Technical presentations | 5 | Excellent for showcasing features |
| Story-driven content | 5 | Industry standard for storytelling |
| Quick creation | 3 | Requires GSAP knowledge |
| Offline delivery | 4 | Works after initial load |
| Premium stakeholders | 5 | Impressive, professional feel |

### 8.3 Comparison to Existing Demo

| Aspect | scrollytelling-pro (Vanilla) | gsap-scrolltrigger (GSAP+Lenis) |
|--------|------------------------------|----------------------------------|
| Bundle size | ~5 KB | ~50 KB |
| Scrubbing | Manual calculation | Built-in |
| Pinning | CSS sticky only | Full pin with animation sync |
| Snapping | Not available | Velocity-based |
| Smooth scroll | None | Lenis inertia |
| Learning curve | Low | Medium |
| Visual impact | Good | Excellent |

### 8.4 Overall Rating

**Rating:** ★★★★☆ (4/5)

**Justification:**
- Industry standard for scroll animations
- Now 100% free (major advantage)
- Moderate learning curve offset by excellent documentation
- ~50KB bundle justified by capabilities

---

## 9. Roadmap

### 9.1 Completed

- [x] Research evaluation (gsap-scrolltrigger-research.md)
- [x] Lenis research (lenis-research.md)
- [x] PRD creation (this document)
- [x] Integration plan created

### 9.2 Planned Improvements

| Improvement | Priority | Target Date |
|-------------|----------|-------------|
| Basic demo implementation | High | 2026-01-28 |
| All 6 sections complete | High | 2026-02-01 |
| Accessibility audit | High | 2026-02-03 |
| Performance optimization | Medium | 2026-02-05 |
| Enhanced polish | Low | 2026-02-07 |

### 9.3 Future Considerations

| Feature | Priority | Notes |
|---------|----------|-------|
| ScrollSmoother integration | Low | Additional GSAP plugin |
| SplitText for text animations | Low | Now free with GSAP |
| 3D scroll effects | Low | CSS 3D transforms |

---

## 10. Cross-References

### 10.1 Related Documents

| Document | Purpose |
|----------|---------|
| [Integration Plan](integration-plan.md) | Step-by-step implementation |
| [GSAP Research](../../research/active/scroll-animation/gsap-scrolltrigger-research.md) | Technical evaluation |
| [Lenis Research](../../research/active/scroll-animation/lenis-research.md) | Smooth scroll evaluation |
| [Scrollytelling Pro](../../../enhanced/scrollytelling-pro/) | Vanilla JS comparison |

### 10.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| scrollytelling-pro | Vanilla JS, lighter, fewer features |
| Locomotive Scroll | Heavier, different API, less GSAP integration |
| CSS Scroll-Driven | Native, limited browser support, no pinning |

---

## 11. Risks and Mitigations

### 11.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Bundle size concerns | Low | Low | CDN caching, async loading |
| Performance on low-end devices | Low | Medium | Reduced motion fallback |
| Conflicts with existing CSS | Low | Low | GSAP uses inline styles |
| GSAP version breaking changes | Very Low | Medium | Lock CDN version |

### 11.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep (too many animations) | Medium | Medium | Define clear section scope |
| Learning curve delays | Low | Low | Excellent GSAP documentation |
| Maintenance burden | Very Low | Low | Stable, mature library |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial PRD |

---

*Template Version: 1.0.0 | See [INDEX.md](../../INDEX.md) for all documentation*
