/*
==============================================================================
FILE METADATA
==============================================================================
filename:       DataFlowDiagram.tsx
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Animated data flow / architecture diagram composition
==============================================================================
*/

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { z } from "zod";

export const dataFlowSchema = z.object({
  title: z.string(),
});

type Props = z.infer<typeof dataFlowSchema>;

interface NodeProps {
  x: number;
  y: number;
  label: string;
  color: string;
  delay: number;
}

const Node: React.FC<NodeProps> = ({ x, y, label, color, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <div
        style={{
          width: 180,
          height: 80,
          borderRadius: 16,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            fontFamily: "system-ui",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

const Arrow: React.FC<ArrowProps> = ({ x1, y1, x2, y2, delay }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame - delay, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const currentX = x1 + (x2 - x1) * progress;
  const currentY = y1 + (y2 - y1) * progress;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={currentX}
        y2={currentY}
        stroke="#6366f1"
        strokeWidth={3}
        markerEnd={progress > 0.9 ? "url(#arrowhead)" : undefined}
      />
    </svg>
  );
};

export const DataFlowDiagram: React.FC<Props> = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const titleY = interpolate(frame, [0, 30], [-20, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 60,
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}
        >
          {title}
        </h1>
      </div>

      {/* Nodes */}
      <Node x={200} y={300} label="Client" color="#6366f1" delay={30} />
      <Node x={500} y={300} label="API Gateway" color="#ec4899" delay={60} />
      <Node x={800} y={200} label="Auth Service" color="#10b981" delay={90} />
      <Node x={800} y={400} label="Data Service" color="#f59e0b" delay={90} />
      <Node x={1100} y={300} label="Database" color="#ef4444" delay={120} />

      {/* Arrows */}
      <Arrow x1={380} y1={340} x2={500} y2={340} delay={75} />
      <Arrow x1={680} y1={320} x2={800} y2={260} delay={105} />
      <Arrow x1={680} y1={360} x2={800} y2={420} delay={105} />
      <Arrow x1={980} y1={260} x2={1100} y2={320} delay={135} />
      <Arrow x1={980} y1={420} x2={1100} y2={360} delay={135} />

      {/* Data packets animation */}
      {frame > 150 && (
        <DataPacket
          startX={290}
          startY={340}
          endX={1190}
          endY={340}
          frame={frame - 150}
        />
      )}
    </AbsoluteFill>
  );
};

const DataPacket: React.FC<{
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  frame: number;
}> = ({ startX, startY, endX, endY, frame }) => {
  const progress = interpolate(frame, [0, 100], [0, 1], {
    extrapolateRight: "clamp",
  });

  const x = startX + (endX - startX) * progress;
  const y =
    startY +
    Math.sin(progress * Math.PI * 4) * 30 +
    (endY - startY) * progress;

  return (
    <div
      style={{
        position: "absolute",
        left: x - 10,
        top: y - 10,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #6366f1, #ec4899)",
        boxShadow: "0 0 20px rgba(99, 102, 241, 0.8)",
      }}
    />
  );
};
