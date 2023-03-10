const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // context: path.join(__dirname, 'src'),
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: '[contenthash].js',
    path: path.join(__dirname, 'public'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './assets/images/favicon/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/Assets/img'),
          to: path.resolve(__dirname, 'public/img'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require('autoprefixer')]
                },
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
}
