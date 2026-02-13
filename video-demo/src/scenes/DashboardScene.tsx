import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { salesData, alertas } from "../data/mockData";

/* ── helpers ─────────────────────────────── */

const CHART_W = 580;
const CHART_H = 240;
const PAD = 40;
const MIN_V = 80;
const MAX_V = 420;

function chartPoint(i: number, v: number): [number, number] {
  const x = PAD + (i / (salesData.length - 1)) * (CHART_W - 2 * PAD);
  const y =
    CHART_H - PAD - ((v - MIN_V) / (MAX_V - MIN_V)) * (CHART_H - 2 * PAD);
  return [x, y];
}

const linePath = salesData
  .map((d, i) => {
    const [x, y] = chartPoint(i, d.value);
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  })
  .join(" ");

const areaPath =
  linePath +
  ` L${CHART_W - PAD},${CHART_H - PAD} L${PAD},${CHART_H - PAD} Z`;

/* ── component ───────────────────────────── */

export const DashboardScene: React.FC = () => {
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
    config: { damping: 15, mass: 0.6, stiffness: 80 },
  });

  // Chart draw
  const chartDraw = interpolate(frame, [15, 140], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Alerts stagger
  const alertAnimations = alertas.map((_, i) => {
    const start = 50 + i * 28;
    const op = interpolate(frame, [start, start + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const x = interpolate(frame, [start, start + 20], [40, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { op, x };
  });

  // Stock badge pulse (after frame 130)
  const stockVisible = interpolate(frame, [130, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulse =
    frame > 145
      ? 1 + 0.06 * Math.sin(((frame - 145) / 30) * Math.PI * 2)
      : 1;

  // Fade out
  const fadeOut = interpolate(frame, [190, 210], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const PATH_LEN = 2000;

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
          width: 1080,
          height: 580,
          background: "rgba(255,255,255,0.04)",
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.08)",
          transform: `scale(${containerScale})`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            height: 52,
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            gap: 6,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <rect x="1.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#5C8F83"/>
            <rect x="16.75" y="1.75" width="13.5" height="13.5" rx="2.8" fill="#81B5A1"/>
            <rect x="1.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#293E40"/>
            <rect x="16.75" y="16.75" width="13.5" height="13.5" rx="2.8" fill="#3D6362"/>
          </svg>
          <span
            style={{
              color: "white",
              fontFamily: "system-ui",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            PymePilot Dashboard
          </span>
          <div style={{ flex: 1 }} />
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "system-ui",
              fontSize: 13,
            }}
          >
            Hoy: 10 Feb 2026
          </span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: "flex", padding: 20, gap: 20 }}>
          {/* Left: chart */}
          <div
            style={{
              flex: 1.4,
              background: "rgba(255,255,255,0.03)",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "system-ui",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 12,
              }}
            >
              Ventas Mensuales 2025
            </span>

            <svg
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              style={{ width: "100%", flex: 1 }}
            >
              {/* Grid lines */}
              {[0.25, 0.5, 0.75].map((t) => {
                const y =
                  CHART_H - PAD - t * (CHART_H - 2 * PAD);
                return (
                  <line
                    key={t}
                    x1={PAD}
                    y1={y}
                    x2={CHART_W - PAD}
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth={1}
                  />
                );
              })}

              {/* Area fill */}
              <path
                d={areaPath}
                fill="url(#chart-area-grad)"
                opacity={chartDraw * 0.3}
              />

              {/* Line */}
              <path
                d={linePath}
                stroke="#81B5A1"
                strokeWidth={3}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={PATH_LEN}
                strokeDashoffset={PATH_LEN * (1 - chartDraw)}
              />

              {/* Data point at current draw position */}
              {salesData.map((d, i) => {
                const progress = i / (salesData.length - 1);
                if (progress > chartDraw) return null;
                const [cx, cy] = chartPoint(i, d.value);
                const dotOp = interpolate(
                  chartDraw,
                  [progress, progress + 0.05],
                  [0, 1],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }
                );
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={3.5}
                    fill="#81B5A1"
                    opacity={dotOp}
                  />
                );
              })}

              {/* Month labels */}
              {salesData.map((d, i) => {
                const [x] = chartPoint(i, d.value);
                return (
                  <text
                    key={i}
                    x={x}
                    y={CHART_H - 10}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.35)"
                    fontSize={10}
                    fontFamily="system-ui"
                  >
                    {d.month}
                  </text>
                );
              })}

              <defs>
                <linearGradient
                  id="chart-area-grad"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={CHART_H}
                >
                  <stop offset="0%" stopColor="#81B5A1" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#81B5A1" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Alerts panel */}
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.03)",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "system-ui",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Alertas
              </span>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {alertas.map((a, i) => (
                  <div
                    key={a.id}
                    style={{
                      opacity: alertAnimations[i].op,
                      transform: `translateX(${alertAnimations[i].x}px)`,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      borderRadius: 8,
                      background:
                        a.type === "stock"
                          ? "rgba(231,76,60,0.12)"
                          : "rgba(255,193,7,0.10)",
                      border: `1px solid ${
                        a.type === "stock"
                          ? "rgba(231,76,60,0.25)"
                          : "rgba(255,193,7,0.2)"
                      }`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background:
                          a.type === "stock" ? "#E74C3C" : "#FFC107",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "system-ui",
                        fontSize: 13,
                      }}
                    >
                      {a.client}
                    </span>
                    {a.days > 0 && (
                      <span
                        style={{
                          marginLeft: "auto",
                          color: "rgba(255,255,255,0.4)",
                          fontFamily: "system-ui",
                          fontSize: 11,
                        }}
                      >
                        {a.days}d
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stock critical badge */}
            <div
              style={{
                opacity: stockVisible,
                transform: `scale(${pulse})`,
                background: "rgba(231,76,60,0.12)",
                border: "1px solid rgba(231,76,60,0.3)",
                borderRadius: 12,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(231,76,60,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E74C3C",
                  fontSize: 18,
                  fontWeight: 700,
                  fontFamily: "system-ui",
                }}
              >
                !
              </div>
              <div>
                <div
                  style={{
                    color: "#E74C3C",
                    fontFamily: "system-ui",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Stock Crítico
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "system-ui",
                    fontSize: 11,
                    marginTop: 2,
                  }}
                >
                  3 productos bajo mínimo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
