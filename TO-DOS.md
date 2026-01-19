<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       TO-DOS.md
created:        2026-01-16
updated:        2026-01-16
version:        1.0.0
status:         active
rating:         ★★★★★ (critical tracking file)
author:         Joel + Claude
related_docs:   [CLAUDE.md, docs/ROADMAP.md]
description:    Sprint task list for frontend improvements
==============================================================================
-->

# Luno-Future-Docs - Improvement Tasks

> **Sprint:** 1 Week (Jan 16 - Jan 23, 2026)
> **Generated:** 2026-01-16
> **Based on:** Frontend Code Analysis (21 HTML files)

---

## Quick Stats

| Priority | Tasks | Status |
|----------|-------|--------|
| High | 4 | ✅ 4/4 Complete |
| Medium | 4 | ✅ 4/4 Complete |
| Low | 4 | ✅ 3/4 Complete |
| **Total** | **12** | **11/12 Complete (92%)** |

---

## High Priority (Days 1-2)

### Task 1: Add Alt Text to All Images
- [x] **Status:** ✅ Completed (Jan 16, 2026)
- **Due:** Jan 17, 2026
- **Effort:** ~1 hour
- **Impact:** Accessibility (WCAG 1.1.1)

**Files to update:**
- `enhanced/scrollytelling-pro/index.html` (6 images)
- `offerte/lunolabs-*.html` (icons need aria-labels)

**What to do:**
```html
<!-- Change from -->
<img src="https://images.unsplash.com/...">

<!-- Change to -->
<img src="https://images.unsplash.com/..." alt="Students collaborating on a coding project">
```

**Notes:** Use descriptive alt text, not just "image" or "photo". For decorative images use `alt=""`.

---

### Task 2: Improve Color Contrast
- [x] **Status:** ✅ Completed (Jan 16, 2026)
- **Due:** Jan 17, 2026
- **Effort:** ~30 minutes
- **Impact:** Accessibility (WCAG 1.4.3)

**Current issue:**
```css
--text-muted: rgba(255,255,255,0.6);  /* 4.8:1 ratio - FAILS */
```

**Fix in all files:**
```css
--text-muted: rgba(255,255,255,0.75);  /* 7.5:1 ratio - PASSES */
```

**Files to update:**
- `dashboard/index.html` (line 21)
- `offerte/lunolabs-offerte-v2.html` (line 25)
- `enhanced/scrollytelling-pro/index.html` (line 18)
- `framer-guide/index.html` (line 17)
- All other HTML files with `--text-muted`

---

### Task 3: Add JavaScript Error Handling
- [x] **Status:** ✅ Completed (Jan 16, 2026)
- **Due:** Jan 18, 2026
- **Effort:** ~2 hours
- **Impact:** Stability, prevents runtime crashes

**Pattern to fix (example from scrollytelling-pro):**
```javascript
// BEFORE (brittle)
document.getElementById('progressBar').style.width = progress + '%';

// AFTER (safe)
const progressBar = document.getElementById('progressBar');
if (progressBar) {
    progressBar.style.width = `${progress}%`;
}
```

**Files to update:**
- `enhanced/scrollytelling-pro/index.html` (lines 1007-1111)
- `framer-guide/index.html` (lines 615-657)
- `offerte/lunolabs-offerte-v2.html` (lines 1505-1608)

---

### Task 4: Add Keyboard Accessibility
- [x] **Status:** ✅ Completed (Jan 16, 2026)
- **Due:** Jan 18, 2026
- **Effort:** ~1.5 hours
- **Impact:** Accessibility (WCAG 2.1.1)

**Issue:** `onclick` handlers don't work with keyboard

**Fix pattern:**
```html
<!-- BEFORE -->
<div class="gallery-item" onclick="openLightbox(this)">

<!-- AFTER -->
<div class="gallery-item"
     role="button"
     tabindex="0"
     onclick="openLightbox(this)"
     onkeydown="if(event.key==='Enter'||event.key===' ')openLightbox(this)">
```

**Files to update:**
- `enhanced/scrollytelling-pro/index.html` (gallery items, video play)
- `framer-guide/index.html` (grid items)

---

## Medium Priority (Days 3-4)

### Task 5: Consolidate CSS Variables
- [x] **Status:** ✅ Completed (Jan 19, 2026)
- **Due:** Jan 19, 2026
- **Effort:** ~2 hours
- **Impact:** Maintainability

**Current problem:** 5 different color systems across files

**Solution:** Create consistent `:root` variables

**Proposed unified tokens:**
```css
:root {
    /* Primary palette */
    --color-primary: #6366f1;
    --color-primary-dark: #4f46e5;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;

    /* Backgrounds */
    --bg-dark: #0f172a;
    --bg-darker: #0a0a1a;
    --bg-card: rgba(255,255,255,0.05);

    /* Text */
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);
    --text-dark: #1e293b;
}
```

