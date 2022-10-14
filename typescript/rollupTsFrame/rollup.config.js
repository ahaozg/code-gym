import path from 'node:path';
import fs from 'node:fs';
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import cleanup from 'rollup-plugin-cleanup'
import size from 'rollup-plugin-sizes'
import {visualizer} from 'rollup-plugin-visualizer'
import consola from 'consola';

import {version as masterVersion} from './package.json';

const packagesDir = path.resolve(__dirname, 'packages');
// const packageDir = path.resolve(packagesDir, process.env.TARGET);
const packageDir = path.resolve(packagesDir, 'core');
const packageDirDist = `${packagesDir}/dist`;

const name = path.basename(packageDir);

// major name
const M = 'jiulaw_monitor';

const packageDirs = fs.readdirSync(packagesDir);
const paths = {};
packageDirs.forEach(dir => {
  if (dir.startsWith('.')) {
    return
  }
  paths[`${M}/${dir}`] = [`${packagesDir}/${dir}/src`];
})

consola.log('packagesDir', packagesDir);
consola.log('packageDir', packageDir);
consola.log('packageDirDist', packageDirDist);
consola.log('packageDirs', packageDirs);
consola.log('paths', paths);

const banner = `/*
* ${M}/${name} version ${masterVersion}
*/`

function getCommon() {
  return {
    input: `${packageDir}/src/index.ts`,
    output: {
      banner
    },
    external: [...Object.keys(paths)],
    plugins: [
      nodeResolve(),
      size(),
      visualizer({
        title: `${M} analyzer`,
        filename: 'analyzer.html'
      }),
      commonjs({
        exclude: 'node_modules'
      }),
      json(),
      cleanup({comments: 'none'}),
      typescript({
        tsconfig: 'tsconfig.build.json',
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            declarationMap: true,
            declarationDir: `${packageDirDist}/packages/`,
            module: 'ES2015',
            paths
          }
        },
        include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)']
      }),
      babel({
        babelHelpers:'runtime',
        include: 'packages/**',
        exclude: 'node_modules/**',
        extensions: ['.js', '.ts']
      })
    ]
  }
}

const common = getCommon();

const esmPackage = {
  ...common,
  output: {
    file: `${packageDirDist}/${name}.esm.js`,
    format: 'es',
    sourcemap: true,
    ...common.output
  },
  plugins: [
      ...common.plugins,
      clear( {targets: [packageDirDist]})
  ]
}

const cjsPackage = {
  ...common,
  external: [],
  output: {
    file: `${packageDirDist}/${name}.js`,
    format: 'cjs',
    sourcemap: true,
    minifyInternalExports: true,
    ...common.output
  }
}

const umdPackage = {
  ...common,
  output: {
    file: `${packageDirDist}/${name}.umd.js`,
    format: 'umd',
    sourcemap: true,
    name: 'JIULAW_MONITOR',
    ...common.output
  }
}

const iifePackage = {
  ...common,
  output: {
    file: `${packageDirDist}/${name}.min.js`,
    format: 'iife',
    sourcemap: true,
    name: 'JIULAW_MONITOR',
    ...common.output
  },
  plugins: [
      ...common.plugins,
      terser({
        output: {
          comments: 'all',
        },
      })
  ]
}

const total = {
  esmPackage,
  umdPackage,
  iifePackage,
  cjsPackage
}

export default [...Object.values(total)];
