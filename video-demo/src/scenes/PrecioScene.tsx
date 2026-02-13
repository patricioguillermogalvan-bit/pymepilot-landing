import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const PrecioScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "La competencia cobra" fade
  const compOp = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const compY = interpolate(frame, [0, 25], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Strikethrough animation
  const strikeWidth = interpolate(frame, [25, 45], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // PymePilot price entrance
  const priceScale = spring({
    frame: frame - 40,
    fps,
    config: { damping: 10, mass: 0.5, stiffness: 120 },
  });
  const priceOp = interpolate(frame, [40, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Bottom badges
  const badge1Op = interpolate(frame, [60, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badge2Op = interpolate(frame, [70, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out
  const fadeOut = interpolate(frame, [155, 180], [1, 0], {
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
      {/* Competitor price */}
      <div
        style={{
          opacity: compOp,
          transform: `translateY(${compY}px)`,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "system-ui",
            fontSize: 30,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          La competencia cobra
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "system-ui",
              fontSize: 72,
              fontWeight: 700,
            }}
          >
            $35.000 - $42.000/mes
          </span>
          {/* Strikethrough line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: `${strikeWidth}%`,
              height: 5,
              background: "#E17055",
              borderRadius: 3,
            }}
          />
        </div>
      </div>

      {/* PymePilot price */}
      <div
        style={{
          opacity: priceOp,
          transform: `scale(${Math.max(0, priceScale)})`,
          textAlign: "center",
          marginTop: 28,
        }}
      >
        <div
          style={{
            color: "#81B5A1",
            fontFamily: "system-ui",
            fontSize: 30,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          PymePilot
        </div>
        <div
          style={{
            color: "#81B5A1",
            fontFamily: "system-ui",
            fontSize: 140,
            fontWeight: 800,
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          $800
          <span
            style={{
              fontSize: 52,
              fontWeight: 500,
              opacity: 0.7,
              letterSpacing: 0,
            }}
          >
            /mes
          </span>
        </div>
      </div>

      {/* Bottom badges */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 44,
        }}
      >
        <div
          style={{
            opacity: badge1Op,
            background: "rgba(129,181,161,0.12)",
            border: "2px solid rgba(129,181,161,0.25)",
            borderRadius: 14,
            padding: "14px 28px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ color: "#81B5A1", fontSize: 32 }}>&#x2714;</span>
          <span
            style={{
              color: "rgba(255,255,255,0.8)",
              fontFamily: "system-ui",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            Setup GRATIS
          </span>
        </div>

        <div
          style={{
            opacity: badge2Op,
            background: "rgba(129,181,161,0.12)",
            border: "2px solid rgba(129,181,161,0.25)",
            borderRadius: 14,
            padding: "14px 28px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ color: "#81B5A1", fontSize: 32 }}>&#x2714;</span>
          <span
            style={{
              color: "rgba(255,255,255,0.8)",
              fontFamily: "system-ui",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            Garantía 60 días
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
