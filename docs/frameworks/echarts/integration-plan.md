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
related_docs:   [prd-echarts.md, ../../research/active/data-visualization/echarts-research.md]
description:    Integration plan for Apache ECharts data visualization framework
==============================================================================
-->

# Integration Plan: Apache ECharts

> **Framework:** Apache ECharts
> **Plan Status:** Not Started
> **Target Completion:** Q1 2026
> **Related PRD:** [prd-echarts.md](prd-echarts.md)

---

## 1. Pre-Integration Checklist

### 1.1 Research Complete

- [x] Official documentation reviewed
- [x] Example implementations studied
- [x] Browser compatibility verified
- [x] License reviewed (Apache 2.0)
- [x] CDN availability confirmed

### 1.2 Dependencies Identified

| Dependency | Version | Source | Fallback |
|------------|---------|--------|----------|
| echarts.min.js | 5.x | jsDelivr CDN | unpkg CDN |
| echarts.simple.min.js | 5.x | jsDelivr CDN | Local copy |

**CDN URLs:**
```html
<!-- Full bundle (~1MB) -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>

<!-- Simple bundle (~400KB) - Recommended for demo -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.simple.min.js"></script>

<!-- Fallback -->
<script src="https://unpkg.com/echarts@5/dist/echarts.min.js"></script>
```

### 1.3 Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CDN vs Local | CDN (jsDelivr) | Consistent with project pattern, better caching |
| Bundle type | Simple bundle | Sufficient for demo, 60% smaller |
| Theme approach | Custom registered theme | Match project design system |
| Content structure | Single-page dashboard | Showcase multiple chart types |
| Chart count | 6 charts | Cover primary use cases |
| Data source | Embedded JSON | No external dependencies |

---

## 2. Implementation Phases

### Phase 1: Basic Setup
**Duration:** 2-3 hours
**Dependencies:** None
**Priority:** High

| Task | Status | Notes |
|------|--------|-------|
| Create folder `/echarts/` | [ ] | Root level, same as other demos |
| Add `index.html` with metadata | [ ] | Use project template |
| Include ECharts from CDN | [ ] | Use simple bundle |
| Create custom "luno" theme | [ ] | Match project colors |
| Basic bar chart working | [ ] | Student enrollment data |
| Verify console has no errors | [ ] | Check all browsers |

**Deliverable:** Working minimal example with one chart

**Code Checkpoint:**
```javascript
// Verify this works before proceeding
const chart = echarts.init(document.getElementById('chart'), 'luno');
chart.setOption({
    title: { text: 'TechEd Academy Enrollment' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [120, 200, 150] }]
});
console.log('ECharts initialized successfully');
```

---

### Phase 2: Content Integration
**Duration:** 3-4 hours
**Dependencies:** Phase 1

| Task | Status | Notes |
|------|--------|-------|
| Apply project CSS variables | [ ] | Dark theme, colors |
| Create dashboard layout | [ ] | 2-column grid |
| Add enrollment bar chart | [ ] | Animated transitions |
| Add program distribution pie | [ ] | Donut with legend |
| Add progress tracking line | [ ] | DataZoom enabled |
| Add skill assessment radar | [ ] | Multi-series comparison |
| Add completion rate gauge | [ ] | Animated needle |
| Add geographic map (optional) | [ ] | Student locations |
| Add shared `nav-component.js` | [ ] | Project navigation |
| Create sample data object | [ ] | TechEd Academy data |

**Deliverable:** Content-populated demo with 5-6 charts

**Layout Structure:**
```
+---------------------------+
|      Header / Title       |
+-------------+-------------+
| Enrollment  | Program     |
| Bar Chart   | Pie Chart   |
+-------------+-------------+
| Progress Tracking         |
| Line Chart (full width)   |
+-------------+-------------+
| Skill       | Completion  |
| Radar       | Gauge       |
+-------------+-------------+
|      Footer / Nav         |
+---------------------------+
```

---

### Phase 3: Quality & Polish
**Duration:** 2-3 hours
**Dependencies:** Phase 2

