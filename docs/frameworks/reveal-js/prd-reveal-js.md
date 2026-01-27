<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-reveal-js.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../INDEX.md]
description:    Product Requirements Document for Reveal.js framework
==============================================================================
-->

# PRD: Reveal.js

> **Framework:** Reveal.js
> **Version:** 4.5.0
> **Status:** Active
> **Last Evaluated:** 2026-01-26
> **Demo:** [/reveal-js/](/reveal-js/)

---

## 1. Overview

### 1.1 Summary

Reveal.js is a full-featured HTML presentation framework that creates beautiful slide decks using web technologies. It's the most established open-source presentation framework, offering smooth transitions, nested slides, and auto-animate features. Ideal for traditional slide-based presentations that need to work offline.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [revealjs.com](https://revealjs.com/) |
| Documentation | [revealjs.com/docs](https://revealjs.com/) |
| GitHub | [hakimel/reveal.js](https://github.com/hakimel/reveal.js) |
| CDN | [cdnjs.com/libraries/reveal.js](https://cdnjs.com/libraries/reveal.js) |

### 1.3 Framework Category

- [x] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| Reveal.js Core | 4.5.0 | Yes | Yes |
| Reveal.js Theme | 4.5.0 | Yes | Yes |
| Google Fonts (Inter) | - | No | Yes |

### 2.2 File Structure

```
/reveal-js/
└── index.html          # Complete demo (20.8 KB)
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
| Initial load time | ~1.5s | <3s ✅ |
| Bundle size | ~300KB | <500KB ✅ |
| Lighthouse Performance | 95 | 90+ ✅ |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | ✅ Yes | Works without internet after load |
| Keyboard navigation | ✅ Yes | Arrow keys, Space, Escape |
| Touch support | ✅ Yes | Swipe gestures |
| Print/PDF export | ✅ Yes | ?print-pdf query param |
| Speaker notes | ✅ Yes | Press 'S' key |
| Slide overview | ✅ Yes | Press 'O' key |
| Fullscreen | ✅ Yes | Press 'F' key |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | ✅ Yes | Native |
| Video | ✅ Yes | Native HTML5 |
| Code blocks | ✅ Yes | Plugin (highlight.js) |
| Charts | ⚠️ Partial | External (Chart.js) |
| 3D content | ❌ No | Not supported |
| Lottie animations | ⚠️ Partial | Manual integration |
| Markdown | ✅ Yes | Plugin |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | ✅ Yes | Low |
| Slide transitions | ✅ Yes | Low |
| Auto-animate | ✅ Yes | Medium |
| Fragments | ✅ Yes | Low |
| Timeline-based | ❌ No | - |

### 3.4 Transition Types

- `none`, `fade`, `slide`, `convex`, `concave`, `zoom`

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | ✅ Pass | Alt text supported |
| 1.4.3 Contrast | AA | ✅ Pass | Theme-dependent |
| 2.1.1 Keyboard | A | ✅ Pass | Full keyboard nav |
| 2.4.7 Focus Visible | AA | ⚠️ Partial | Needs custom focus styles |

### 4.2 Accessibility Features

- [x] Keyboard navigation (comprehensive)
- [x] ARIA landmarks (basic)
- [x] Screen reader compatible (with slide announcements)
- [ ] Reduced motion support (needs implementation)
- [ ] High contrast mode (theme-dependent)

### 4.3 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Focus indicators weak | Medium | Add custom :focus styles |
| No prefers-reduced-motion | Low | Add CSS media query |

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

```css
:root {
    /* Project colors applied */
    --r-background-color: #0f172a;
    --r-main-font: 'Inter', sans-serif;
    --r-main-color: #ffffff;
    --r-heading-color: #ffffff;
    --r-link-color: #6366f1;
    --r-link-color-hover: #818cf8;
    --r-selection-background-color: #6366f1;
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| hash | boolean | true | Enable URL hash navigation |
| slideNumber | boolean | true | Show slide numbers |
| transition | string | "slide" | Slide transition style |
| backgroundTransition | string | "fade" | Background transition |
| autoAnimate | boolean | true | Enable auto-animate |
| mouseWheel | boolean | true | Navigate with mouse wheel |

### 5.3 Initialization

```javascript
Reveal.initialize({
    hash: true,
    slideNumber: true,
    transition: 'slide',
    backgroundTransition: 'fade',
    autoAnimateEasing: 'ease-out',
    autoAnimateDuration: 0.8,
    mouseWheel: true
});
```

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/theme/black.min.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>Slide 1</section>
            <section>Slide 2</section>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.js"></script>
    <script>Reveal.initialize();</script>
</body>
</html>
```

### 6.2 Key Patterns Used

- **Auto-animate:** `data-auto-animate` on sections
- **Fragments:** `class="fragment fade-in"`
- **Background gradients:** `data-background-gradient="linear-gradient(...)"`
- **Vertical slides:** Nested `<section>` elements

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 17 | 20 | Mature, stable |
| User Experience | 16 | 20 | Classic but effective |
| Content Quality | 15 | 20 | Good for slides |
| **Total** | 48 | 60 | |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) |
|----------|-----------|
| Technical presentations | ★★★★★ |
| Story-driven content | ★★★☆☆ |
| Quick creation | ★★★★☆ |
| Offline delivery | ★★★★★ |
| Premium stakeholders | ★★★★☆ |

### 7.3 Overall Rating

**★★★★☆** (4/5)

**Best For:** Traditional slide presentations, technical talks, offline delivery

---

## 8. Roadmap

### 8.1 Completed

- [x] Initial implementation
- [x] Project styling applied
- [x] Navigation integration
- [x] Auto-animate demos
- [x] Fragment animations

### 8.2 Planned Improvements

| Improvement | Priority | Target |
|-------------|----------|--------|
| Add prefers-reduced-motion | Medium | v1.1 |
| Improve focus indicators | Medium | v1.1 |
| Add speaker notes demo | Low | v1.2 |

---

## 9. Cross-References

### 9.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Demo Implementation](/reveal-js/)
- [Evaluation Tool](/docs/evaluation.html)

### 9.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Slidev | More developer-focused, Markdown-native |
| Impress.js | 3D spatial presentations (planned) |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial PRD |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
