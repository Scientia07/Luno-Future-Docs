<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       anime-js-research.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★☆☆
author:         Joel + Claude
related_docs:   [rive-research.md, ../../INDEX.md]
description:    Research evaluation for Anime.js animation library
==============================================================================
-->

# Research: Anime.js

> **Research Type:** Evaluation
> **Status:** Active
> **Started:** 2026-01-27
> **Recommendation:** Hold (Covered by existing frameworks)

---

## 1. Research Objective

### 1.1 Questions to Answer

1. **Primary:** Does Anime.js offer capabilities not covered by Motion Canvas, Lottie, or GSAP?
2. **Secondary:** What's unique about its animation approach?
3. **Tertiary:** Is the lightweight size worth adding another animation library?

### 1.2 Success Criteria

- [ ] Unique capability not in other frameworks
- [x] Works without build tools
- [x] Active maintenance
- [x] Good documentation
- [ ] Clear differentiation from GSAP

---

## 2. Background

### 2.1 Context

We already have or are planning multiple animation solutions:
- **Motion Canvas** - Programmatic canvas animations
- **Lottie** - After Effects vector animations
- **GSAP** (planned) - Industry-standard animation library
- **Rive** (planned) - Interactive state-based animations
- **CSS animations** - Used throughout all frameworks

### 2.2 Why Consider Anime.js?

- **50,000+ GitHub stars** - Very popular
- **Lightweight** - ~17KB minified
- **Simple API** - Easy to learn
- **SVG morphing** - Path animation support

### 2.3 Related Work

| Resource | Type | Key Takeaway |
|----------|------|--------------|
| [Anime.js Official](https://animejs.com/) | Website | Beautiful documentation |
| [GitHub](https://github.com/juliangarnier/anime) | Repository | 50k+ stars |
| [Documentation](https://animejs.com/documentation/) | Docs | Clean examples |

---

## 3. Findings

### 3.1 Overview

Anime.js is a lightweight JavaScript animation library with a simple API. It works with CSS properties, SVG, DOM attributes, and JavaScript Objects.

### 3.2 Technical Analysis

#### Dependencies

| Dependency | Size | Required | Notes |
|------------|------|----------|-------|
| anime.min.js | ~17KB | Yes | Core library |
| No dependencies | - | - | Standalone |

#### Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| CSS animations | ✅ | Transform, opacity, colors |
| SVG animations | ✅ | Path morphing, line drawing |
| Timeline | ✅ | Sequence animations |
| Staggering | ✅ | Delayed cascading effects |
| Easing | ✅ | 30+ built-in functions |
| Keyframes | ✅ | Multi-step animations |

### 3.3 Anime.js vs Existing/Planned Libraries

| Feature | Anime.js | GSAP | Motion Canvas | Lottie |
|---------|----------|------|---------------|--------|
| Bundle size | 17KB | 60KB+ | 15KB | 300KB |
| DOM animation | ✅ | ✅ | ❌ | ❌ |
| SVG morphing | ✅ | ✅ (plugin) | ❌ | ✅ |
| Canvas | ❌ | ❌ | ✅ | ❌ |
| Timeline | ✅ | ✅ (better) | ✅ | ❌ |
| Scroll trigger | ❌ | ✅ (plugin) | ❌ | ❌ |
| Learning curve | Easy | Medium | Medium | Easy |
| Ecosystem | Limited | Huge | Small | Large |

### 3.4 Overlap Analysis

| Anime.js Feature | Already Covered By |
|------------------|-------------------|
| DOM/CSS animation | GSAP (more powerful) |
| SVG animation | GSAP MorphSVG, Lottie |
| Timeline control | GSAP, Motion Canvas |
| Easing functions | All frameworks |
| Staggering | GSAP (better), CSS |

### 3.5 Pros and Cons

| Pros | Cons |
|------|------|
| ✅ Very lightweight (17KB) | ❌ GSAP does everything better |
| ✅ Simple, clean API | ❌ No scroll integration |
| ✅ Good documentation | ❌ Smaller ecosystem |
| ✅ 50k+ stars | ❌ Overlaps with planned GSAP |
| | ❌ No unique capability |

---

## 4. Risk Assessment

### 4.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Redundancy with GSAP | High | Medium | Don't implement |

### 4.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Portfolio bloat | Medium | Low | Focus on unique frameworks |
| Maintenance burden | Low | Low | Skip implementation |

---

## 5. Recommendation

### 5.1 Summary

Anime.js is a **solid library** but offers **no unique capability** that isn't better served by GSAP (which we're already planning). The 17KB size advantage is negligible when GSAP's ecosystem and features are considered.

### 5.2 Decision

| Decision | Rationale |
|----------|-----------|
| **Hold** (Covered by GSAP) | No unique value, GSAP is superior |

### 5.3 Alternative Actions

Instead of Anime.js:
1. **Proceed with GSAP** - More powerful, better ecosystem
2. **Use for internal reference** - Good learning resource for animation concepts

### 5.4 Revisit Conditions

Reconsider if:
- Need ultra-lightweight animation (17KB vs 60KB matters)
- GSAP licensing changes (currently free)
- Specific SVG morphing use case arises

---

## 6. References

- [Anime.js Official](https://animejs.com/)
- [GitHub Repository](https://github.com/juliangarnier/anime)
- [Documentation](https://animejs.com/documentation/)
- [CodePen Examples](https://codepen.io/collection/XLebem)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial research |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
