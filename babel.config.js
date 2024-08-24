module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": ">0.2%, not dead, not op_mini all",
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ]
};
