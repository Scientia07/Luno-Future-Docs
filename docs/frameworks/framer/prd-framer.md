<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-framer.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [integration-plan.md, ../INDEX.md, ../../../framer-guide/index.html]
description:    Product Requirements Document for Framer-style framework implementation
==============================================================================
-->

# PRD: Framer

> **Framework:** Framer-style Design System
> **Version:** 1.0.0
> **Status:** Active
> **Last Evaluated:** 2026-01-26
> **Demo:** [/framer-guide/](/framer-guide/)

---

## 1. Overview

### 1.1 Summary

The Framer-style implementation delivers a premium, design-forward presentation format inspired by Framer's minimalist aesthetic. It features sophisticated parallax effects, scroll-triggered animations, marquee text displays, and premium typography using Inter font. This framework excels at creating high-impact landing pages and stakeholder presentations that demand visual sophistication.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [framer.com](https://www.framer.com/) |
| Documentation | [framer.com/docs](https://www.framer.com/docs/) |
| Design System | Framer's minimalist black/white aesthetic |
| Font (Inter) | [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [x] Hybrid/Other: **Premium design / Parallax effects**

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| Google Fonts (Inter) | 400-800 weights | Yes | Yes |
| Intersection Observer API | Native | Yes | Browser built-in |
| CSS Custom Properties | Native | Yes | Browser built-in |

### 2.2 File Structure

```
/framer-guide/
├── index.html          # Main demo file (681 lines)
└── (assets/)           # No external assets - all inline
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 90+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |

**Key Browser APIs Used:**
- Intersection Observer API (scroll animations)
- CSS `clamp()` for fluid typography
- CSS `backdrop-filter` for glassmorphism nav
- CSS Custom Properties
- `scroll-behavior: smooth`

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | ~1.2s | <3s |
| Bundle size | ~25KB (inline) | <500KB |
| External requests | 1 (Google Fonts) | Minimal |
| Lighthouse Performance | ~95 | 90+ |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Partial | Works offline after font cache |
| Keyboard navigation | Yes | Anchor links, smooth scroll |
| Touch support | Yes | Responsive, touch-friendly |
| Print/PDF export | Partial | Best viewed on screen |
| Speaker notes | No | Not applicable |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes | Native |
| Video | No | Not implemented |
| Code blocks | No | Not styled |
| Charts | No | Not implemented |
| 3D content | No | Not implemented |
| Lottie animations | No | Not integrated |
| Emoji icons | Yes | Used for section icons |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | Yes | Low |
| Scroll-triggered | Yes | Medium |
| Timeline-based | Yes | Medium |
| Physics-based | No | N/A |
| Parallax effects | Yes | Medium |
| Marquee animation | Yes | Low |
| Hover interactions | Yes | Low |

### 3.4 Animation Details

**Hero Section:**
- `fadeInUp` keyframe animation with staggered delays (0s, 0.3s, 0.5s)
- Transform + opacity transitions

**Parallax Background:**
- Mouse-move tracking via JavaScript
- Radial gradient circles responding to cursor position
- Smooth transform transitions (0.1s ease-out)

**Scroll Indicator:**
- Bouncing arrow animation (2s infinite)
- CSS keyframe-based

**Marquee:**
- Infinite horizontal scroll (20s linear)
- Duplicated content for seamless loop

**Grid/Timeline Items:**
- Intersection Observer triggered
- Fade-in with translateY(30px) to translateY(0)
- Cubic-bezier easing (0.4, 0, 0.2, 1)

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Emoji icons lack alt text |
| 1.4.3 Contrast | AA | Pass | White on black = excellent |
| 2.1.1 Keyboard | A | Pass | All links keyboard accessible |
| 2.4.7 Focus Visible | AA | Partial | Native focus, could be enhanced |
| 2.3.1 Three Flashes | A | Pass | No flashing content |

### 4.2 Accessibility Features

- [ ] Skip links
- [ ] ARIA landmarks
- [x] Screen reader compatible (basic)
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [x] High contrast mode (inherent black/white design)

### 4.3 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| No skip links | Medium | Add skip-to-main link |
| Emoji icons not announced properly | Low | Add aria-hidden or aria-label |
| No `prefers-reduced-motion` | Medium | Add media query to disable animations |
| Missing ARIA landmarks | Medium | Add `role` attributes to sections |
| Parallax may cause motion sickness | Low | Implement reduced motion check |

### 4.4 Recommended Improvements

```css
/* Add to support reduced motion */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    .framer-marquee-content {
        animation: none;
    }
    .parallax-bg {
        display: none;
    }
}
```

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

```css
:root {
    /* Unified Color System (Project Standard) */
    --color-primary: #6366f1;
    --color-primary-dark: #4f46e5;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;

    /* Background Colors */
    --bg-darker: #0a0a1a;
    --bg-dark: #0f172a;
    --bg-card: rgba(255,255,255,0.05);

    /* Text Colors */
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);
    --text-dark: #1e293b;

    /* Framer-specific Theme */
    --framer-black: #000000;
    --framer-white: #ffffff;
    --framer-gray: #888888;
    --framer-accent: #0066ff;
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `--framer-black` | color | #000000 | Primary background |
| `--framer-white` | color | #ffffff | Primary text/buttons |
| `--framer-gray` | color | #888888 | Secondary text |
| `--framer-accent` | color | #0066ff | Accent highlights |
| Font weights | 400-800 | Inter | Typography scale |

### 5.3 Typography System

| Element | Size | Weight | Letter Spacing |
|---------|------|--------|----------------|
| H1 (Hero) | clamp(4em, 12vw, 10em) | 800 | -0.04em |
| H2 | 4em (2.5em mobile) | 800 | -0.03em |
| H3 | 2em-2.5em | 700 | -0.02em |
| Body | 1.1em-1.4em | 400 | Normal |
| Nav links | 0.9em | 400 | Normal |
| Labels | 0.9em | 600 | 0.1em (uppercase) |

### 5.4 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | CSS variable overrides |
| New sections | Easy | Copy section patterns |
| Animation timing | Easy | Modify transition values |
| Parallax intensity | Easy | Change divisor in JS (25) |
| Core modification | Medium | Well-structured CSS |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Framer Style Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #000;
            color: #fff;
        }
    </style>
