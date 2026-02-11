<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       prd-design-studio.md
created:        2026-02-10
updated:        2026-02-10
version:        1.0.0
status:         draft
rating:         ★★★★★
author:         Joel + Claude
related_docs:   [prd-design-dashboard.md, ../../design-dashboard/index.html, ../../CLAUDE.md]
description:    PRD for the Design Studio - Interactive visual editor for colors, layouts, shapes, and components
==============================================================================
-->

# PRD: Design Studio

> **Version:** 1.0.0
> **Status:** Draft
> **Author:** Joel + Claude
> **Created:** 2026-02-10
> **Updated:** 2026-02-10
> **Predecessor:** [PRD Design Dashboard](prd-design-dashboard.md)
> **Inspired by:** [tweakcn.com](https://tweakcn.com) | [LayoutIt!](https://layoutit.com) | [SVG-Edit](https://svg-edit.github.io/svgedit/)

---

## 1. Overview

### 1.1 Summary

Das **Design Studio** ist eine Weiterentwicklung des bestehenden Design Dashboards zu einem vollwertigen visuellen Editor. Nutzer können Farbschemas experimentell verändern, Layouts per Drag & Drop zusammenbauen, SVG-Formen erstellen und anpassen, sowie Komponenten live zusammensetzen – alles im Browser, ohne Build-Tools, mit reinem HTML/CSS/JavaScript.

### 1.2 Problem Statement

1. **Eingeschränkte Editierbarkeit:** Das aktuelle Design Dashboard erlaubt nur Farbanpassungen – Typography, Spacing, Formen und Layouts sind nicht editierbar
2. **Kein visuelles Layouting:** CSS Grid/Flexbox-Layouts können nicht visuell erstellt oder umgeordnet werden
3. **Fehlende Shape-Tools:** SVG-Formen für Präsentationen müssen manuell im Code erstellt werden
4. **Fragmentierte Workflows:** Farben, Layout und Formen werden in verschiedenen Tools bearbeitet statt in einem integrierten Studio

### 1.3 Goals

- [ ] Visueller Editor für komplette Design Tokens (Colors, Typography, Spacing, Radius, Shadows)
- [ ] Drag & Drop Layout Builder mit CSS Grid / Flexbox Support
- [ ] SVG Shape Editor mit grundlegenden Formen und Transformationen
- [ ] Komponentenbaukasten (Cards, Buttons, Alerts aus Tokens zusammensetzen)
- [ ] Export als CSS, JSON (Design Tokens), und HTML Snippets
- [ ] Undo/Redo für alle Aktionen
- [ ] Responsive Preview (Mobile / Tablet / Desktop)

### 1.4 Non-Goals

- Backend/Server (alles client-side mit localStorage/IndexedDB)
- User Accounts oder Cloud-Sync
- Pixel-perfekter WYSIWYG-Editor à la Figma/Webflow
- Vollständiger Code-Editor (kein CodeMirror/Monaco)
- React/Vue/Framework-spezifischer Output
- Druck-Layout oder PDF-Export

---

## 2. Background

### 2.1 Context

Das LunoLabs Projekt hat bereits ein funktionales Design Dashboard (`/design-dashboard/index.html`) mit:
- 7 editierbaren Farbvariablen mit Live-Preview
- 4 Theme-Presets (Dark, Ocean, Sunset, Forest)
- WCAG Kontrast-Checking
- CSS Export (Copy/Download)
- localStorage Persistenz

Das Studio baut darauf auf und erweitert es zu einer umfassenden Design-Plattform.

### 2.2 Current State

| Feature | Status | Location |
|---------|--------|----------|
| Color Editor | ✅ Fertig | `/design-dashboard/index.html` |
| Theme Presets | ✅ Fertig | 4 Presets implementiert |
| WCAG Contrast | ✅ Fertig | Live-Anzeige |
| CSS Export | ✅ Fertig | Copy + Download |
| Typography Editor | ❌ Fehlt | Geplant in Phase 2 des alten PRD |
| Spacing Controls | ❌ Fehlt | Geplant in Phase 2 des alten PRD |
| Layout Builder | ❌ Fehlt | Neues Feature |
| Shape Editor | ❌ Fehlt | Neues Feature |
| Component Lab | ❌ Fehlt | Neues Feature |

### 2.3 Research

| Referenz | Typ | Key Takeaway |
|----------|-----|--------------|
| [tweakcn.com](https://tweakcn.com) | Design Token Editor | Echtzeit-Theme-Editing mit Komponentenvorschau |
| [LayoutIt!](https://layoutit.com) | CSS Grid Builder | Visueller Grid-Editor mit Code-Generation |
| [SVG-Edit](https://svg-edit.github.io/svgedit/) | SVG Editor | Vollwertiger Browser-SVG-Editor, Open Source |
| [SortableJS](https://sortablejs.github.io/Sortable/) | Drag & Drop Lib | ~10KB gzip, native HTML5 DnD, kein Framework |
| [Two.js](https://two.js.org/) | 2D Graphics | ~16KB gzip, SVG/Canvas/WebGL Renderer, API-freundlich |
| [vanilla-colorful](https://github.com/web-padawan/vanilla-colorful) | Color Picker | 2.7KB, Web Component, zero dependencies |
| [W3C Design Tokens Spec](https://www.w3.org/community/design-tokens/) | Standard | Erste stabile Version 2025, JSON-basiert |
| [interact.js](https://interactjs.io/) | Drag/Resize/Rotate | 21KB core, Multi-Touch, ideal für Shape-Manipulation |

### 2.4 Competitive Analysis

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Feature-Vergleich                                  │
├──────────────────┬────────┬──────────┬──────────┬──────────────────┤
│ Feature          │ Unser  │ tweakcn  │ LayoutIt │ SVG-Edit         │
│                  │ Studio │          │          │                  │
├──────────────────┼────────┼──────────┼──────────┼──────────────────┤
│ Color Tokens     │   ✅   │    ✅    │    ❌    │     ❌           │
│ Typography       │   ✅   │    ✅    │    ❌    │     ❌           │
│ Layout Builder   │   ✅   │    ❌    │    ✅    │     ❌           │
│ Shape Editor     │   ✅   │    ❌    │    ❌    │     ✅           │
│ Component Lab    │   ✅   │    ✅    │    ❌    │     ❌           │
│ Keine Build-Tools│   ✅   │    ❌    │    ✅    │     ✅           │
│ Educational      │   ✅   │    ❌    │    ❌    │     ❌           │
│ Export CSS/JSON  │   ✅   │    ✅    │    ✅    │     ✅ (SVG)     │
└──────────────────┴────────┴──────────┴──────────┴──────────────────┘
```

**USP:** Einziges Tool, das alle 4 Bereiche (Tokens + Layout + Shapes + Components) in einem Framework-freien Studio kombiniert – plus Educational Mode.

---

## 3. Requirements

### 3.1 Functional Requirements

#### Phase 1: Design Tokens Studio (Basis)

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-01** | Color Picker für alle Design Tokens (Primary, Secondary, Accent, Semantic, Surfaces) | Must Have | Pending |
| **FR-02** | Typography Controls: Font-Family Dropdown (System + Google Fonts), Size, Weight, Line-Height | Must Have | Pending |
| **FR-03** | Spacing Controls: Base Unit Slider, generierte Spacing-Skala (4px System) | Must Have | Pending |
| **FR-04** | Border-Radius Slider mit Live-Preview auf Komponenten | Must Have | Pending |
| **FR-05** | Shadow Editor: Offset X/Y, Blur, Spread, Color | Should Have | Pending |
| **FR-06** | Theme Presets: 6+ Presets (Dark, Light, Ocean, Sunset, Forest, Neon) | Must Have | Pending |
| **FR-07** | Export: CSS Variables, JSON (W3C Design Tokens Format), Download als File | Must Have | Pending |
| **FR-08** | Import: JSON Theme laden, URL-Parameter für Shared Themes | Should Have | Pending |
| **FR-09** | Undo/Redo Stack (mind. 30 Steps) | Must Have | Pending |
| **FR-10** | WCAG Contrast Auto-Check mit Warnungen bei AA/AAA Verletzungen | Must Have | Pending |

#### Phase 2: Layout Playground

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-11** | CSS Grid Builder: Visuelles Grid mit einstellbaren Rows/Columns/Gaps | Must Have | Pending |
| **FR-12** | Flexbox Controls: Direction, Wrap, Justify, Align als visuelle Buttons | Must Have | Pending |
| **FR-13** | Drag & Drop: Vordefinierte Blöcke (Header, Sidebar, Content, Footer, Card) ins Grid ziehen | Must Have | Pending |
| **FR-14** | Block Resizing: Blöcke per Handle in der Größe anpassen | Should Have | Pending |
| **FR-15** | Responsive Preview: Toggle zwischen 320px / 768px / 1024px / 1440px | Must Have | Pending |
| **FR-16** | Layout Templates: 5+ vordefinierte Layouts (Holy Grail, Sidebar, Dashboard, etc.) | Should Have | Pending |
| **FR-17** | Export: Generiertes HTML + CSS für das Layout | Must Have | Pending |

#### Phase 3: Shape & Component Lab

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| **FR-18** | SVG Canvas: Grundfläche zum Platzieren und Editieren von Shapes | Must Have | Pending |
| **FR-19** | Shape Primitives: Rect, Circle, Ellipse, Line, Polygon, Star, Arrow | Must Have | Pending |
| **FR-20** | Shape Properties Panel: Fill, Stroke, Opacity, Size, Position, Rotation | Must Have | Pending |
| **FR-21** | Shape Drag & Resize: Anfasser zum Bewegen und Skalieren | Must Have | Pending |
| **FR-22** | Shape Layering: Z-Index Controls (vor/hinter, nach oben/unten) | Should Have | Pending |
| **FR-23** | Component Compositor: Cards, Buttons, Alerts, Badges aus Design Tokens zusammenbauen | Must Have | Pending |
| **FR-24** | Component Variants: Verschiedene States (Default, Hover, Active, Disabled) | Should Have | Pending |
| **FR-25** | Export: SVG Download, HTML/CSS Snippet für Komponenten | Must Have | Pending |

### 3.2 Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01 | Initial Page Load | < 2s auf 3G (< 150KB gzipped total) |
| NFR-02 | Interaktions-Latenz | < 16ms (60fps) für Drag & Color Updates |
| NFR-03 | Live Preview Update | < 50ms nach Änderung |
| NFR-04 | Undo/Redo Response | < 10ms |
| NFR-05 | Accessibility | WCAG 2.1 AA für das Studio selbst |
| NFR-06 | Browser Support | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |
| NFR-07 | Offline fähig | Vollständig nutzbar ohne Internet (nach erstem Load) |
| NFR-08 | State Persistence | Automatisches Speichern alle 2s (debounced) |
| NFR-09 | Max. Shapes auf Canvas | 100+ ohne Performance-Einbußen |
| NFR-10 | Touch Support | Drag & Drop funktional auf Tablet |

### 3.3 User Stories

```
Als Designer
möchte ich Farbschemas visuell experimentieren und live sehen wie alle Komponenten aussehen
damit ich schnell das perfekte Theme finde ohne CSS zu editieren
```

```
Als Frontend-Entwickler
möchte ich Layouts per Drag & Drop zusammenbauen
damit ich CSS Grid/Flexbox Layouts prototypen kann bevor ich sie implementiere
```

```
Als Content Creator
möchte ich SVG-Formen erstellen und anpassen
damit ich Grafiken für Präsentationen und Dokumente erstellen kann
```

```
Als Lernender
möchte ich verstehen wie Design Tokens, Layout-Systeme und Farbtheorie zusammenhängen
damit ich bessere Design-Entscheidungen treffen kann
```

```
Als Team-Mitglied
möchte ich mein Theme als JSON exportieren und mit Kollegen teilen
damit wir ein konsistentes Design System verwenden
```

---

## 4. Technical Design

### 4.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          DESIGN STUDIO                                       │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  Navigation Bar                                                        │ │
│  │  [🎨 Tokens] [📐 Layout] [⬡ Shapes] [🧩 Components] [📤 Export]     │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─────────────────┐  ┌──────────────────────────────────────────────────┐ │
│  │  Properties      │  │                                                  │ │
│  │  Panel (Left)    │  │              Canvas / Preview Area               │ │
│  │                  │  │                                                  │ │
│  │  ┌─────────────┐│  │  ┌──────────────────────────────────────────┐   │ │
│  │  │ Context-     ││  │  │                                          │   │ │
│  │  │ sensitive    ││  │  │  Live preview that changes based on      │   │ │
│  │  │ controls    ││  │  │  active tab:                              │   │ │
│  │  │             ││  │  │                                          │   │ │
│  │  │ • Colors    ││  │  │  Tokens → Component showcase              │   │ │
│  │  │ • Typography││  │  │  Layout → Grid/Flex playground            │   │ │
│  │  │ • Spacing   ││  │  │  Shapes → SVG canvas                     │   │ │
│  │  │ • Layout    ││  │  │  Components → Assembly preview            │   │ │
│  │  │ • Shape     ││  │  │                                          │   │ │
│  │  │   props     ││  │  │                                          │   │ │
│  │  └─────────────┘│  │  └──────────────────────────────────────────┘   │ │
│  │                  │  │                                                  │ │
│  │  ┌─────────────┐│  │  ┌──────────────────────────────────────────┐   │ │
│  │  │ Presets /   ││  │  │  Status Bar                               │   │ │
│  │  │ Actions     ││  │  │  [Undo] [Redo] | Viewport: 1440px | Saved│   │ │
│  │  └─────────────┘│  │  └──────────────────────────────────────────┘   │ │
│  └─────────────────┘  └──────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Data Flow

```
┌──────────────┐     ┌────────────────┐     ┌───────────────────┐
│ User Input   │────→│ StudioState    │────→│ CSS Custom Props  │
│ (Controls)   │     │ (Central Store)│     │ (document.root)   │
└──────────────┘     └───────┬────────┘     └─────────┬─────────┘
                             │                         │
                     ┌───────▼────────┐        ┌──────▼──────────┐
                     │ History Stack  │        │ Live Preview     │
                     │ (Undo/Redo)   │        │ (Cascaded CSS)   │
                     └───────┬────────┘        └─────────────────┘
                             │
                     ┌───────▼────────┐
                     │ Persistence    │
                     │ localStorage   │
                     │ + IndexedDB    │
                     └───────┬────────┘
                             │
                     ┌───────▼────────┐
                     │ Export Engine   │
                     │ CSS / JSON /   │
                     │ HTML / SVG     │
                     └────────────────┘
```

### 4.3 Module Architecture

| Module | Verantwortlichkeit | Größe (geschätzt) |
|--------|-------------------|-------------------|
| `studio-state.js` | Zentraler State, Observer Pattern, History Stack | ~150 Zeilen |
| `token-editor.js` | Color, Typography, Spacing, Radius, Shadow Controls | ~300 Zeilen |
| `layout-builder.js` | CSS Grid/Flexbox Builder, SortableJS Integration | ~250 Zeilen |
| `shape-editor.js` | SVG Canvas, Shape CRUD, Selection, Transform | ~400 Zeilen |
| `component-lab.js` | Component Templates, Variant Generator | ~200 Zeilen |
| `export-engine.js` | CSS/JSON/HTML/SVG Generation, Clipboard, Download | ~150 Zeilen |
| `color-utils.js` | HSL/RGB/Hex Konvertierung, Contrast, Palette Generation | ~100 Zeilen |
| `presets.js` | Theme Presets als JSON | ~80 Zeilen |
| **Total** | | **~1.630 Zeilen JS** |

### 4.4 Data Model

```javascript
// Zentrales State-Objekt (Design Tokens im W3C Format)
const studioState = {
  meta: {
    name: 'My Theme',
    version: '1.0.0',
    created: '2026-02-10',
    modified: '2026-02-10'
  },

  // ═══ DESIGN TOKENS ═══
  tokens: {
    colors: {
      primary:   { value: '#6366f1', type: 'color' },
      secondary: { value: '#ec4899', type: 'color' },
      accent:    { value: '#10b981', type: 'color' },
      warning:   { value: '#f59e0b', type: 'color' },
      danger:    { value: '#ef4444', type: 'color' },
      info:      { value: '#3b82f6', type: 'color' }
    },
    surfaces: {
      bgPrimary:   { value: '#0a0a1a', type: 'color' },
      bgSecondary: { value: '#0f172a', type: 'color' },
      bgCard:      { value: 'rgba(255,255,255,0.05)', type: 'color' },
      textPrimary: { value: '#ffffff', type: 'color' },
      textMuted:   { value: 'rgba(255,255,255,0.75)', type: 'color' }
    },
    typography: {
      fontSans:    { value: "'Inter', system-ui, sans-serif", type: 'fontFamily' },
      fontMono:    { value: "'JetBrains Mono', monospace", type: 'fontFamily' },
      baseFontSize:{ value: '16px', type: 'dimension' },
      scaleRatio:  { value: 1.25, type: 'number' },
      lineHeight:  { value: 1.6, type: 'number' },
      fontWeight:  { value: 400, type: 'number' },
      headingWeight: { value: 700, type: 'number' }
    },
    spacing: {
      unit:   { value: '4px', type: 'dimension' },
      xs:     { value: '4px', type: 'dimension' },
      sm:     { value: '8px', type: 'dimension' },
      md:     { value: '16px', type: 'dimension' },
      lg:     { value: '24px', type: 'dimension' },
      xl:     { value: '32px', type: 'dimension' },
      '2xl':  { value: '48px', type: 'dimension' }
    },
    radius: {
      sm:      { value: '8px', type: 'dimension' },
      default: { value: '12px', type: 'dimension' },
      lg:      { value: '16px', type: 'dimension' },
      full:    { value: '9999px', type: 'dimension' }
    },
    shadows: {
      sm:  { value: '0 1px 2px rgba(0,0,0,0.1)', type: 'shadow' },
      md:  { value: '0 4px 6px -1px rgba(0,0,0,0.1)', type: 'shadow' },
      lg:  { value: '0 10px 15px -3px rgba(0,0,0,0.2)', type: 'shadow' }
    }
  },

  // ═══ LAYOUT ═══
  layout: {
    type: 'grid',                    // 'grid' | 'flex'
    columns: 12,
    rows: 'auto',
    gap: '16px',
    blocks: [
      { id: 'b1', type: 'header',  gridArea: '1 / 1 / 2 / -1', content: 'Header' },
      { id: 'b2', type: 'sidebar', gridArea: '2 / 1 / 4 / 4',  content: 'Sidebar' },
      { id: 'b3', type: 'content', gridArea: '2 / 4 / 4 / -1',  content: 'Content' },
      { id: 'b4', type: 'footer',  gridArea: '4 / 1 / 5 / -1',  content: 'Footer' }
    ]
  },

  // ═══ SHAPES ═══
  shapes: [
    // { id: 's1', type: 'rect', x: 100, y: 100, width: 200, height: 150,
    //   fill: '#6366f1', stroke: '#ffffff', strokeWidth: 2, opacity: 1, rotation: 0 }
  ],

  // ═══ HISTORY ═══
  _history: {
    past: [],     // Max 30 states
    future: []    // Redo stack
  }
};
```

### 4.5 External Dependencies

| Library | Version | Größe (gzip) | Zweck | CDN URL |
|---------|---------|-------------|-------|---------|
| **SortableJS** | 1.15.x | ~10 KB | Drag & Drop für Layout Builder | `cdn.jsdelivr.net/npm/sortablejs@1.15.6/Sortable.min.js` |
| **Two.js** | 0.8.x | ~16 KB | SVG Rendering & Shape Manipulation | `cdn.jsdelivr.net/npm/two.js@0.8.14/build/two.min.js` |
| **Inter Font** | - | ~15 KB | Standard UI Font | Google Fonts CDN |
| **Total** | | **~41 KB** | | |

**Bewusst NICHT verwendet:**
- ~~vanilla-colorful~~ → Native `<input type="color">` reicht (bereits im Dashboard bewährt)
- ~~interact.js~~ → Two.js hat eingebaute Drag-Unterstützung
- ~~Editor.js~~ → Overkill, custom Controls reichen
- ~~Chart.js~~ → Nicht benötigt im Studio

### 4.6 File Structure

```
/design-studio/
├── index.html                          # Haupt-Studio-Seite (Single Page)
├── css/
│   └── studio.css                      # Alle Studio-Styles
├── js/
│   ├── studio-state.js                 # Zentraler State + History + Observer
│   ├── editors/
│   │   ├── token-editor.js             # Color, Typography, Spacing Controls
│   │   ├── layout-builder.js           # CSS Grid/Flex + SortableJS
│   │   ├── shape-editor.js             # SVG Canvas + Two.js
│   │   └── component-lab.js            # Component Templates + Variants
│   ├── utils/
│   │   ├── color-utils.js              # Farbkonvertierung + Kontrast
│   │   └── dom-utils.js                # DOM Helpers
│   ├── export-engine.js                # CSS/JSON/HTML/SVG Export
│   └── presets.js                      # Theme Presets
├── assets/
│   └── icons/                          # SVG Icons für UI
└── lib/
    ├── sortable.min.js                 # SortableJS (lokal cached)
    └── two.min.js                      # Two.js (lokal cached)
```

### 4.7 Key Algorithms

#### Observer Pattern (State → UI Sync)

```javascript
class StudioState {
  #state = {};
  #listeners = new Map();

  subscribe(path, callback) {
    if (!this.#listeners.has(path)) {
      this.#listeners.set(path, new Set());
    }
    this.#listeners.get(path).add(callback);
    return () => this.#listeners.get(path).delete(callback);
  }

  set(path, value) {
    // 1. Push current state to history
    this.#pushHistory();
    // 2. Update state at path
    this.#setNestedValue(path, value);
    // 3. Sync to CSS custom properties
    this.#syncCSS(path, value);
    // 4. Notify subscribers
    this.#notify(path, value);
    // 5. Debounced save to localStorage
    this.#debouncedSave();
  }

  undo() { /* Pop from past, push to future */ }
  redo() { /* Pop from future, push to past */ }
}
```

#### Color Palette Generation

```javascript
function generatePalette(baseHex) {
  const hsl = hexToHSL(baseHex);
  return {
    50:  hslToHex(hsl.h, Math.min(hsl.s + 5, 100), 95),
    100: hslToHex(hsl.h, Math.min(hsl.s + 5, 100), 90),
    200: hslToHex(hsl.h, hsl.s, 80),
    300: hslToHex(hsl.h, hsl.s, 70),
    400: hslToHex(hsl.h, hsl.s, 60),
    500: baseHex,  // Base
    600: hslToHex(hsl.h, hsl.s, 40),
    700: hslToHex(hsl.h, hsl.s, 30),
    800: hslToHex(hsl.h, Math.min(hsl.s + 5, 100), 20),
    900: hslToHex(hsl.h, Math.min(hsl.s + 10, 100), 10)
  };
}
```

#### Grid Layout Serialization

```javascript
function serializeLayout(container) {
  const style = getComputedStyle(container);
  return {
    display: style.display,
    gridTemplateColumns: style.gridTemplateColumns,
    gridTemplateRows: style.gridTemplateRows,
    gap: style.gap,
    blocks: [...container.children].map(el => ({
      id: el.dataset.blockId,
      gridArea: el.style.gridArea,
      type: el.dataset.blockType
    }))
  };
}
```

---

## 5. UI/UX Design

### 5.1 Studio Layout

Das Studio nutzt ein **Three-Panel Layout**:

```
┌──────────────────────────────────────────────────────────────────────┐
│  ☰ Design Studio              [Undo] [Redo]  │  Theme: My Theme ▾  │
├────────┬─────────────────────────────────────────────────────────────┤
│        │                                                             │
│  Tab   │                                                             │
│  Bar   │                    Main Canvas                              │
│        │                                                             │
│ ┌────┐ │  ┌─────────────────────────────────────────────────────┐   │
│ │ 🎨 │ │  │                                                     │   │
│ │    │ │  │  [Aktiver Tab-Inhalt wird hier angezeigt]           │   │
│ │ 📐 │ │  │                                                     │   │
│ │    │ │  │  • Tokens Tab → Komponentenvorschau                 │   │
│ │ ⬡  │ │  │  • Layout Tab → Grid Playground                    │   │
│ │    │ │  │  • Shapes Tab → SVG Canvas                          │   │
│ │ 🧩 │ │  │  • Components Tab → Zusammengesetzt                │   │
│ │    │ │  │                                                     │   │
│ └────┘ │  └─────────────────────────────────────────────────────┘   │
│        │                                                             │
│        ├─────────────────────────────────────────────────────────────┤
│        │  Properties Panel (kontextsensitiv, collapsible)           │
│        │  [Active control settings based on selection]               │
├────────┴─────────────────────────────────────────────────────────────┤
│  Status: Auto-saved  │  Viewport: 1440px  │  Zoom: 100%  │  Export │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.2 Tab-System

| Tab | Icon | Properties Panel zeigt | Canvas zeigt |
|-----|------|----------------------|-------------|
| **Tokens** | Palette | Color Pickers, Font Controls, Spacing Sliders | Live Komponentenvorschau (Cards, Buttons, Forms, Badges, Alerts) |
| **Layout** | Grid | Grid/Flex Einstellungen, Block-Bibliothek | Interaktives Grid mit Drag & Drop Blöcken |
| **Shapes** | Hexagon | Shape Properties (Fill, Stroke, Size, Rotation) | SVG Canvas mit Shapes |
| **Components** | Puzzle | Component Konfigurator (Variante, State, Content) | Zusammengesetzte Komponente mit allen Tokens |

### 5.3 Color Scheme

Das Studio selbst nutzt ein neutrales Dark-Theme, damit die editierten Farben nicht mit der UI kollidieren:

```css
/* Studio Chrome (fest, nicht editierbar) */
--studio-bg: #1a1a2e;
--studio-surface: #16213e;
--studio-border: rgba(255, 255, 255, 0.08);
--studio-text: #e2e8f0;
--studio-accent: #818cf8;

/* Editierbare Preview-Farben (aus Tokens) */
--color-primary: /* ... aus studioState */
```

### 5.4 Responsive Behavior

| Breakpoint | Layout |
|-----------|--------|
| **≥ 1200px** | Three-Panel (Tabs + Canvas + Properties) |
| **768-1199px** | Two-Panel (Tabs + Canvas), Properties als Overlay/Drawer |
| **< 768px** | Single Panel mit Tab-Navigation, alles stacked |

---

## 6. Implementation Plan

### 6.1 Phasen-Übersicht

```
Phase 1: Design Tokens Studio     ████████░░░░░░░░░░░░  40%  (~1 Session)
├── StudioState + Observer Pattern
├── Token Editor (Colors, Typography, Spacing, Radius)
├── Live Component Preview
├── Theme Presets (6+)
├── Undo/Redo
├── Export CSS/JSON
└── Migration vom bestehenden Design Dashboard

Phase 2: Layout Playground         ░░░░░░░░░░░░░░░░░░░░   0%  (~1 Session)
├── SortableJS Integration
├── CSS Grid Visual Builder
├── Flexbox Controls
├── Block Library (Header, Sidebar, Content, etc.)
├── Responsive Preview
├── Layout Templates
└── HTML/CSS Export

Phase 3: Shape & Component Lab     ░░░░░░░░░░░░░░░░░░░░   0%  (~1 Session)
├── Two.js Integration
├── SVG Canvas + Shape Primitives
├── Shape Selection + Transform
├── Component Compositor
├── Component Variants
├── SVG/HTML Export
└── Polish + Educational Tooltips
```

### 6.2 Phase 1 Tasks (Detail)

| # | Task | Priority | Abhängigkeit |
|---|------|----------|-------------|
| 1.1 | `index.html` Grundstruktur mit Tab-Navigation | Must | - |
| 1.2 | `studio.css` – Three-Panel Layout, Tab-System | Must | 1.1 |
| 1.3 | `studio-state.js` – Observer Pattern, History, Persistence | Must | - |
| 1.4 | `token-editor.js` – Color Pickers (Migration vom Dashboard) | Must | 1.3 |
| 1.5 | `token-editor.js` – Typography Controls | Must | 1.3 |
| 1.6 | `token-editor.js` – Spacing + Radius Controls | Must | 1.3 |
| 1.7 | Live Preview Panel mit Komponentenvorschau | Must | 1.4 |
| 1.8 | `presets.js` – 6+ Theme Presets | Must | 1.3 |
| 1.9 | `export-engine.js` – CSS + JSON Export | Must | 1.3 |
| 1.10 | Undo/Redo Buttons + Keyboard Shortcuts | Must | 1.3 |
| 1.11 | WCAG Contrast Checking | Should | 1.4 |
| 1.12 | Responsive Layout (Tablet/Mobile) | Should | 1.2 |

### 6.3 Phase 2 Tasks (Detail)

| # | Task | Priority | Abhängigkeit |
|---|------|----------|-------------|
| 2.1 | SortableJS einbinden + Grid Container Setup | Must | Phase 1 |
| 2.2 | Block-Bibliothek (Sidebar-Panel mit draggable Blocks) | Must | 2.1 |
| 2.3 | CSS Grid Konfiguration (Columns, Rows, Gap Slider) | Must | 2.1 |
| 2.4 | Flexbox Toggle + Controls | Should | 2.1 |
| 2.5 | Block Resizing mit CSS resize oder Custom Handles | Should | 2.1 |
| 2.6 | Responsive Viewport Switcher | Must | 2.3 |
| 2.7 | Layout Templates (5+ vorgefertigte) | Should | 2.3 |
| 2.8 | HTML/CSS Code Export für Layouts | Must | 2.3 |

### 6.4 Phase 3 Tasks (Detail)

| # | Task | Priority | Abhängigkeit |
|---|------|----------|-------------|
| 3.1 | Two.js einbinden + SVG Canvas Setup | Must | Phase 1 |
| 3.2 | Shape Toolbar (Rect, Circle, Line, etc.) | Must | 3.1 |
| 3.3 | Shape Properties Panel (Fill, Stroke, Size) | Must | 3.1 |
| 3.4 | Shape Selection + Drag + Resize | Must | 3.1 |
| 3.5 | Shape Layering (Z-Index Controls) | Should | 3.4 |
| 3.6 | Component Compositor Tab | Must | Phase 1 |
| 3.7 | Component Variants (Hover, Active, Disabled) | Should | 3.6 |
| 3.8 | SVG Export + HTML/CSS Snippet Export | Must | 3.4 |
| 3.9 | Educational Tooltips für alle Controls | Should | Alle |
| 3.10 | Final Polish, Keyboard Shortcuts, a11y Audit | Must | Alle |

### 6.5 Milestones

| Milestone | Ziel-Datum | Deliverable |
|-----------|-----------|-------------|
| **M1:** Token Studio MVP | Session 1 | Farben, Typography, Spacing, Export funktional |
| **M2:** Layout Builder | Session 2 | Drag & Drop Grid Builder mit Templates |
| **M3:** Shape Editor | Session 3 | SVG Shapes erstellen und exportieren |
| **M4:** Production Release | Session 3+ | Alle Features, polished, WCAG compliant |

### 6.6 Risiken

| Risiko | Impact | Wahrscheinlichkeit | Mitigation |
|--------|--------|-------------------|------------|
| Two.js CDN nicht verfügbar | Hoch | Niedrig | Lokale Kopie in `/lib/` |
| Performance bei 100+ Shapes | Mittel | Mittel | Virtualisierung, nur sichtbare Shapes rendern |
| SortableJS Touch-Kompatibilität | Mittel | Niedrig | Fallback auf native HTML5 DnD |
| Komplexität der Single-File → Multi-File Migration | Mittel | Mittel | Stückweise migrieren, altes Dashboard als Fallback behalten |
| CSS Variable Scoping (Studio UI vs. Preview) | Hoch | Mittel | Separate CSS Namespace (`--studio-*` vs. `--color-*`) |
| Browser `<input type="color">` Inkonsistenz | Niedrig | Niedrig | Funktional akzeptabel, visuelle Unterschiede OK |

---

## 7. Migration Strategy

### 7.1 Vom Design Dashboard zum Studio

Das bestehende `/design-dashboard/` wird **nicht gelöscht**, sondern als Referenz behalten. Das Studio ist ein neues, eigenständiges Projekt:

```
Aktuell:                          Neu:
/design-dashboard/                /design-studio/         ← NEU
  └── index.html (1.566 Zeilen)    ├── index.html
                                    ├── css/studio.css
                                    ├── js/...
                                    └── lib/...
```

### 7.2 Code-Übernahme

| Vom Dashboard übernommen | Angepasst | Neu geschrieben |
|--------------------------|-----------|-----------------|
| Color Picker Controls HTML | State Management → Observer Pattern | Layout Builder |
| WCAG Contrast Functions | Export Engine → + JSON Format | Shape Editor |
| Theme Preset Konzept | CSS Variables → erweitertes Token-Set | Component Lab |
| Toast Notification UI | Responsive Layout → Three-Panel | Tab Navigation |

### 7.3 Dashboard-Link Update

Der Main `/dashboard/index.html` bekommt einen Link zum Design Studio zusätzlich zum bestehenden Design Dashboard Link.

---

## 8. Success Metrics

| Metrik | Ziel | Messmethode |
|--------|------|-------------|
| Time to first Export | < 2 Minuten | User-Testing |
| Alle 4 Tabs nutzbar | 100% | Funktionstest |
| Lighthouse Performance | > 90 | Automated Audit |
| Lighthouse Accessibility | > 95 | Automated Audit |
| Bundle Size (gzip) | < 100 KB (ohne Fonts) | Build-Messung |
| Undo/Redo funktional | 30+ Steps ohne Fehler | Integrationstest |
| Touch-fähig auf Tablet | Drag & Drop funktional | Manueller Test |
| Alle Exports valide | CSS validiert, JSON parsebar | Automatisiert |

---

## 9. Open Questions

- [ ] Soll das bestehende Design Dashboard langfristig durch das Studio ersetzt oder parallel behalten werden?
- [ ] Sollen wir Tailwind v4 CSS-Export unterstützen?
- [ ] Color Blindness Simulation Mode einbauen (Deuteranopia, Protanopia, etc.)?
- [ ] Shareable URL mit Base64-encodiertem Theme-State?
- [ ] Custom Font Upload via File API?
- [ ] Dark/Light Mode Toggle für die Preview-Area?
- [ ] Soll das Studio auch als Standalone (ohne den Rest des Projekts) funktionieren?

---

## 10. Appendix

### 10.1 Library Size Budget

```
┌────────────────────────────────────────────────────────┐
│                  Bundle Size Budget                     │
├────────────────────┬──────────┬────────────────────────┤
│ Asset              │ Size     │ Typ                    │
├────────────────────┼──────────┼────────────────────────┤
│ index.html         │ ~5 KB    │ Markup                 │
│ studio.css         │ ~8 KB    │ Styles                 │
│ JS Modules (own)   │ ~15 KB   │ Custom Code            │
│ SortableJS         │ ~10 KB   │ Library (gzip)         │
│ Two.js             │ ~16 KB   │ Library (gzip)         │
│ Inter Font         │ ~15 KB   │ Font (subset)          │
├────────────────────┼──────────┼────────────────────────┤
│ TOTAL              │ ~69 KB   │ Deutlich unter 100 KB  │
└────────────────────┴──────────┴────────────────────────┘
```

### 10.2 Keyboard Shortcuts

| Shortcut | Aktion |
|----------|--------|
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+S` | Export/Save Dialog |
| `Ctrl+C` | Copy CSS to Clipboard |
| `1-4` | Tab wechseln (Tokens/Layout/Shapes/Components) |
| `Delete` | Ausgewähltes Element löschen |
| `Escape` | Auswahl aufheben / Dialog schließen |

### 10.3 Theme Presets

| Preset | Primary | Secondary | Background | Mode | Charakter |
|--------|---------|-----------|------------|------|-----------|
| LunoLabs Dark | #6366f1 | #ec4899 | #0a0a1a | Dark | Professional |
| LunoLabs Light | #4f46e5 | #db2777 | #f8fafc | Light | Clean |
| Ocean | #0ea5e9 | #06b6d4 | #0c1929 | Dark | Calm |
| Sunset | #f97316 | #ef4444 | #1c1917 | Dark | Warm |
| Forest | #22c55e | #84cc16 | #052e16 | Dark | Natural |
| Neon | #a855f7 | #f43f5e | #09090b | Dark | Vibrant |

### 10.4 W3C Design Tokens Format (Export)

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "primary": {
      "$value": "#6366f1",
      "$type": "color"
    },
    "secondary": {
      "$value": "#ec4899",
      "$type": "color"
    }
  },
  "spacing": {
    "sm": {
      "$value": "8px",
      "$type": "dimension"
    }
  }
}
```

### 10.5 Related Documents

- [PRD Design Dashboard](prd-design-dashboard.md) – Vorgänger-PRD
- [UI Fundamentals Research](../research/active/ui-design-systems/ui-fundamentals-research.md)
- [tweakcn GitHub](https://github.com/jnsahaj/tweakcn)
- [W3C Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [SortableJS Docs](https://sortablejs.github.io/Sortable/)
- [Two.js Docs](https://two.js.org/docs/)

### 10.6 Glossary

| Term | Definition |
|------|------------|
| **Design Token** | Ein benannter Wert (Farbe, Abstand, etc.) in einem Design-System, im W3C-Format als JSON |
| **CSS Custom Property** | Eine Variable in CSS, definiert mit `--name`, gesetzt via `:root` |
| **Observer Pattern** | Software-Pattern bei dem sich Objekte auf State-Änderungen abonnieren |
| **History Stack** | Datenstruktur für Undo/Redo, speichert vergangene States |
| **HSL** | Hue-Saturation-Lightness Farbmodell |
| **WCAG** | Web Content Accessibility Guidelines |
| **SortableJS** | Leichtgewichtige Drag & Drop Library (~10KB gzip) |
| **Two.js** | 2D Drawing Library für SVG/Canvas/WebGL (~16KB gzip) |
| **Three-Panel Layout** | UI-Pattern mit Navigation, Canvas und Properties Panel |

---

## Changelog

| Version | Datum | Autor | Änderungen |
|---------|-------|-------|------------|
| 1.0.0 | 2026-02-10 | Joel + Claude | Initial Draft |

---

*Nächster Schritt: Review & Approval → Phase 1 Implementation*
*Siehe [ROADMAP.md](../ROADMAP.md) für Projekt-Timeline*
