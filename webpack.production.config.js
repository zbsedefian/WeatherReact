var GhPagesWebpackPlugin = require("gh-pages-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/WeatherReact/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugin: [
    new GhPagesWebpackPlugin({
      path: "./public",
      options: {
        message: "deployment",
        user: {
          name: "Zach",
          email: "zbsedefian@gmail.com"
        }
      }
    })
  ]
};