| Task | Status | Notes |
|------|--------|-------|
| Accessibility audit | [ ] | Use axe DevTools |
| Add `role="img"` to containers | [ ] | All chart divs |
| Add `aria-label` descriptions | [ ] | Dynamic content |
| Keyboard navigation (basic) | [ ] | Tab through charts |
| Focus indicators | [ ] | Visible outline |
| Meta tags (SEO, OG) | [ ] | Title, description, image |
| Performance optimization | [ ] | Lazy load charts below fold |
| Responsive testing | [ ] | Mobile, tablet, desktop |
| Add loading states | [ ] | showLoading() API |
| Handle resize events | [ ] | Debounced resize() |
| Add `prefers-reduced-motion` | [ ] | Disable animations if preferred |

**Deliverable:** Production-ready demo

**Accessibility Checklist:**
```html
<!-- Each chart container needs: -->
<div id="chart-enrollment"
     class="chart"
     role="img"
     aria-label="Bar chart showing monthly student enrollment from January to June 2026. January: 120 students, February: 200 students, March: 150 students, April: 180 students, May: 220 students, June: 280 students."
     tabindex="0">
</div>
```

---

### Phase 4: Documentation
**Duration:** 1-2 hours
**Dependencies:** Phase 3

| Task | Status | Notes |
|------|--------|-------|
| Complete PRD with actual metrics | [ ] | Update Lighthouse scores |
| Update INDEX.md | [ ] | Add ECharts entry |
| Update ROADMAP.md | [ ] | Mark as implemented |
| Update `nav-component.js` | [ ] | Add to navigation |
| Update dashboard | [ ] | Add ECharts card |
| Create README.md in `/echarts/` | [ ] | Quick reference |
| Add to TO-DOS.md if issues found | [ ] | Track improvements |

**Deliverable:** Fully documented framework

---

## 3. Technical Specifications

### 3.1 Folder Structure

```
/echarts/
├── index.html              # Main demo file with all chart examples
├── assets/
│   └── data/
│       └── teched-data.js  # TechEd Academy sample datasets (optional)
└── README.md               # Quick reference guide
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
related_docs:   [docs/frameworks/echarts/prd-echarts.md]
description:    Apache ECharts data visualization demo for TechEd Academy
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

    /* Chart-specific */
    --chart-bg: rgba(15, 23, 42, 0.5);
    --chart-border: rgba(99, 102, 241, 0.2);
    --chart-grid: rgba(255, 255, 255, 0.1);
}
```

### 3.4 ECharts Theme Registration

```javascript
// Register custom theme at initialization
echarts.registerTheme('luno', {
    color: [
        '#6366f1', // Primary
        '#ec4899', // Secondary
        '#10b981', // Accent
        '#f59e0b', // Warning
        '#3b82f6', // Info
        '#8b5cf6', // Purple
        '#14b8a6', // Teal
        '#f43f5e'  // Rose
    ],
    backgroundColor: 'transparent',
    textStyle: {
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    },
    title: {
        textStyle: {
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 600
        },
        subtextStyle: {
            color: 'rgba(255, 255, 255, 0.6)'
        }
    },
    legend: {
        textStyle: {
            color: 'rgba(255, 255, 255, 0.75)'
        }
    },
    tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(99, 102, 241, 0.3)',
        borderWidth: 1,
        textStyle: {
            color: '#ffffff'
        }
    },
    categoryAxis: {
        axisLine: {
            lineStyle: { color: 'rgba(255, 255, 255, 0.2)' }
        },
        axisTick: {
            lineStyle: { color: 'rgba(255, 255, 255, 0.2)' }
        },
        axisLabel: {
            color: 'rgba(255, 255, 255, 0.6)'
        },
        splitLine: {
            lineStyle: { color: 'rgba(255, 255, 255, 0.05)' }
        }
    },
    valueAxis: {
        axisLine: {
            lineStyle: { color: 'rgba(255, 255, 255, 0.2)' }
        },
        axisTick: {
            lineStyle: { color: 'rgba(255, 255, 255, 0.2)' }
        },
        axisLabel: {
            color: 'rgba(255, 255, 255, 0.6)'
        },
        splitLine: {
            lineStyle: { color: 'rgba(255, 255, 255, 0.1)' }
        }
    }
});
```

### 3.5 Navigation Integration

```html
<!-- Add before closing </body> tag -->
<script src="/shared/nav-component.js"></script>
```

---

## 4. Sample Data

### 4.1 TechEd Academy Dataset

