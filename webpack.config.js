const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ["./src/assets/scss/app.scss", "./src/assets/js/app.js", "./src/index.njk"],
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                includePaths: ['./node_modules'],
              },
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.njk|nunjucks/,
        use: [
          "html-loader",
          {
            // use html-loader or html-withimg-loader to handle inline resource
            loader: "nunjucks-webpack-loader", // add nunjucks-webpack-loader
            options: {
              alias: {
                // add alias and you can use it in your template
                components: path.resolve(__dirname, "../src/components")
              },
              tags: {
                // if you want to use different tokens
                blockStart: "@{%",
                blockEnd: "%}",
                variableStart: "@{{",
                variableEnd: "}}",
                commentStart: "{#",
                commentEnd: "#}"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: "./src/index.njk",
          to: "index.html"
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
