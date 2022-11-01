const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');
const common = require("./webpack.common.js");


module.exports = merge(common, {
  mode: "development",
  //  devtool: 'inline-source-map',
  devServer: {
    static: "./dist",
  },
  plugins: [
    new Dotenv({ path: `${__dirname}/.env.development` }),
  ],
});
