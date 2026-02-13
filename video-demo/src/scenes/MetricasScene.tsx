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

export const MetricasScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge entrance
  const badgeScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, mass: 0.5 },
  });
  const badgeOp = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Counter animation: 34.57 → 74.24
  const counterProgress = interpolate(frame, [30, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const counterValue = 34.57 + (74.24 - 34.57) * counterProgress;

  // "Before" label
  const beforeOp = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Arrow
  const arrowOp = interpolate(frame, [50, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "After" value color transition
  const afterColor = counterProgress > 0.9 ? "#81B5A1" : "white";

  // Improvement badge
  const improvBadgeOp = interpolate(frame, [125, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const improvBadgeScale = spring({
    frame: frame - 125,
    fps,
    config: { damping: 10, mass: 0.4 },
  });

  // Mini metrics stagger
  const mini1Op = interpolate(frame, [140, 155], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mini1Y = interpolate(frame, [140, 155], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mini2Op = interpolate(frame, [150, 165], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mini2Y = interpolate(frame, [150, 165], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mini3Op = interpolate(frame, [160, 175], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mini3Y = interpolate(frame, [160, 175], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out
  const fadeOut = interpolate(frame, [255, 280], [1, 0], {
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
      {/* Badge with IEY logo */}
      <div
        style={{
          opacity: badgeOp,
          transform: `scale(${Math.max(0, badgeScale)})`,
          background: "rgba(129,181,161,0.15)",
          border: "2px solid rgba(129,181,161,0.3)",
          borderRadius: 14,
          padding: "12px 28px",
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <Img
          src={staticFile("iey-logo-white.png")}
          style={{ height: 44, width: "auto" }}
        />
        <span
          style={{
            color: "rgba(255,255,255,0.7)",
            fontFamily: "system-ui",
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          Caso real — 6 meses
        </span>
      </div>

      {/* Main counter area */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 50,
        }}
      >
        {/* Before */}
        <div style={{ opacity: beforeOp, textAlign: "center" }}>
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "system-ui",
              fontSize: 28,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            Julio
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "system-ui",
              fontSize: 100,
              fontWeight: 800,
              letterSpacing: "-3px",
            }}
          >
            34.57%
          </div>
        </div>

        {/* Arrow */}
        <div style={{ opacity: arrowOp }}>
          <svg width="72" height="72" viewBox="0 0 48 48" fill="none">
            <path
              d="M8 24h32M32 16l8 8-8 8"
              stroke="#81B5A1"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* After (animated) */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              color: "#81B5A1",
              fontFamily: "system-ui",
              fontSize: 28,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            Diciembre
          </div>
          <div
            style={{
              color: afterColor,
              fontFamily: "system-ui",
              fontSize: 100,
              fontWeight: 800,
              letterSpacing: "-3px",
              transition: "color 0.3s",
            }}
          >
            {counterValue.toFixed(2)}%
          </div>
        </div>
      </div>

      {/* Label */}
      <div
        style={{
          color: "rgba(255,255,255,0.5)",
          fontFamily: "system-ui",
          fontSize: 30,
          marginTop: 10,
          marginBottom: 16,
        }}
      >
        Facturación de clientes recurrentes sobre total
      </div>

      {/* Improvement badge */}
      <div
        style={{
          opacity: improvBadgeOp,
          transform: `scale(${Math.max(0, improvBadgeScale)})`,
          background: "rgba(129,181,161,0.2)",
          borderRadius: 24,
          padding: "12px 32px",
          marginBottom: 40,
        }}
      >
        <span
          style={{
            color: "#81B5A1",
            fontFamily: "system-ui",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          +114.8% de mejora relativa
        </span>
      </div>

      {/* Mini metrics */}
      <div
        style={{
          display: "flex",
          gap: 32,
        }}
      >
        <div
          style={{
            opacity: mini1Op,
            transform: `translateY(${mini1Y}px)`,
            background: "rgba(255,255,255,0.05)",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "20px 36px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#81B5A1",
              fontFamily: "system-ui",
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            19
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui",
              fontSize: 24,
              marginTop: 6,
            }}
          >
            Clientes recurrentes
          </div>
        </div>

        <div
          style={{
            opacity: mini2Op,
            transform: `translateY(${mini2Y}px)`,
            background: "rgba(255,255,255,0.05)",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "20px 36px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#81B5A1",
              fontFamily: "system-ui",
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            +88%
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui",
              fontSize: 24,
              marginTop: 6,
            }}
          >
            Ticket promedio
          </div>
        </div>

        <div
          style={{
            opacity: mini3Op,
            transform: `translateY(${mini3Y}px)`,
            background: "rgba(255,255,255,0.05)",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "20px 36px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#81B5A1",
              fontFamily: "system-ui",
              fontSize: 52,
              fontWeight: 800,
            }}
          >
            +258%
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui",
              fontSize: 24,
              marginTop: 6,
            }}
          >
            Volumen de pedidos
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
