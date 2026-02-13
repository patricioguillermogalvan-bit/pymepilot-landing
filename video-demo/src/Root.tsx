import React from "react";
import { Composition } from "remotion";
import { PymePilotDemo } from "./PymePilotDemo";

export const Root: React.FC = () => {
  return (
    <Composition
      id="PymePilotDemo"
      component={PymePilotDemo}
      durationInFrames={1170}
      fps={30}
      width={1200}
      height={676}
    />
  );
};
