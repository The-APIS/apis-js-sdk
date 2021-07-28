const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'APIS',
      type: 'umd',
    },
  },
  devServer: {
    inline: true,
    contentBase: 'test',
  },

  plugins: [new NodePolyfillPlugin()],

  externals: {
    web3: {
      commonjs: 'web3',
      commonjs2: 'web3',
      amd: 'web3',
      root: 'web3',
    },
  },
}
