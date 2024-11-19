const path = require('path');

module.exports = {
  mode: 'production',
  entry: './task_2/js/dashboard_main.js', // Entry file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Matches .css files
        use: ['style-loader', 'css-loader'], // Injects CSS into the DOM
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Matches image files
        type: 'asset/resource', // Generates separate files for images
        generator: {
          filename: 'assets/[name][ext]', // Save images in public/assets/
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Optimize images
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false },
            },
          },
        ],
        enforce: 'pre', // Run before other loaders
      },
    ],
  },
  plugins: [],
};
