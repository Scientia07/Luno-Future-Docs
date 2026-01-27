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
related_docs:   [prd-gsap-scrolltrigger.md, ../../research/active/scroll-animation/gsap-scrolltrigger-research.md, ../../research/active/scroll-animation/lenis-research.md]
description:    Integration plan for GSAP ScrollTrigger + Lenis advanced scroll animation framework
==============================================================================
-->

# Integration Plan: GSAP ScrollTrigger + Lenis

> **Framework:** GSAP ScrollTrigger with Lenis Smooth Scroll
> **Plan Status:** Not Started
> **Target Completion:** 2026-02-07
> **Related PRD:** [prd-gsap-scrolltrigger.md](prd-gsap-scrolltrigger.md)

---

## 1. Pre-Integration Checklist

### 1.1 Research Complete

- [x] Official GSAP documentation reviewed
- [x] Official Lenis documentation reviewed
- [x] Example implementations studied (GSAPify, FreeFrontend)
- [x] Browser compatibility verified (Chrome, Firefox, Safari, Edge)
- [x] License reviewed (100% free as of April 2025)
- [x] CDN availability confirmed (jsDelivr, cdnjs)
- [x] GSAP + Lenis integration pattern documented

### 1.2 Dependencies Identified

| Dependency | Version | Source | Size (gzip) | Fallback |
|------------|---------|--------|-------------|----------|
| GSAP Core | 3.12.5+ | jsDelivr CDN | ~25 KB | cdnjs mirror |
| ScrollTrigger | 3.12.5+ | jsDelivr CDN | ~10 KB | cdnjs mirror |
| Lenis | 1.x | jsDelivr CDN | ~15 KB | npm/local |
| **Total** | - | - | **~50 KB** | - |

### 1.3 Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CDN vs Local | CDN (jsDelivr) | Cache benefits, version locking available |
| Theme approach | CSS Variables | Consistent with project standards |
| Content structure | 6 sections | Showcases all major features |
| Lenis integration | Paired | Official recommended pattern |
| Reduced motion | Full support | Accessibility requirement |
| Markers in dev | Toggleable | Debug utility, disabled in production |

---

## 2. Implementation Phases

### Phase 1: Basic Setup
**Duration:** 2-3 hours
**Target Date:** 2026-01-28
**Dependencies:** None

| Task | Status | Notes |
|------|--------|-------|
| Create folder `/enhanced/gsap-scrolltrigger/` | Not Started | |
| Add `index.html` with metadata header | Not Started | Use project template |
| Include GSAP + ScrollTrigger from CDN | Not Started | jsDelivr links |
| Include Lenis from CDN | Not Started | jsDelivr link |
| Initialize GSAP + ScrollTrigger registration | Not Started | `gsap.registerPlugin(ScrollTrigger)` |
| Initialize Lenis with GSAP ticker sync | Not Started | Official integration pattern |
| Add reduced motion check | Not Started | `matchMedia` check |
| Basic "Hello World" scroll animation | Not Started | Single fade-in test |

**Acceptance Criteria:**
- Page loads without console errors
- Basic scroll animation triggers correctly
- Smooth scroll active (can feel Lenis)
- Reduced motion is respected

**Deliverable:** Working minimal example

**Code Template:**
```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-01-27
updated:        2026-01-27
version:        0.1.0
status:         draft
rating:         ★★☆☆☆
author:         Joel + Claude
related_docs:   [docs/frameworks/gsap-scrolltrigger/prd-gsap-scrolltrigger.md]
description:    GSAP ScrollTrigger + Lenis demo for TechEd Academy
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP ScrollTrigger + Lenis | TechEd Academy</title>
    <style>
        :root {
            --color-primary: #6366f1;
            --color-secondary: #ec4899;
            --color-accent: #10b981;
            --bg-dark: #0f172a;
            --bg-darker: #0a0a1a;
            --text-primary: #ffffff;
            --text-muted: rgba(255,255,255,0.75);
        }

        html.lenis, html.lenis body { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto !important; }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: var(--bg-dark);
            color: var(--text-primary);
            line-height: 1.6;
        }

        .section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
        }

        .section h2 {
            font-size: clamp(2rem, 5vw, 4rem);
            opacity: 0;
        }
    </style>
</head>
<body>
    <main>
        <section class="section hero">
            <h2>Hero Section</h2>
        </section>
        <section class="section mission">
            <h2>Mission Section</h2>
        </section>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>

    <script>
        gsap.registerPlugin(ScrollTrigger);

        // Reduced motion check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Initialize Lenis (only if motion OK)
        let lenis;
        if (!prefersReducedMotion) {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true
            });

            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        }

        // Basic animation
        gsap.utils.toArray('.section h2').forEach(h2 => {
            gsap.to(h2, {
                opacity: 1,
                duration: prefersReducedMotion ? 0 : 1,
                scrollTrigger: {
                    trigger: h2,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    </script>
</body>
</html>
```

