<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [index.html, docs/frameworks/impress-js/integration-plan.md]
description:    Quick reference guide for the Impress.js 3D presentation demo
==============================================================================
-->

# Impress.js Demo - TechEd Academy

> 3D spatial presentation showcasing future-ready education programs

---

## Quick Start

1. Open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge)
2. Use arrow keys or spacebar to navigate
3. Press `ESC` to view the overview
4. Press `H` to show navigation hints

---

## Navigation Controls

| Key | Action |
|-----|--------|
| `→` / `Space` / `Page Down` | Next step |
| `←` / `Page Up` | Previous step |
| `ESC` | Go to overview |
| `H` | Show navigation hints |
| `Home` | First step |
| `End` | Last step |

---

## Presentation Structure

| Step | Title | 3D Position |
|------|-------|-------------|
| 1 | Title | Center, Scale 2 |
| 2 | Problem Statement | Right, Z-rotation 5° |
| 3 | Solution Overview | Down-right, Scale 0.8 |
| 4 | Web Development | Z-depth -500, X-rotation 15° |
| 5 | AI & Machine Learning | Z-depth -1000, XY-rotation |
| 6 | Cybersecurity | Left, Y-rotation -10° |
| 7 | Call to Action | Left of title, Z-rotation -5° |
| 8 | Overview | Center, Scale 5 (bird's eye) |

---

## Technical Details

- **Framework:** Impress.js v2.0.0
- **CDN:** jsDelivr (with local fallback)
- **Browser Support:** Chrome 80+, Firefox 75+, Safari 14+, Edge 80+
- **Accessibility:** Skip link, ARIA landmarks, keyboard navigation, reduced motion support

---

## Customization

### Colors (CSS Variables)

```css
--color-primary: #6366f1;
--color-secondary: #ec4899;
--color-accent: #10b981;
--bg-dark: #0f172a;
--bg-darker: #0a0a1a;
```

### Step Configuration

```html
<div class="step"
     data-x="0"        /* X position */
     data-y="0"        /* Y position */
     data-z="0"        /* Z position (depth) */
     data-rotate-x="0" /* X-axis rotation */
     data-rotate-y="0" /* Y-axis rotation */
     data-rotate-z="0" /* Z-axis rotation (or just data-rotate) */
     data-scale="1">   /* Scale factor */
</div>
```

---

## Files

```
/impress-js/
├── index.html     # Main demo (this presentation)
└── README.md      # This file
```

---

## Related Documentation

- [Integration Plan](../docs/frameworks/impress-js/integration-plan.md)
- [PRD](../docs/frameworks/impress-js/prd-impress-js.md)
- [Research](../docs/research/active/presentation/impress-js-research.md)

---

## Resources

- [Impress.js Official](https://impress.js.org/)
- [GitHub Repository](https://github.com/impress/impress.js)
- [Documentation](https://github.com/impress/impress.js/blob/master/DOCUMENTATION.md)

---

*Part of the Luno-Future-Docs project | LunoLabs*
