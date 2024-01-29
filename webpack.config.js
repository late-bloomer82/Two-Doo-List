const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for your application
  entry: './src/index.js',

  // Output configuration
  output: {
    // Output directory (absolute path)
    path: path.resolve(__dirname, 'dist'),

    // Output filename
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // path to your HTML template
      filename: 'index.html', // output filename for the generated HTML
    }),
  ],
}