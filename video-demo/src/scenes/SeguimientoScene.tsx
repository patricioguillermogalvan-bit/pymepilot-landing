import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { clientes } from "../data/mockData";

const STATUS_COLORS: Record<string, { bg: string; border: string; text: string; label: string }> = {
  activo: {
    bg: "rgba(129,181,161,0.15)",
    border: "rgba(129,181,161,0.3)",
    text: "#81B5A1",
    label: "Activo",
  },
  dormido: {
    bg: "rgba(255,193,7,0.12)",
    border: "rgba(255,193,7,0.25)",
    text: "#FFC107",
    label: "Dormido",
  },
  nuevo: {
    bg: "rgba(52,152,219,0.15)",
    border: "rgba(52,152,219,0.3)",
    text: "#3498DB",
    label: "Nuevo",
  },
};

export const SeguimientoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Container entrance
  const containerOp = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const containerScale = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.5 },
  });

  // Title slide
  const titleOp = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Client rows stagger
  const rowAnimations = clientes.map((_, i) => {
    const start = 25 + i * 15;
    const op = interpolate(frame, [start, start + 18], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const y = interpolate(frame, [start, start + 18], [12, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { op, y };
  });

  // "Nuevo cliente detectado" notification
  const newClientStart = 115;
  const notifOp = interpolate(frame, [newClientStart, newClientStart + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const notifX = interpolate(frame, [newClientStart, newClientStart + 20], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const notifPulse =
    frame > newClientStart + 20
      ? 1 + 0.03 * Math.sin(((frame - newClientStart - 20) / 20) * Math.PI * 2)
      : 1;

  // Fade out
  const fadeOut = interpolate(frame, [160, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#293E40",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: containerOp * fadeOut,
      }}
    >
      <div
        style={{
          width: 900,
          background: "rgba(255,255,255,0.04)",
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.08)",
          padding: 28,
          transform: `scale(${containerScale})`,
        }}
      >
        {/* Header */}
        <div
          style={{
            opacity: titleOp,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <div
              style={{
                color: "white",
                fontFamily: "system-ui",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              Seguimiento Automático
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontFamily: "system-ui",
                fontSize: 13,
                marginTop: 4,
              }}
            >
              Estado de clientes B2B en tiempo real
            </div>
          </div>

          {/* Notification badge */}
          <div
            style={{
              opacity: notifOp,
              transform: `translateX(${notifX}px) scale(${notifPulse})`,
              background: "rgba(52,152,219,0.15)",
              border: "1px solid rgba(52,152,219,0.3)",
              borderRadius: 10,
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#3498DB",
              }}
            />
            <span
              style={{
                color: "#3498DB",
                fontFamily: "system-ui",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Nuevo cliente detectado
            </span>
          </div>
        </div>

        {/* Table header */}
        <div
          style={{
            display: "flex",
            padding: "8px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: 4,
          }}
        >
          {["Cliente", "Estado", "Último Pedido", "Facturación"].map(
            (col, i) => (
              <span
                key={col}
                style={{
                  flex: i === 0 ? 2 : 1,
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "system-ui",
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                }}
              >
                {col}
              </span>
            )
          )}
        </div>

        {/* Client rows */}
        {clientes.map((c, i) => {
          const s = STATUS_COLORS[c.status];
          const isNew = c.status === "nuevo";
          const highlight = isNew && frame > newClientStart + 20;
          return (
            <div
              key={c.name}
              style={{
                opacity: rowAnimations[i].op,
                transform: `translateY(${rowAnimations[i].y}px)`,
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                borderRadius: 10,
                background: highlight
                  ? "rgba(52,152,219,0.08)"
                  : i % 2 === 0
                  ? "rgba(255,255,255,0.02)"
                  : "transparent",
                marginBottom: 2,
              }}
            >
              <span
                style={{
                  flex: 2,
                  color: "white",
                  fontFamily: "system-ui",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {c.name}
              </span>
              <span style={{ flex: 1 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 6,
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    color: s.text,
                    fontFamily: "system-ui",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </span>
              </span>
              <span
                style={{
                  flex: 1,
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "system-ui",
                  fontSize: 13,
                }}
              >
                {c.lastOrder}
              </span>
              <span
                style={{
                  flex: 1,
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "system-ui",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {c.revenue}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
