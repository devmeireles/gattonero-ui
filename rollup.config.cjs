const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");
const { terser } = require("rollup-plugin-terser");

const packageJson = require("./package.json");

module.exports = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: [
        "**/*.stories.tsx",
        "**/*.stories.ts",
        "**/*.test.tsx",
        "**/*.test.ts",
      ],
      declaration: true,
      declarationDir: "dist/types",
      rootDir: "src",
    }),
    postcss({
      extensions: [".css"],
    }),
    terser(),
  ],
  external: Object.keys(packageJson.peerDependencies || {}),
};
