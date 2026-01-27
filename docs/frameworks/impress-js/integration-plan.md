<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       integration-plan.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [prd-impress-js.md, ../../research/active/presentation/impress-js-research.md]
description:    Integration plan for Impress.js 3D spatial presentation framework
==============================================================================
-->

# Integration Plan: Impress.js

> **Framework:** Impress.js
> **Plan Status:** Not Started
> **Target Completion:** 2026-02-01
> **Related PRD:** [prd-impress-js.md](prd-impress-js.md)

---

## 1. Pre-Integration Checklist

### 1.1 Research Complete

- [x] Official documentation reviewed
- [x] Example implementations studied
- [x] Browser compatibility verified
- [x] License reviewed (MIT License)
- [x] CDN availability confirmed (jsDelivr)
- [x] Plugin ecosystem documented
- [x] Comparison with Reveal.js completed

### 1.2 Dependencies Identified

| Dependency | Version | Source | Fallback |
|------------|---------|--------|----------|
| impress.js | 2.0.0 | jsDelivr CDN | Local copy in `/lib/` |

**Note:** Zero external dependencies required. Framework is entirely self-contained.

### 1.3 Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CDN vs Local | CDN (primary) + Local (fallback) | Fast loading with offline capability |
| Theme approach | Custom CSS variables | Match project design system |
| Content structure | LunoLabs/TechEd Academy showcase | Consistent with other demos |
| Step layout | Mixed (linear + 3D spatial) | Demonstrate framework capabilities |
| Plugin configuration | Navigation + Autoplay + Console | Essential plugins only |
| Mobile strategy | Graceful degradation | Desktop-first, simple mobile fallback |

---

## 2. Implementation Phases

### Phase 1: Basic Setup
**Duration:** 2-3 hours
**Dependencies:** None
**Priority:** High

| Task | Status | Notes |
|------|--------|-------|
| Create folder `/impress-js/` | To Do | Root level directory |
| Add `index.html` with metadata | To Do | Include file header |
| Include impress.js from CDN | To Do | v2.0.0 from jsDelivr |
| Add local fallback copy | To Do | `/impress-js/lib/impress.js` |
| Basic 3-step "Hello World" working | To Do | Verify initialization |
| Test in Chrome, Firefox, Safari | To Do | Core browser support |
| Add `.impress-not-supported` fallback | To Do | Graceful degradation |

**Deliverable:** Working minimal example with 3D navigation

**Code Checkpoint:**
```html
<!-- Phase 1 completion test -->
<div id="impress">
    <div class="step" data-x="0" data-y="0">Step 1</div>
    <div class="step" data-x="1000" data-y="0">Step 2</div>
    <div class="step" data-x="1000" data-y="1000" data-rotate="90">Step 3</div>
</div>
<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js"></script>
<script>impress().init();</script>
```

---

### Phase 2: Content Integration
**Duration:** 2-3 hours
**Dependencies:** Phase 1
**Priority:** High

| Task | Status | Notes |
|------|--------|-------|
| Apply project CSS variables | To Do | Colors, typography |
| Create LunoLabs-branded header | To Do | Gradient text, logo |
| Add TechEd Academy content | To Do | 6-8 content steps |
| Design spatial layout | To Do | Mix of 2D and 3D positioning |
| Create overview "big picture" step | To Do | Zoomed out view |
| Add shared `nav-component.js` | To Do | Consistent navigation |
| Style step containers | To Do | Glass morphism, shadows |

**Deliverable:** Content-populated demo with LunoLabs branding

**Content Structure:**
```
Step 1: Title (center, scale 2)
Step 2: Problem Statement (right, slight rotation)
Step 3: Solution Overview (down-right, small scale)
Step 4: Feature 1 (z-axis depth, x-rotation)
Step 5: Feature 2 (further z-depth)
Step 6: Feature 3 (return to surface)
Step 7: Call to Action (left of title)
Step 8: Overview (center, scale 5, bird's eye)
```

---

### Phase 3: Plugin Configuration
**Duration:** 1 hour
**Dependencies:** Phase 2
**Priority:** Medium

| Task | Status | Notes |
|------|--------|-------|
| Configure navigation plugin | To Do | Keyboard + mouse |
| Enable progress indicator | To Do | Visual progress bar |
| Configure autoplay (optional) | To Do | 5-second intervals |
| Enable presenter console | To Do | P key to open |
| Add speaker notes to steps | To Do | Hidden notes |
| Test help overlay | To Do | H key |
| Configure transition duration | To Do | 1000ms default |

