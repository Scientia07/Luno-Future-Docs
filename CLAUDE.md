<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       CLAUDE.md
created:        2026-01-16
updated:        2026-02-16
version:        1.2.0
status:         active
rating:         ★★★★★ (critical project file)
author:         Joel + Claude
related_docs:   [TO-DOS.md, docs/]
description:    Project instructions for AI agents and developers
==============================================================================
-->

# Luno-Future-Docs - Project Instructions

> **Project:** Interactive Documentation Showcase for LunoLabs
> **Type:** Static HTML/CSS/JS presentation formats
> **Status:** Active Development

---

## Project Overview

This repository showcases multiple interactive documentation formats for LunoLabs educational content. It includes presentations in Framer, Gamma, Lottie, Reveal.js, Scrollytelling, and Slidev formats.

### Tech Stack
- Pure HTML5/CSS3/JavaScript (no build tools)
- External: Chart.js, Lottie Player, Reveal.js
- **Animation Frameworks:** Remotion (React), Manim (Python), Three.js
- Design: Dark theme, CSS custom properties

### Directory Structure
```
/dashboard/          → Main hub
/animation-lab/      → Animation framework testing (Remotion, Manim, Three.js)
/enhanced/           → Optimized versions (4 formats)
/offerte/            → Professional offers (German)
/framer-guide/       → Framer showcase
/gamma-guide/        → Gamma.app showcase
/lottie-html/        → Lottie animations
/motion-canvas/      → Motion Canvas
/reveal-js/          → Slide presentations
/scrollytelling/     → Scroll narratives
/slidev/             → Markdown presentations
/docs/               → Documentation & PRDs
```

---

## File Standards (CRITICAL)

### 1. Metadata Header (Required for ALL files)

Every file we create MUST include this metadata block:

**For Markdown files (.md):**
```markdown
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       example.md
created:        YYYY-MM-DD
updated:        YYYY-MM-DD
version:        X.Y.Z
status:         [draft|active|review|archived]
rating:         ★☆☆☆☆ to ★★★★★
author:         Name
related_docs:   [file1.md, file2.md]
description:    Brief description of file purpose
==============================================================================
-->
```

**For HTML files:**
```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       example.html
created:        YYYY-MM-DD
updated:        YYYY-MM-DD
version:        X.Y.Z
status:         [draft|active|review|archived]
rating:         ★☆☆☆☆ to ★★★★★
author:         Name
related_docs:   [file1.html, file2.md]
description:    Brief description
==============================================================================
-->
<!DOCTYPE html>
...
```

**For CSS/JS files:**
```css
/*
==============================================================================
FILE METADATA
==============================================================================
filename:       styles.css
created:        YYYY-MM-DD
updated:        YYYY-MM-DD
version:        X.Y.Z
status:         [draft|active|review|archived]
related_docs:   [index.html]
description:    Brief description
==============================================================================
*/
```

### 2. Version Numbering

Use semantic versioning: `MAJOR.MINOR.PATCH`
- **MAJOR:** Breaking changes, major rewrites
- **MINOR:** New features, significant updates
- **PATCH:** Bug fixes, small improvements

### 3. Status Values

| Status | Meaning |
|--------|---------|
| `draft` | Work in progress, not ready |
| `active` | Current, maintained |
| `review` | Needs review/approval |
| `archived` | No longer maintained |

### 4. Rating System

| Rating | Meaning |
|--------|---------|
| ★☆☆☆☆ | Needs major work |
| ★★☆☆☆ | Functional but issues |
| ★★★☆☆ | Good, some improvements needed |
| ★★★★☆ | Very good |
| ★★★★★ | Excellent, production ready |

---

## Task Management

### TO-DOS.md Structure

Always maintain `/TO-DOS.md` with:
- Quick stats table (priority counts, completion %)
- Tasks grouped by priority (High → Low)
- Each task includes:
  - [ ] Checkbox
  - Due date
  - Effort estimate
  - Impact description
  - Specific file locations
  - Code examples where helpful
- Daily/weekly schedule
- Update after completing each task

### Task Updates

When completing tasks:
1. Mark checkbox `[x]`
2. Add completion date
3. Update stats table
4. Note any issues encountered

---

## Documentation Standards

### When to Create a PRD

Create a PRD (`/docs/prd-[feature].md`) when:
- Adding a new major feature
- Exploring a new concept/technology
- Planning significant refactoring
- Starting a new sprint/phase

### PRD Template Location

`/docs/templates/prd-template.md`

### Roadmap

Maintain `/docs/ROADMAP.md` with:
- Current sprint goals
- Upcoming milestones
- Long-term vision
- Version history

---

## Code Standards

### HTML
- Valid DOCTYPE and lang attribute
- Meta description required
- Semantic elements (`<main>`, `<nav>`, `<section>`)
- Alt text on all images
- ARIA landmarks

### CSS
- Use CSS custom properties (`:root`)
- Follow project color system:
  ```css
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --color-accent: #10b981;
  --bg-dark: #0f172a;
  --text-muted: rgba(255,255,255,0.75);
  ```
- Mobile-first responsive design
- Include focus states for accessibility

### JavaScript
- Always add null checks for DOM queries
- Use `const`/`let`, never `var`
- Add error handling for async operations
- Use event listeners, not inline `onclick`

---

## AI Agent Instructions

### For Claude/AI Assistants

