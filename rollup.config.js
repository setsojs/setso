import { terser } from "@chiogen/rollup-plugin-terser";


export default {
  input: './build/index.js',
  output: {
    file: "./bundle/bundle.js", 
    format: "esm", 
    plugins: [terser()]
  },
};