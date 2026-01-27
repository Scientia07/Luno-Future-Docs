<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-lottie.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../INDEX.md, ../../../lottie-html/index.html]
description:    Product Requirements Document for Lottie animation framework
==============================================================================
-->

# PRD: Lottie

> **Framework:** Lottie (LottieFiles Player)
> **Version:** @latest (via CDN)
> **Status:** Active
> **Last Evaluated:** 2026-01-26
> **Demo:** [/lottie-html/](/lottie-html/)

---

## 1. Overview

### 1.1 Summary

Lottie is a vector animation library that renders After Effects animations exported as JSON in real-time. It enables high-quality, scalable animations that are lightweight and performant compared to traditional video or GIF formats. In this project, Lottie provides engaging visual elements throughout the TechEd Academy showcase, including hero animations, program cards, statistics icons, timeline markers, and interactive demos.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | https://lottiefiles.com/ |
| Documentation | https://lottiefiles.com/web-player |
| GitHub | https://github.com/LottieFiles/lottie-player |
| NPM/CDN | https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js |

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
| lottie-player | @latest | Yes | Yes (unpkg) |
| Intersection Observer API | Native | No | Browser native |

### 2.2 File Structure

```
/lottie-html/
├── index.html          # Main demo file (907 lines)
└── (no local assets)   # All animations loaded from lottie.host CDN
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 90+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | ~2.5s | <3s |
| Bundle size (lottie-player) | ~250KB | <500KB |
| Lighthouse Performance | 85+ | 90+ |

**Performance Notes:**
- Uses preconnect hints for `unpkg.com` and `assets-v2.lottiefiles.com`
- Animations loaded lazily via CDN (no local storage)
- Intersection Observer triggers playback only when visible

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Partial | Requires caching animations locally |
| Keyboard navigation | Partial | Page scrolling only; no animation controls |
| Touch support | Yes | Native browser touch |
| Print/PDF export | No | Animations not captured |
| Speaker notes | No | Not applicable |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | No | Not primary purpose |
| Video | No | Use Lottie for vector animation |
| Code blocks | No | Not applicable |
| Charts | No | Use Chart.js instead |
| 3D content | Partial | Limited 3D via After Effects |
| Lottie animations | Yes | Native - primary purpose |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | N/A | Use CSS directly |
| Scroll-triggered | Yes | Via Intersection Observer |
| Timeline-based | Yes | Native After Effects timeline |
| Physics-based | Partial | Baked into animation |
| Speed control | Yes | `setSpeed()` API |
| Play/Pause | Yes | `play()` / `pause()` API |
| Loop control | Yes | `loop` attribute |
| Direction control | Yes | `setDirection()` API |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Animations lack alt text |
| 1.4.3 Contrast | AA | Pass | Text meets 4.5:1 ratio |
| 2.1.1 Keyboard | A | Partial | Demo controls accessible |
| 2.4.7 Focus Visible | AA | Pass | Button focus states present |
| 2.3.1 Seizures | A | Pass | No rapid flashing content |

### 4.2 Accessibility Features

- [ ] Skip links
- [ ] ARIA landmarks
- [x] Screen reader compatible (text content)
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] High contrast mode

### 4.3 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Lottie players lack ARIA labels | Medium | Add `aria-label` attributes |
| No `prefers-reduced-motion` respect | Medium | Implement CSS media query to pause |
| Missing alt text for decorative animations | Low | Add `role="img"` with `aria-label` |
| Demo buttons missing focus outlines | Medium | Add `:focus-visible` styles |

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

    /* Background Colors */
    --bg-dark: #0f0f1a;
    --bg-darker: #0a0a1a;
    --bg-card: rgba(255,255,255,0.05);

    /* Text Colors */
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);

    /* Legacy aliases */
    --primary: var(--color-primary);
    --secondary: #8b5cf6;
    --bg: var(--bg-dark);
    --card-bg: var(--bg-card);
    --text: var(--text-primary);
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `src` | string | - | URL to Lottie JSON animation |
| `background` | string | `"transparent"` | Background color |
| `speed` | number | `1` | Playback speed multiplier |
| `loop` | boolean | `false` | Enable looping |
| `autoplay` | boolean | `false` | Start playing automatically |
| `hover` | boolean | `false` | Play on hover only |
| `direction` | number | `1` | Playback direction (1 or -1) |
| `mode` | string | `"normal"` | `"normal"`, `"bounce"` |
| `intermission` | number | `0` | Pause between loops (ms) |

### 5.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | CSS overrides for container |
| Speed controls | Easy | `setSpeed()` JavaScript API |
| Event listeners | Medium | `ready`, `complete`, `loopComplete` events |
| Frame control | Medium | `seek()` and `goToAndStop()` |
| Custom animations | Hard | Requires After Effects + Bodymovin |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lottie Demo</title>
    <!-- Performance hint -->
    <link rel="preconnect" href="https://unpkg.com" crossorigin>
    <!-- Load Lottie Player -->
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</head>
<body>
    <lottie-player
        src="https://lottie.host/your-animation.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        autoplay>
    </lottie-player>
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
created:        YYYY-MM-DD
updated:        YYYY-MM-DD
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/lottie/prd-lottie.md]
description:    Lottie animation demo for TechEd Academy
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechEd Academy - Lottie Animation Showcase</title>

    <!-- Performance hints -->
    <link rel="preconnect" href="https://unpkg.com" crossorigin>
    <link rel="preconnect" href="https://assets-v2.lottiefiles.com" crossorigin>

    <!-- Lottie Player -->
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

    <style>
        :root {
            --color-primary: #6366f1;
            --color-secondary: #ec4899;
            --bg-dark: #0f0f1a;
            --text-primary: #ffffff;
        }
        /* ... project styles ... */
    </style>
</head>
<body>
    <!-- Content with Lottie players -->
    <lottie-player
        src="https://lottie.host/example.json"
        background="transparent"
        speed="1"
        style="width: 400px; height: 400px;"
        loop
        autoplay
        aria-label="Animated illustration of cloud computing">
    </lottie-player>

    <!-- Shared navigation -->
    <script src="../shared/nav-component.js"></script>
</body>
</html>
```

