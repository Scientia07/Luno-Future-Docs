/*
==============================================================================
FILE METADATA
==============================================================================
filename:       AnimatedChart.tsx
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Animated bar chart composition with D3-style animations
==============================================================================
*/

import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";

interface DataPoint {
  name: string;
  value: number;
}

interface Props {
  data: DataPoint[];
}

export const AnimatedChart: React.FC<Props> = ({ data }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const maxValue = Math.max(...data.map((d) => d.value));
  const barWidth = 120;
  const chartHeight = 500;
  const chartWidth = data.length * (barWidth + 40);

  // Title animation
  const titleOpacity = interpolate(frame, [0, 30], [0, 1]);
  const titleY = interpolate(frame, [0, 30], [-20, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: 56,
          fontWeight: 700,
          color: "white",
          marginBottom: 60,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        Monthly Performance
      </h1>

      {/* Chart container */}
      <div
        style={{
          position: "relative",
          width: chartWidth,
          height: chartHeight + 100,
        }}
      >
        {/* Y-axis */}
        <div
          style={{
            position: "absolute",
            left: -60,
            top: 0,
            height: chartHeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map(
            (val, i) => (
              <span
                key={i}
                style={{
                  color: "#64748b",
                  fontSize: 16,
                }}
              >
                {Math.round(val)}
              </span>
            )
          )}
        </div>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: chartHeight * ratio,
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(255,255,255,0.1)",
            }}
          />
        ))}

        {/* Bars */}
        {data.map((point, index) => {
          const delay = 30 + index * 15;

          const barHeight = spring({
            frame: frame - delay,
            fps,
            config: { damping: 15, stiffness: 80 },
          });

          const targetHeight = (point.value / maxValue) * chartHeight;
          const currentHeight = barHeight * targetHeight;

          // Value label animation
          const labelOpacity = interpolate(
            frame - delay,
            [20, 35],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          // Color based on value
          const hue = interpolate(point.value, [0, maxValue], [0, 120]);
          const barColor = `hsl(${hue}, 70%, 55%)`;

          return (
            <div
              key={point.name}
              style={{
                position: "absolute",
                bottom: 100,
                left: index * (barWidth + 40) + 20,
                width: barWidth,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Value label */}
              <span
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: 600,
                  marginBottom: 10,
                  opacity: labelOpacity,
                  transform: `translateY(${-currentHeight}px)`,
                }}
              >
                {point.value}
              </span>

              {/* Bar */}
              <div
                style={{
                  width: barWidth,
                  height: currentHeight,
                  background: `linear-gradient(180deg, ${barColor}, ${barColor}dd)`,
                  borderRadius: "12px 12px 0 0",
                  position: "absolute",
                  bottom: 0,
                  boxShadow: `0 0 30px ${barColor}40`,
                }}
              />

              {/* X-axis label */}
              <span
                style={{
                  color: "#94a3b8",
                  fontSize: 20,
                  position: "absolute",
                  bottom: -40,
                }}
              >
                {point.name}
              </span>
            </div>
          );
        })}

        {/* X-axis line */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(255,255,255,0.3)",
          }}
        />
      </div>

      {/* Legend / Note */}
      <p
        style={{
          color: "#64748b",
          fontSize: 18,
          marginTop: 40,
          opacity: interpolate(frame, [120, 150], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Values in thousands
      </p>
    </AbsoluteFill>
  );
};
