<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       lenis-research.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [gsap-scrolltrigger-research.md, ../../INDEX.md]
description:    Research evaluation for Lenis smooth scroll library
==============================================================================
-->

# Research: Lenis

> **Research Type:** Evaluation
> **Status:** Active
> **Started:** 2026-01-27
> **Recommendation:** Proceed (Integrate with GSAP demo)

---

## 1. Research Objective

### 1.1 Questions to Answer

1. **Primary:** Does Lenis improve the scroll experience beyond native CSS `scroll-behavior: smooth`?
2. **Secondary:** How well does it integrate with GSAP ScrollTrigger?
3. **Tertiary:** What's the performance impact and bundle size?

### 1.2 Success Criteria

- [x] Noticeably smoother scroll than native
- [x] Works with GSAP ScrollTrigger
- [x] Lightweight (<20KB)
- [x] Easy to implement
- [x] No accessibility issues

---

## 2. Background

### 2.1 Context

Modern premium websites use smooth scroll libraries to create a polished, app-like feel. The current Scrollytelling demo uses native scroll which, while functional, lacks the buttery smoothness users now expect from high-end web experiences.

### 2.2 Why Lenis?

- **Modern & lightweight** - Built for current web standards
- **8,000+ GitHub stars** - Growing rapidly
- **GSAP compatible** - Official integration guide
- **Used by top agencies** - Darkroom Engineering, Studio Freight
- **Accessibility-conscious** - Respects `prefers-reduced-motion`

### 2.3 Related Work

| Resource | Type | Key Takeaway |
|----------|------|--------------|
| [Lenis GitHub](https://github.com/darkroomengineering/lenis) | Repository | 8k+ stars, active development |
| [Lenis Docs](https://lenis.darkroom.engineering/) | Documentation | Clean API, good examples |
| [GSAP + Lenis Guide](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Integration | Official recommended pairing |

---

## 3. Findings

### 3.1 Overview

Lenis is a lightweight smooth scroll library that creates an inertia-based scrolling experience. Unlike CSS `scroll-behavior: smooth`, Lenis provides:
- Momentum/inertia scrolling
- Customizable easing and duration
- Touch device support
- Scroll hijacking with preservation of native feel

### 3.2 Technical Analysis

#### Dependencies

| Dependency | Size | Required | Notes |
|------------|------|----------|-------|
| lenis.min.js | ~15KB | Yes | Core library |
| No dependencies | - | - | Standalone |

#### Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best performance |
| Firefox | ✅ Full | Good performance |
| Safari | ✅ Full | Good performance |
| Edge | ✅ Full | Good performance |
| Mobile | ✅ Full | Touch-optimized |

### 3.3 Lenis vs Alternatives

| Library | Size | Stars | GSAP Integration | Notes |
|---------|------|-------|------------------|-------|
| **Lenis** | 15KB | 8k | ✅ Official | Modern, actively maintained |
| Locomotive Scroll | 30KB | 8k | ⚠️ Manual | More features, heavier |
| SmoothScroll | 10KB | 5k | ⚠️ Manual | Older, less maintained |
| Native CSS | 0KB | - | ✅ Works | Limited control |

**Decision:** Lenis is the best choice because:
- Smallest bundle with best features
- Official GSAP integration
- Most actively maintained
- Modern API

### 3.4 Pros and Cons

| Pros | Cons |
|------|------|
| ✅ Very lightweight (15KB) | ❌ Scroll hijacking can feel unnatural to some |
| ✅ Smooth inertia scrolling | ❌ Adds complexity |
| ✅ Official GSAP integration | ❌ Requires RAF loop |
| ✅ Touch-friendly | |
| ✅ Respects reduced motion | |
| ✅ Easy API | |

### 3.5 Code Example

```html
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>

<script>
// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
});

// Animation frame loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Respect reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    lenis.destroy();
}
</script>
```

### 3.6 GSAP Integration

```javascript
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

// Sync Lenis with GSAP's ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

---

## 4. Risk Assessment

### 4.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Users dislike smooth scroll | Low | Low | Respect prefers-reduced-motion |
| Performance on low-end devices | Low | Low | Lightweight library |
| Conflicts with native anchor links | Low | Medium | Use Lenis scroll-to methods |

### 4.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Adds complexity | Low | Low | Simple API, good docs |

---

## 5. Recommendation

### 5.1 Summary

Lenis is a **low-risk, high-reward addition** that significantly enhances scroll feel. It's especially valuable when paired with GSAP ScrollTrigger for the planned advanced scroll demo.

### 5.2 Decision

| Decision | Rationale |
|----------|-----------|
| **Proceed** | Lightweight, enhances UX, pairs with GSAP |

### 5.3 Implementation Strategy

**Option A: Integrate with GSAP demo**
- Add Lenis to the planned `/enhanced/gsap-scrolltrigger/` demo
- Showcases both libraries working together
- Single maintenance point

**Option B: Standalone demo**
- Create `/lenis/` demo showing before/after
- More educational but additional maintenance

**Recommendation:** **Option A** - integrate with GSAP ScrollTrigger demo

### 5.4 Timeline

| Phase | Target |
|-------|--------|
| Include in GSAP demo PRD | Q1 2026 |
| Implementation | Q1 2026 |

---

## 6. References

- [Lenis GitHub](https://github.com/darkroomengineering/lenis)
- [Lenis Documentation](https://lenis.darkroom.engineering/)
- [GSAP ScrollTrigger + Lenis](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Darkroom Engineering](https://darkroom.engineering/)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial research |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
