import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';


export default {
	input: 'src/index.js',
	// external: ['loglevel', 'web3'],
	output: [
		{
			name: 'index',
			file: pkg.browser,
			format: 'umd'
		},
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
	],
	plugins: [
		resolve(),
		commonjs(),
		babel({
			babelHelpers: process.env.NODE_END !== 'test' ? 'bundled' : 'runtime',
			exclude: ['node_modules/**'],
		}),
		json(),
	],
}
