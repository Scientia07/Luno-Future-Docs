<!--
==============================================================================
FILE METADATA
==============================================================================
filename:       rive-research.md
created:        2026-01-26
updated:        2026-01-28
version:        2.0.0
status:         active
rating:         ★★★★☆
author:         Joel + Claude
related_docs:   [../../frameworks/rive/prd-rive.md, ../../INDEX.md]
description:    Comprehensive research evaluation for Rive animation platform
==============================================================================
-->

# Research: Rive

> **Research Type:** Deep Dive Evaluation
> **Status:** Active
> **Started:** 2026-01-26
> **Updated:** 2026-01-28
> **Recommendation:** Proceed - Rive is significantly more powerful than initially documented

---

## 1. Research Objective

### 1.1 Questions to Answer

1. **Primary:** Does Rive offer significant advantages over Lottie for interactive animations?
2. **Secondary:** What's the workflow for creating/obtaining Rive animations?
3. **Tertiary:** Is the runtime size acceptable for our use case?
4. **NEW:** What advanced features does Rive offer beyond state machines?

### 1.2 Success Criteria

- [x] Provides interactivity beyond Lottie's capabilities
- [x] Runtime is reasonable (<200KB)
- [x] Free tier sufficient for our needs
- [x] Good browser support
- [x] Clear differentiation from current Lottie demo
- [x] **NEW:** Advanced features warrant dedicated showcase

---

## 2. Background

### 2.1 Context

We currently use Lottie for vector animations (from After Effects). Rive is a modern alternative with **built-in interactivity** (state machines) that Lottie lacks. Growing rapidly in popularity.

### 2.2 Why Rive?

- **State machines:** Built-in interactivity without code
- **Smaller files:** Often smaller than Lottie
- **Runtime animations:** Can be controlled programmatically
- **Modern tooling:** Web-based editor
- **Growing rapidly:** Many modern sites are adopting Rive
- **NEW:** Data Binding, Scripting, Runtime Asset Loading

### 2.3 Related Work

