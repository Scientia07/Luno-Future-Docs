/*
==============================================================================
FILE METADATA
==============================================================================
filename:       CodeWalkthrough.tsx
created:        2026-01-27
updated:        2026-01-27
version:        1.0.0
status:         active
description:    Animated code walkthrough with syntax highlighting
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

interface Props {
  code: string;
  language: string;
}

// Simple syntax highlighting (in production, use prism-react-renderer)
const highlightCode = (code: string): React.ReactNode[] => {
  const keywords = [
    "function",
    "return",
    "if",
    "const",
    "let",
    "var",
    "else",
    "for",
    "while",
  ];
  const lines = code.split("\n");

  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let tokenIndex = 0;

    // Simple tokenization
    const regex =
      /(\b(?:function|return|if|const|let|var|else|for|while)\b)|(\d+)|(".*?"|'.*?')|(\w+)|(\/\/.*$)|([^\w\s])/g;
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(line)) !== null) {
      // Add any whitespace before the match
      if (match.index > lastIndex) {
        tokens.push(
          <span key={`ws-${tokenIndex++}`}>
            {line.slice(lastIndex, match.index)}
          </span>
        );
      }

      const [fullMatch, keyword, number, string, identifier, comment, symbol] =
        match;

      let color = "#e2e8f0"; // default
      if (keyword) color = "#c792ea"; // purple for keywords
      else if (number) color = "#f78c6c"; // orange for numbers
      else if (string) color = "#c3e88d"; // green for strings
      else if (comment) color = "#546e7a"; // gray for comments
      else if (symbol) color = "#89ddff"; // cyan for symbols
      else if (identifier) color = "#82aaff"; // blue for identifiers

      tokens.push(
        <span key={`token-${tokenIndex++}`} style={{ color }}>
          {fullMatch}
        </span>
      );

      lastIndex = match.index + fullMatch.length;
    }

    // Add remaining text
    if (lastIndex < line.length) {
      tokens.push(<span key={`end-${tokenIndex}`}>{line.slice(lastIndex)}</span>);
    }

    return tokens;
  });
};

export const CodeWalkthrough: React.FC<Props> = ({ code }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lines = code.split("\n");
  const highlightedLines = highlightCode(code);

  // Calculate which line is currently being highlighted
  const framesPerLine = 60;
  const currentHighlightLine = Math.floor(frame / framesPerLine);

  return (
    <AbsoluteFill
      style={{
        background: "#1e1e2e",
        fontFamily: "'Fira Code', 'Consolas', monospace",
        padding: 80,
      }}
    >
      {/* Editor chrome */}
      <div
        style={{
          background: "#181825",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: "#11111b",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#f38ba8",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#f9e2af",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#a6e3a1",
            }}
          />
          <span
            style={{
              marginLeft: 20,
              color: "#6c7086",
              fontSize: 14,
            }}
          >
            example.js
          </span>
        </div>

        {/* Code content */}
        <div
          style={{
            flex: 1,
            padding: 40,
            display: "flex",
          }}
        >
          {/* Line numbers */}
          <div
            style={{
              paddingRight: 30,
              borderRight: "1px solid #313244",
              marginRight: 30,
            }}
          >
            {lines.map((_, i) => {
              const lineOpacity = interpolate(
                frame,
                [i * 10, i * 10 + 15],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );

              return (
                <div
                  key={i}
                  style={{
                    color: currentHighlightLine === i ? "#cdd6f4" : "#45475a",
                    fontSize: 24,
                    lineHeight: "48px",
                    textAlign: "right",
                    opacity: lineOpacity,
                    transition: "color 0.3s",
                  }}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>

          {/* Code */}
          <div style={{ flex: 1 }}>
            {highlightedLines.map((tokens, i) => {
              const lineFrame = frame - i * 10;
              const lineOpacity = interpolate(lineFrame, [0, 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              const translateX = interpolate(lineFrame, [0, 15], [20, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              const isHighlighted = currentHighlightLine === i;

              return (
                <div
                  key={i}
                  style={{
                    fontSize: 24,
                    lineHeight: "48px",
                    opacity: lineOpacity,
                    transform: `translateX(${translateX}px)`,
                    background: isHighlighted
                      ? "rgba(99, 102, 241, 0.2)"
                      : "transparent",
                    marginLeft: -20,
                    paddingLeft: 20,
                    borderLeft: isHighlighted
                      ? "3px solid #6366f1"
                      : "3px solid transparent",
                    transition: "background 0.3s, border 0.3s",
                  }}
                >
                  {tokens}
                </div>
              );
            })}
          </div>
        </div>

        {/* Explanation panel */}
        <div
          style={{
            background: "#11111b",
            padding: "24px 40px",
            borderTop: "1px solid #313244",
          }}
        >
          <ExplanationText line={currentHighlightLine} frame={frame} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ExplanationText: React.FC<{ line: number; frame: number }> = ({
  line,
}) => {
  const explanations = [
    "Defining our recursive fibonacci function...",
    "Base case: return n if it's 0 or 1",
    "Recursive case: sum of previous two numbers",
  ];

  const text = explanations[Math.min(line, explanations.length - 1)] || "";

  return (
    <p
      style={{
        color: "#a6adc8",
        fontSize: 22,
        margin: 0,
      }}
    >
      {text}
    </p>
  );
};
