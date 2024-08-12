const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Live server
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    compress: true,
    port: 5500,
  },

  // Html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  // Webpack modules
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};