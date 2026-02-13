import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";

export const SocialProofScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // IEY logo entrance
  const logoScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, mass: 0.5 },
  });
  const logoOp = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Headline
  const headOp = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headY = interpolate(frame, [25, 45], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subline
  const subOp = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out for loop
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
      {/* IEY Logo */}
      <div
        style={{
          opacity: logoOp,
          transform: `scale(${Math.max(0, logoScale)})`,
          marginBottom: 40,
        }}
      >
        <Img
          src={staticFile("iey-logo-white.png")}
          style={{ height: 120, width: "auto" }}
        />
      </div>

      {/* Headline */}
      <div
        style={{
          opacity: headOp,
          transform: `translateY(${headY}px)`,
          color: "white",
          fontFamily: "system-ui",
          fontSize: 52,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: 1000,
          letterSpacing: "-1px",
          marginBottom: 20,
        }}
      >
        Sistema probado y validado en la
        <br />
        marca <span style={{ color: "#81B5A1" }}>#1</span> de Accesorios MagSafe
        <br />
        en Argentina
      </div>

      {/* Subline */}
      <div
        style={{
          opacity: subOp,
          color: "rgba(255,255,255,0.45)",
          fontFamily: "system-ui",
          fontSize: 30,
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        +114% facturación recurrente en 6 meses
      </div>
    </AbsoluteFill>
  );
};
