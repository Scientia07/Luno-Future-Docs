<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-gamma.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../INDEX.md, ../../../gamma-guide/index.html]
description:    Product Requirements Document for Gamma framework implementation
==============================================================================
-->

# PRD: Gamma

> **Framework:** Gamma (Gamma.app Style)
> **Version:** 1.0.0
> **Status:** Active
> **Last Evaluated:** 2026-01-26
> **Demo:** [/gamma-guide/](/gamma-guide/)

---

## 1. Overview

### 1.1 Summary

Gamma is a card-based presentation framework inspired by Gamma.app, featuring a clean light theme with elegant typography and professional layout patterns. It excels at creating polished, business-focused presentations with a modern SaaS aesthetic. The framework uses pure CSS/HTML without external dependencies (except Google Fonts), making it lightweight and highly customizable.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [Gamma.app](https://gamma.app) (inspiration) |
| Documentation | Internal (this document) |
| GitHub | N/A (custom implementation) |
| NPM/CDN | Google Fonts (Inter) |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [x] Card-based layout
- [ ] Hybrid/Other

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| Google Fonts (Inter) | 400-700 weights | Yes | Yes |
| nav-component.js | 1.0.0 | Yes | Local |

### 2.2 File Structure

```
/gamma-guide/
├── index.html          # Main demo file (521 lines)
└── (assets/)           # Optional: local assets (not currently used)
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
| Initial load time | ~1.5s | <3s |
| Bundle size | ~15KB (HTML/CSS) | <500KB |
| Lighthouse Performance | 95+ | 90+ |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes | No external JS dependencies |
| Keyboard navigation | Partial | Standard browser scrolling |
| Touch support | Yes | Responsive design |
| Print/PDF export | Yes | Clean print styles possible |
| Speaker notes | No | Not implemented |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes | Native + placeholder system |
| Video | Partial | Native HTML5 possible |
| Code blocks | No | Not styled (could be added) |
| Charts | No | Could integrate Chart.js |
| 3D content | No | Not applicable |
| Lottie animations | No | Could be added |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | Yes | Low |
| Hover effects | Yes | Low |
| Scroll-triggered | No | N/A |
| Timeline-based | No | N/A |
| Physics-based | No | N/A |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Emoji icons need text alternatives |
| 1.4.3 Contrast | AA | Pass | Light theme with good contrast |
| 2.1.1 Keyboard | A | Pass | Standard scrolling works |
| 2.4.7 Focus Visible | AA | Partial | Needs explicit focus styles |

### 4.2 Accessibility Features

- [ ] Skip links
- [ ] ARIA landmarks
- [x] Screen reader compatible (basic)
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] High contrast mode

### 4.3 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Emoji icons lack alt text | Medium | Add sr-only text alternatives |
| No skip navigation | Low | Add skip link to main content |
| Hover animations not reduced motion aware | Low | Add `prefers-reduced-motion` query |
| Missing ARIA landmarks | Low | Add role attributes to sections |

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

```css
:root {
    /* Gamma Light Theme Colors */
    --gamma-primary: #6366f1;      /* Indigo - main brand color */
    --gamma-secondary: #8b5cf6;    /* Violet - gradient accent */
    --gamma-bg: #fafafa;           /* Light gray background */
    --gamma-card: #ffffff;         /* White card surfaces */
    --gamma-text: #1f2937;         /* Dark gray text */
    --gamma-muted: #6b7280;        /* Muted text color */
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| Container width | CSS | 1000px | Max content width |
| Card padding | CSS | 60px | Internal card spacing |
| Card border-radius | CSS | 24px | Rounded corner radius |
| Grid columns | CSS | 2 | Default grid layout |
| Pricing columns | CSS | 3 | Pricing grid layout |

### 5.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | Override CSS variables |
| New card types | Easy | Add new CSS classes |
| Animation enhancements | Medium | Add CSS keyframes |
| Dark mode variant | Medium | Invert color scheme |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gamma Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --gamma-primary: #6366f1;
            --gamma-secondary: #8b5cf6;
            --gamma-bg: #fafafa;
            --gamma-card: #ffffff;
            --gamma-text: #1f2937;
            --gamma-muted: #6b7280;
        }
        body {
            font-family: 'Inter', sans-serif;
            background: var(--gamma-bg);
            color: var(--gamma-text);
        }
        .gamma-card {
            background: var(--gamma-card);
            border-radius: 24px;
            padding: 60px;
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
    </style>
</head>
<body>
    <div class="gamma-container">
        <div class="gamma-card">
            <h2>Your Content Here</h2>
            <p>Start building your presentation.</p>
        </div>
    </div>
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
author:         [Name]
related_docs:   [docs/frameworks/gamma/prd-gamma.md]
description:    Gamma-style demo for TechEd Academy
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Your styles... -->
</head>
<body>
    <!-- Your content... -->

    <!-- Include shared navigation -->
    <script src="../shared/nav-component.js"></script>
</body>
</html>
```

### 6.3 Common Patterns

#### Hero Card with Gradient
```html
<div class="gamma-card gamma-hero">
    <h1>Main Title</h1>
    <p>Subtitle or description</p>
    <div class="gamma-badge">
        <span>Icon</span>
        <span>Badge Text</span>
    </div>
</div>
```

#### Feature Grid
```html
<div class="gamma-grid">
    <div class="gamma-grid-item">
        <div class="gamma-icon">Icon</div>
        <h3>Feature Title</h3>
        <p>Feature description.</p>
    </div>
    <!-- Repeat for more items -->
</div>
```

#### Timeline
```html
<div class="gamma-timeline">
    <div class="gamma-timeline-item">
        <h4>Timeline Entry</h4>
        <p>Description of this phase.</p>
    </div>
    <!-- Repeat for more items -->
</div>
```

#### Pricing Grid
```html
<div class="gamma-pricing">
    <div class="gamma-price-card">
        <h3>Plan Name</h3>
        <div class="gamma-price">$XX</div>
        <ul class="gamma-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
        </ul>
    </div>
    <div class="gamma-price-card featured">
        <!-- Featured/highlighted plan -->
    </div>
</div>
```

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 17 | 20 | No external JS deps, clean CSS |
| User Experience | 18 | 20 | Professional, clean aesthetic |
| Content Quality | 16 | 20 | Good structure, needs a11y work |
| **Total** | **51** | **60** | |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) |
|----------|-----------|
| Technical presentations | 3 |
| Story-driven content | 4 |
| Quick creation | 5 |
| Offline delivery | 5 |
| Premium stakeholders | 5 |
| Business proposals | 5 |
| Educational content | 4 |

### 7.3 Overall Rating

**Rating: 4/5**

**Strengths:**
- Clean, professional light theme aesthetic
- No external JavaScript dependencies
- Highly customizable CSS-only approach
- Excellent for business and SaaS presentations
- Responsive design out of the box
- Fast loading, minimal bundle size

**Weaknesses:**
- Limited animation capabilities
- No built-in navigation between sections
- Accessibility needs improvement
- No dark mode variant (yet)

---

## 8. Roadmap

### 8.1 Completed

- [x] Initial implementation
- [x] Project styling applied (custom CSS variables)
- [x] Navigation integration (nav-component.js)
- [x] Hero section with gradient
- [x] Feature grid layout
- [x] Timeline component
- [x] Pricing grid component
- [x] Two-column layout
- [x] Stats display
- [x] CTA section
- [x] Mobile responsive design

### 8.2 Planned Improvements

| Improvement | Priority | Target Version |
|-------------|----------|----------------|
| Add metadata header to index.html | High | v1.1.0 |
| Add ARIA landmarks | High | v1.1.0 |
| Add `prefers-reduced-motion` support | Medium | v1.1.0 |
| Create dark mode variant | Medium | v1.2.0 |
| Add skip navigation link | Medium | v1.1.0 |
| Improve focus indicators | Medium | v1.1.0 |
| Add code block styling | Low | v1.2.0 |
| Create enhanced version in /enhanced/ | Low | v2.0.0 |

---

## 9. Cross-References

### 9.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Framework Index](../../INDEX.md)
- [Demo Implementation](../../../gamma-guide/index.html)

### 9.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Framer | Dark theme, more animation focus |
| Slidev | Markdown-based, slide navigation |
| Reveal.js | Slide-based with speaker notes |

### 9.3 Component Reference

| Component | CSS Class | Description |
|-----------|-----------|-------------|
| Container | `.gamma-container` | Max-width wrapper (1000px) |
| Card | `.gamma-card` | Base card component |
| Hero | `.gamma-hero` | Gradient hero section |
| Badge | `.gamma-badge` | Pill-shaped badge |
| Tag | `.gamma-tag` | Section label tag |
| Grid | `.gamma-grid` | 2-column feature grid |
| Grid Item | `.gamma-grid-item` | Individual grid cell |
| Icon | `.gamma-icon` | Gradient icon container |
| Stats | `.gamma-stats` | Statistics row |
| Stat | `.gamma-stat` | Individual statistic |
| Timeline | `.gamma-timeline` | Vertical timeline |
| Timeline Item | `.gamma-timeline-item` | Timeline entry |
| Pricing | `.gamma-pricing` | 3-column pricing grid |
| Price Card | `.gamma-price-card` | Pricing tier card |
| Features List | `.gamma-features` | Checkmark feature list |
| CTA | `.gamma-cta` | Dark call-to-action section |
| Button | `.gamma-button` | Rounded action button |
| Two Column | `.gamma-two-col` | Side-by-side layout |
| Note | `.gamma-note` | Highlighted note box |
| Image Placeholder | `.gamma-image-placeholder` | Gradient placeholder |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial PRD |

---

*Template Version: 1.0.0 | See [INDEX.md](../../INDEX.md) for all documentation*
