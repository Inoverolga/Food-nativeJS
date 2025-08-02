"use strict";

let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // for GitHub Pages production
  //mode: "development", //for development

  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/Food-nativeJS/", //  GitHub Pages
    clean: true, // clear dist before pack
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", //путь к файлу
      filename: "index.html",
    }),
    new CopyPlugin({
      // в итоге img, css, icons попадут в ‘dist’
      patterns: [
        {
          from: "img",
          to: "img",
          noErrorOnMissing: true,
        },
        {
          from: "css",
          to: "css",
          noErrorOnMissing: true,
        },
        {
          from: "icons",
          to: "icons",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  devtool: false, //for production
  //devtool: "source-map", // for development

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  debug: false, // for production
                  // debug: true, // for development

                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
