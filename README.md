# `@babel/parser` 7.22 and esbuild bug reproduction

This repository is for reproducing warnings that occur when bundling `@babel/parser` 7.22.0 with esbuild.

## Overviwe

Bundle `@babel/parser` 7.22 with esbuild, the following warning appears:

```
npm run build

> babel-7.22-esbuild@1.0.0 build
> node ./scripts/build.mjs

▲ [WARNING] "script" is not a valid value for the "type" field [package.json]

    node_modules/@babel/parser/lib/package.json:1:10:
      1 │ { "type": "script" }
        ╵           ~~~~~~~~

  The "type" field must be set to either "commonjs" or "module".
```

## Details

The `npm run build` in this repository runs `scripts/build.mjs` and bundle `src/index.js` into `lib/index.js`.

`scripts/build.mjs`:

```js
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
```

`src/index.js`:

```js
export { parse } from "@babel/parser";
```