---

### Phase 2: Content Integration
**Duration:** 4-6 hours
**Target Date:** 2026-01-30
**Dependencies:** Phase 1 complete

| Task | Status | Notes |
|------|--------|-------|
| Apply project CSS variables fully | Not Started | All colors, spacing |
| **Section 1: Hero** | Not Started | Parallax + text reveal |
| - Background parallax (0.3x speed) | Not Started | `scrub: true` |
| - Text fade-in from bottom | Not Started | `y: 50, opacity: 0` |
| - Logo/title animation | Not Started | Scale + opacity |
| **Section 2: Mission** | Not Started | Card reveals |
| - Create 3 mission cards | Not Started | TechEd content |
| - Staggered reveal animation | Not Started | `stagger: 0.2` |
| - Optional scrub effect | Not Started | `scrub: 0.5` |
| **Section 3: Programs** | Not Started | Horizontal scroll (PINNED) |
| - Create program cards (4-5) | Not Started | TechEd programs |
| - Pin container setup | Not Started | `pin: true` |
| - Horizontal scroll animation | Not Started | `xPercent` |
| - Snap to cards | Not Started | `snap: 1/(n-1)` |
| - Progress indicator | Not Started | Scale bar |
| **Section 4: Timeline** | Not Started | Path drawing |
| - Create SVG timeline path | Not Started | Vertical line |
| - Milestone points (4-5) | Not Started | Year markers |
| - Path draw effect | Not Started | `strokeDasharray` |
| - Milestone reveals | Not Started | Staggered pop-in |
| **Section 5: Stats** | Not Started | Counter animation |
| - 3-4 stat cards | Not Started | Numbers, labels |
| - Counter animation | Not Started | `snap: { innerText: 1 }` |
| - Reveal animation | Not Started | Scale + opacity |
| **Section 6: CTA** | Not Started | Finale |
| - Background zoom effect | Not Started | `scale: 1.1, scrub: true` |
| - CTA content | Not Started | Heading, button |
| - Button animation | Not Started | Pulse/glow |
| Add shared `nav-component.js` | Not Started | Standard navigation |
| Add scroll progress bar | Not Started | Top-fixed bar |

**Acceptance Criteria:**
- All 6 sections render correctly
- Horizontal scroll section pins and scrolls
- Timeline path draws with scroll
- Stats counter animates
- Navigation component integrated

**Deliverable:** Content-populated demo with all animations

---

### Phase 3: Quality & Polish
**Duration:** 3-4 hours
**Target Date:** 2026-02-03
**Dependencies:** Phase 2 complete

| Task | Status | Notes |
|------|--------|-------|
| **Accessibility Audit** | Not Started | |
| - Add skip link | Not Started | `<a href="#main-content">` |
| - Add ARIA landmarks | Not Started | `main`, `nav`, `section` |
| - Verify heading hierarchy | Not Started | h1 > h2 > h3 |
| - Test keyboard navigation | Not Started | Tab through all elements |
| - Add focus indicators | Not Started | Custom `:focus-visible` |
| - Test with screen reader | Not Started | VoiceOver/NVDA |
| - Verify reduced motion | Not Started | Test with preference on |
| **Meta & SEO** | Not Started | |
| - Add meta description | Not Started | 150-160 chars |
| - Add Open Graph tags | Not Started | Title, description, image |
| - Add canonical URL | Not Started | If applicable |
| **Performance Optimization** | Not Started | |
| - Lazy load images | Not Started | `loading="lazy"` |
| - Optimize animations | Not Started | `will-change` hints |
| - Review ScrollTrigger batch | Not Started | Batch similar triggers |
| - Test on throttled connection | Not Started | 3G simulation |
| **Responsive Testing** | Not Started | |
| - Mobile 320px | Not Started | Verify all sections |
| - Mobile 375px (iPhone) | Not Started | Common breakpoint |
| - Tablet 768px | Not Started | iPad size |
| - Desktop 1200px | Not Started | Standard desktop |
| - Large 1920px | Not Started | Full HD |
| - Horizontal scroll on mobile | Not Started | Touch behavior |
| **Visual Polish** | Not Started | |
| - Easing refinement | Not Started | Adjust curves |
| - Timing adjustments | Not Started | Section pacing |
| - Add subtle effects | Not Started | Shadows, glows |
| - Dark mode consistency | Not Started | All colors match |

