const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  
  output: {
    
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
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
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