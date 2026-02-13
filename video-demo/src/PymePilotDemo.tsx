import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { LogoIntro } from "./scenes/LogoIntro";
import { ProblemaScene } from "./scenes/ProblemaScene";
import { WhatsAppScene } from "./scenes/WhatsAppScene";
import { MetricasScene } from "./scenes/MetricasScene";
import { CTAScene } from "./scenes/CTAScene";
import { SocialProofScene } from "./scenes/SocialProofScene";

export const PymePilotDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#293E40" }}>
      {/* 0-5s: Logo intro */}
      <Sequence from={0} durationInFrames={150}>
        <LogoIntro />
      </Sequence>

      {/* 5-8.7s: Problema */}
      <Sequence from={150} durationInFrames={110}>
        <ProblemaScene />
      </Sequence>

      {/* 8.7-17.7s: WhatsApp informe */}
      <Sequence from={260} durationInFrames={270}>
        <WhatsAppScene />
      </Sequence>

      {/* 17.7-27s: Métricas IEY */}
      <Sequence from={530} durationInFrames={280}>
        <MetricasScene />
      </Sequence>

      {/* 27-33s: CTA con pain point */}
      <Sequence from={810} durationInFrames={180}>
        <CTAScene />
      </Sequence>

      {/* 33-39s: Social proof IEY */}
      <Sequence from={990} durationInFrames={180}>
        <SocialProofScene />
      </Sequence>
    </AbsoluteFill>
  );
};