**Files to update:** All 21 HTML files

---

### Task 6: Add Meta Descriptions
- [x] **Status:** ✅ Completed (Jan 16, 2026)
- **Due:** Jan 19, 2026
- **Effort:** ~45 minutes
- **Impact:** SEO

**Add to each file's `<head>`:**

| File | Description |
|------|-------------|
| `dashboard/index.html` | "Explore 7 interactive documentation formats for engaging presentations" |
| `offerte/lunolabs-offerte-v2.html` | "LunoLabs Technisches Jugendförderprogramm - Infrastruktur & Kostenübersicht" |
| `enhanced/scrollytelling-pro/index.html` | "TechEd Academy - Interactive scroll-based story experience" |

**Template:**
```html
<meta name="description" content="YOUR_DESCRIPTION_HERE">
```

---

### Task 7: Add ARIA Landmarks
- [x] **Status:** ✅ Completed (Jan 19, 2026)
- **Due:** Jan 20, 2026
- **Effort:** ~1 hour
- **Impact:** Accessibility (WCAG 1.3.1)

**Add to page structure:**
```html
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<footer role="contentinfo">
```

**Also add skip link at top of body:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<style>
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    padding: 8px;
    background: var(--color-primary);
    color: white;
    z-index: 9999;
}
.skip-link:focus {
    top: 0;
}
</style>
```

---

### Task 8: Add Focus Indicators
- [x] **Status:** ✅ Completed (Jan 16, 2026)
- **Due:** Jan 20, 2026
- **Effort:** ~30 minutes
- **Impact:** Accessibility (WCAG 2.4.7)

**Add to all files:**
```css
/* Visible focus for keyboard users */
:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

/* Remove default outline only when using mouse */
:focus:not(:focus-visible) {
    outline: none;
}
```

---

## Low Priority (Days 5-7)

### Task 9: Extract Common CSS
- [ ] **Status:** Not Started
- **Due:** Jan 21, 2026
- **Effort:** ~3 hours
- **Impact:** Maintainability, file size

**Create:** `shared/styles/base.css`

**Contents:**
- Reset styles
- CSS variables
- Common components (buttons, cards, grids)
- Utility classes

**Then in each HTML:**
```html
<link rel="stylesheet" href="../shared/styles/base.css">
```

---

### Task 10: Add Favicon
- [x] **Status:** ✅ Completed (Jan 19, 2026) - Used inline SVG favicon
- **Due:** Jan 21, 2026
- **Effort:** ~15 minutes
- **Impact:** Professional polish

**Steps:**
1. Create favicon.ico (32x32) with LunoLabs logo
2. Add to project root
3. Add to all HTML files:
```html
<link rel="icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

### Task 11: Add Open Graph Meta Tags
- [x] **Status:** ✅ Completed (Jan 19, 2026)
- **Due:** Jan 22, 2026
- **Effort:** ~1 hour
- **Impact:** Social sharing

**Template for each file:**
```html
<meta property="og:title" content="PAGE_TITLE">
<meta property="og:description" content="PAGE_DESCRIPTION">
<meta property="og:image" content="https://lunolabs.ch/og-image.png">
<meta property="og:url" content="PAGE_URL">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

---

### Task 12: Add Performance Hints
- [x] **Status:** ✅ Completed (Jan 19, 2026)
- **Due:** Jan 22, 2026
- **Effort:** ~30 minutes
- **Impact:** Page load speed

**Add preconnect hints to `<head>`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com">
```

**Add `srcset` for responsive images:**
```html
<img src="image-800.jpg"
     srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Description">
```

---

## Daily Schedule

| Day | Date | Tasks | Focus |
|-----|------|-------|-------|
| **Day 1** | Jan 16 | Task 1, Task 2 | Accessibility basics |
| **Day 2** | Jan 17 | Task 3, Task 4 | JS & keyboard access |
| **Day 3** | Jan 18 | Task 5 | CSS consolidation |
| **Day 4** | Jan 19 | Task 6, Task 7 | Meta & ARIA |
| **Day 5** | Jan 20 | Task 8, Task 9 | Focus & CSS extraction |
| **Day 6** | Jan 21 | Task 10, Task 11 | Polish & social |
| **Day 7** | Jan 22 | Task 12, Buffer | Performance & review |

---

## Notes

- All times are estimates - adjust as needed
- Mark tasks `[x]` when complete
- If blocked, note the issue under the task
- Lower priority tasks can be moved to next sprint if needed

---

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Open Graph Protocol](https://ogp.me/)

---

*Last updated: 2026-01-16*
