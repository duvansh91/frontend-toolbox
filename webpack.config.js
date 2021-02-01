const path = require('path')
const htmlWebpack = require('html-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill','./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  plugins: [
    new htmlWebpack({
      template: './public/index.html'
    })
  ],
  devServer: {
    port: 4000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}