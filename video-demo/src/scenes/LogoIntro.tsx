import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const LogoIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo icon: spring scale + fade
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, mass: 0.5, stiffness: 100 },
  });
  const logoOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title "PymePilot" fade + slide up
  const titleOpacity = interpolate(frame, [40, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [40, 70], [25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle fade + slide
  const subOpacity = interpolate(frame, [75, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [75, 105], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Global fade out at end of scene
  const fadeOut = interpolate(frame, [125, 150], [1, 0], {
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
      {/* Logo Icon */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <svg width="200" height="200" viewBox="0 0 32 32" fill="none">
          <rect x="1.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#5C8F83"/>
          <rect x="16.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#81B5A1"/>
          <rect x="1.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#293E40"/>
          <rect x="16.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#3D6362"/>
        </svg>
      </div>

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginTop: 20,
          fontSize: 96,
          fontWeight: 800,
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "white",
          letterSpacing: "-2px",
        }}
      >
        Pyme<span style={{ color: "#81B5A1" }}>Pilot</span>
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          marginTop: 16,
          fontSize: 42,
          fontWeight: 400,
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.5px",
        }}
      >
        Seguimiento Inteligente para Distribuidoras
      </div>
    </AbsoluteFill>
  );
};
