/*
==============================================================================
FILE METADATA
==============================================================================
filename:       Root.tsx
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Remotion root component - defines all compositions
==============================================================================
*/

import { Composition } from "remotion";
import { DataFlowDiagram, dataFlowSchema } from "./compositions/DataFlowDiagram";
import { CodeWalkthrough, codeWalkthroughSchema } from "./compositions/CodeWalkthrough";
import { AnimatedChart, animatedChartSchema } from "./compositions/AnimatedChart";
import { ProcessDiagram, processDiagramSchema } from "./compositions/ProcessDiagram";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Data Flow / Architecture Animation */}
      <Composition
        id="DataFlow"
        component={DataFlowDiagram}
        schema={dataFlowSchema}
        durationInFrames={300}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{
          title: "System Architecture",
        }}
      />

      {/* Code Walkthrough Animation */}
      <Composition
        id="CodeWalkthrough"
        component={CodeWalkthrough}
        schema={codeWalkthroughSchema}
        durationInFrames={450}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{
          code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
          language: "javascript",
        }}
      />

      {/* Animated Charts */}
      <Composition
        id="AnimatedChart"
        component={AnimatedChart}
        schema={animatedChartSchema}
        durationInFrames={240}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{
          data: [
            { name: "Jan", value: 400 },
            { name: "Feb", value: 300 },
            { name: "Mar", value: 600 },
            { name: "Apr", value: 800 },
            { name: "May", value: 500 },
          ],
        }}
      />

      {/* Process Diagram */}
      <Composition
        id="ProcessDiagram"
        component={ProcessDiagram}
        schema={processDiagramSchema}
        durationInFrames={360}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{
          steps: ["Input", "Process", "Validate", "Output"],
        }}
      />
    </>
  );
};