**Deliverable:** Fully configured plugin setup

**Configuration Example:**
```html
<div id="impress"
     data-transition-duration="1000"
     data-autoplay="0"
     data-perspective="1000"
     data-width="1920"
     data-height="1080">
```

---

### Phase 4: Quality & Polish
**Duration:** 2-3 hours
**Dependencies:** Phase 3
**Priority:** Medium

| Task | Status | Notes |
|------|--------|-------|
| Accessibility audit | To Do | WAVE tool |
| Add ARIA landmarks | To Do | role, aria-label |
| Add skip link | To Do | Skip to content |
| Keyboard navigation test | To Do | Tab, arrows |
| Focus indicators | To Do | Visible focus styles |
| Add `prefers-reduced-motion` | To Do | Respect user preference |
| Meta tags (SEO, OG) | To Do | Social sharing |
| Performance optimization | To Do | Image optimization |
| Responsive testing | To Do | Various breakpoints |
| Cross-browser testing | To Do | All target browsers |

**Deliverable:** Production-ready, accessible demo

**Accessibility Checklist:**
```html
<!-- Required additions -->
<a href="#impress" class="skip-link">Skip to presentation</a>
<div id="impress" role="main" aria-label="3D Presentation">
<div class="step" aria-label="Title slide">
```

**Reduced Motion CSS:**
```css
@media (prefers-reduced-motion: reduce) {
    .impress-enabled .step {
        transition-duration: 0.1s !important;
    }
    #impress {
        perspective: none !important;
    }
}
```

---

### Phase 5: Documentation
**Duration:** 1 hour
**Dependencies:** Phase 4
**Priority:** Medium

| Task | Status | Notes |
|------|--------|-------|
| Complete PRD with final details | To Do | Update scores |
| Update project INDEX.md | To Do | Add framework entry |
| Update ROADMAP.md | To Do | Mark as completed |
| Update `nav-component.js` | To Do | Add Impress.js link |
| Update dashboard | To Do | Add to framework grid |
| Create README.md in folder | To Do | Quick reference |
| Document known issues | To Do | Mobile limitations |

**Deliverable:** Fully documented framework integration

---

## 3. Technical Specifications

### 3.1 Folder Structure

```
/impress-js/
├── index.html              # Main demo file with metadata
├── lib/                    # Local library fallback
│   └── impress.js          # v2.0.0 local copy
├── assets/                 # Local assets
│   ├── images/            # Presentation images
│   │   └── logo.svg       # LunoLabs logo
│   └── styles/            # Optional custom CSS
│       └── theme.css      # Custom theme overrides
└── README.md              # Quick reference guide
```

### 3.2 Required Metadata Header

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-01-28
updated:        2026-01-28
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/impress-js/prd-impress-js.md]
description:    Impress.js 3D spatial presentation demo for TechEd Academy
==============================================================================
-->
```

### 3.3 CSS Variables (Required)

```css
:root {
    /* Project standard colors */
    --color-primary: #6366f1;
    --color-primary-dark: #4f46e5;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --color-warning: #f59e0b;
    --color-danger: #ef4444;
    --bg-dark: #0f172a;
    --bg-darker: #0a0a1a;
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);

    /* Impress.js specific */
    --impress-transition-duration: 1000ms;
    --impress-perspective: 1000px;
    --impress-step-width: 900px;
    --impress-step-padding: 40px;
    --impress-step-bg: rgba(255,255,255,0.05);
    --impress-step-border: rgba(255,255,255,0.1);
    --impress-step-radius: 16px;
}
```

### 3.4 Navigation Integration

```html
<!-- Add before closing </body> tag -->
<script src="/shared/nav-component.js"></script>
```

### 3.5 CDN with Local Fallback

```html
<!-- Primary: CDN -->
<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js"></script>

<!-- Fallback: Local -->
<script>
    window.impress || document.write('<script src="lib/impress.js"><\/script>');
</script>

<!-- Initialize -->
<script>
    if (!document.body.classList.contains('impress-not-supported')) {
        impress().init();
    }
