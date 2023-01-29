import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.js',
    output: {
        file: './bundle/bundle.js',
        format: 'es',
        plugins: [
            terser({
              ecma: 2020,
              mangle: { toplevel: true },
              compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true
              },
              output: { quote_style: 1 }
            })
          ]
    },
};