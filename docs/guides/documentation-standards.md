<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       documentation-standards.md
created:        2026-01-26
updated:        2026-01-26
version:        1.0.0
status:         active
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [../INDEX.md, ../templates/, ../../CLAUDE.md]
description:    Documentation standards and conventions
==============================================================================
-->

# Documentation Standards

> **Purpose:** Maintain consistency across all project documentation
> **Source of Truth:** This file + CLAUDE.md

---

## 1. File Metadata (Required)

Every file must have a metadata header:

### Markdown Files
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
description:    Brief description
==============================================================================
-->
```

### HTML Files
```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       example.html
...
==============================================================================
-->
<!DOCTYPE html>
```

### CSS/JS Files
```css
/*
==============================================================================
FILE METADATA
==============================================================================
filename:       styles.css
...
==============================================================================
*/
```

---

## 2. Version Numbering

Use **Semantic Versioning**: `MAJOR.MINOR.PATCH`

| Change Type | Version Bump | Example |
|-------------|--------------|---------|
| Breaking changes | MAJOR | 1.0.0 → 2.0.0 |
| New features | MINOR | 1.0.0 → 1.1.0 |
| Bug fixes | PATCH | 1.0.0 → 1.0.1 |

---

## 3. Status Values

| Status | When to Use |
|--------|-------------|
| `draft` | Work in progress, not ready for use |
| `active` | Current, maintained, ready for use |
| `review` | Needs review/approval before proceeding |
| `archived` | No longer maintained, kept for reference |

---

## 4. Rating System

| Rating | Meaning | When to Use |
|--------|---------|-------------|
| ★☆☆☆☆ | Poor | Needs major work, not usable |
| ★★☆☆☆ | Fair | Functional but has significant issues |
| ★★★☆☆ | Good | Works well, some improvements needed |
| ★★★★☆ | Very Good | High quality, minor polish needed |
| ★★★★★ | Excellent | Production ready, fully polished |

---

## 5. Naming Conventions

### Folders
- Use `lowercase-kebab-case`
- Examples: `reveal-js/`, `motion-canvas/`, `gsap-scrolltrigger/`

### Files
| Type | Convention | Example |
|------|------------|---------|
| PRD | `prd-[name].md` | `prd-reveal-js.md` |
| Integration | `integration-plan.md` | Always same name |
| Research | `[topic]-research.md` | `rive-research.md` |
| Index | `INDEX.md` (uppercase) | Central hub |
| README | `README.md` (uppercase) | Folder overview |

### Framework Identifiers
Use consistent IDs across all docs:

| Display Name | ID |
|--------------|-----|
| Reveal.js | `reveal-js` |
| Slidev | `slidev` |
| Motion Canvas | `motion-canvas` |
| Gamma Style | `gamma` |
| Framer Style | `framer` |
| Lottie + HTML | `lottie` |
| Scrollytelling | `scrollytelling` |

---

## 6. Document Structure

### PRDs
1. Overview (summary, resources, category)
2. Technical Specifications (deps, browser support)
3. Features Catalog
4. Accessibility
5. Customization Points
6. Integration Guide
7. Evaluation Scores
8. Roadmap
9. Cross-References
10. Changelog

### Integration Plans
1. Pre-Integration Checklist
2. Implementation Phases (4 phases)
3. Technical Specifications
4. Testing Checklist
5. Rollback Plan
6. Progress Log
7. Changelog

### Research Documents
1. Research Objective
2. Background
3. Findings
4. Risk Assessment
5. Recommendation
6. References
7. Changelog

---

## 7. Cross-Referencing

### Internal Links
Use relative paths from document location:
```markdown
[Integration Plan](integration-plan.md)
[Index](../../INDEX.md)
[Demo](/reveal-js/)
```

### Required Cross-References

**Every PRD must link to:**
- Its integration plan
- Related research (if applicable)
- Demo folder
- Similar frameworks
- INDEX.md

**Every Integration Plan must link to:**
- Its PRD
- ROADMAP.md
- Demo folder

---

## 8. Changelog Format

Every document needs a changelog at the bottom:

```markdown
## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.1.0 | 2026-02-01 | Name | Added new section |
| 1.0.0 | 2026-01-26 | Name | Initial version |
```

---

## 9. Tables

Use consistent table formatting:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |
```

For status indicators:
- ✅ Complete / Supported
- ⚠️ Partial / Warning
- ❌ Not supported / Failed
- 🔲 Not started / Draft
- 🔄 In progress

---

## 10. Code Blocks

Always specify language for syntax highlighting:

````markdown
```html
<div>Example</div>
```

```css
.example { color: red; }
```

```javascript
const example = true;
```
````

---

## 11. Updating Documents

When making changes:
1. Update `updated` date in metadata
2. Bump version appropriately
3. Add changelog entry
4. Update INDEX.md "Recent Updates" if significant

---

## Quick Reference Card

```
Metadata:    Required on ALL files
Version:     MAJOR.MINOR.PATCH (semantic)
Status:      draft → active → review → archived
Rating:      ★ to ★★★★★
Folders:     lowercase-kebab-case
Files:       prd-[name].md, integration-plan.md
Links:       Relative paths from document
Changelog:   Required at bottom of every doc
```

---

*See [INDEX.md](../INDEX.md) for complete documentation index*
