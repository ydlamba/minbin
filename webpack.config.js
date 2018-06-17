const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = (env, argv) => {
  const config = {
    entry: {
      main: "./src/index.tsx"
    },

    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].chunk.js",
      path: path.resolve(__dirname, "dist")
    },

    devtool:
      argv.mode === "development"
        ? "cheap-module-eval-source-map"
        : "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["awesome-typescript-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "public/index.html"
      }),
      new CheckerPlugin(),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require("./package.json").version)
      })
    ],

    devServer: {
      stats: {
        colors: true
      },
      compress: true,
      overlay: {
        warnings: true,
        errors: true
      },
      progress: true,
      stats: "errors-only",
      open: true,
      contentBase: path.join(__dirname, "public"),
      watchContentBase: true,
      watchOptions: {
        ignored: /node_modules/
      },
      historyApiFallback: true
    },

    node: {
      fs: "empty"
    }
  };

  return config;
};