| Resource | Type | Key Takeaway |
|----------|------|--------------|
| [Rive.app](https://rive.app/) | Website | Free editor, community assets |
| [Rive Runtime](https://github.com/rive-app/rive-wasm) | GitHub | WebAssembly runtime |
| [Community Files](https://rive.app/community/) | Assets | Free animations available |
| [Data Binding Docs](https://rive.app/docs/runtimes/data-binding) | Docs | ViewModel-like architecture |
| [Rive Events](https://rive.app/docs/runtimes/rive-events) | Docs | Subscribe to animation signals |

---

## 3. Preliminary Findings

### 3.1 Overview

Rive is a design tool for creating interactive animations. Unlike Lottie (which exports from After Effects), Rive has its own editor. Key differentiator: **State Machines** allow animations to respond to user input without JavaScript.

**Key Discovery:** Rive is far more powerful than a "Lottie alternative" - it's closer to a full **reactive UI framework** with data binding, scripting, and component systems.

### 3.2 Technical Analysis

#### Core Concepts
- **Artboards:** Canvas for animations
- **Animations:** Timeline-based sequences
- **State Machines:** Logic for transitioning between animations
- **Inputs:** Triggers, booleans, numbers that control state machines
- **Components:** Reusable nested artboards (formerly "Nested Artboards")
- **View Models:** Data structures for binding

#### Runtime Options

| Runtime | Size | Notes |
|---------|------|-------|
| @rive-app/canvas | ~150KB | Canvas-based, good performance |
| @rive-app/webgl | ~200KB | WebGL, better for complex animations |

#### Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ | Full support |
| Firefox | ✅ | Full support |
| Safari | ✅ | Full support |
| Edge | ✅ | Full support |
| Mobile | ✅ | Touch events work with state machines |

### 3.3 Rive vs Lottie Comparison

| Feature | Lottie | Rive |
|---------|--------|------|
| File size | Variable | Often smaller |
| Creation tool | After Effects | Rive Editor (web) |
| Interactivity | Limited (via code) | Built-in state machines |
| Runtime size | ~300KB (player) | ~150KB (canvas) |
| Community assets | Large (LottieFiles) | Growing (Rive Community) |
| Learning curve | Need AE skills | Rive editor is simpler |
| Programmatic control | Basic | **Advanced** |
| 3D support | No | Limited |
| **Data Binding** | ❌ No | ✅ Full ViewModel support |
| **Scripting** | ❌ No | ✅ Luau scripting |
| **Runtime Assets** | ❌ No | ✅ Swap fonts/images/audio |
| **Components** | ❌ No | ✅ Nested artboards |
| **Lists** | ❌ No | ✅ Dynamic UI generation |

### 3.4 Pros and Cons

| Pros | Cons |
|------|------|
| ✅ Built-in interactivity | ❌ Smaller community than Lottie |
| ✅ Often smaller files | ❌ Different creation workflow |
| ✅ Modern web-based editor | ❌ Learning new tool required |
| ✅ State machines are powerful | ❌ Fewer free assets available |
| ✅ Excellent documentation | ❌ Lottie is more established |
| ✅ Free tier is generous | ❌ Some features require paid plans |
| ✅ WebAssembly performance | |
| ✅ **Data Binding** | |
| ✅ **Luau Scripting** | |
| ✅ **Runtime Asset Loading** | |
| ✅ **AI Coding Assistant** | |

### 3.5 Interactivity Examples

Rive excels at:
- **Hover states:** Button animations that respond to hover
- **Loading indicators:** Progress that maps to actual progress
- **Interactive characters:** React to mouse position
- **Form validation:** Visual feedback tied to input state
- **Toggles:** Smooth animated switches
- **Data-driven UI:** Lists, leaderboards, dynamic content

---

## 4. Advanced Features (NEW)

This section documents capabilities discovered beyond basic state machines.

### 4.1 Data Binding

**What it is:** A reactive system inspired by Cinema4D and Houdini that connects data sources to UI properties.

**Key Capabilities:**
- Link any data source to UI properties
- Bind across multiple artboards
- Sync with API data at runtime
- Acts as a **built-in ViewModel**

**Binding Directions:**

| Direction | Description |
|-----------|-------------|
| `ToTarget` | Data → Animation (default) |
| `ToSource` | Animation → Data |
| `TwoWay` | Bidirectional sync |
| `Once` | One-time binding |

**Nested View Models:**
```
Leaderboard (View Model)
├── players: Profile[] (nested)
│   ├── name: string
│   ├── score: number
│   └── avatar: image
```

**Use Cases:**
- Dynamic leaderboards
- User profile cards
- Real-time dashboards
- Form state management

**Sources:**
- [Data Binding Blog](https://rive.app/blog/data-binding-in-rive-a-shared-language-for-designers-and-developers)
- [Getting Started Guide](https://rive.app/blog/getting-started-with-data-binding)

### 4.2 Luau Scripting

**What it is:** Full programming language support using [Luau](https://luau-lang.org/) (Roblox's Lua fork).

**Why Luau:**
- Small VM (~200KB)
- Simple syntax
- Gradual type system
- First-class type checker
- Safe execution

**Capabilities:**
- Complex animation logic
- Procedural animations
- Math-heavy operations
- AI-assisted code generation

**AI Coding Agent:**
Rive includes an AI assistant that helps write Luau code directly in the editor.

**Sources:**
- [Why Luau](https://rive.app/blog/why-scripting-runs-on-luau)
- [Scripting Launch](https://rive.app/blog/scripting-is-live-in-rive)
- [AI Agent FAQ](https://rive.app/blog/rive-ai-coding-agent-faq)

### 4.3 Runtime Asset Loading

**What it is:** Dynamically load and swap fonts, images, and audio at runtime.

**Asset Export Options:**

| Type | Description | Use Case |
|------|-------------|----------|
| Embedded | Included in .riv binary | Self-contained files |
| Referenced | Loaded separately | Dynamic loading |
| Hosted | Rive CDN delivery | Smaller file, CDN speed |

**JavaScript API:**

```javascript
import { Rive, decodeFont, decodeImage } from "@rive-app/canvas";

const riveInstance = new Rive({
  src: "animation.riv",
  canvas: document.getElementById("canvas"),
  assetLoader: (asset, bytes) => {
    // Handle embedded/CDN assets automatically
    if (asset.cdnUuid.length > 0 || bytes.length > 0) {
      return false;
    }

    // Custom font loading
    if (asset.isFont) {
      fetch("custom-font.ttf").then(async (res) => {
        const font = await decodeFont(
          new Uint8Array(await res.arrayBuffer())
        );
        asset.setFont(font);
        font.unref();
      });
      return true;
    }

    // Custom image loading
    if (asset.isImage) {
      fetch("custom-image.png").then(async (res) => {
        const image = await decodeImage(
          new Uint8Array(await res.arrayBuffer())
        );
        asset.setImage(image);
        image.unref();
      });
      return true;
    }

    return false;
  }
});
```

**Use Cases:**
- User avatars in animations
- Localized fonts
- Theme-specific images
- A/B testing visuals

**Sources:**
- [Loading Assets Docs](https://rive.app/docs/runtimes/loading-assets)
- [Runtime Asset Swapping](https://rive.app/community/doc/runtime-asset-swapping/docCK8JCPhVm)

### 4.4 Rive Events

**What it is:** Subscribe to meaningful signals from animations and state machines.

**Event Types:**

| Type | Description |
|------|-------------|
| General | Custom events with metadata |
| OpenUrl | Events that include a URL |

**JavaScript API:**

```javascript
import { Rive, EventType, RiveEventType } from '@rive-app/canvas';

const r = new Rive({
  src: "animation.riv",
  stateMachines: "State Machine 1",
});

function onRiveEventReceived(riveEvent) {
  const eventData = riveEvent.data;

  if (eventData.type === RiveEventType.General) {
    console.log("Event:", eventData.name);
    console.log("Properties:", eventData.properties);
  } else if (eventData.type === RiveEventType.OpenUrl) {
    window.open(eventData.url);
  }
}

r.on(EventType.RiveEvent, onRiveEventReceived);
```

**Note:** Events are being superseded by Data Binding for new projects.

**Sources:**
- [Rive Events Docs](https://rive.app/docs/runtimes/rive-events)

### 4.5 Components (Nested Artboards)

**What it is:** Modular, reusable artboards that can be composed together.

**Key Features:**
- Mark artboard as Component
- Data binding across files
- Runtime artboard swapping
- Constraint preservation

**Runtime Swapping:**
```javascript
// Swap out entire artboard components at runtime
// Useful for: character creators, modular scenes, A/B testing
```

**Use Cases:**
- Character customization
- Modular UI components
- Multi-file compositions
- Dynamic layouts

**Sources:**
- [Components Blog](https://rive.app/blog/components-are-here-nested-artboards-done-right)
- [Data Binding Artboards](https://rive.app/blog/data-binding-supercharged-lists-images-and-artboards)

### 4.6 Lists with Virtualization

**What it is:** Generate UI components dynamically from data arrays.

**Capabilities:**
- Dynamic item generation
- Virtualization for performance
- Scroll thousands of items

**Use Cases:**
- Contact lists
- Dropdowns
- Carousels
- Card hands (games)
- Leaderboards

**Sources:**
- [Lists Blog](https://rive.app/blog/data-binding-supercharged-lists-images-and-artboards)

### 4.7 Listeners

**What it is:** Designer-defined interactions without code.

**Listener Types:**
- Pointer Enter
- Pointer Exit
- Pointer Down
- Pointer Up
- Pointer Move

**Benefits:**
- Designers can define hover/click behavior
- No JavaScript required for basic interactions
- State machine triggers automatically

**Sources:**
- [Listeners Docs](https://rive.app/community/doc/state-machines/docxeznG7iiK)

### 4.8 Joysticks

**What it is:** Stage control tools for rich interactive animations.

**Use Cases:**
- Character direction control
- 2D movement
- Analog input visualization

---

## 5. Updated Rive vs Lottie Decision Matrix

| Factor | Lottie | Rive | Winner | Notes |
|--------|--------|------|--------|-------|
| Interactivity | Limited | Excellent | **Rive** | State machines, listeners |
| Asset availability | Extensive | Growing | Lottie | LottieFiles huge library |
| Runtime size | ~300KB | ~150KB | **Rive** | Smaller runtime |
| Creation workflow | After Effects | Web editor | **Rive** | Lower barrier |
| Industry adoption | Established | Growing | Lottie | But Rive growing fast |
| Learning curve | Moderate | Low | **Rive** | Web-based, simpler |
| **Data binding** | ❌ | ✅ | **Rive** | Major differentiator |
| **Scripting** | ❌ | ✅ | **Rive** | Luau support |
| **Dynamic assets** | ❌ | ✅ | **Rive** | Runtime swapping |
| **Components** | ❌ | ✅ | **Rive** | Modular architecture |
| **Lists** | ❌ | ✅ | **Rive** | Dynamic UI |

**Updated Recommendation:** Use both, but **Rive is far more capable** than previously documented:
- **Lottie:** Complex visual animations from designers (After Effects workflow)
- **Rive:** Interactive UI, data-driven animations, dynamic content

---

## 6. Risk Assessment

### 6.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Smaller asset library | Medium | Medium | Use community files, create simple ones |
| WebAssembly compatibility | Low | Low | Excellent browser support |
| Learning curve | Medium | Low | Good documentation |
| Advanced features complexity | Medium | Medium | Start simple, add features incrementally |

### 6.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Asset creation | Medium | Medium | Start with community files |
| Differentiation unclear | **Low** | Low | Many unique features to showcase |
| Feature overload | Medium | Low | Focus demo on 2-3 key features |

---

## 7. Updated Recommendation

### 7.1 Summary

Rive is **significantly more powerful** than initially evaluated. Beyond state machines, it offers:

1. **Data Binding** - Full ViewModel-like reactive system
2. **Luau Scripting** - Programming language in the editor
3. **Runtime Asset Loading** - Dynamic fonts, images, audio
4. **Components** - Modular nested artboards
5. **Lists** - Dynamic UI generation with virtualization
6. **Rive Events** - Subscribe to animation signals
7. **AI Assistant** - Built-in coding help

### 7.2 Decision

| Decision | Rationale |
|----------|-----------|
| **Strongly Proceed** | Unique capabilities far beyond Lottie, positions as mini UI framework |

### 7.3 Revised Implementation Strategy

**Phase 1: Basic Demo (Current)**
- Interactive buttons
- State machine showcase
- Hover/click demos

**Phase 2: Data Binding Demo (NEW)**
- Dynamic leaderboard
- User profile cards
- Progress tracking

**Phase 3: Advanced Features (NEW)**
- Runtime asset swapping
- List generation
- Component composition

### 7.4 Demo Concept Update

| Section | Feature | Showcase |
|---------|---------|----------|
| Hero | State Machines | Interactive character |
| Section 2 | Listeners | Hover/click without JS |
| Section 3 | Data Binding | Live data dashboard |
| Section 4 | Lists | Dynamic contact list |
| Section 5 | Asset Loading | User avatar upload |
| Comparison | Rive vs Lottie | Side-by-side capability chart |

### 7.5 Asset Strategy

| Source | Type | Notes |
|--------|------|-------|
| [Rive Community](https://rive.app/community/) | Free files | Many interactive examples |
| Create custom | Simple | Buttons, icons, loaders |
| Data binding demos | Advanced | May need custom creation |

---

## 8. References

### Official Documentation
- [Rive Official](https://rive.app/)
- [Rive Runtime Docs](https://rive.app/docs/)
- [State Machines](https://rive.app/docs/runtimes/state-machines)
- [Data Binding](https://rive.app/docs/runtimes/data-binding)
- [Loading Assets](https://rive.app/docs/runtimes/loading-assets)
- [Rive Events](https://rive.app/docs/runtimes/rive-events)

### Blog Posts
- [Data Binding Introduction](https://rive.app/blog/data-binding-in-rive-a-shared-language-for-designers-and-developers)
- [Getting Started with Data Binding](https://rive.app/blog/getting-started-with-data-binding)
- [Components](https://rive.app/blog/components-are-here-nested-artboards-done-right)
- [Why Luau](https://rive.app/blog/why-scripting-runs-on-luau)
- [Scripting Launch](https://rive.app/blog/scripting-is-live-in-rive)
- [AI Coding Agent](https://rive.app/blog/rive-ai-coding-agent-faq)
- [Lists and Artboards](https://rive.app/blog/data-binding-supercharged-lists-images-and-artboards)

### Community Resources
- [Rive Community](https://rive.app/community/)
- [GitHub - rive-wasm](https://github.com/rive-app/rive-wasm)
- [Rive vs Lottie](https://rive.app/blog/rive-as-a-lottie-alternative)

---

## Changelog

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-01-26 | Joel + Claude | Initial research |
| 2.0.0 | 2026-01-28 | Joel + Claude | Major update: Added Data Binding, Luau Scripting, Runtime Assets, Components, Lists, Events sections. Updated comparison matrix. Revised recommendation to "Strongly Proceed". |

---

*See [INDEX.md](../../INDEX.md) for complete documentation index*
