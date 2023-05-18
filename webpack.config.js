const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set the mode to development or production
  entry: "./src/index.js", // Entry point of your application
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/custom-template.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle filename
    clean: true, // Clean output directory before emit
  },
  module: {
    rules: [
      // Add loaders for different file types or preprocessors
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
