/**
 * PymePilot Demo Video - Render Script
 *
 * Renders the Remotion composition to MP4 with compression
 * optimized for web embedding (<3MB target).
 *
 * Usage:
 *   node render.mjs              (default: h264, CRF 28)
 *   node render.mjs --quality high   (CRF 23, higher quality)
 *   node render.mjs --quality low    (CRF 32, smallest file)
 */

import path from "path";
import { fileURLToPath } from "url";
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COMPOSITION_ID = "PymePilotDemo";
const ENTRY_POINT = path.join(__dirname, "src/index.ts");
const OUTPUT_DIR = path.join(__dirname, "out");

// Parse quality flag
const qualityArg = process.argv.find((a) => a === "--quality");
const qualityIdx = process.argv.indexOf("--quality");
const quality = qualityIdx !== -1 ? process.argv[qualityIdx + 1] : "default";

const CRF_MAP = {
  high: 23,
  default: 28,
  low: 32,
};
const crf = CRF_MAP[quality] || 28;

async function main() {
  const outputPath = path.join(OUTPUT_DIR, "demo.mp4");

  console.log("=".repeat(50));
  console.log("  PymePilot Demo - Video Render");
  console.log("=".repeat(50));
  console.log(`  Composition : ${COMPOSITION_ID}`);
  console.log(`  Codec       : h264`);
  console.log(`  CRF         : ${crf} (${quality})`);
  console.log(`  Output      : ${outputPath}`);
  console.log("=".repeat(50));
  console.log("");

  console.log("[1/3] Bundling project...");
  const bundleLocation = await bundle({
    entryPoint: ENTRY_POINT,
  });
  console.log("      Bundle ready.");

  console.log("[2/3] Selecting composition...");
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: COMPOSITION_ID,
  });
  console.log(
    `      ${composition.width}x${composition.height} @ ${composition.fps}fps, ${composition.durationInFrames} frames`
  );

  console.log("[3/3] Rendering video...");
  const startTime = Date.now();

  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation: outputPath,
    crf,
    imageFormat: "jpeg",
    jpegQuality: 85,
    chromiumOptions: {
      enableMultiProcessOnLinux: true,
    },
    onProgress: ({ progress }) => {
      const pct = (progress * 100).toFixed(1);
      process.stdout.write(`\r      Progress: ${pct}%`);
    },
  });

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n      Done in ${elapsed}s`);
  console.log(`\n  Output: ${outputPath}`);
  console.log("");
}

main().catch((err) => {
  console.error("Render failed:", err);
  process.exit(1);
});
