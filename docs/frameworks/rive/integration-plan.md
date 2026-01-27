<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       integration-plan.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★☆☆
author:         Joel + Claude
related_docs:   [prd-rive.md, ../../research/active/animation/rive-research.md, ../../INDEX.md]
description:    Integration plan for Rive interactive animation framework
==============================================================================
-->

# Integration Plan: Rive

> **Framework:** Rive
> **Plan Status:** Not Started
> **Target Completion:** Q2 2026
> **Priority:** Medium
> **Related PRD:** [prd-rive.md](prd-rive.md)

---

## 1. Pre-Integration Checklist

### 1.1 Research Complete

- [x] Official documentation reviewed
- [x] Example implementations studied
- [x] Browser compatibility verified (WebAssembly required)
- [x] License reviewed (MIT for runtime)
- [x] CDN availability confirmed (unpkg, jsdelivr)

### 1.2 Dependencies Identified

| Dependency | Version | Source | Fallback |
|------------|---------|--------|----------|
| @rive-app/canvas | Latest | CDN (unpkg) | Local bundle |
| WebAssembly | Browser native | N/A | Polyfill not recommended |

### 1.3 Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CDN vs Local | CDN | Smaller repo, auto-updates, reliable hosts |
| Runtime type | Canvas | Smaller size (~150KB vs ~200KB WebGL) |
| Theme approach | Dark theme | Match project standards |
| Content focus | Interactive UI | Differentiate from Lottie demo |
| Asset source | Community + Custom | Start with community, add custom later |

---

## 2. Implementation Phases

### Phase 1: Basic Setup
**Duration:** 2-3 hours
**Dependencies:** None
**Target:** Working minimal example

| Task | Status | Notes |
|------|--------|-------|
| Create folder `/rive/` | Not Started | Root level with other demos |
| Add `index.html` with metadata | Not Started | Include project file header |
| Include Rive runtime from CDN | Not Started | Use @rive-app/canvas |
| Create `/rive/assets/animations/` folder | Not Started | For .riv files |
| Download test animation from community | Not Started | Simple interactive button |
| Basic "Hello World" working | Not Started | Single animation renders |

**Deliverable:** Working minimal example with one animation

**Verification:**
```bash
# Open in browser, animation should render and respond to hover
open /rive/index.html
```

---

### Phase 2: Content Integration
**Duration:** 4-6 hours
**Dependencies:** Phase 1 complete, assets collected

| Task | Status | Notes |
|------|--------|-------|
| Apply project CSS variables | Not Started | Match dark theme |
| Create demo sections structure | Not Started | Hero, Buttons, Toggles, Progress, Comparison |
| Implement interactive button demo | Not Started | Hover/click states |
| Implement toggle switch demo | Not Started | Boolean state machine |
| Implement progress loader demo | Not Started | Number input (0-100) |
| Add slider control for progress | Not Started | User controls animation |
| Add shared `nav-component.js` | Not Started | Consistent navigation |
| Create comparison section | Not Started | Side-by-side with Lottie concept |

**Deliverable:** Content-populated demo with multiple interactive animations

**Content Sections:**

```
1. Hero Section
   - Animated logo or character
   - "State Machines: Animation Meets Interactivity"

2. Interactive Buttons
   - Multiple button styles
   - Hover, press, disabled states
   - Code snippet showing setup

3. Toggle Components
   - Light/dark toggle
   - Checkbox animations
   - Radio button groups

4. Progress Indicators
   - Circular progress
   - Linear progress bar
   - Interactive slider to control

5. What Makes Rive Different
   - Comparison diagram
   - Code comparison with Lottie
   - Interactive vs passive animations
```

---

### Phase 3: Quality & Polish
**Duration:** 3-4 hours
**Dependencies:** Phase 2 complete

| Task | Status | Notes |
|------|--------|-------|
| Accessibility audit | Not Started | Focus on canvas elements |
| Add ARIA labels to all canvases | Not Started | role="img" or role="button" |
| Implement keyboard navigation | Not Started | Tab through interactive elements |
| Add focus indicators | Not Started | Custom focus rings for canvas |
| Implement `prefers-reduced-motion` | Not Started | Pause/simplify animations |
| Meta tags (SEO, OG) | Not Started | Title, description, og:image |
| Performance optimization | Not Started | Lazy load off-screen animations |
| Responsive testing | Not Started | All breakpoints |
| Cross-browser testing | Not Started | Chrome, Firefox, Safari, Edge |

