import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const WhatsAppScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title section
  const textOp = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = interpolate(frame, [0, 30], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Message card 1
  const msg1Op = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const msg1Y = interpolate(frame, [35, 55], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Message card 2
  const msg2Op = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const msg2Y = interpolate(frame, [80, 100], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Check turns blue (read)
  const readCheck = interpolate(frame, [130, 135], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Informe enviado" label
  const labelScale = spring({
    frame: frame - 140,
    fps,
    config: { damping: 12, mass: 0.4 },
  });
  const labelOp = interpolate(frame, [140, 155], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out
  const fadeOut = interpolate(frame, [245, 270], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const checkColor = readCheck > 0.5 ? "#53BDEB" : "rgba(255,255,255,0.45)";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#293E40",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut,
        padding: "0 60px",
      }}
    >
      {/* Title */}
      <div
        style={{
          opacity: textOp,
          transform: `translateY(${textY}px)`,
          textAlign: "center",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            color: "white",
            fontFamily: "system-ui",
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-1px",
          }}
        >
          Tu vendedor recibe un informe por{" "}
          <span style={{ color: "#25D366" }}>WhatsApp</span>
        </div>
      </div>

      {/* Message cards row */}
      <div
        style={{
          display: "flex",
          gap: 28,
          width: "100%",
          maxWidth: 1080,
        }}
      >
        {/* Card 1 — Alerta de reposición */}
        <div
          style={{
            opacity: msg1Op,
            transform: `translateY(${msg1Y}px)`,
            flex: 1,
            background: "#111B21",
            borderRadius: 18,
            padding: "20px 26px",
            border: "2px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              color: "#81B5A1",
              fontSize: 22,
              fontFamily: "system-ui",
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            ALERTA DE REPOSICIÓN
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: 26,
              fontFamily: "system-ui",
              lineHeight: 1.3,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Contactá a TechCell Store HOY
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 22,
              fontFamily: "system-ui",
              lineHeight: 1.45,
            }}
          >
            Hace 45 días no compra. Promedio: cada 30.
            <br />
            <br />
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Sugerí:</span> MagSafe Pro 15W (x20), Cable USB-C 2m (x50)
          </div>
        </div>

        {/* Card 2 — Mensaje sugerido */}
        <div
          style={{
            opacity: msg2Op,
            transform: `translateY(${msg2Y}px)`,
            flex: 1,
            background: "#111B21",
            borderRadius: 18,
            padding: "20px 26px",
            border: "2px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#FDCB6E",
              fontSize: 22,
              fontFamily: "system-ui",
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            MENSAJE SUGERIDO
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 24,
              fontFamily: "system-ui",
              lineHeight: 1.5,
              fontStyle: "italic",
              flex: 1,
            }}
          >
            "Hola Juan! Vi que hace un tiempo no reponés MagSafe. ¿Necesitás que te arme un pedido? Tengo stock disponible."
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 8,
              marginTop: 8,
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 20,
                fontFamily: "system-ui",
              }}
            >
              8:00
            </span>
            <span style={{ color: checkColor, fontSize: 22 }}>
              &#x2713;&#x2713;
            </span>
          </div>
        </div>
      </div>

      {/* "Informe enviado" badge */}
      <div
        style={{
          opacity: labelOp,
          transform: `scale(${Math.max(0, labelScale)})`,
          marginTop: 24,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(37,211,102,0.12)",
          border: "2px solid rgba(37,211,102,0.25)",
          borderRadius: 12,
          padding: "10px 24px",
        }}
      >
        <span style={{ fontSize: 24, color: "#25D366" }}>&#x2714;</span>
        <span
          style={{
            color: "#25D366",
            fontFamily: "system-ui",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          Informe diario enviado
        </span>
      </div>
    </AbsoluteFill>
  );
};
