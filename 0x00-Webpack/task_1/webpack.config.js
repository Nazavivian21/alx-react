const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Entry point for Webpack
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  mode: 'production', // Set Webpack mode to production
};
