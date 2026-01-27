<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       rive-research.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★☆☆
author:         Joel + Claude
related_docs:   [../../frameworks/rive/prd-rive.md, ../../INDEX.md]
description:    Research evaluation for Rive animation platform
==============================================================================
-->

# Research: Rive

> **Research Type:** Evaluation
> **Status:** Active
> **Started:** 2026-01-26
> **Recommendation:** TBD (Likely Proceed)

---

## 1. Research Objective

### 1.1 Questions to Answer

1. **Primary:** Does Rive offer significant advantages over Lottie for interactive animations?
2. **Secondary:** What's the workflow for creating/obtaining Rive animations?
3. **Tertiary:** Is the runtime size acceptable for our use case?

### 1.2 Success Criteria

- [ ] Provides interactivity beyond Lottie's capabilities
- [ ] Runtime is reasonable (<200KB)
- [ ] Free tier sufficient for our needs
- [ ] Good browser support
- [ ] Clear differentiation from current Lottie demo

---

## 2. Background

### 2.1 Context

We currently use Lottie for vector animations (from After Effects). Rive is a modern alternative with **built-in interactivity** (state machines) that Lottie lacks. Growing rapidly in popularity.

### 2.2 Why Rive?

- **State machines:** Built-in interactivity without code
- **Smaller files:** Often smaller than Lottie
- **Runtime animations:** Can be controlled programmatically
- **Modern tooling:** Web-based editor
- **Growing rapidly:** Many modern sites are adopting Rive

### 2.3 Related Work

| Resource | Type | Key Takeaway |
|----------|------|--------------|
| [Rive.app](https://rive.app/) | Website | Free editor, community assets |
| [Rive Runtime](https://github.com/rive-app/rive-wasm) | GitHub | WebAssembly runtime |
| [Community Files](https://rive.app/community/) | Assets | Free animations available |

---

## 3. Preliminary Findings

### 3.1 Overview

Rive is a design tool for creating interactive animations. Unlike Lottie (which exports from After Effects), Rive has its own editor. Key differentiator: **State Machines** allow animations to respond to user input without JavaScript.

### 3.2 Technical Analysis

#### Core Concepts
- **Artboards:** Canvas for animations
- **Animations:** Timeline-based sequences
- **State Machines:** Logic for transitioning between animations
- **Inputs:** Triggers, booleans, numbers that control state machines

#### Runtime Options

| Runtime | Size | Notes |
|---------|------|-------|
| @rive-app/canvas | ~150KB | Canvas-based, good performance |
| @rive-app/webgl | ~200KB | WebGL, better for complex animations |

#### Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ | Full support |
| Firefox | ✅ | Full support |
| Safari | ✅ | Full support |
| Edge | ✅ | Full support |
| Mobile | ✅ | Touch events work with state machines |

### 3.3 Rive vs Lottie Comparison

| Feature | Lottie | Rive |
|---------|--------|------|
| File size | Variable | Often smaller |
| Creation tool | After Effects | Rive Editor (web) |
| Interactivity | Limited (via code) | Built-in state machines |
| Runtime size | ~300KB (player) | ~150KB (canvas) |
| Community assets | Large (LottieFiles) | Growing (Rive Community) |
| Learning curve | Need AE skills | Rive editor is simpler |
| Programmatic control | Basic | Advanced |
| 3D support | No | Limited |

### 3.4 Pros and Cons

| Pros | Cons |
|------|------|
| ✅ Built-in interactivity | ❌ Smaller community than Lottie |
| ✅ Often smaller files | ❌ Different creation workflow |
| ✅ Modern web-based editor | ❌ Learning new tool required |
| ✅ State machines are powerful | ❌ Fewer free assets available |
| ✅ Excellent documentation | ❌ Lottie is more established |
| ✅ Free tier is generous | |
| ✅ WebAssembly performance | |

### 3.5 Interactivity Examples

Rive excels at:
- **Hover states:** Button animations that respond to hover
- **Loading indicators:** Progress that maps to actual progress
- **Interactive characters:** React to mouse position
- **Form validation:** Visual feedback tied to input state
- **Toggles:** Smooth animated switches

---

## 4. Risk Assessment

### 4.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Smaller asset library | Medium | Medium | Use community files, create simple ones |
| WebAssembly compatibility | Low | Low | Excellent browser support |
| Learning curve | Medium | Low | Good documentation |

### 4.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Asset creation | Medium | Medium | Start with community files |
| Differentiation unclear | Low | Low | Focus on interactivity demos |

---

## 5. Recommendation

### 5.1 Summary

Rive provides **interactive animations** that Lottie cannot match without significant JavaScript. The state machine feature alone justifies inclusion. This would showcase a **different paradigm** of web animation.

### 5.2 Decision

| Decision | Rationale |
|----------|-----------|
| **Proceed** | Unique interactivity, modern approach, complements Lottie |

### 5.3 Implementation Strategy

1. **Find/create simple interactive animations:**
   - Hover button
   - Loading indicator with progress
   - Interactive character

2. **Demo focus:**
   - Show state machine capabilities
   - Side-by-side with Lottie for comparison
   - Interactive demos user can play with

### 5.4 Asset Strategy

| Source | Type | Notes |
|--------|------|-------|
| [Rive Community](https://rive.app/community/) | Free files | Many interactive examples |
| Create custom | Simple | Button, icons |

### 5.5 Timeline

| Phase | Target Date |
|-------|-------------|
| PRD Creation | Q1 2026 |
| Asset Collection | Q1 2026 |
| Basic Implementation | Q2 2026 |
| Full Demo | Q2 2026 |

---

## 6. References

- [Rive Official](https://rive.app/)
- [Rive Runtime Docs](https://rive.app/docs/)
- [Rive Community](https://rive.app/community/)
- [GitHub - rive-wasm](https://github.com/rive-app/rive-wasm)
- [Rive vs Lottie Comparison](https://rive.app/blog/rive-as-a-lottie-alternative)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial research |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