**Deliverable:** Production-ready demo

**Accessibility Requirements:**

```html
<!-- Each canvas needs proper accessibility -->
<canvas id="button-demo"
        role="button"
        tabindex="0"
        aria-label="Interactive submit button - hover or click to see animation">
</canvas>

<!-- For decorative animations -->
<canvas id="decorative"
        role="img"
        aria-hidden="true">
</canvas>
```

**Reduced Motion Implementation:**

```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initRiveAnimations() {
    const shouldAutoplay = !prefersReducedMotion.matches;

    // Initialize with appropriate autoplay setting
    const button = new rive.Rive({
        src: 'button.riv',
        canvas: document.getElementById('button-demo'),
        autoplay: shouldAutoplay,
        // ...
    });
}

// Listen for preference changes
prefersReducedMotion.addEventListener('change', () => {
    // Pause or resume animations based on preference
});
```

---

### Phase 4: Documentation
**Duration:** 1-2 hours
**Dependencies:** Phase 3 complete

| Task | Status | Notes |
|------|--------|-------|
| Complete PRD with actual metrics | Not Started | Update performance scores |
| Update INDEX.md | Not Started | Add Rive to framework list |
| Update ROADMAP.md | Not Started | Mark Rive as implemented |
| Update `nav-component.js` | Not Started | Add Rive link |
| Update dashboard | Not Started | Add Rive card |
| Create README.md in /rive/ | Not Started | Quick reference |
| Update research status | Not Started | Mark as completed |

**Deliverable:** Fully documented framework

---

## 3. Technical Specifications

### 3.1 Folder Structure

```
/rive/
├── index.html                  # Main demo file with metadata
├── assets/
│   └── animations/
│       ├── button-primary.riv  # Primary button animation
│       ├── button-secondary.riv # Secondary button variant
│       ├── toggle-switch.riv   # Toggle switch
│       ├── checkbox.riv        # Animated checkbox
│       ├── loader-circular.riv # Circular progress
│       ├── loader-linear.riv   # Linear progress bar
│       └── character.riv       # Optional: interactive character
└── README.md                   # Quick reference
```

### 3.2 Required Metadata Header

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        2026-XX-XX
updated:        2026-XX-XX
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [docs/frameworks/rive/prd-rive.md]
description:    Rive interactive animation demo for TechEd Academy
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

    /* Rive-specific */
    --rive-canvas-radius: 8px;
    --rive-canvas-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### 3.4 Navigation Integration

```html
<!-- Add before closing </body> tag -->
<script src="/shared/nav-component.js"></script>
```

### 3.5 Rive Initialization Pattern

```javascript
// Standard initialization pattern for all Rive animations
function initRiveAnimation(config) {
    const {
        canvasId,
        src,
        stateMachine,
        autoplay = true,
        onLoad = null
    } = config;

    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas not found: ${canvasId}`);
        return null;
    }

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const instance = new rive.Rive({
        src: src,
        canvas: canvas,
        autoplay: autoplay && !prefersReducedMotion,
        stateMachines: stateMachine,
        onLoad: () => {
            instance.resizeDrawingSurfaceToCanvas();
            if (onLoad) onLoad(instance);
        },
        onLoadError: (e) => {
            console.error(`Failed to load Rive animation: ${src}`, e);
        }
    });

    return instance;
}

