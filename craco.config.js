const webpack = require("webpack");

module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        APP_URL: JSON.stringify(process.env.APP_URL),
        "process.env.API_URL": JSON.stringify(process.env.API_URL),
      }),
    ],
  },
};
