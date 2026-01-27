<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [../INDEX.md]
description:    Overview of framework documentation
==============================================================================
-->

# Framework Documentation

> **Total Frameworks:** 7 active, 3 planned
> **Location:** `docs/frameworks/`

---

## Structure

Each framework has its own folder containing:

```
[framework-name]/
├── prd-[framework-name].md     # Product Requirements Document
└── integration-plan.md          # Integration/Implementation guide
```

---

## Active Frameworks

| Framework | Category | Demo |
|-----------|----------|------|
| [reveal-js](reveal-js/) | Slide Presentations | [/reveal-js/](/reveal-js/) |
| [slidev](slidev/) | Developer Slides | [/slidev/](/slidev/) |
| [motion-canvas](motion-canvas/) | Animation Engine | [/motion-canvas/](/motion-canvas/) |
| [gamma](gamma/) | Card-based Layout | [/gamma-guide/](/gamma-guide/) |
| [framer](framer/) | Premium Design | [/framer-guide/](/framer-guide/) |
| [lottie](lottie/) | Vector Animation | [/lottie-html/](/lottie-html/) |
| [scrollytelling](scrollytelling/) | Scroll Narrative | [/scrollytelling/](/scrollytelling/) |

---

## Planned Frameworks

| Framework | Status | Research |
|-----------|--------|----------|
| [impress-js](impress-js/) | Draft | [View](../research/active/impress-js-research.md) |
| [gsap-scrolltrigger](gsap-scrolltrigger/) | Draft | [View](../research/active/gsap-scrolltrigger-research.md) |
| [rive](rive/) | Draft | [View](../research/active/rive-research.md) |

---

## Adding a New Framework

1. Create folder: `docs/frameworks/[name]/`
2. Copy templates from `_template/`
3. Complete PRD following template
4. Complete integration plan
5. Update [INDEX.md](../INDEX.md)

See [Adding New Framework Guide](../guides/adding-new-framework.md) for details.

---

*See [INDEX.md](../INDEX.md) for complete documentation index*
