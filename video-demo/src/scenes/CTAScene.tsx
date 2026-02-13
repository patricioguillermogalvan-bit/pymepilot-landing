import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pain point hook
  const hookOp = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const hookY = interpolate(frame, [0, 25], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA text
  const ctaOp = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaY = interpolate(frame, [30, 50], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Button pulse
  const btnScale = spring({
    frame: frame - 50,
    fps,
    config: { damping: 10, mass: 0.4, stiffness: 120 },
  });
  const btnPulse =
    frame > 70
      ? 1 + 0.025 * Math.sin(((frame - 70) / 20) * Math.PI * 2)
      : 1;

  // URL
  const urlOp = interpolate(frame, [60, 75], [0, 1], {
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
        gap: 0,
        opacity: fadeOut,
      }}
    >
      {/* Pain point hook */}
      <div
        style={{
          opacity: hookOp,
          transform: `translateY(${hookY}px)`,
          color: "rgba(255,255,255,0.5)",
          fontFamily: "system-ui",
          fontSize: 36,
          fontWeight: 500,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Cada día sin seguimiento, perdés clientes.
      </div>

      {/* CTA text */}
      <div
        style={{
          opacity: ctaOp,
          transform: `translateY(${ctaY}px)`,
          color: "white",
          fontFamily: "system-ui",
          fontSize: 64,
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: "-1px",
          marginBottom: 36,
          lineHeight: 1.15,
        }}
      >
        Agendá 15 min y te mostramos
        <br />
        cómo recuperarlos
      </div>

      {/* Button */}
      <div
        style={{
          transform: `scale(${Math.max(0, btnScale) * btnPulse})`,
          background: "linear-gradient(135deg, #81B5A1, #5a9a82)",
          borderRadius: 18,
          padding: "22px 56px",
          boxShadow: "0 8px 32px rgba(129,181,161,0.3)",
        }}
      >
        <span
          style={{
            color: "white",
            fontFamily: "system-ui",
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          Escribinos por WhatsApp
        </span>
      </div>

      {/* URL */}
      <div
        style={{
          opacity: urlOp * 0.5,
          marginTop: 28,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <rect x="1.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#5C8F83"/>
          <rect x="16.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#81B5A1"/>
          <rect x="1.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#293E40"/>
          <rect x="16.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#3D6362"/>
        </svg>
        <span
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "system-ui",
            fontSize: 28,
          }}
        >
          pymepilot.cloud
        </span>
      </div>
    </AbsoluteFill>
  );
};
