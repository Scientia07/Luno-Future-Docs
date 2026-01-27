<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-echarts.md
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         draft
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [integration-plan.md, ../../research/active/data-visualization/echarts-research.md]
description:    Product Requirements Document for Apache ECharts data visualization framework
==============================================================================
-->

# PRD: Apache ECharts

> **Framework:** Apache ECharts
> **Version:** 5.x (Latest)
> **Status:** Planned
> **Last Evaluated:** 2026-01-27
> **Demo:** [Link to demo](/echarts/) *(not yet implemented)*

---

## 1. Overview

### 1.1 Summary

Apache ECharts is a powerful, interactive charting and data visualization library that fills a critical gap in the Luno-Future-Docs portfolio. Originally developed by Baidu and now an Apache Software Foundation top-level project, ECharts provides 20+ chart types, smooth animations, geographic maps, and handles datasets of 100k+ points with ease. This framework enables the creation of compelling data-driven documentation with rich interactivity.

### 1.2 Official Resources

| Resource | Link |
|----------|------|
| Website | [https://echarts.apache.org/](https://echarts.apache.org/) |
| Documentation | [https://echarts.apache.org/handbook/](https://echarts.apache.org/handbook/) |
| GitHub | [https://github.com/apache/echarts](https://github.com/apache/echarts) |
| NPM/CDN | [https://www.jsdelivr.com/package/npm/echarts](https://www.jsdelivr.com/package/npm/echarts) |
| Examples Gallery | [https://echarts.apache.org/examples/](https://echarts.apache.org/examples/) |

### 1.3 Framework Category

- [ ] Slide-based presentation
- [ ] Scroll-driven narrative
- [ ] Animation library
- [ ] Video generation
- [ ] Card-based layout
- [x] Data visualization

---

## 2. Technical Specifications

### 2.1 Dependencies

| Dependency | Version | Required | CDN Available |
|------------|---------|----------|---------------|
| echarts.min.js | 5.x | Yes | Yes |
| echarts.simple.min.js | 5.x | Optional | Yes |
| zrender | Included | Yes (bundled) | N/A |

**Bundle Options:**

| Bundle | Size | Use Case |
|--------|------|----------|
| Full (`echarts.min.js`) | ~1MB | All chart types, maps, 3D |
| Simple (`echarts.simple.min.js`) | ~400KB | Basic charts only |
| Custom build | Variable | Tree-shaking for specific charts |

### 2.2 File Structure

```
/echarts/
├── index.html              # Main demo file with all chart examples
├── assets/
│   ├── data/
│   │   └── sample-data.json    # TechEd Academy sample datasets
│   └── maps/
│       └── world.json          # Optional: geographic map data
└── README.md               # Quick reference guide
```

### 2.3 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Best performance |
| Firefox | 90+ | Good performance |
| Safari | 14+ | Good performance |
| Edge | 90+ | Good performance |
| IE11 | With polyfills | Not recommended |

### 2.4 Performance Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Initial load time | N/A | <4s (due to bundle size) |
| Bundle size | ~1MB full / ~400KB simple | Use simple bundle for demo |
| Lighthouse Performance | N/A | 85+ |
| Data point handling | N/A | 10k+ points smooth |

---

## 3. Features Catalog

### 3.1 Core Features

| Feature | Supported | Notes |
|---------|-----------|-------|
| Offline mode | Yes | After initial CDN load |
| Keyboard navigation | Partial | Custom implementation needed |
| Touch support | Yes | Built-in touch interactions |
| Print/PDF export | Yes | Built-in `getDataURL()` method |
| Responsive resize | Yes | `chart.resize()` on window resize |
| Real-time updates | Yes | `setOption()` with merge |

### 3.2 Chart Types

| Category | Types | Priority for Demo |
|----------|-------|-------------------|
| Basic | Line, Bar, Pie, Scatter | High |
| Statistical | Boxplot, Heatmap | Medium |
| Geographic | Map, GeoJSON | Medium |
| Relationship | Graph, Tree, Treemap, Sunburst | Low |
| Specialized | Gauge, Funnel, Radar, Calendar | High |
| 3D | Bar3D, Scatter3D, Surface, Globe | Low |

### 3.3 Animation Capabilities

| Animation Type | Supported | Complexity |
|----------------|-----------|------------|
| Enter/Exit animations | Yes | Low |
| Data transitions | Yes | Low |
| Timeline playback | Yes | Medium |
| Custom easing | Yes | Medium |
| Morphing between types | Yes | High |

### 3.4 Interactivity Features

| Feature | Description |
|---------|-------------|
| Tooltip | Rich hover tooltips with formatting |
| Legend | Interactive show/hide series |
| DataZoom | Zoom and pan on data |
| Brush | Select data points/regions |
| Toolbox | Built-in export, zoom, reset tools |
| Drill-down | Click to explore nested data |

---

## 4. Accessibility (WCAG 2.1)

### 4.1 Compliance Status

| Criterion | Level | Status | Notes |
|-----------|-------|--------|-------|
| 1.1.1 Non-text Content | A | Partial | Requires aria-label on containers |
| 1.4.3 Contrast | AA | Pass | Theme-dependent |
| 2.1.1 Keyboard | A | Partial | Custom keyboard handlers needed |
| 2.4.7 Focus Visible | AA | Partial | Custom implementation |

### 4.2 Accessibility Features

- [ ] Skip links (requires custom implementation)
- [ ] ARIA landmarks (requires custom implementation)
- [x] Screen reader compatible (with `aria-label` descriptions)
- [x] Reduced motion support (can disable animations)
- [ ] High contrast mode (requires custom theme)

### 4.3 Accessibility Implementation Plan

| Task | Priority | Implementation |
|------|----------|----------------|
| Add `role="img"` to chart containers | High | HTML attribute |
| Add `aria-label` with chart description | High | Dynamic generation |
| Provide data table alternative | Medium | Hidden accessible table |
| Keyboard navigation for data points | Low | Custom event handlers |

### 4.4 Known Issues

| Issue | Severity | Workaround |
|-------|----------|------------|
| Canvas not screen-reader friendly | Medium | Add aria-label descriptions |
| No native keyboard navigation | Medium | Implement custom handlers |
| Color-only data differentiation | Medium | Use patterns/shapes |

---

## 5. Customization Points

### 5.1 Theming (CSS Variables)

```css
:root {
    /* Project standard colors */
    --color-primary: #6366f1;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --bg-dark: #0f172a;
    --bg-darker: #0a0a1a;
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);

    /* ECharts-specific color palette */
    --echarts-color-1: #6366f1;  /* Primary - Indigo */
    --echarts-color-2: #ec4899;  /* Secondary - Pink */
    --echarts-color-3: #10b981;  /* Accent - Emerald */
    --echarts-color-4: #f59e0b;  /* Warning - Amber */
    --echarts-color-5: #3b82f6;  /* Info - Blue */
    --echarts-color-6: #8b5cf6;  /* Purple */
}
```

### 5.2 ECharts Theme Configuration

```javascript
// Custom theme matching project design system
const lunoTheme = {
    color: ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6'],
    backgroundColor: 'transparent',
    textStyle: {
        color: 'rgba(255,255,255,0.75)'
    },
    title: {
        textStyle: {
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 600
        }
    },
    legend: {
        textStyle: {
            color: 'rgba(255,255,255,0.75)'
        }
    },
    tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(99, 102, 241, 0.3)',
        textStyle: {
            color: '#ffffff'
        }
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255,255,255,0.2)'
        }
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(255,255,255,0.1)'
        }
    }
};

// Register theme
echarts.registerTheme('luno', lunoTheme);

// Use theme
const chart = echarts.init(container, 'luno');
```

### 5.3 Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `renderer` | string | 'canvas' | 'canvas' or 'svg' |
| `devicePixelRatio` | number | window.devicePixelRatio | Resolution multiplier |
| `width` | number/string | 'auto' | Chart width |
| `height` | number/string | 'auto' | Chart height |
| `locale` | string | 'EN' | Localization |

### 5.4 Extension Points

| Extension Type | Difficulty | Notes |
|----------------|------------|-------|
| Custom themes | Easy | `registerTheme()` API |
| Custom series | Medium | `registerVisual()` API |
| Custom maps | Medium | GeoJSON import |
| WebGL extensions | Hard | Requires echarts-gl |

---

## 6. Integration Guide

### 6.1 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECharts Demo - TechEd Academy</title>

    <!-- ECharts from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
</head>
<body>
    <!-- Chart container -->
    <div id="chart" style="width: 100%; height: 400px;"></div>

    <script>
        // Initialize chart
        const chart = echarts.init(document.getElementById('chart'));

        // Set options
        chart.setOption({
            title: { text: 'Student Enrollment' },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: { type: 'value' },
            series: [{
                name: 'Students',
                type: 'bar',
                data: [120, 200, 150, 80, 70, 110]
            }]
        });

        // Handle resize
        window.addEventListener('resize', () => chart.resize());
    </script>
</body>
</html>
```

### 6.2 With Project Standards

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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Visualization | TechEd Academy</title>

    <!-- Project CSS variables -->
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

        body {
            background: var(--bg-darker);
            color: var(--text-primary);
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 2rem;
        }

        .chart-container {
            background: var(--bg-dark);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 2rem;
        }

        .chart {
            width: 100%;
            height: 400px;
        }
    </style>

    <!-- ECharts -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
</head>
<body>
    <main>
        <h1>TechEd Academy Analytics</h1>

        <div class="chart-container">
            <div id="enrollment-chart" class="chart"
                 role="img"
                 aria-label="Bar chart showing student enrollment from January to June 2026">
            </div>
        </div>
    </main>

    <!-- Shared navigation -->
    <script src="/shared/nav-component.js"></script>

    <script>
        // Initialize with custom theme
        // ... chart initialization code
    </script>
</body>
</html>
```

### 6.3 Common Patterns

**Pattern 1: Animated Data Updates**
```javascript
// Update chart with animation
function updateChart(newData) {
    chart.setOption({
        series: [{
            data: newData
        }]
    }, {
        notMerge: false,  // Merge with existing options
        lazyUpdate: false // Update immediately
    });
}
```

**Pattern 2: Responsive Charts**
```javascript
// Debounced resize handler
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        chart.resize();
    }, 100);
});
```

**Pattern 3: Loading State**
```javascript
// Show loading
chart.showLoading({
    text: 'Loading data...',
    color: '#6366f1',
    maskColor: 'rgba(15, 23, 42, 0.8)'
});

// After data loads
chart.hideLoading();
chart.setOption(options);
```

---

## 7. Demo Content Specification

### 7.1 TechEd Academy Charts

| Chart | Type | Data | Purpose |
|-------|------|------|---------|
| Enrollment Trends | Animated Bar | Monthly student counts | Show growth over time |
| Program Distribution | Pie/Donut | Course enrollment % | Show program popularity |
| Progress Tracking | Line with Zoom | Daily completion rates | Track student progress |
| Skill Assessment | Radar | Skill scores by category | Visualize competencies |
| Student Locations | Geographic Map | Student counts by region | Show geographic reach |
| Completion Rate | Gauge | Overall % complete | Quick status indicator |

### 7.2 Sample Data Structure

```javascript
const techEdData = {
    enrollment: {
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        students: [120, 200, 150, 180, 220, 280],
        growth: [null, 67, -25, 20, 22, 27]  // % change
    },
    programs: [
        { name: 'Web Development', value: 340, color: '#6366f1' },
        { name: 'Data Science', value: 280, color: '#ec4899' },
        { name: 'UX Design', value: 190, color: '#10b981' },
        { name: 'Mobile Development', value: 150, color: '#f59e0b' },
        { name: 'Cloud Computing', value: 120, color: '#3b82f6' }
    ],
    skills: {
        categories: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'DevOps'],
        student1: [90, 85, 75, 70, 60, 50],
        student2: [70, 90, 80, 85, 75, 65]
    },
    completionRate: 73.5
};
```

### 7.3 Interactive Features to Showcase

| Feature | Implementation | User Benefit |
|---------|----------------|--------------|
| Tooltips | Built-in | Detailed data on hover |
| Legend toggle | Built-in | Filter data series |
| Data zoom | DataZoom component | Explore time ranges |
| Export | Toolbox component | Save as PNG |
| Animation | animationDuration | Engaging presentation |

---

## 8. Evaluation Scores

### 8.1 Quality Criteria

| Criterion | Score | Max | Notes |
|-----------|-------|-----|-------|
| Technical Requirements | 18 | 20 | Large bundle size (-2) |
| User Experience | 19 | 20 | Excellent interactivity |
| Content Quality | 18 | 20 | Rich chart variety |
| **Total** | **55** | **60** | |

### 8.2 Use Case Fit

| Use Case | Fit (1-5) | Notes |
|----------|-----------|-------|
| Data dashboards | 5 | Primary use case |
| Technical presentations | 4 | Great for data-heavy talks |
| Story-driven content | 3 | Animation helps narratives |
| Quick creation | 3 | Learning curve for complex charts |
| Offline delivery | 4 | Works after initial load |
| Premium stakeholders | 5 | Enterprise-grade quality |

### 8.3 Comparison with Chart.js

| Aspect | ECharts | Chart.js |
|--------|---------|----------|
| Bundle size | ~1MB | ~200KB |
| Chart types | 20+ | 8 |
| Maps/Geo | Yes | No |
| 3D support | Yes | No |
| Animation | Rich | Basic |
| Interactivity | Extensive | Limited |
| Learning curve | Medium | Easy |
| **Best for** | Complex visualizations | Simple charts |

### 8.4 Overall Rating

**Rating:** 4.5/5

**Rationale:** ECharts fills a critical gap with its extensive chart types, rich animations, and geographic capabilities. The larger bundle size is the only significant drawback, mitigated by using the simple bundle for basic needs.

---

## 9. Roadmap

### 9.1 Completed

- [x] Research evaluation completed
- [x] PRD created
- [x] Integration plan drafted

### 9.2 Implementation Phases

| Phase | Description | Priority | Target |
|-------|-------------|----------|--------|
| Phase 1 | Basic setup with 2-3 charts | High | Q1 2026 |
| Phase 2 | Full 6-chart demo | High | Q1 2026 |
| Phase 3 | Accessibility improvements | Medium | Q1 2026 |
| Phase 4 | Advanced features (maps, 3D) | Low | Q2 2026 |

### 9.3 Planned Improvements

| Improvement | Priority | Target Version |
|-------------|----------|----------------|
| Add interactive dashboard layout | High | v1.0 |
| Implement real-time data simulation | Medium | v1.1 |
| Add geographic map demo | Medium | v1.2 |
| Create chart comparison tool | Low | v2.0 |

---

## 10. Cross-References

### 10.1 Related Documents

- [Integration Plan](integration-plan.md)
- [Research Notes](../../research/active/data-visualization/echarts-research.md)
- [Demo Implementation](/echarts/) *(to be created)*

### 10.2 Similar Frameworks

| Framework | Key Difference |
|-----------|----------------|
| Chart.js | Simpler, smaller, fewer chart types |
| D3.js | Lower-level, more flexible, steeper learning curve |
| Highcharts | Commercial license, similar features |
| Plotly | More scientific/statistical focus |

### 10.3 Integration with Existing Demos

| Demo | Integration Opportunity |
|------|------------------------|
| Dashboard | Add ECharts section |
| Offerte documents | Enhanced data visualizations |
| Scrollytelling | Data-driven scroll animations |

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-27 | Joel + Claude | Initial PRD |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