### 6.3 Common Patterns

#### Scroll-Triggered Animations

```javascript
// Play animations only when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const player = entry.target.querySelector('lottie-player');
        if (player) {
            if (entry.isIntersecting) {
                player.play();
            } else {
                player.pause();
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.animated-section').forEach(el => {
    observer.observe(el);
});
```

#### Interactive Speed Controls

```javascript
const player = document.getElementById('demoPlayer');

function setSpeed(speed) {
    player.setSpeed(speed);
}

function togglePlay() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}
```

#### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
    lottie-player {
        /* Show first frame only */
    }
}
```

```javascript
// JavaScript approach
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('lottie-player').forEach(player => {
        player.pause();
        player.seek('0%');
    });
}
```

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 17 | 20 | Missing reduced motion support |
| User Experience | 18 | 20 | Interactive demo, scroll triggers |
| Content Quality | 16 | 20 | Good variety, some placeholder URLs |
| **Total** | **51** | **60** | |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) |
|----------|-----------|
| Technical presentations | 4 |
| Story-driven content | 5 |
| Quick creation | 3 (requires animation assets) |
| Offline delivery | 2 (needs caching strategy) |
| Premium stakeholders | 5 |

### 7.3 Overall Rating

**Rating: 4/5**

**Strengths:**
- High-quality, scalable vector animations
- Small file sizes compared to video/GIF
- Smooth 60fps playback
- Rich JavaScript API for interactivity
- Cross-browser compatible

**Weaknesses:**
- Requires After Effects for custom animations
- CDN dependency for animation files
- Limited accessibility features out-of-box
- Some animations may have broken URLs

---

## 8. Roadmap

### 8.1 Completed

- [x] Initial implementation
- [x] Project CSS variables applied
- [x] Navigation integration
- [x] Hero section with large animation
- [x] Program cards with animated icons
- [x] Stats section with trophy/book/handshake icons
- [x] Timeline with animated markers
- [x] Features section with illustrations
- [x] Pricing cards with animated badges
- [x] Interactive demo with speed controls
- [x] Scroll-triggered playback via Intersection Observer
- [x] Responsive design (mobile, tablet, desktop)

### 8.2 Planned Improvements

| Improvement | Priority | Target Version |
|-------------|----------|----------------|
| Add `prefers-reduced-motion` support | High | v1.1 |
| Add ARIA labels to all lottie-player elements | High | v1.1 |
| Replace placeholder animation URLs | Medium | v1.1 |
| Add local fallback for key animations | Medium | v1.2 |
| Add file metadata header to index.html | Low | v1.1 |
| Implement loading states/skeletons | Low | v1.2 |

---

## 9. Cross-References

### 9.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Demo Implementation](/lottie-html/)
- [Project INDEX](../../INDEX.md)

### 9.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Motion Canvas | Programmatic animation creation (TypeScript) |
| GreenSock (GSAP) | JavaScript-based, more control, steeper learning curve |
| CSS Animations | Native, limited complexity |
| Rive | Similar concept, different tooling |

---

## 10. Implementation Analysis

### 10.1 Current Implementation Summary

The Lottie demo (`/lottie-html/index.html`) showcases a complete TechEd Academy landing page with:

**Sections Implemented:**
1. **Hero Section** - Large 500x500px animated illustration
2. **Programs Grid** - 6 cards with 120x120px animated icons
3. **Stats Section** - 4 stats with 80x80px trophy/book/people icons
4. **Features Rows** - 2 feature blocks with 400x400px illustrations
5. **Timeline** - 4 journey phases with 50x50px animated markers
6. **Interactive Demo** - Speed controls (0.5x, 1x, 2x) and play/pause
7. **Pricing Cards** - 3 tiers with animated badge icons
8. **CTA Section** - Background animation at 0.1 opacity

**Animation Sources:**
All animations loaded from `lottie.host` CDN. Some URLs appear to be placeholder/example UUIDs.

**JavaScript Features:**
- `setSpeed()` for playback speed control
- `play()`/`pause()` toggle functionality
- Intersection Observer for scroll-triggered playback
- Threshold set at 0.3 (30% visibility)

### 10.2 Code Quality Assessment

| Aspect | Rating | Notes |
|--------|--------|-------|
| HTML Structure | Good | Semantic sections, proper nesting |
| CSS Organization | Good | CSS variables, responsive breakpoints |
| JavaScript | Good | Modern APIs, event delegation |
| Accessibility | Needs Work | Missing ARIA, no reduced motion |
| Performance | Good | Preconnect hints, lazy loading |
| Documentation | Needs Work | No file metadata header |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial PRD created from implementation analysis |

---

*Template Version: 1.0.0 | See [INDEX.md](../../INDEX.md) for all documentation*
