const path = require('path');

module.exports = {
  entry: './target/index.js',
  output: {
    filename: 'libs.js',
    path: path.resolve(__dirname, 'public', 'js'),
  }
};
