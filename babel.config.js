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
    presets: [
        "@babel/plugin-transform-runtime"
      ]
  };