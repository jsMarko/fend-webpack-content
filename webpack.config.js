const path = require("path")
const webpack = require("webpack")

module.exports = {
   entry: "./src/client/index.js",
   module: {
      rules: [
         {
            test: "/.js$/", // cant put '/\.js$/'   \ <---- disappears when I save it
            exclude: /node_modules/,
            loader: "babel-loader",
         },
      ],
   },
}
