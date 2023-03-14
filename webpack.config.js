const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: ["./src/index.ts", "./src/css/styles.css"],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@main": path.resolve(__dirname, "src/main"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: ["", ".ts", ".js", ".css"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "our project",
      template: "src/index.html",
      favicon: "src/assets/favicon.ico",
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devServer: {
    static: [
      path.join(__dirname, "dist"),
      "./src/index.html",
      "./src/css/style.css",
    ],
    compress: true,
    liveReload: true,
    hot: true,
    port: 3001,
  },
};