</script>
```

---

## 4. Testing Checklist

### 4.1 Functional Tests

- [ ] Loads without JavaScript errors
- [ ] All 8 steps navigate correctly
- [ ] Keyboard navigation works (arrows, space, tab)
- [ ] 3D transitions render smoothly
- [ ] Overview step shows all content
- [ ] Presenter console opens (P key)
- [ ] Help overlay works (H key)
- [ ] Progress indicator updates
- [ ] Fallback shows for unsupported browsers

### 4.2 Responsive Tests

| Breakpoint | Status | Notes |
|------------|--------|-------|
| Mobile (320px) | To Do | Fallback or simplified view |
| Tablet (768px) | To Do | May need scale adjustment |
| Desktop (1200px) | To Do | Primary target |
| Large screens (1920px) | To Do | Full experience |
| 4K (3840px) | To Do | Test scaling |

### 4.3 Accessibility Tests

- [ ] Keyboard-only navigation (no mouse)
- [ ] Screen reader test (NVDA on Windows)
- [ ] Screen reader test (VoiceOver on Mac)
- [ ] Color contrast check (4.5:1 minimum)
- [ ] Focus visible on all interactive elements
- [ ] `prefers-reduced-motion` respected
- [ ] Skip link functional
- [ ] ARIA labels on all steps

### 4.4 Performance Tests

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | 85+ | To Do |
| First contentful paint | <1.5s | To Do |
| Largest contentful paint | <2.5s | To Do |
| Cumulative layout shift | <0.1 | To Do |
| Total blocking time | <200ms | To Do |
| Bundle size | <150KB | To Do |

### 4.5 Browser Tests

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | To Do | Primary target |
| Firefox | Latest | To Do | |
| Safari | Latest | To Do | Check -webkit prefixes |
| Edge | Latest | To Do | |
| Chrome Android | Latest | To Do | Touch navigation |
| Safari iOS | Latest | To Do | Touch navigation |

---

## 5. Rollback Plan

If integration fails or causes issues:

1. **Immediate:** Remove `/impress-js/` folder from deployment
2. **Navigation:** Remove entry from `nav-component.js`
3. **Dashboard:** Remove from framework grid
4. **Documentation:** Move docs to `research/archive/`
5. **INDEX.md:** Update status to "On Hold"
6. **Document:** Create `docs/research/archive/impress-js-issues.md` with:
   - Specific issues encountered
   - Browser/device details
   - Error messages
   - Attempted solutions

**Rollback Commands:**
```bash
# Remove implementation
rm -rf /impress-js/

# Git revert (if committed)
git revert <commit-hash>
```

---

## 6. Risk Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| CDN unavailable | Low | Medium | Local fallback copy |
| Mobile rendering issues | Medium | Low | Graceful degradation message |
| Performance issues | Low | Medium | Limit 3D complexity |
| Accessibility gaps | Medium | Medium | Comprehensive ARIA implementation |
| Motion sickness concerns | Low | Low | Reduced motion support |

---

## 7. Progress Log

| Date | Phase | Progress | Blockers | Next Steps |
|------|-------|----------|----------|------------|
| 2026-01-27 | Pre | Research complete, PRD created | None | Start Phase 1 |
| | | | | |

---

## 8. Effort Summary

| Phase | Estimated | Actual | Status |
|-------|-----------|--------|--------|
| Phase 1: Basic Setup | 2-3 hours | - | Not Started |
| Phase 2: Content Integration | 2-3 hours | - | Not Started |
| Phase 3: Plugin Configuration | 1 hour | - | Not Started |
| Phase 4: Quality & Polish | 2-3 hours | - | Not Started |
| Phase 5: Documentation | 1 hour | - | Not Started |
| **Total** | **8-11 hours** | **-** | **Not Started** |

---

## 9. Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | | | Pending |
| Reviewer | | | Pending |

---

## 10. References

| Resource | URL |
|----------|-----|
| Impress.js Official | https://impress.js.org/ |
| GitHub Repository | https://github.com/impress/impress.js |
| Getting Started | https://github.com/impress/impress.js/blob/master/GettingStarted.md |
| Documentation | https://github.com/impress/impress.js/blob/master/DOCUMENTATION.md |
| Plugin README | https://github.com/impress/impress.js/blob/master/src/plugins/README.md |
| Examples Wiki | https://github.com/impress/impress.js/wiki/Examples-and-demos |
| Project Research | [impress-js-research.md](../../research/active/presentation/impress-js-research.md) |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial integration plan |

---

*Integration Plan Version: 1.0.0 | See [INDEX.md](../../INDEX.md) for complete documentation index*