</head>
<body>
    <!-- Content here -->
</body>
</html>
```

### 6.2 Section Patterns

**Hero Section:**
```html
<section class="framer-section framer-hero">
    <div class="parallax-bg" id="parallaxBg"></div>
    <h1>Your<br>Headline</h1>
    <p>Supporting description text</p>
    <a href="#next" class="framer-btn">Call to Action</a>
</section>
```

**Grid Section:**
```html
<section class="framer-section">
    <h2>Section Title</h2>
    <div class="framer-grid">
        <div class="framer-grid-item">
            <span class="icon">icon</span>
            <h3>Feature Title</h3>
            <p>Feature description</p>
        </div>
        <!-- Repeat -->
    </div>
</section>
```

**Timeline Section:**
```html
<div class="framer-timeline">
    <div class="framer-timeline-item">
        <div class="framer-timeline-label">PHASE 1</div>
        <div class="framer-timeline-content">
            <h3>Phase Title</h3>
            <p>Phase description</p>
        </div>
    </div>
    <!-- Repeat -->
</div>
```

### 6.3 JavaScript Integration

**Parallax Effect:**
```javascript
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    parallaxElements.forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
});
```

**Scroll Animations:**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});
```

### 6.4 With Project Standards

```html
<!-- Include project CSS variables in :root -->
<!-- Include shared navigation -->
<script src="../shared/nav-component.js"></script>
```

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 18 | 20 | Excellent, minor a11y gaps |
| User Experience | 19 | 20 | Premium feel, smooth animations |
| Content Quality | 18 | 20 | Well-structured, clear hierarchy |
| **Total** | **55** | 60 | Excellent implementation |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) | Notes |
|----------|-----------|-------|
| Technical presentations | 3 | Better for high-level overview |
| Story-driven content | 4 | Timeline and scroll narrative |
| Quick creation | 3 | Templates help, but customization needed |
| Offline delivery | 4 | Works after font cache |
| Premium stakeholders | 5 | Ideal for executive/investor presentations |
| Landing pages | 5 | Primary use case |
| Marketing content | 5 | Highly visual, engaging |

### 7.3 Overall Rating

**Rating: 4.5/5**

**Strengths:**
- Premium visual aesthetic
- Smooth, sophisticated animations
- Excellent typography system
- High contrast, readable design
- Responsive mobile support
- Minimal dependencies

**Weaknesses:**
- Missing accessibility features (skip links, reduced motion)
- No video or chart support
- Limited interactivity options
- Requires font loading (external dependency)

---

## 8. Roadmap

### 8.1 Completed

- [x] Initial implementation
- [x] Project CSS variables applied
- [x] Navigation integration (`nav-component.js`)
- [x] Responsive design
- [x] Parallax effects
- [x] Scroll-triggered animations
- [x] Marquee animation
- [x] Timeline component
- [x] Pricing cards
- [x] Grid layouts

### 8.2 Planned Improvements

| Improvement | Priority | Target Version |
|-------------|----------|----------------|
| Add `prefers-reduced-motion` support | High | v1.1 |
| Add skip-to-content link | High | v1.1 |
| Add ARIA landmarks to sections | High | v1.1 |
| Add file metadata header | Medium | v1.1 |
| Add video section support | Medium | v1.2 |
| Add Chart.js integration | Low | v1.3 |
| Create reusable component library | Low | v2.0 |

---

## 9. Cross-References

### 9.1 Related Documents

- [Integration Plan](integration-plan.md) - Implementation steps (completed)
- [Demo Implementation](/framer-guide/) - Live demo
- [INDEX.md](../INDEX.md) - Documentation index

### 9.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Gamma | Card-based vs full-page sections |
| Scrollytelling | More narrative-focused, less premium aesthetic |
| Reveal.js | Slide-based vs scroll-based |

### 9.3 When to Choose Framer Style

**Choose Framer when:**
- Creating investor/executive presentations
- Building marketing landing pages
- Premium brand positioning required
- Visual impact is priority
- Modern, minimalist aesthetic desired

**Choose alternatives when:**
- Technical documentation needed (Slidev)
- Data-heavy presentations (Chart.js integration)
- Quick iteration required (Gamma)
- Accessibility is critical (add enhancements first)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial PRD |

---

*Template Version: 1.0.0 | See [INDEX.md](../INDEX.md) for all documentation*