// Usage
const buttonAnim = initRiveAnimation({
    canvasId: 'button-canvas',
    src: 'assets/animations/button-primary.riv',
    stateMachine: 'Button',
    onLoad: (instance) => {
        console.log('Button animation loaded');
    }
});
```

---

## 4. Asset Collection Plan

### 4.1 Required Animations

| Animation | Source | State Machine Inputs | Priority |
|-----------|--------|---------------------|----------|
| Interactive button | Community / Custom | isHover, isPressed | High |
| Toggle switch | Community / Custom | isOn | High |
| Circular progress | Community / Custom | progress (0-100) | High |
| Linear progress | Community / Custom | progress (0-100) | Medium |
| Checkbox | Community / Custom | isChecked | Medium |
| Character | Community | look, wave | Low |

### 4.2 Community Sources

| Source | URL | Notes |
|--------|-----|-------|
| Rive Community | https://rive.app/community/ | Free downloads, various licenses |
| Rive Examples | https://rive.app/examples/ | Official examples |
| GitHub Samples | https://github.com/rive-app | Code examples |

### 4.3 Custom Animation Guidelines

If creating custom animations:
1. Use Rive web editor (free tier)
2. Keep file size under 50KB
3. Include state machine with clear input names
4. Test on all target browsers
5. Export with compatible runtime version

---

## 5. Testing Checklist

### 5.1 Functional Tests

- [ ] All animations load without JavaScript errors
- [ ] State machines respond to hover/click
- [ ] Number inputs update animations correctly
- [ ] Boolean inputs toggle states correctly
- [ ] Trigger inputs fire correctly
- [ ] Canvas resizes properly on window resize
- [ ] Navigation component works

### 5.2 Responsive Tests

| Breakpoint | Test Items |
|------------|------------|
| Mobile (320px) | Canvas scales, touch works |
| Tablet (768px) | Layout adjusts, interactions work |
| Desktop (1200px) | Full layout, hover states |
| Large (1920px) | No overflow, proper scaling |

### 5.3 Accessibility Tests

- [ ] All canvases have appropriate ARIA labels
- [ ] Interactive canvases have role="button" or similar
- [ ] Decorative animations have aria-hidden="true"
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus indicators visible on interactive elements
- [ ] `prefers-reduced-motion` pauses/simplifies animations
- [ ] Color contrast meets AA standard (surrounding UI)
- [ ] Screen reader announces canvas purposes

### 5.4 Performance Tests

| Metric | Target | Test Method |
|--------|--------|-------------|
| Lighthouse Performance | > 90 | Chrome DevTools |
| First Contentful Paint | < 1.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total blocking time | < 200ms | Lighthouse |
| Animation FPS | 60fps | DevTools Performance |

### 5.5 Cross-Browser Tests

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | Not Tested | |
| Firefox | Latest | Not Tested | |
| Safari | Latest | Not Tested | |
| Edge | Latest | Not Tested | |
| Mobile Chrome | Latest | Not Tested | |
| Mobile Safari | Latest | Not Tested | |

---

## 6. Rollback Plan

If integration fails:

1. **Revert commits** related to Rive framework
2. **Remove entry** from `nav-component.js`
3. **Document issues** in `research/archive/rive-issues.md`
4. **Update INDEX.md** status to "On Hold"
5. **Update ROADMAP.md** with blockers
6. **Create issue** for future retry with lessons learned

### Common Failure Scenarios

| Scenario | Indicator | Action |
|----------|-----------|--------|
| WebAssembly fails | Console errors, blank canvas | Check browser support, add warning |
| Assets fail to load | 404 errors | Verify paths, check CORS |
| State machine issues | Animations don't respond | Verify input names match |
| Performance issues | Low FPS, jank | Reduce animation complexity |

---

## 7. Progress Log

| Date | Phase | Progress | Blockers |
|------|-------|----------|----------|
| 2026-01-27 | Pre-work | PRD and Integration Plan created | None |

---

## 8. Effort Estimates

| Phase | Estimated Hours | Notes |
|-------|-----------------|-------|
| Phase 1: Basic Setup | 2-3 | Straightforward |
| Phase 2: Content Integration | 4-6 | Depends on asset availability |
| Phase 3: Quality & Polish | 3-4 | Accessibility focus |
| Phase 4: Documentation | 1-2 | Mostly updates |
| **Total** | **10-15** | |

### Risk-Adjusted Estimate

| Scenario | Hours | Probability |
|----------|-------|-------------|
| Best case | 10 | 20% |
| Expected | 12 | 60% |
| Worst case | 18 | 20% |

**Weighted estimate:** ~13 hours

---

## 9. Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | | | Not Started |
| Reviewer | | | Not Started |

---

## 10. Next Actions

### Immediate (Before Implementation)

1. [ ] Review and approve PRD
2. [ ] Browse Rive Community for suitable assets
3. [ ] Download 2-3 test animations
4. [ ] Test basic integration locally

### Phase 1 Start Criteria

- [ ] PRD approved
- [ ] At least 3 assets identified/downloaded
- [ ] Development time allocated

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial integration plan |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
