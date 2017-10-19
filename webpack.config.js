const webpack = require('webpack');
const path = require("path");

  module.exports = {
    entry: {
      app: ["./app.js"]
    },

    output: {
      path: path.join(__dirname, "build"),
      publicPath: "/build/",
      filename: "bundle.js"
    }
};