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
related_docs:   [index.html, ../docs/frameworks/echarts/prd-echarts.md]
description:    Quick reference guide for ECharts data visualization demo
==============================================================================
-->

# ECharts Data Visualization Demo

> Interactive data visualization showcase using Apache ECharts for TechEd Academy analytics.

## Quick Start

Open `index.html` in a browser. No build step required.

```bash
# From project root
open echarts/index.html
# Or use a local server
npx serve .
```

## Features

| Feature | Description |
|---------|-------------|
| 6 Chart Types | Bar, Pie/Donut, Line, Radar, Gauge, Area |
| Custom Theme | "luno" theme matching project design system |
| Responsive | 2-column grid, mobile-friendly |
| Accessible | `role="img"`, `aria-label`, keyboard navigation |
| Reduced Motion | Respects `prefers-reduced-motion` |
| DataZoom | Interactive zoom on progress chart |

## Charts Included

1. **Enrollment Bar Chart** - Monthly student enrollment vs targets
2. **Program Distribution** - Donut chart of program enrollment
3. **Progress Tracking** - Line chart with DataZoom slider
4. **Skill Assessment** - Radar comparing cohorts
5. **Completion Gauge** - Animated gauge with thresholds
6. **Satisfaction Scores** - Horizontal bar chart
7. **Enrollment Trend** - Cumulative area chart (bonus)

## Tech Stack

- **Library:** Apache ECharts 5.x (CDN)
- **Bundle:** Full bundle for gauge support (~1MB)
- **Theme:** Custom registered "luno" theme
- **No build tools** - Pure HTML/CSS/JS

## Project Colors (CSS Variables)

```css
--color-primary: #6366f1;
--color-secondary: #ec4899;
--color-accent: #10b981;
--color-warning: #f59e0b;
--color-danger: #ef4444;
--bg-dark: #0f172a;
--bg-darker: #0a0a1a;
```

## Sample Data

All data is embedded in `index.html` using the `techEdData` object:

- `enrollment` - Monthly student counts and targets
- `programs` - Program distribution by name/value
- `progress` - Weekly completion and engagement rates
- `skills` - Cohort comparison across 6 skill categories
- `completionRate` - Single percentage value
- `satisfaction` - Category scores out of 5

## Customization

### Adding a New Chart

1. Add a new chart container in HTML:
   ```html
   <div id="chart-new" class="chart" role="img" aria-label="Description" tabindex="0"></div>
   ```

2. Create a chart function:
   ```javascript
   function createNewChart() {
       const chart = initChart('chart-new');
       if (!chart) return;
       chart.setOption({ /* config */ });
   }
   ```

3. Call it in `initAllCharts()`.

### Modifying the Theme

Edit the `echarts.registerTheme('luno', {...})` block in `index.html`.

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Resources

- [ECharts Documentation](https://echarts.apache.org/en/option.html)
- [ECharts Examples](https://echarts.apache.org/examples/)
- [Project Integration Plan](../docs/frameworks/echarts/integration-plan.md)

---

*Part of [Interactive Documentation Showcase](../dashboard/index.html)*