**Acceptance Criteria:**
- Lighthouse accessibility score > 90
- Lighthouse performance score > 90
- All breakpoints tested
- Keyboard navigation complete
- Screen reader tested

**Deliverable:** Production-ready demo

---

### Phase 4: Documentation
**Duration:** 1-2 hours
**Target Date:** 2026-02-05
**Dependencies:** Phase 3 complete

| Task | Status | Notes |
|------|--------|-------|
| Update PRD with final scores | Not Started | Actual metrics |
| Create README.md for demo folder | Not Started | Quick start guide |
| Update docs/INDEX.md | Not Started | Add framework entry |
| Update docs/ROADMAP.md | Not Started | Mark as complete |
| Update `nav-component.js` | Not Started | Add new demo link |
| Update dashboard/index.html | Not Started | Add demo card |
| Screenshot for documentation | Not Started | Hero image |
| Update HANDOFF document | Not Started | If applicable |

**Acceptance Criteria:**
- All documentation updated
- Demo accessible from dashboard
- Navigation includes new demo

**Deliverable:** Fully documented framework

---

### Phase 5: Review & Launch
**Duration:** 1-2 hours
**Target Date:** 2026-02-07
**Dependencies:** Phase 4 complete

| Task | Status | Notes |
|------|--------|-------|
| Final cross-browser test | Not Started | Chrome, Firefox, Safari, Edge |
| Final performance audit | Not Started | Lighthouse |
| Peer review (if applicable) | Not Started | Code review |
| Update file metadata | Not Started | Version 1.0.0, status: active |
| Update PRD status | Not Started | Planned -> Active |
| Update integration plan status | Not Started | Completed |

**Acceptance Criteria:**
- All browsers tested
- Lighthouse scores met
- Status updated to active

**Deliverable:** Launched demo

---

## 3. Technical Specifications

### 3.1 Folder Structure

```
/enhanced/gsap-scrolltrigger/
├── index.html              # Main demo (all-in-one for simplicity)
├── assets/
│   └── images/
│       ├── hero-bg.jpg     # Optional background
│       └── og-image.jpg    # Open Graph image
└── README.md               # Quick reference
```

### 3.2 Required Metadata Header

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/gsap-scrolltrigger/prd-gsap-scrolltrigger.md]
description:    GSAP ScrollTrigger + Lenis advanced scroll animation demo
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

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 8rem;

    /* Typography */
    --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'Fira Code', 'Cascadia Code', monospace;

    /* Borders & Shadows */
    --border-radius: 12px;
    --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    /* ScrollTrigger specific */
    --scroll-progress-height: 4px;
    --scroll-progress-color: var(--color-primary);
}

/* Lenis smooth scroll styles */
html.lenis,
html.lenis body {
    height: auto;
}

.lenis.lenis-smooth {
    scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
}

.lenis.lenis-stopped {
    overflow: hidden;
}

.lenis.lenis-scrolling iframe {
    pointer-events: none;
}
```

### 3.4 Navigation Integration

```html
<!-- Add before closing </body> tag -->
<script src="/shared/nav-component.js"></script>
```

### 3.5 CDN Links (Version Locked)

```html
<!-- GSAP Core (locked to 3.12.x) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>

<!-- ScrollTrigger Plugin -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>

