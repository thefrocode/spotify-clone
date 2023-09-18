const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const cryptoFallback = require.resolve('crypto-browserify');
const streamFallback = require.resolve('stream-browserify');

// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact(),
  new VanillaExtractPlugin(),
  MiniCssExtractPlugin(),
  // new Dotenv({
  //   path: '../../.env',
  // })

  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        crypto: cryptoFallback,
        stream: streamFallback,
      },
    };
    config.module.rules.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false, // Required as image imports should be handled via JS/TS import statements
          },
        },
      ],
    });

    return config;
  }
);
