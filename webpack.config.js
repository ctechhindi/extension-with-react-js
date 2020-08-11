const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtensionReloader  = require('webpack-extension-reloader');
const { version } = require('./package.json');

const config = {
  mode: process.env.NODE_ENV, // production, development
  context: __dirname + '/src',
  entry: {
    'background': './index.js',
    'popup': './popup/popup.js',
    'options': './options/options.js',
    // /src/content/[name].js
    'scripts/script1': './content/custom-script.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.sass$/,
        use: ['css-loader', 'sass-loader?indentedSyntax'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/images/',
          emitFile: false,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/fonts/',
          emitFile: false,
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './options/options.html',
      chunks: ['options'],
      filename: 'options.html',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './popup/popup.html',
      chunks: ['popup'],
      filename: 'popup.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'icons', to: 'icons' },
        { from: 'locales', to: '_locales' },
        {
          from: 'manifest.json',
          to: 'manifest.json',
          transform: (content) => {
            const jsonContent = JSON.parse(content);
            jsonContent.version = version;
  
            if (config.mode === 'development') {
              jsonContent['content_security_policy'] = "script-src 'self' 'unsafe-eval'; object-src 'self'";
            }
  
            return JSON.stringify(jsonContent, null, 2);
          },
        },
      ],
    }),
  ],
}

if (process.env.NODE_ENV === 'development') {
  config.plugins = (config.plugins || []).concat([
    new ExtensionReloader(),
  ]);
}

module.exports = config;