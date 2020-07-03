const resolve = require('../webpack/resolve.js')

module.exports = {
  resolve: {
    alias: resolve.alias,
  },
  module: {
    rules: [
     
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"],
      },
     
    ],
  },
}
