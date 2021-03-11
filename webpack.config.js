const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './target/index.js',
  output: {
    filename: 'libs.js',
    path: path.resolve(__dirname, 'public', 'js'),
  },
	plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
