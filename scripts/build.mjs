import { build } from "esbuild";

const options = {
  entryPoints: ["./src/index.js"],
  minify: true,
  bundle: true,
  outfile: "./lib/index.js",
  format: "cjs",
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
