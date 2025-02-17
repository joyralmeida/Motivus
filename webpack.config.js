const path = require('path');

module.exports = {
  mode: 'production', // ou 'development'
  entry: './src/index.js', // ou './src/main.js'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
