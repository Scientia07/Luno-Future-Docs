<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       README.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [index.html, ../../docs/frameworks/gsap-scrolltrigger/prd-gsap-scrolltrigger.md]
description:    Quick reference guide for GSAP ScrollTrigger + Lenis demo
==============================================================================
-->

# GSAP ScrollTrigger + Lenis Demo

> Advanced scroll animation showcase for TechEd Academy

## Quick Start

1. Open `index.html` in a browser
2. Scroll to experience the animations
3. Use arrow keys in the Programs section for keyboard navigation

## Features

| Section | Animation Type | Key Features |
|---------|---------------|--------------|
| Hero | Parallax + Text Reveal | Background moves at 0.3x scroll speed |
| Mission | Staggered Cards | 3 cards reveal with 0.2s stagger |
| Programs | Horizontal Scroll | Pinned section, snap-to-panel, progress bar |
| Timeline | Path Drawing | SVG line fill + milestone reveals |
| Stats | Counter Animation | Numbers animate from 0 to target |
| CTA | Background Zoom | Subtle scale effect on scroll |

## Technology Stack

- **GSAP 3.12.x** - Animation library
- **ScrollTrigger** - Scroll-based animations
- **Lenis 1.x** - Smooth scroll physics

## CDN Links

```html
<!-- GSAP Core -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>

<!-- ScrollTrigger Plugin -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/ScrollTrigger.min.js"></script>

<!-- Lenis -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js"></script>
```

## Lenis + GSAP Integration Pattern

```javascript
// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
});

// Connect to ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Sync with GSAP ticker
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
```

## Key ScrollTrigger Configurations

### Horizontal Scroll with Snapping

```javascript
gsap.to(track, {
    xPercent: -100 * (panels - 1) / panels,
    ease: 'none',
    scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (panels - 1),
            duration: { min: 0.2, max: 0.5 },
            ease: 'power1.inOut'
        },
        end: () => '+=' + (container.offsetWidth * (panels - 1))
    }
});
```

### Staggered Reveals

```javascript
gsap.to(elements, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});
```

## Accessibility

- Skip link for keyboard users
- `prefers-reduced-motion` fully respected
- ARIA attributes on progress indicators
- Keyboard navigation in horizontal scroll section
- Focus indicators on all interactive elements

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | Supported |
| Firefox | Latest | Supported |
| Safari | Latest | Supported |
| Edge | Latest | Supported |

## Files

```
/enhanced/gsap-scrolltrigger/
├── index.html    # Main demo (all-in-one)
└── README.md     # This file
```

## Related Documentation

- [PRD](../../docs/frameworks/gsap-scrolltrigger/prd-gsap-scrolltrigger.md)
- [Integration Plan](../../docs/frameworks/gsap-scrolltrigger/integration-plan.md)
- [GSAP Research](../../docs/research/active/scroll-animation/gsap-scrolltrigger-research.md)
- [Lenis Research](../../docs/research/active/scroll-animation/lenis-research.md)

## License

GSAP is 100% free for all uses as of April 2025. Lenis is MIT licensed.

---

*Last updated: 2026-01-27 | Version 1.0.0*
