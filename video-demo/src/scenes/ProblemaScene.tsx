import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

export const ProblemaScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Main question fade + scale
  const titleOp = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 30], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle fade in
  const subOp = interpolate(frame, [40, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [40, 65], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Red accent line
  const lineWidth = interpolate(frame, [30, 55], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out
  const fadeOut = interpolate(frame, [85, 110], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#293E40",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut,
      }}
    >
      {/* Main question */}
      <div
        style={{
          opacity: titleOp,
          transform: `translateY(${titleY}px)`,
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 82,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.1,
          maxWidth: 1000,
          letterSpacing: "-1px",
        }}
      >
        ¿Tu distribuidora pierde
        <br />
        clientes todos los meses?
      </div>

      {/* Red divider line */}
      <div
        style={{
          width: lineWidth,
          height: 5,
          background: "#E17055",
          borderRadius: 3,
          marginTop: 36,
          marginBottom: 36,
        }}
      />

      {/* Subtitle */}
      <div
        style={{
          opacity: subOp,
          transform: `translateY(${subY}px)`,
          color: "rgba(255,255,255,0.55)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 44,
          textAlign: "center",
          lineHeight: 1.5,
          maxWidth: 800,
        }}
      >
        El 68% se va en silencio.
        <br />
        Sin quejarse. Sin avisar.
      </div>
    </AbsoluteFill>
  );
};
