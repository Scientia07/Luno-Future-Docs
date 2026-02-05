/*
==============================================================================
FILE METADATA
==============================================================================
filename:       index.ts
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Remotion entry point - registers all compositions
==============================================================================
*/

import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

registerRoot(RemotionRoot);
