<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       webslides-research.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★☆☆
author:         Joel + Claude
related_docs:   [impress-js-research.md, ../../INDEX.md]
description:    Research evaluation for WebSlides presentation framework
==============================================================================
-->

# Research: WebSlides

> **Research Type:** Evaluation
> **Status:** Active
> **Started:** 2026-01-27
> **Recommendation:** Hold (Low Priority)

---

## 1. Research Objective

### 1.1 Questions to Answer

1. **Primary:** Does WebSlides offer value beyond Reveal.js and Slidev?
2. **Secondary:** What's unique about its 120+ ready-to-use components?
3. **Tertiary:** Is the maintenance burden justified by the differentiation?

### 1.2 Success Criteria

- [x] Different from existing slide frameworks
- [x] Works without build tools
- [ ] Active maintenance (last update?)
- [x] Good documentation
- [ ] Clear unique value proposition

---

## 2. Background

### 2.1 Context

We already have two slide-based presentation frameworks:
- **Reveal.js** - Full-featured, plugin ecosystem
- **Slidev** - Developer-focused, terminal aesthetic

The question is whether WebSlides adds enough differentiation to justify a third slide framework.

### 2.2 Why Consider WebSlides?

- **120+ ready components** - Pre-built slide layouts
- **6,200 GitHub stars** - Established project
- **Clean design** - Focus on simplicity
- **No dependencies** - Pure HTML/CSS

### 2.3 Related Work

| Resource | Type | Key Takeaway |
|----------|------|--------------|
| [WebSlides Official](https://webslides.tv/) | Website | Beautiful demos |
| [GitHub](https://github.com/webslides/WebSlides) | Repository | 6.2k stars |
| [Components](https://webslides.tv/demos/components) | Examples | 120+ layouts |

---

## 3. Findings

### 3.1 Overview

WebSlides is a presentation framework focused on creating beautiful presentations quickly using pre-built CSS components. It emphasizes simplicity over configurability.

### 3.2 Technical Analysis

#### Dependencies

| Dependency | Size | Required | Notes |
|------------|------|----------|-------|
| webslides.js | ~30KB | Yes | Core library |
| webslides.css | ~50KB | Yes | Styles + components |
| SVG icons | ~10KB | Optional | Built-in icon set |

#### Last Activity

| Metric | Value | Concern Level |
|--------|-------|---------------|
| Last commit | 2023 | ⚠️ Medium |
| Open issues | 80+ | ⚠️ Medium |
| Last release | v1.5.0 (2019) | ⚠️ High |

### 3.3 WebSlides vs Existing Frameworks

| Feature | WebSlides | Reveal.js | Slidev |
|---------|-----------|-----------|--------|
| Pre-built layouts | ✅ 120+ | ❌ Few | ❌ Few |
| Plugin ecosystem | ❌ None | ✅ Rich | ✅ Good |
| Active maintenance | ⚠️ Stale | ✅ Active | ✅ Active |
| Customization | Limited | High | High |
| Markdown support | ❌ No | ✅ Yes | ✅ Native |
| Vertical slides | ❌ No | ✅ Yes | ✅ Yes |
| Code highlighting | ❌ No | ✅ Plugin | ✅ Native |

### 3.4 Pros and Cons

| Pros | Cons |
|------|------|
| ✅ 120+ pre-built components | ❌ Not actively maintained (2023) |
| ✅ Clean, simple design | ❌ No plugin ecosystem |
| ✅ Zero dependencies | ❌ Limited customization |
| ✅ Easy to start | ❌ No Markdown support |
| | ❌ Overlaps with existing frameworks |
| | ❌ No code highlighting |

### 3.5 Unique Value Assessment

| Unique Feature | Value | Already Covered? |
|----------------|-------|------------------|
| Pre-built layouts | Medium | Partially (Gamma has card layouts) |
| Simple API | Low | Reveal.js is also simple |
| Clean design | Low | All frameworks can achieve this |

---

## 4. Risk Assessment

### 4.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| No longer maintained | High | Medium | Fork if needed |
| Security vulnerabilities | Medium | Low | Review code |

### 4.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low differentiation | High | Medium | Focus on other frameworks |
| Maintenance burden | Medium | Low | Skip implementation |

---

## 5. Recommendation

### 5.1 Summary

WebSlides offers **insufficient differentiation** from existing frameworks. While the 120+ components are nice, the lack of active maintenance (last release 2019, last commit 2023) and missing features (no Markdown, no plugins) make it a weak addition.

### 5.2 Decision

| Decision | Rationale |
|----------|-----------|
| **Hold** (Low Priority) | Not enough differentiation, maintenance concerns |

### 5.3 Alternative Actions

Instead of WebSlides, consider:
1. **Create component library for Reveal.js** - Pre-built slides within existing framework
2. **Focus on unique frameworks** - ECharts, Three.js, Impress.js offer more differentiation

### 5.4 Revisit Conditions

Reconsider if:
- WebSlides receives major update/new maintainer
- Specific need for pre-built slide components arises
- Other high-priority frameworks are completed

---

## 6. References

- [WebSlides Official](https://webslides.tv/)
- [GitHub Repository](https://github.com/webslides/WebSlides)
- [Components Demo](https://webslides.tv/demos/components)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial research |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