1. **Always check TO-DOS.md first** - understand current tasks and priorities
2. **Update metadata** when editing files - bump version, update date
3. **Follow file standards** - include metadata header in new files
4. **Be concise** - use tables and bullet points over paragraphs
5. **Reference specific locations** - file paths and line numbers
6. **Update task lists** - mark completed, add new discoveries

### Quick Commands

| Command | Action |
|---------|--------|
| `/sc:analyze` | Run code analysis |
| `/sc:build` | Implementation mode |
| `/sc:test` | Run tests |
| `/remotion` | Remotion video creation skill |
| `/svelte` | Svelte 5 runes, components, SvelteKit |
| `/chroma` | Chroma.js color manipulation skill |

---

## Skills (Auto-Activation)

Skills provide domain-specific knowledge. Agents should automatically use these when context matches.

### Available Skills

| Skill | Trigger Context | Use For |
|-------|-----------------|---------|
| `remotion` | Working in `/animation-lab/remotion/`, `.tsx` files with Remotion imports, video composition tasks | React-based video creation, animations, compositions, captions |
| `svelte` | Working in `/design-studio/v2-svelte/`, `.svelte` files, runes imports ($state, $derived, $effect) | Svelte 5 components, runes API, stores, SvelteKit routing |
| `chroma` | Working in `/design-studio/`, color palette/harmony tasks, Chroma.js imports | OKLCH color spaces, palette generation, WCAG contrast, colorblind simulation |
| `confidence-check` | Before implementing features | Pre-implementation validation |
| `security` | Auth flows, API endpoints, user input | Security reviews, OWASP checks |

### Remotion Skill (Primary for this project)

**Auto-activate when:**
- Working in `animation-lab/remotion/` directory
- Creating video compositions or animations
- User mentions: video, animation, Remotion, composition, timeline, interpolate, spring

**Key rules to read:**
- `~/.claude/skills/remotion/rules/animations.md` - Core animation patterns
- `~/.claude/skills/remotion/rules/compositions.md` - Composition setup
- `~/.claude/skills/remotion/rules/timing.md` - Interpolation and springs
- `~/.claude/skills/remotion/rules/charts.md` - Data visualization
- `~/.claude/skills/remotion/rules/3d.md` - Three.js integration

**Example activation:**
```
User: "Create an animated bar chart in Remotion"
Agent: [Reads ~/.claude/skills/remotion/rules/charts.md]
Agent: [Reads ~/.claude/skills/remotion/rules/animations.md]
Agent: [Implements using skill patterns]
```

### Svelte 5 Skill (Design Studio v2)

**Auto-activate when:**
- Working in `design-studio/v2-svelte/` directory
- Creating or editing `.svelte` files
- User mentions: Svelte, runes, $state, $derived, $effect, $props, SvelteKit

**Key rules to read:**
- `~/.claude/skills/svelte/rules/runes.md` - $state, $derived, $effect, $props (CRITICAL)
- `~/.claude/skills/svelte/rules/components.md` - Props, snippets, events
- `~/.claude/skills/svelte/rules/stores.md` - Shared state, .svelte.js files
- `~/.claude/skills/svelte/rules/lifecycle.md` - onMount, $effect lifecycle
- `~/.claude/skills/svelte/rules/transitions.md` - Animations, FLIP, spring/tweened
- `~/.claude/skills/svelte/rules/styling.md` - Scoped CSS, --style-props, class directive
- `~/.claude/skills/svelte/rules/sveltekit.md` - Routing, load functions, layouts

**CRITICAL Svelte 5 rules (always check first):**
- Use `$state()` not `let`, `$derived()` not `$:`, `$effect()` not `afterUpdate`
- Use `onclick` not `on:click`, `{#snippet}` not `<slot>`
- File must be `.svelte.js` to use runes outside components

### Chroma.js Skill (Color Engine)

**Auto-activate when:**
- Working in `design-studio/` directory on color features
- Files import `chroma-js` or `chroma`
- User mentions: color palette, OKLCH, color harmony, contrast check, colorblind

**Key rules to read:**
- `~/.claude/skills/chroma/rules/color-spaces.md` - HSL vs OKLCH vs LAB, conversions
- `~/.claude/skills/chroma/rules/palette-generation.md` - Scales, Bezier, Brewer palettes
- `~/.claude/skills/chroma/rules/contrast.md` - WCAG AA/AAA, luminance, auto text color
- `~/.claude/skills/chroma/rules/harmony.md` - Complementary, analogous, triadic, tetradic
- `~/.claude/skills/chroma/rules/colorblind.md` - CVD simulation, safe palettes

**Key pattern:** Always use `.mode('oklch')` for color interpolation (not HSL or RGB).

### Key Files to Check

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file - project instructions |
| `TO-DOS.md` | Current tasks and progress |
| `docs/ROADMAP.md` | Project roadmap |
| `docs/prd-*.md` | Feature specifications |

---

## Current Sprint

**Sprint:** Week of Jan 16-23, 2026
**Focus:** Frontend quality improvements (accessibility, CSS, JS)
**Tasks:** 12 total (see TO-DOS.md)

### Priority Files This Sprint

1. `enhanced/scrollytelling-pro/index.html` - Most issues
2. `offerte/lunolabs-offerte-v2.html` - Main offer document
3. `dashboard/index.html` - Entry point

---

## Contacts & Resources

- **Project:** Luno-Future-Docs
- **Part of:** LunoLabs ecosystem
- **WCAG Reference:** https://www.w3.org/WAI/WCAG21/quickref/

---

*Last updated: 2026-02-16 | Version 1.2.0*
