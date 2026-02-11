<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-02-11
updated:        2026-02-11
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [CLAUDE.md, TO-DOS.md, docs/ROADMAP.md]
description:    Project README for Luno-Future-Docs repository
==============================================================================
-->

# Luno-Future-Docs

**Interactive Documentation Showcase for LunoLabs**

A collection of 12+ interactive documentation formats — from scroll-driven narratives to 3D WebGL experiences — built with pure HTML, CSS, and JavaScript. No build tools required.

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Scientia07/Luno-Future-Docs.git
cd Luno-Future-Docs

# Serve locally (pick one)
python3 -m http.server 8080
# or
npx serve .

# Open the dashboard
open http://localhost:8080/dashboard/
```

> **No dependencies.** Every demo is a self-contained HTML file that works offline.

---

## Demos

| Format | Directory | Description | Skill Level |
|--------|-----------|-------------|-------------|
| **Dashboard** | `/dashboard/` | Central hub with Three.js WebGL background | Entry point |
| **Reveal.js** | `/reveal-js/` | Classic slide presentations with transitions | Medium |
| **Slidev** | `/slidev/` | Developer-friendly Markdown presentations | Medium |
| **Motion Canvas** | `/motion-canvas/` | Programmatic animation engine | High |
| **Gamma Style** | `/gamma-guide/` | Card-based document design | Easy |
| **Framer Style** | `/framer-guide/` | High-end parallax & micro-interactions | Medium |
| **Lottie + HTML** | `/lottie-html/` | Vector animations from After Effects | Medium |
| **Scrollytelling** | `/scrollytelling/` | Scroll-driven narrative experiences | High |
| **ECharts** | `/echarts/` | Interactive data visualization (7 chart types) | Medium |
| **Impress.js** | `/impress-js/` | 3D spatial presentations (Prezi-like) | Medium |
| **GSAP + Lenis** | `/enhanced/gsap-scrolltrigger/` | Premium scroll animations | High |
| **Three.js** | `/threejs/` | 3D WebGL scenes with particles & orbit controls | High |
| **Rive** | `/rive/` | State-machine driven interactive animations | Medium |

### Bonus

| Page | Directory | Description |
|------|-----------|-------------|
| **Design Dashboard** | `/design-dashboard/` | Live CSS variable editor with theme presets |
| **Animation Lab** | `/animation-lab/` | Remotion (React), Manim (Python), Three.js testing |
| **Offerte** | `/offerte/` | Professional German offer documents (5 formats) |
| **Enhanced Versions** | `/enhanced/` | Optimized variants with fixed animations |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Core** | HTML5, CSS3, JavaScript (ES6+) |
| **3D / WebGL** | Three.js |
| **Charts** | ECharts, Chart.js |
| **Animations** | Lottie Player, GSAP, Rive |
| **Presentations** | Reveal.js, Impress.js |
| **Scroll** | Lenis smooth scroll, IntersectionObserver |
| **Styling** | CSS custom properties, dark theme system |
| **Animation Lab** | Remotion (React), Manim (Python) |

No build tools. No bundlers. Everything loads from CDN or is self-contained.

---

## Project Structure

```
Luno-Future-Docs/
├── dashboard/              # Main hub (start here)
├── animation-lab/          # Framework testing lab
│   ├── remotion/           #   React video compositions
│   ├── manim/              #   Python math animations
│   └── threejs/            #   WebGL 3D demos
├── design-dashboard/       # Live CSS editor
├── docs/                   # Documentation
│   ├── prd/                #   Product requirements
│   ├── research/           #   Technology research
│   └── templates/          #   Document templates
├── echarts/                # Data visualization demo
├── enhanced/               # Optimized demo versions
│   ├── scrollytelling-pro/ #   Enhanced scroll narrative
│   ├── gsap-scrolltrigger/ #   GSAP + Lenis scroll
│   ├── framer-offline/     #   Offline Framer style
│   ├── gamma-interactive/  #   Interactive Gamma cards
│   └── lottie-fixed/       #   Fixed Lottie animations
├── framer-guide/           # Framer design style
├── gamma-guide/            # Gamma.app card style
├── impress-js/             # 3D spatial presentations
├── lottie-html/            # Lottie vector animations
├── motion-canvas/          # Programmatic animations
├── offerte/                # German professional offers
├── reveal-js/              # Slide presentations
├── rive/                   # State-machine animations
├── scrollytelling/         # Scroll narratives
├── shared/                 # Shared assets
│   └── styles/base.css     #   Common CSS foundation
├── slidev/                 # Markdown presentations
├── threejs/                # 3D WebGL experiences
├── CLAUDE.md               # AI agent instructions
├── TO-DOS.md               # Task tracking
└── .gitignore
```

---

## Design System

The project uses a unified CSS custom properties system defined in `shared/styles/base.css`:

```css
:root {
    --color-primary: #6366f1;
    --color-primary-dark: #4f46e5;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --bg-darker: #0a0a1a;
    --bg-dark: #0f172a;
    --text-primary: #ffffff;
    --text-muted: rgba(255, 255, 255, 0.75);
}
```

All demos inherit these tokens. Individual pages can override them for unique color schemes (e.g., the dashboard uses a blue/white palette).

---

## Accessibility

Built to WCAG 2.1 AA standards:

- Alt text on all images
- Color contrast ratio 7.5:1+ for body text
- Keyboard navigation with visible focus indicators
- Skip navigation links
- ARIA landmarks and semantic HTML
- Screen-reader-only utility class (`.sr-only`)

---

## Version History

| Version | Date | Highlights |
|---------|------|-----------|
| **v1.1.0** | Feb 2026 | Quality sprint complete: accessibility, shared CSS, JS error handling, SEO |
| v1.0.2 | Jan 2026 | Enhanced versions with fixed animations |
| v1.0.1 | Jan 2026 | LunoLabs Offerte v2 |
| v1.0.0 | Jan 2026 | Initial release with 7 formats |

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for upcoming milestones.

---

## Roadmap

```
Phase 1: Foundation     [████████████████████] 100%
Phase 2: Quality        [████████████████████] 100%
Phase 3: Performance    [░░░░░░░░░░░░░░░░░░░░]   0%  ← Next
Phase 4: Enhancement    [░░░░░░░░░░░░░░░░░░░░]   0%
```

**Next up (v1.2.0):** Image optimization, lazy loading, inline CSS deduplication, caching strategies.

---

## Contributing

1. Check [`TO-DOS.md`](TO-DOS.md) for current tasks
2. Follow the file standards in [`CLAUDE.md`](CLAUDE.md) (metadata headers, versioning)
3. Every HTML file should include `<link rel="stylesheet" href="path/to/shared/styles/base.css">`
4. Test accessibility with keyboard navigation before submitting

---

## License

This project is part of the LunoLabs ecosystem.

---

*Built with curiosity and zero build tools.*
