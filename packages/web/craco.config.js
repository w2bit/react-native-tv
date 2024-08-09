const webpack = require("webpack");
const { getWebpackTools } = require("react-native-monorepo-tools");

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Allow importing from external workspaces.
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);
      return webpackConfig;
    },
    plugins: [
      // Inject the "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      }),
    ],
  },
  babel: {
    presets: [
      ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
      '@babel/preset-env',  // Add this preset for core-js and regenerator-runtime support
      '@babel/preset-react', // Ensure React support
    ],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      [
        '@babel/plugin-transform-runtime'
      ],
    ],
  },
};
