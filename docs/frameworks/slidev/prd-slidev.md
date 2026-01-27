<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-slidev.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../INDEX.md]
description:    Product Requirements Document for Slidev framework
==============================================================================
-->

# PRD: Slidev

> **Framework:** Slidev (Style Recreation)
> **Version:** Custom Implementation
> **Status:** Active
> **Last Evaluated:** 2026-01-26
> **Demo:** [/slidev/](/slidev/)

---

## 1. Overview

### 1.1 Summary

Slidev is a developer-focused presentation framework that creates slides with a terminal/code aesthetic. This implementation recreates the Slidev visual style using pure HTML/CSS/JS, featuring terminal-styled UI elements, syntax-highlighted code blocks, and smooth slide transitions. Ideal for technical presentations targeting developer audiences.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [sli.dev](https://sli.dev/) |
| Documentation | [sli.dev/guide](https://sli.dev/guide/) |
| GitHub | [slidevjs/slidev](https://github.com/slidevjs/slidev) |
| NPM | [npmjs.com/package/@slidev/cli](https://www.npmjs.com/package/@slidev/cli) |

**Note:** Our implementation is a style recreation using vanilla web technologies, not the full Slidev framework (which requires Node.js/Vite).

### 1.3 Framework Category

- [x] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [x] Developer-focused (Terminal aesthetic)

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| Google Fonts (Fira Code) | - | Yes | Yes |
| Google Fonts (Inter) | - | Yes | Yes |
| nav-component.js | - | No | Local |

### 2.2 File Structure

```
/slidev/
└── index.html          # Complete demo (15.2 KB)
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
| Initial load time | ~0.8s | <3s |
| Bundle size | ~15KB | <500KB |
| Lighthouse Performance | 98 | 90+ |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes | Works without internet after font load |
| Keyboard navigation | Yes | Arrow keys, Space |
| Touch support | Yes | Swipe gestures (50px threshold) |
| Print/PDF export | Partial | Basic CSS print support |
| Speaker notes | No | Not implemented |
| Slide overview | No | Not implemented |
| Progress bar | Yes | Bottom gradient bar |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes | Native |
| Video | No | Not demonstrated |
| Code blocks | Yes | Custom syntax highlighting |
| Terminal UI | Yes | Custom `.terminal` component |
| Charts | No | Not implemented |
| 3D content | No | Not supported |
| Lottie animations | No | Not implemented |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | Yes | Low |
| Slide transitions | Yes | Medium |
| List item reveals | Yes | Medium |
| Timeline reveals | Yes | Medium |
| Auto-animate | No | - |

### 3.4 Unique Features

- **Terminal Component:** Realistic macOS-style terminal with traffic light buttons
- **Code Syntax Highlighting:** Custom CSS classes for keywords, strings, functions, comments, numbers
- **Developer Tags:** Pill-style technology tags (React, Python, AI/ML, etc.)
- **Icon Grid:** Responsive grid layout for feature showcases
- **Timeline Component:** Vertical timeline with animated reveal

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Emoji icons lack alt text |
| 1.4.3 Contrast | AA | Pass | High contrast dark theme |
| 2.1.1 Keyboard | A | Pass | Arrow key navigation |
| 2.4.7 Focus Visible | AA | Partial | Nav buttons have hover but weak focus |

### 4.2 Accessibility Features

- [x] Keyboard navigation (arrow keys, space)
- [ ] Skip links
- [ ] ARIA landmarks
- [ ] Screen reader optimized
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [x] High contrast mode (dark theme default)

### 4.3 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| No ARIA live regions for slide changes | Medium | Add aria-live to slide container |
| Emoji icons not accessible | Low | Add aria-label to icon items |
| No focus trap in presentation | Low | Add focus management |
| No prefers-reduced-motion | Low | Add CSS media query |

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

```css
:root {
    /* Slidev Theme Colors */
    --slidev-theme-primary: #3b82f6;    /* Blue */
    --slidev-theme-secondary: #10b981;  /* Green */
    --slidev-code-bg: #1e1e1e;          /* VS Code dark */
    --slidev-bg: #121212;               /* Dark background */
    --slidev-fg: #f5f5f5;               /* Light text */
}
```

### 5.2 Code Syntax Classes

```css
.code-block .comment { color: #6a9955; }   /* Green */
.code-block .keyword { color: #569cd6; }   /* Blue */
.code-block .string { color: #ce9178; }    /* Orange */
.code-block .function { color: #dcdcaa; }  /* Yellow */
.code-block .number { color: #b5cea8; }    /* Light green */
```

### 5.3 Terminal Theme

```css
.terminal {
    background: #0d1117;        /* GitHub dark */
    border-radius: 12px;
}
.terminal-header {
    background: #161b22;        /* Slightly lighter */
}
.terminal-body .prompt { color: #7ee787; }  /* Green prompt */
.terminal-body .command { color: #f0f6fc; } /* White command */
.terminal-body .output { color: #8b949e; }  /* Muted output */
```

### 5.4 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| Slide padding | CSS | 60px 80px | Content padding |
| Transition duration | CSS | 0.5s | Slide transition time |
| Transition easing | CSS | cubic-bezier(0.4, 0, 0.2, 1) | Easing function |
| Touch threshold | JS | 50px | Swipe detection distance |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slidev Presentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --slidev-theme-primary: #3b82f6;
            --slidev-theme-secondary: #10b981;
            --slidev-bg: #121212;
            --slidev-fg: #f5f5f5;
        }
        /* Add slide styles... */
    </style>
</head>
<body>
    <div class="slide-container">
        <div class="slides">
            <div class="slide active">
                <h1>Title Slide</h1>
            </div>
            <div class="slide">
                <h2>Content Slide</h2>
            </div>
        </div>
    </div>
    <script>
        // Add navigation JavaScript...
    </script>
</body>
</html>
```

### 6.2 Key Components

#### Terminal Block
```html
<div class="terminal">
    <div class="terminal-header">
        <div class="terminal-dot red"></div>
        <div class="terminal-dot yellow"></div>
        <div class="terminal-dot green"></div>
    </div>
    <div class="terminal-body">
        <span class="prompt">$</span> <span class="command">npm install</span><br>
        <span class="output">Installing dependencies...</span>
    </div>
</div>
```

#### Code Block with Syntax Highlighting
```html
<div class="code-block">
    <span class="keyword">const</span> <span class="function">example</span> = {<br>
    &nbsp;&nbsp;key: <span class="string">"value"</span>,<br>
    &nbsp;&nbsp;count: <span class="number">42</span><br>
    };
</div>
```

#### Technology Tags
```html
<span class="tag">React</span>
<span class="tag">TypeScript</span>
<span class="tag">Node.js</span>
```

### 6.3 Navigation JavaScript

```javascript
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'leaving');
        if (i === index) slide.classList.add('active');
        else if (i === currentSlide) slide.classList.add('leaving');
    });
    currentSlide = index;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Touch navigation
let touchStartX = 0;
document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
    }
});
```

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 16 | 20 | Lightweight, fast |
| User Experience | 17 | 20 | Great developer UX |
| Content Quality | 15 | 20 | Code-focused |
| **Total** | 48 | 60 | |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) |
|----------|-----------|
| Technical presentations | 5/5 |
| Story-driven content | 2/5 |
| Quick creation | 4/5 |
| Offline delivery | 5/5 |
| Premium stakeholders | 4/5 |
| Developer audiences | 5/5 |

### 7.3 Overall Rating

**Rating: 4/5**

**Best For:** Developer-focused presentations, technical demos, coding tutorials, hackathon pitches

**Strengths:**
- Terminal aesthetic resonates with developers
- Clean, minimal design
- Fast load times
- Touch and keyboard support
- No external dependencies (except fonts)

**Limitations:**
- Less suitable for non-technical audiences
- No speaker notes or presenter view
- Limited animation capabilities compared to full Slidev

---

## 8. Roadmap

### 8.1 Completed

- [x] Initial implementation
- [x] Terminal component styling
- [x] Code syntax highlighting
- [x] Keyboard navigation
- [x] Touch/swipe support
- [x] Progress bar
- [x] Slide transitions
- [x] Icon grid layout
- [x] Timeline component
- [x] Navigation integration

### 8.2 Planned Improvements

| Improvement | Priority | Target |
|-------------|----------|--------|
| Add ARIA landmarks and live regions | High | v1.1 |
| Add prefers-reduced-motion support | Medium | v1.1 |
| Add presenter mode with notes | Medium | v1.2 |
| Add slide overview (press 'O') | Low | v1.2 |
| Add print/PDF export styles | Low | v1.3 |

---

## 9. Cross-References

### 9.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Demo Implementation](/slidev/)
- [Documentation Index](../../INDEX.md)

### 9.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Reveal.js | More features, less developer aesthetic |
| Impress.js | 3D spatial navigation (planned) |
| Gamma | AI-powered, card-based |

### 9.3 Complementary Use

Slidev style works well combined with:
- **Lottie:** Add animated icons to slides
- **Chart.js:** Add data visualizations
- **Prism.js:** Enhanced syntax highlighting

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial PRD |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
