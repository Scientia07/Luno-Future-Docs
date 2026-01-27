<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       adding-new-framework.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [../INDEX.md, ../templates/]
description:    Guide for adding new presentation frameworks
==============================================================================
-->

# Adding a New Framework

> **Purpose:** Step-by-step guide for adding new presentation/documentation frameworks
> **Audience:** Developers, AI agents

---

## Quick Reference

```
1. Research → docs/research/active/[name]-research.md
2. Decide → Proceed / Hold / Reject
3. PRD → docs/frameworks/[name]/prd-[name].md
4. Plan → docs/frameworks/[name]/integration-plan.md
5. Build → /[name]/index.html
6. Document → Update INDEX.md, nav, dashboard
```

---

## Phase 1: Research

### 1.1 Create Research Document

```bash
# Copy template
cp docs/templates/research-template.md docs/research/active/[name]-research.md
```

### 1.2 Complete Research

Answer these questions:
- What unique capability does this add?
- What are the dependencies?
- What's the license?
- How does it compare to existing frameworks?
- What are the risks?

### 1.3 Make Recommendation

| Decision | Action |
|----------|--------|
| **Proceed** | Continue to Phase 2 |
| **Hold** | Document what's needed, revisit later |
| **Reject** | Move to `research/archive/`, update INDEX.md |

---

## Phase 2: Documentation

### 2.1 Create Framework Folder

```bash
mkdir -p docs/frameworks/[name]
```

### 2.2 Create PRD

```bash
cp docs/templates/prd-framework-template.md docs/frameworks/[name]/prd-[name].md
```

Complete all sections, especially:
- Dependencies
- Features catalog
- Accessibility requirements
- Customization points

### 2.3 Create Integration Plan

```bash
cp docs/templates/integration-plan-template.md docs/frameworks/[name]/integration-plan.md
```

Break implementation into phases:
1. Basic setup
2. Content integration
3. Quality & polish
4. Documentation

---

## Phase 3: Implementation

### 3.1 Create Demo Folder

```bash
mkdir -p [name]
```

### 3.2 Create index.html

**Required elements:**
```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       index.html
created:        YYYY-MM-DD
...
==============================================================================
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Framework] demo for TechEd Academy">
    <title>[Framework] | LunoLabs</title>
    <!-- Dependencies -->
</head>
<body>
    <!-- Content -->
    <script src="/shared/nav-component.js"></script>
</body>
</html>
```

### 3.3 Apply Project Standards

**CSS Variables (required):**
```css
:root {
    --color-primary: #6366f1;
    --color-secondary: #ec4899;
    --color-accent: #10b981;
    --bg-dark: #0f172a;
    --bg-darker: #0a0a1a;
    --text-primary: #ffffff;
    --text-muted: rgba(255,255,255,0.75);
}
```

### 3.4 Add TechEd Academy Content

Use consistent content structure:
1. Hero section
2. Program overview
3. Technical details
4. Timeline
5. Pricing
6. CTA

---

## Phase 4: Quality Assurance

### 4.1 Accessibility Checklist

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA landmarks present
- [ ] Color contrast 4.5:1+
- [ ] Alt text on images
- [ ] `prefers-reduced-motion` respected

### 4.2 Performance Checklist

- [ ] Lighthouse score 90+
- [ ] No console errors
- [ ] Images optimized
- [ ] Dependencies from CDN with preconnect

### 4.3 Responsive Checklist

- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1200px)

---

## Phase 5: Integration

### 5.1 Update nav-component.js

Add to `/shared/nav-component.js`:
```javascript
// In the demos array
{ name: '[Framework Name]', path: '/[name]/', icon: '🎯' }
```

### 5.2 Update INDEX.md

Add to Active Frameworks table in `docs/INDEX.md`

### 5.3 Update Dashboard

Add card to `/dashboard/index.html`

### 5.4 Update ROADMAP.md

Mark milestone as completed

---

## Checklist Summary

### Before Starting
- [ ] Research document created
- [ ] Recommendation: Proceed

### Documentation
- [ ] PRD created and complete
- [ ] Integration plan created

### Implementation
- [ ] Demo folder created
- [ ] index.html with metadata
- [ ] Project CSS variables applied
- [ ] Content added
- [ ] nav-component.js included

### Quality
- [ ] Accessibility audit passed
- [ ] Performance audit passed
- [ ] Responsive testing passed

### Integration
- [ ] nav-component.js updated
- [ ] INDEX.md updated
- [ ] Dashboard updated
- [ ] ROADMAP.md updated
- [ ] Research moved to completed (if applicable)

---

## Example Timeline

| Day | Task |
|-----|------|
| 1 | Research & decision |
| 2 | PRD & integration plan |
| 3-4 | Basic implementation |
| 5 | Quality & polish |
| 6 | Documentation & integration |

---

*See [INDEX.md](../INDEX.md) for complete documentation index*
