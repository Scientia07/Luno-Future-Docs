<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-framework-template.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [integration-plan-template.md, ../INDEX.md]
description:    Template for framework-specific PRD documents
==============================================================================
-->

# PRD: [Framework Name]

> **Framework:** [Name]
> **Version:** [Framework Version]
> **Status:** [Active | Planned | Deprecated]
> **Last Evaluated:** YYYY-MM-DD
> **Demo:** [Link to demo](/[folder-name]/)

---

## 1. Overview

### 1.1 Summary
<!-- 2-3 sentence description of what this framework does and why it's included -->

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [URL] |
| Documentation | [URL] |
| GitHub | [URL] |
| NPM/CDN | [URL] |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [ ] Hybrid/Other

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| [Library] | X.X.X | Yes/No | Yes/No |

### 2.2 File Structure

```
/[framework-folder]/
├── index.html          # Main demo file
├── assets/             # Optional: local assets
│   ├── images/
│   └── animations/
└── README.md           # Optional: quick reference
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | |
| Firefox | 90+ | |
| Safari | 14+ | |
| Edge | 90+ | |

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | Xs | <3s |
| Bundle size | XKB | <500KB |
| Lighthouse Performance | XX | 90+ |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes/No | |
| Keyboard navigation | Yes/No | |
| Touch support | Yes/No | |
| Print/PDF export | Yes/No | |
| Speaker notes | Yes/No | |

### 3.2 Content Types

| Content Type | Supported | Implementation |
|--------------|-----------|----------------|
| Images | Yes/No | Native/Plugin |
| Video | Yes/No | |
| Code blocks | Yes/No | |
| Charts | Yes/No | |
| 3D content | Yes/No | |
| Lottie animations | Yes/No | |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| CSS transitions | Yes/No | Low |
| Scroll-triggered | Yes/No | Medium |
| Timeline-based | Yes/No | High |
| Physics-based | Yes/No | High |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Pass/Fail/Partial | |
| 1.4.3 Contrast | AA | Pass/Fail/Partial | |
| 2.1.1 Keyboard | A | Pass/Fail/Partial | |
| 2.4.7 Focus Visible | AA | Pass/Fail/Partial | |

### 4.2 Accessibility Features

- [ ] Skip links
- [ ] ARIA landmarks
- [ ] Screen reader compatible
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] High contrast mode

### 4.3 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| [Description] | High/Medium/Low | [Solution] |

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

    /* Framework-specific overrides */
    --[framework]-specific: value;
}
```

### 5.2 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| [option] | string | "value" | [What it does] |

### 5.3 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | CSS overrides |
| Plugins | Medium | JS integration |
| Core modification | Hard | Not recommended |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!-- Minimal setup code -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>[Framework] Demo</title>
    <!-- Add dependencies -->
</head>
<body>
    <!-- Basic structure -->
</body>
</html>
```

### 6.2 With Project Standards

```html
<!-- Include project CSS variables -->
<!-- Include shared nav-component.js -->
<!-- Add metadata header -->
```

### 6.3 Common Patterns

See [enhanced/](/enhanced/) examples for advanced implementations.

---

## 7. Evaluation Scores

### 7.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | X | 20 | |
| User Experience | X | 20 | |
| Content Quality | X | 20 | |
| **Total** | X | 60 | |

### 7.2 Use Case Fit

| Use Case | Fit (1-5) |
|----------|-----------|
| Technical presentations | X |
| Story-driven content | X |
| Quick creation | X |
| Offline delivery | X |
| Premium stakeholders | X |

### 7.3 Overall Rating

**★★★★☆** (X/5)

---

## 8. Roadmap

### 8.1 Completed

- [x] Initial implementation
- [x] Project styling applied
- [x] Navigation integration

### 8.2 Planned Improvements

| Improvement | Priority | Target Version |
|-------------|----------|----------------|
| [Description] | High/Medium/Low | vX.X |

---

## 9. Cross-References

### 9.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Research Notes](../research/[topic].md) *(if applicable)*
- [Demo Implementation](../../[framework-folder]/)

### 9.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| [Similar] | [Comparison] |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | YYYY-MM-DD | [Name] | Initial PRD |

---

*Template Version: 1.0.0 | See [INDEX.md](../INDEX.md) for all documentation*
