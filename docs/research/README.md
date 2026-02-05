<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-26
updated:        2026-01-28
version:        2.1.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [../INDEX.md]
description:    Overview of research documentation with category organization
==============================================================================
-->

# Research Documentation

> **Purpose:** Store research findings for framework evaluation and technology decisions
> **Location:** `docs/research/`
> **Last Updated:** 2026-01-27

---

## Folder Structure

```
research/
├── active/                    # Ongoing research
│   ├── presentation/          # Slide/presentation frameworks
│   ├── scroll-animation/      # Scroll-based animation libraries
│   ├── animation/             # General animation libraries
│   ├── data-visualization/    # Charts and data viz
│   ├── 3d-webgl/              # 3D and WebGL frameworks
│   └── ui-design-systems/     # UI fundamentals, theme editors
├── completed/                 # Finished research with recommendations
└── archive/                   # Rejected or deprecated research
```

---

## Research Status Summary

### By Category

| Category | Count | Proceed | Hold | Reject |
|----------|-------|---------|------|--------|
| Presentation | 2 | 1 | 1 | 0 |
| Scroll Animation | 2 | 2 | 0 | 0 |
| Animation | 2 | 1 | 1 | 0 |
| Data Visualization | 1 | 1 | 0 | 0 |
| 3D/WebGL | 1 | 1 | 0 | 0 |
| UI Design Systems | 1 | 1 | 0 | 0 |
| **Total** | **9** | **7** | **2** | **0** |

---

## Active Research

### Presentation Frameworks

| Topic | Status | Recommendation | Link |
|-------|--------|----------------|------|
| Impress.js | ✅ Complete | **Proceed** | [View](active/presentation/impress-js-research.md) |
| WebSlides | ✅ Complete | Hold | [View](active/presentation/webslides-research.md) |

### Scroll Animation

| Topic | Status | Recommendation | Link |
|-------|--------|----------------|------|
| GSAP ScrollTrigger | ✅ Complete | **Proceed** | [View](active/scroll-animation/gsap-scrolltrigger-research.md) |
| Lenis | ✅ Complete | **Proceed** (with GSAP) | [View](active/scroll-animation/lenis-research.md) |

### Animation Libraries

| Topic | Status | Recommendation | Link |
|-------|--------|----------------|------|
| Rive | ✅ Complete | **Proceed** | [View](active/animation/rive-research.md) |
| Anime.js | ✅ Complete | Hold | [View](active/animation/anime-js-research.md) |

### Data Visualization

| Topic | Status | Recommendation | Link |
|-------|--------|----------------|------|
| ECharts | ✅ Complete | **Proceed** (High Priority) | [View](active/data-visualization/echarts-research.md) |

### 3D/WebGL

| Topic | Status | Recommendation | Link |
|-------|--------|----------------|------|
| Three.js | ✅ Complete | **Proceed** | [View](active/3d-webgl/threejs-research.md) |

### UI Design Systems

| Topic | Status | Recommendation | Link |
|-------|--------|----------------|------|
| UI Fundamentals & Theme Editors | ✅ Complete | **Proceed** | [View](active/ui-design-systems/ui-fundamentals-research.md) |

---

## Practical Guides

| Guide | Purpose | Link |
|-------|---------|------|
| **Framework Customization** | How to modify colors, load 3D models, swap assets | [View](active/framework-customization-guide.md) |

> These guides provide step-by-step instructions for common customization tasks across all frameworks.

---

## Priority Matrix

### High Priority (Proceed Now)

| Framework | Gap Filled | Effort | Target |
|-----------|------------|--------|--------|
| **Impress.js** | 3D spatial presentations | Medium | Q1 2026 |
| **GSAP + Lenis** | Advanced scroll animation | Medium | Q1 2026 |
| **ECharts** | Data visualization | Medium | Q1 2026 |
| **Design Dashboard** | Interactive theme editing | Medium | Q1 2026 |

### Medium Priority (Proceed Later)

| Framework | Gap Filled | Effort | Target |
|-----------|------------|--------|--------|
| **Three.js** | 3D WebGL experiences | High | Q2 2026 |
| **Rive** | Interactive animations | Medium | Q2 2026 |

### Low Priority (Hold)

| Framework | Reason | Revisit Condition |
|-----------|--------|-------------------|
| WebSlides | Overlaps Reveal.js/Slidev | Major update or maintainer change |
| Anime.js | GSAP covers all use cases | Specific lightweight need |

---

## Completed Research

*No research moved to completed yet*

---

## Archived Research

*No research archived yet*

---

## Creating New Research

1. Choose appropriate category folder in `active/`
2. Copy template from `../templates/research-template.md`
3. Save as `[topic]-research.md`
4. Update this README
5. Update [INDEX.md](../INDEX.md)

---

## Research Workflow

```
active/[category]/ → (complete) → completed/
                           ↓
                     (reject) → archive/
```

### Moving Research

**To Completed:**
- Research questions answered
- Clear recommendation made
- PRD created (if Proceed)

**To Archive:**
- Technology rejected
- Research superseded
- No longer relevant

---

*See [INDEX.md](../INDEX.md) for complete documentation index*
