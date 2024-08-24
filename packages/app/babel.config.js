module.exports = {
  presets: [ ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }] ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ]
};
