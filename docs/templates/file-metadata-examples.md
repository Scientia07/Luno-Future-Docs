<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       file-metadata-examples.md
created:        2026-01-16
updated:        2026-01-16
version:        1.0.0
status:         active
rating:         ★★★★★ (reference file)
author:         Joel + Claude
related_docs:   [CLAUDE.md]
description:    Quick-copy metadata templates for all file types
==============================================================================
-->

# File Metadata Templates

Quick-copy templates for consistent file headers.

---

## Markdown Files (.md)

```markdown
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       [NAME].md
created:        [YYYY-MM-DD]
updated:        [YYYY-MM-DD]
version:        [X.Y.Z]
status:         [draft|active|review|archived]
rating:         [★☆☆☆☆ to ★★★★★]
author:         [Name]
related_docs:   [file1.md, file2.md]
description:    [Brief description]
==============================================================================
-->
```

---

## HTML Files (.html)

```html
<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       [NAME].html
created:        [YYYY-MM-DD]
updated:        [YYYY-MM-DD]
version:        [X.Y.Z]
status:         [draft|active|review|archived]
rating:         [★☆☆☆☆ to ★★★★★]
author:         [Name]
related_docs:   [file1.html, styles.css]
description:    [Brief description]
==============================================================================
-->
<!DOCTYPE html>
```

---

## CSS Files (.css)

```css
/*
==============================================================================
FILE METADATA
==============================================================================
filename:       [NAME].css
created:        [YYYY-MM-DD]
updated:        [YYYY-MM-DD]
version:        [X.Y.Z]
status:         [draft|active|review|archived]
author:         [Name]
related_docs:   [index.html]
description:    [Brief description]
==============================================================================
*/
```

---

## JavaScript Files (.js)

```javascript
/**
 * ===========================================================================
 * FILE METADATA
 * ===========================================================================
 * filename:       [NAME].js
 * created:        [YYYY-MM-DD]
 * updated:        [YYYY-MM-DD]
 * version:        [X.Y.Z]
 * status:         [draft|active|review|archived]
 * author:         [Name]
 * related_docs:   [index.html]
 * description:    [Brief description]
 * ===========================================================================
 */
```

---

## JSON Files (.json)

JSON doesn't support comments, so add metadata as a property:

```json
{
  "_metadata": {
    "filename": "[NAME].json",
    "created": "[YYYY-MM-DD]",
    "updated": "[YYYY-MM-DD]",
    "version": "[X.Y.Z]",
    "status": "[draft|active|review|archived]",
    "description": "[Brief description]"
  },
  "data": {}
}
```

---

## Status Reference

| Status | When to Use |
|--------|-------------|
| `draft` | Work in progress, incomplete |
| `active` | Complete, currently maintained |
| `review` | Needs review before approval |
| `archived` | No longer maintained, kept for reference |

---

## Rating Reference

| Rating | Meaning | When to Use |
|--------|---------|-------------|
| ★☆☆☆☆ | Poor | Needs major rework |
| ★★☆☆☆ | Fair | Functional but has issues |
| ★★★☆☆ | Good | Works well, minor improvements needed |
| ★★★★☆ | Very Good | High quality, minor polish possible |
| ★★★★★ | Excellent | Production ready, exemplary |

---

## Version Guidelines

**Semantic Versioning: MAJOR.MINOR.PATCH**

| Change Type | Example | Version Bump |
|-------------|---------|--------------|
| Breaking change, rewrite | Complete redesign | 1.0.0 → 2.0.0 |
| New feature, significant update | Add new section | 1.0.0 → 1.1.0 |
| Bug fix, small tweak | Fix typo | 1.0.0 → 1.0.1 |

---

*Last updated: 2026-01-16*
