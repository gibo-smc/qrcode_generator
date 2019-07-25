const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    qrcode: './index.js',
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    targets: {
                      ie: '11'
                    }
                  }
                ]
              ]
            }
          }
        ],
        exclude: /node-modules/,
      }
    ]
  }
}