<!-- Lenis (locked to 1.x) -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
```

---

## 4. Testing Checklist

### 4.1 Functional Tests

- [ ] Loads without JavaScript errors
- [ ] All navigation links work
- [ ] Scroll animations trigger correctly
- [ ] Horizontal scroll section functions
- [ ] Pinning works as expected
- [ ] Snapping activates at correct points
- [ ] Lenis smooth scroll feels right
- [ ] Progress bar updates correctly
- [ ] Stats counters animate

### 4.2 Responsive Tests

| Breakpoint | Status | Notes |
|------------|--------|-------|
| Mobile 320px | Not Started | |
| Mobile 375px | Not Started | |
| Tablet 768px | Not Started | |
| Desktop 1200px | Not Started | |
| Large 1920px | Not Started | |

### 4.3 Accessibility Tests

- [ ] Keyboard-only navigation works
- [ ] Tab order is logical
- [ ] Focus visible on all interactive elements
- [ ] Skip link present and working
- [ ] Screen reader test (NVDA or VoiceOver)
- [ ] Color contrast check (4.5:1 minimum)
- [ ] `prefers-reduced-motion` respected
- [ ] No content inaccessible without animations
- [ ] ARIA labels where needed

### 4.4 Performance Tests

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Lighthouse Performance | 90+ | - | Not Started |
| Lighthouse Accessibility | 90+ | - | Not Started |
| First Contentful Paint | <1.5s | - | Not Started |
| Largest Contentful Paint | <2.5s | - | Not Started |
| Cumulative Layout Shift | <0.1 | - | Not Started |
| Total Blocking Time | <300ms | - | Not Started |

### 4.5 Browser Tests

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | Not Started | |
| Firefox | Latest | Not Started | |
| Safari | Latest | Not Started | |
| Edge | Latest | Not Started | |
| Chrome Mobile | Latest | Not Started | |
| Safari iOS | Latest | Not Started | |

---

## 5. Animation Specifications

### 5.1 Section 1: Hero

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Background | `y: -30%` (parallax) | Scrub | - | none |
| Title | `opacity: 0, y: 50` -> visible | Start | 1s | power2.out |
| Subtitle | `opacity: 0, y: 30` -> visible | Start +0.2s | 0.8s | power2.out |

### 5.2 Section 2: Mission

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Cards | `opacity: 0, y: 100` -> visible | top 80% | 0.8s | power2.out |
| Stagger | 0.2s between cards | - | - | - |

### 5.3 Section 3: Programs (Horizontal)

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Container | Pin | Section enter | 300vh scroll | - |
| Track | `xPercent: 0` -> `-100*(n-1)` | Scrub | - | none |
| Cards | None (part of track) | - | - | - |
| Progress | `scaleX: 0` -> `1` | Scrub | - | none |
| Snap | To each card | Velocity | 0.5s | power1.inOut |

### 5.4 Section 4: Timeline

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| SVG Path | `strokeDashoffset` | Scrub | - | none |
| Milestones | `scale: 0, opacity: 0` -> visible | Stagger | 0.5s | back.out |
| Labels | `opacity: 0, x: -20` -> visible | With milestone | 0.3s | power2.out |

### 5.5 Section 5: Stats

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Card | `opacity: 0, y: 50` -> visible | top 70% | 0.6s | power2.out |
| Number | `innerText: 0` -> target | After card | 2s | power1.out |
| Glow | `boxShadow` pulse | After count | 0.5s | power2.inOut |

### 5.6 Section 6: CTA

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Background | `scale: 1` -> `1.1` | Scrub | - | none |
| Content | `opacity: 0, y: 30` -> visible | top 60% | 1s | power2.out |
| Button | Subtle pulse | Loop | 2s | sine.inOut |

---

## 6. Rollback Plan

If integration fails:

1. **Revert commits** related to framework
2. **Remove folder** `/enhanced/gsap-scrolltrigger/`
3. **Remove entry** from `nav-component.js`
4. **Document issues** in `research/archive/gsap-scrolltrigger-issues.md`
5. **Update INDEX.md** status to "On Hold"
6. **Update PRD status** to "On Hold" with notes

**Rollback triggers:**
- Major browser incompatibility discovered
- Performance issues on target devices
- Accessibility issues that cannot be resolved
- Scope creep beyond timeline

---

## 7. Progress Log

| Date | Phase | Progress | Blockers | Notes |
|------|-------|----------|----------|-------|
| 2026-01-27 | Pre-work | Research complete, PRD created | None | Ready to start Phase 1 |

---

## 8. Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | Joel | | Not Started |
| Reviewer | | | Not Started |

---

## 9. Quick Reference

### Key Files to Create

| File | Priority | Phase |
|------|----------|-------|
| `/enhanced/gsap-scrolltrigger/index.html` | High | 1 |
| `/enhanced/gsap-scrolltrigger/README.md` | Medium | 4 |

### Key Files to Update

| File | Update | Phase |
|------|--------|-------|
| `/docs/INDEX.md` | Add framework entry | 4 |
| `/docs/ROADMAP.md` | Mark complete | 4 |
| `/shared/nav-component.js` | Add demo link | 4 |
| `/dashboard/index.html` | Add demo card | 4 |
| This PRD | Final metrics | 4 |

### Useful Commands

```bash
# Start local server (if needed)
cd /home/joel/Luno-web/Luno-Future-Docs
python -m http.server 8000

# Open demo in browser
open http://localhost:8000/enhanced/gsap-scrolltrigger/
```

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial integration plan |

---

*Template Version: 1.0.0 | See [INDEX.md](../../INDEX.md) for all documentation*
