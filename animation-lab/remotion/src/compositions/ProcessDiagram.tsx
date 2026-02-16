/*
==============================================================================
FILE METADATA
==============================================================================
filename:       ProcessDiagram.tsx
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Animated process/workflow diagram with SVG animations
==============================================================================
*/

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  Easing,
} from "remotion";
import { z } from "zod";

export const processDiagramSchema = z.object({
  steps: z.array(z.string()),
});

type Props = z.infer<typeof processDiagramSchema>;

const COLORS = ["#6366f1", "#ec4899", "#10b981", "#f59e0b", "#ef4444"];

export const ProcessDiagram: React.FC<Props> = ({ steps }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const stepWidth = 200;
  const stepHeight = 100;
  const gap = 100;
  const totalWidth = steps.length * stepWidth + (steps.length - 1) * gap;
  const startX = (width - totalWidth) / 2;
  const centerY = height / 2;

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
          top: 80,
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            opacity: interpolate(frame, [0, 30], [0, 1]),
            transform: `translateY(${interpolate(frame, [0, 30], [-20, 0], {
              extrapolateRight: "clamp",
            })}px)`,
          }}
        >
          Process Flow
        </h1>
      </div>

      {/* SVG for arrows */}
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
            id="arrow"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="6"
            orient="auto"
          >
            <path d="M0,0 L12,6 L0,12 L3,6 Z" fill="#6366f1" />
          </marker>

          {/* Gradient for glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection arrows */}
        {steps.slice(0, -1).map((_, i) => {
          const delay = 30 + i * 45;
          const arrowFrame = frame - delay - 30;

          const progress = interpolate(arrowFrame, [0, 30], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });

          const x1 = startX + i * (stepWidth + gap) + stepWidth;
          const x2 = startX + (i + 1) * (stepWidth + gap);
          const y = centerY;

          const lineLength = x2 - x1 - 20;
          const currentLength = lineLength * progress;

          return (
            <g key={`arrow-${i}`}>
              {/* Arrow line */}
              <line
                x1={x1 + 10}
                y1={y}
                x2={x1 + 10 + currentLength}
                y2={y}
                stroke="#6366f1"
                strokeWidth={3}
                filter="url(#glow)"
                markerEnd={progress > 0.9 ? "url(#arrow)" : undefined}
              />

              {/* Animated dot traveling along arrow */}
              {progress > 0 && progress < 1 && (
                <circle
                  cx={x1 + 10 + currentLength}
                  cy={y}
                  r={6}
                  fill="#ec4899"
                  filter="url(#glow)"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Process steps */}
      {steps.map((step, i) => {
        const delay = 30 + i * 45;

        const scale = spring({
          frame: frame - delay,
          fps,
          config: { damping: 12, stiffness: 100 },
        });

        const opacity = interpolate(frame - delay, [0, 20], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        const x = startX + i * (stepWidth + gap);
        const color = COLORS[i % COLORS.length];

        // Pulsing effect for active step
        const isActive = Math.floor((frame - 180) / 60) % steps.length === i;
        const pulseScale = isActive
          ? 1 + Math.sin(frame * 0.1) * 0.02
          : 1;

        return (
          <div
            key={step}
            style={{
              position: "absolute",
              left: x,
              top: centerY - stepHeight / 2,
              width: stepWidth,
              height: stepHeight,
              transform: `scale(${scale * pulseScale})`,
              opacity,
            }}
          >
            {/* Step number badge */}
            <div
              style={{
                position: "absolute",
                top: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                fontWeight: 700,
                color: "white",
                boxShadow: `0 0 20px ${color}80`,
              }}
            >
              {i + 1}
            </div>

            {/* Step box */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 16,
                background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                border: `2px solid ${color}60`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isActive
                  ? `0 0 40px ${color}40`
                  : `0 10px 30px rgba(0,0,0,0.3)`,
                transition: "box-shadow 0.3s",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                {step}
              </span>
            </div>

            {/* Status indicator */}
            {frame > delay + 100 && (
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  opacity: interpolate(
                    frame - delay - 100,
                    [0, 20],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  ),
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10b981",
                  }}
                />
                <span
                  style={{
                    color: "#10b981",
                    fontSize: 14,
                  }}
                >
                  Ready
                </span>
              </div>
            )}
          </div>
        );
      })}

      {/* Progress indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
        }}
      >
        {steps.map((_, i) => {
          const delay = 30 + i * 45;
          const isComplete = frame > delay + 60;

          return (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: isComplete ? "#10b981" : "rgba(255,255,255,0.2)",
                transition: "background 0.3s",
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