```javascript
const techEdData = {
    // Enrollment trends (bar chart)
    enrollment: {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        students: [120, 200, 150, 180, 220, 280],
        target: [100, 150, 180, 200, 220, 250]
    },

    // Program distribution (pie chart)
    programs: [
        { name: 'Web Development', value: 340 },
        { name: 'Data Science', value: 280 },
        { name: 'UX Design', value: 190 },
        { name: 'Mobile Development', value: 150 },
        { name: 'Cloud Computing', value: 120 }
    ],

    // Progress tracking (line chart)
    progress: {
        weeks: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        completion: [5, 12, 18, 28, 35, 42, 48, 55, 62, 70, 78, 85],
        engagement: [80, 75, 82, 78, 85, 88, 82, 90, 85, 88, 92, 95]
    },

    // Skill assessment (radar chart)
    skills: {
        categories: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'DevOps'],
        cohort2025: [90, 85, 75, 70, 65, 55],
        cohort2026: [85, 90, 85, 80, 75, 70]
    },

    // Completion rate (gauge)
    completionRate: 73.5,

    // Student satisfaction (for potential additional chart)
    satisfaction: {
        categories: ['Course Content', 'Instructors', 'Support', 'Platform', 'Career Services'],
        scores: [4.5, 4.8, 4.2, 4.6, 4.3]
    }
};
```

---

## 5. Testing Checklist

### 5.1 Functional Tests

- [ ] Page loads without JavaScript errors
- [ ] All 6 charts render correctly
- [ ] Tooltips display on hover
- [ ] Legend toggles work
- [ ] Animations play smoothly
- [ ] DataZoom on line chart works
- [ ] Window resize updates chart sizes
- [ ] Loading states appear during initialization

### 5.2 Responsive Tests

| Viewport | Test | Status |
|----------|------|--------|
| Mobile (320px) | Single column layout | [ ] |
| Mobile (375px) | Charts readable | [ ] |
| Tablet (768px) | Two column layout | [ ] |
| Desktop (1200px) | Full layout | [ ] |
| Large (1920px) | Max-width contained | [ ] |

### 5.3 Accessibility Tests

- [ ] Keyboard-only navigation (Tab through page)
- [ ] Screen reader test (NVDA or VoiceOver)
- [ ] All charts have `role="img"` and `aria-label`
- [ ] Color contrast check (4.5:1 minimum for text)
- [ ] Focus visible on interactive elements
- [ ] `prefers-reduced-motion` disables animations

### 5.4 Performance Tests

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Lighthouse Performance | 85+ | | [ ] |
| First Contentful Paint | <2s | | [ ] |
| Largest Contentful Paint | <4s | | [ ] |
| Cumulative Layout Shift | <0.1 | | [ ] |
| Total Blocking Time | <300ms | | [ ] |

### 5.5 Browser Tests

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | [ ] | |
| Firefox | Latest | [ ] | |
| Safari | Latest | [ ] | |
| Edge | Latest | [ ] | |
| Mobile Safari | Latest | [ ] | |
| Chrome Android | Latest | [ ] | |

---

## 6. Rollback Plan

If integration fails:

1. **Git revert:** `git revert [commit-hash]` for related commits
2. **Remove folder:** Delete `/echarts/` directory
3. **Update navigation:** Remove entry from `nav-component.js`
4. **Document issues:** Create `docs/research/archive/echarts-failed.md`
5. **Update status:** Change INDEX.md status to "On Hold"
6. **Alternative:** Consider Chart.js for simpler needs

---

## 7. Progress Log

| Date | Phase | Progress | Blockers |
|------|-------|----------|----------|
| 2026-01-27 | Pre | PRD and integration plan created | None |
| | 1 | Not started | |
| | 2 | Not started | |
| | 3 | Not started | |
| | 4 | Not started | |

---

## 8. Estimated Timeline

| Phase | Duration | Cumulative |
|-------|----------|------------|
| Phase 1: Basic Setup | 2-3 hours | 3 hours |
| Phase 2: Content Integration | 3-4 hours | 7 hours |
| Phase 3: Quality & Polish | 2-3 hours | 10 hours |
| Phase 4: Documentation | 1-2 hours | 12 hours |
| **Total** | **8-12 hours** | |

**Recommended Schedule:**
- Day 1: Phase 1 + Phase 2 start (4 hours)
- Day 2: Phase 2 complete + Phase 3 (4 hours)
- Day 3: Phase 3 complete + Phase 4 (4 hours)

---

## 9. Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | | | [ ] |
| Reviewer | | | [ ] |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial plan |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
