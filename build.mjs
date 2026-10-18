import { readFileSync } from "node:fs";
import * as esbuild from "esbuild";

const manifest = JSON.parse(
  readFileSync(
    new URL(
      "./custom_components/wled_more_info/manifest.json",
      import.meta.url,
    ),
  ),
);
const watch = process.argv.includes("--watch");

// The integration serves the bundle from its own folder.
const options = {
  entryPoints: ["src/wled-more-info.ts"],
  outfile: "custom_components/wled_more_info/frontend/wled-more-info.js",
  bundle: true,
  format: "esm",
  target: "es2022",
  minify: !watch,
  sourcemap: watch ? "inline" : false,
  legalComments: "none",
  define: { __VERSION__: JSON.stringify(manifest.version) },
  logLevel: "info",
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}
