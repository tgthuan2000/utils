import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { readdirSync } from 'fs';
import { join } from 'path';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

const isDevMode = process.env.NODE_ENV !== 'production';

const getSrcFolderInput = (folderPath = 'src') => {
  const folderInput = {};

  const folderContents = readdirSync(folderPath, { withFileTypes: true });

  folderContents.forEach((item) => {
    if (item.isDirectory()) {
      const subFolderName = item.name;
      const inputKey = `${subFolderName}/index`;
      folderInput[inputKey] = join(folderPath, subFolderName, 'index.ts');
    }
  });

  return folderInput;
};

const inputFolders = getSrcFolderInput();

export default [
  {
    input: {
      index: 'src/index.ts',
      ...inputFolders,
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'es',
        sourcemap: isDevMode,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: isDevMode,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: {
      index: 'src/index.ts',
      ...inputFolders,
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'es',
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
      },
    ],
    plugins: [dts.default()],
  },
];
