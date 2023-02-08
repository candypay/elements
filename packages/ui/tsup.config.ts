import { Options } from "tsup";

export const tsupReactConfig: Options = {
  target: "esnext",
  clean: true,
  dts: true,
  keepNames: true,
  minify: true,
  sourcemap: true,
  format: ["cjs"],
};
