const webpack = require('webpack');

// your app's webpack.config.js
const devModeWebpack = require('../webpack.dev');
const prodModeWebpack = require('../webpack.prod');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-ie11",
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      }
    },
    '@storybook/addon-actions',

  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    let webConfig = prodModeWebpack;
    if (configType === 'DEVELOPMENT') {
      webConfig = devModeWebpack;
    }
    return {
      ...config,
      target: ['web', 'es5'],
      resolve: {
        ...config.resolve,
        ...webConfig.resolve
      },
      module: {
        ...config.module,
        ...webConfig.module,
      }
    }
  }
}
