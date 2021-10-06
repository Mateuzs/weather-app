const HtmlWebPackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.WEATHER_API_KEY": JSON.stringify(process.env.WEATHER_API_KEY || "66a58cd39f59a5da5adef8630cdb5627"),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js"],
  },
};
