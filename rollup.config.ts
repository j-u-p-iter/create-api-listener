import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
    { file: pkg['umd:main'], format: 'umd', name: `${pkg.name}.umd.js` },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      exclude: ['**/__tests__/*'],
    }),
  ],
};
