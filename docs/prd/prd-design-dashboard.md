<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-design-dashboard.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [../research/active/ui-design-systems/ui-fundamentals-research.md]
description:    PRD for Interactive Design Dashboard - a visual theme editor
==============================================================================
-->

# PRD: Interactive Design Dashboard

> **Version:** 1.0.0
> **Status:** Draft
> **Author:** Joel + Claude
> **Created:** 2026-01-27
> **Updated:** 2026-01-27
> **Inspired by:** [tweakcn.com](https://tweakcn.com) | [GitHub](https://github.com/jnsahaj/tweakcn)

---

## 1. Overview

### 1.1 Summary

The **Interactive Design Dashboard** is a visual theme editor that allows users to customize CSS design tokens (colors, typography, spacing) in real-time and export production-ready CSS. Built with pure HTML/CSS/JavaScript, it serves both as an educational tool for UI design principles and a practical utility for generating custom themes.

### 1.2 Problem Statement

1. **Learning gap:** Users want to understand UI design principles but lack hands-on tools
2. **Customization friction:** Manually editing CSS variables is tedious and error-prone
3. **Accessibility blind spots:** Designers unknowingly create inaccessible color combinations
4. **Showcasing need:** LunoLabs needs a tool to demonstrate design system capabilities

### 1.3 Goals

- [ ] Real-time visual editing of CSS custom properties
- [ ] Educational tooltips explaining design principles
- [ ] WCAG contrast checking built-in
- [ ] One-click CSS export for immediate use
- [ ] Theme presets as starting points

### 1.4 Non-Goals

- Backend/database (pure client-side)
- User accounts or cloud sync
- Component library generation beyond CSS variables
- Tailwind/SCSS/LESS export formats (v1)

---

## 2. Background

### 2.1 Context

The LunoLabs documentation project showcases various presentation formats. Adding an interactive design dashboard would:
- Differentiate from static documentation sites
- Provide practical value to developers
- Demonstrate technical capability
- Educate users about UI fundamentals

### 2.2 Current State

The project has:
- Established CSS custom properties (colors, typography)
- Consistent dark theme across pages
- No theme customization capability

### 2.3 Research

| Reference | Type | Key Takeaway |
|-----------|------|--------------|
| [tweakcn.com](https://tweakcn.com) | Tool | Real-time theme editing with component previews |
| [UI Fundamentals Research](../research/active/ui-design-systems/ui-fundamentals-research.md) | Internal | 7 pillars: Color, Typography, Hierarchy, Spacing, Composition, Balance, Motion |
| [shadcn/ui Theming](https://ui.shadcn.com/docs/theming) | Docs | CSS variable patterns for design systems |

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-01** | Color pickers for primary, secondary, accent colors with hex/rgb input | Must Have | Pending |
| **FR-02** | Semantic colors: success, warning, error, info state colors | Must Have | Pending |
| **FR-03** | Background/surface color controls | Must Have | Pending |
| **FR-04** | Font family dropdown (system fonts + Google Fonts) | Must Have | Pending |
| **FR-05** | Font size controls (base size, scale ratio) | Must Have | Pending |
| **FR-06** | Font weight controls for body and headings | Should Have | Pending |
| **FR-07** | Spacing controls with visual preview | Should Have | Pending |
| **FR-08** | Border radius slider with component preview | Should Have | Pending |
| **FR-09** | Theme presets: Dark, Light, Vibrant, Minimal | Must Have | Pending |
| **FR-10** | Live preview panel (buttons, cards, forms, typography) | Must Have | Pending |
| **FR-11** | Export CSS variables (copy to clipboard) | Must Have | Pending |
| **FR-12** | Download complete CSS file | Should Have | Pending |
| **FR-13** | Reset to defaults button | Must Have | Pending |
| **FR-14** | Educational tooltips on each control | Must Have | Pending |
| **FR-15** | WCAG contrast ratio display | Should Have | Pending |
| **FR-16** | localStorage persistence of custom themes | Should Have | Pending |

### 3.2 Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01 | Initial page load | < 2 seconds on 3G |
| NFR-02 | Color picker response | < 16ms (60fps) |
| NFR-03 | Live preview update | < 50ms |
| NFR-04 | Total bundle size | < 150KB |
| NFR-05 | Accessibility | WCAG 2.1 AA |
| NFR-06 | Browser support | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

### 3.3 User Stories

```
As a beginner designer
I want to adjust colors with visual pickers
So that I can experiment without knowing CSS syntax
```

```
As a developer
I want to export CSS variables
So that I can integrate the theme into my project immediately
```

```
As a learner
I want educational tooltips
So that I understand what each control affects and why
```

```
As a user exploring options
I want preset themes
So that I can start from a polished base rather than scratch
```

```
As a detail-oriented designer
I want live preview of components
So that I can see changes in real-time before committing
```

---

## 4. Technical Design

### 4.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Interactive Design Dashboard                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐        ┌─────────────────────────────────┐   │
│  │   Control Panel   │        │         Preview Area             │   │
│  │  (Editor Sidebar) │   →    │   (Live Component Previews)     │   │
│  │                   │  CSS   │                                  │   │
│  │  • Color Pickers  │  Vars  │  • Card Components              │   │
│  │  • Typography     │   →    │  • Button Variants              │   │
│  │  • Spacing        │        │  • Form Elements                │   │
│  │  • Border Radius  │        │  • Navigation                   │   │
│  │  • Shadows        │        │  • Tables                       │   │
│  └────────┬─────────┘        └─────────────────────────────────┘   │
│           │                                                          │
│           ▼                                                          │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                     State Layer                                │   │
│  │  ┌─────────────┐  ┌─────────────────┐  ┌────────────────┐    │   │
│  │  │ ThemeState  │←→│ CSS Variables   │←→│ localStorage   │    │   │
│  │  │ (JS Object) │  │ (document.root) │  │ (Persistence)  │    │   │
│  │  └─────────────┘  └─────────────────┘  └────────────────┘    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                     Export Panel                               │   │
│  │  [Copy CSS] [Download File] [Share URL] [Reset to Default]    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

**Data Flow:**
1. User interacts with control → JS updates `ThemeState` object
2. `ThemeState` syncs to CSS Custom Properties via `document.documentElement.style.setProperty()`
3. CSS Custom Properties cascade to all preview components instantly
4. `ThemeState` persists to `localStorage` on change (debounced)
5. On page load, restore from `localStorage` or use defaults

### 4.2 Components

| Module | Responsibility |
|--------|----------------|
| `theme-state.js` | Central state management, localStorage sync |
| `color-editor.js` | Color pickers, palette generation, contrast checking |
| `typography-editor.js` | Font family, size, weight controls |
| `spacing-editor.js` | Spacing scale visualization |
| `preview-area.js` | Component preview rendering |
| `export-manager.js` | CSS generation, copy, download |
| `color-utils.js` | HSL/RGB/Hex conversion algorithms |
| `presets.js` | Predefined theme configurations |

### 4.3 Data Model

```javascript
const defaultTheme = {
  name: 'LunoLabs Dark',
  mode: 'dark',

  colors: {
    primary: { base: '#6366f1', /* 50-900 scale */ },
    secondary: { base: '#ec4899' },
    accent: { base: '#10b981' },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
      info: '#3b82f6'
    }
  },

  surfaces: {
    background: '#0a0a1a',
    foreground: '#ffffff',
    card: 'rgba(255, 255, 255, 0.05)'
  },

  typography: {
    fontSans: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    baseSize: 16,
    scaleRatio: 1.25
  },

  spacing: { unit: 4 },
  radius: { default: '0.5rem' },
  shadows: { /* sm, md, lg */ }
};
```

### 4.4 Key Algorithms

**Color Conversion (HSL ↔ Hex):**
```javascript
function hexToHSL(hex) {
  // Convert hex to RGB, then to HSL
  // Returns { h: 0-360, s: 0-100, l: 0-100 }
}

function hslToHex(h, s, l) {
  // Convert HSL values to hex
  // Returns '#rrggbb'
}

function generateColorScale(baseColor) {
  // Generate 50-900 shades from base
  // Returns { 50: '#...', 100: '#...', ... 900: '#...' }
}
```

**WCAG Contrast Checking:**
```javascript
function getContrastRatio(color1, color2) {
  // Calculate luminance ratio
  // Returns number 1-21
}

function checkWCAGCompliance(ratio, size = 'normal') {
  // AA: 4.5:1 normal, 3:1 large
  // AAA: 7:1 normal, 4.5:1 large
  // Returns { aa: boolean, aaa: boolean }
}
```

### 4.5 File Structure

```
/design-dashboard/
├── index.html                     # Main editor page
├── styles/
│   ├── base.css                   # Reset, CSS variables, base styles
│   ├── editor.css                 # Editor panel styles
│   └── preview.css                # Preview component styles
├── js/
│   ├── main.js                    # Entry point, initialization
│   ├── theme-state.js             # Central state management
│   ├── editors/
│   │   ├── color-editor.js
│   │   ├── typography-editor.js
│   │   └── spacing-editor.js
│   ├── utils/
│   │   └── color-utils.js
│   └── export-manager.js
└── presets/
    └── themes.json                # Built-in presets
```

---

## 5. Implementation Plan

### 5.1 Phases

| Phase | Description | Duration | Dependencies |
|-------|-------------|----------|--------------|
| **1** | Core color editor with live preview | 3-4 days | None |
| **2** | Typography and spacing controls | 2-3 days | Phase 1 |
| **3** | Presets and export functionality | 2-3 days | Phase 2 |
| **4** | Educational features and polish | 2-3 days | Phase 3 |

**Total:** 9-13 days

### 5.2 Phase 1 Tasks (MVP)

| Task | Priority |
|------|----------|
| Create `/design-dashboard/` folder structure | High |
| Add `index.html` with metadata header | High |
| Implement CSS custom properties integration | High |
| Build color picker component | High |
| Create split-pane layout (editor + preview) | High |
| Live preview with sample components | Medium |
| Real-time CSS variable update via JS | High |

### 5.3 Milestones

| Milestone | Target Date | Deliverable |
|-----------|-------------|-------------|
| M1: MVP Color Editor | 2026-02-03 | Live color preview working |
| M2: Typography Complete | 2026-02-07 | Full typography controls |
| M3: Export Ready | 2026-02-12 | CSS export, presets working |
| M4: Production Release | 2026-02-17 | WCAG compliant, documented |

### 5.4 Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Color picker browser inconsistency | Medium | Use native input with polyfill |
| CSS variable cascade conflicts | High | Scope preview to isolated container |
| Performance lag on rapid changes | Medium | Debounce updates (100-200ms) |
| Users creating inaccessible themes | Medium | Real-time contrast warnings |

---

## 6. Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Time to first export | < 3 minutes | User testing |
| Export completion rate | > 80% of sessions | Analytics |
| Tooltip engagement | > 50% hover at least one | Click tracking |
| Preset usage | > 60% try 2+ presets | Analytics |
| Accessibility score | 100% Lighthouse | Automated audit |
| Performance score | > 90 Lighthouse | Automated audit |

---

## 7. Open Questions

- [ ] Should we support Tailwind v4 export format?
- [ ] Include color blindness simulation mode?
- [ ] Add shareable URL with encoded theme?
- [ ] Support custom font upload?

---

## 8. Appendix

### 8.1 CSS Variables to Expose

```css
:root {
    /* Colors - Phase 1 */
    --color-primary: #6366f1;
    --color-primary-dark: #4f46e5;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;

    /* Backgrounds */
    --bg-darker: #0a0a1a;
    --bg-dark: #0f172a;
    --bg-card: rgba(255,255,255,0.05);

    /* Text */
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);

    /* Typography - Phase 2 */
    --font-family: 'Segoe UI', system-ui, sans-serif;
    --font-size-base: 16px;
    --line-height: 1.6;

    /* Spacing - Phase 2 */
    --border-radius: 20px;
    --border-radius-sm: 12px;
}
```

### 8.2 Theme Presets

| Preset | Primary | Secondary | Background | Mode |
|--------|---------|-----------|------------|------|
| LunoLabs Dark | #6366f1 | #ec4899 | #0a0a1a | Dark |
| LunoLabs Light | #4f46e5 | #db2777 | #ffffff | Light |
| Ocean | #0ea5e9 | #06b6d4 | #0c1929 | Dark |
| Sunset | #f97316 | #ef4444 | #1c1917 | Dark |
| Forest | #22c55e | #84cc16 | #052e16 | Dark |

### 8.3 Related Documents

- [UI Fundamentals Research](../research/active/ui-design-systems/ui-fundamentals-research.md)
- [tweakcn GitHub](https://github.com/jnsahaj/tweakcn)
- [shadcn/ui Theming](https://ui.shadcn.com/docs/theming)

### 8.4 Glossary

| Term | Definition |
|------|------------|
| CSS Custom Property | A variable defined with `--name` syntax, set via `:root` |
| HSL | Hue-Saturation-Lightness color model |
| WCAG | Web Content Accessibility Guidelines |
| Design Token | A named value (color, spacing, etc.) in a design system |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial draft |

---

*See [ROADMAP.md](../ROADMAP.md) for project timeline*
