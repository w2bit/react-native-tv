const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      '@react-native-tv/app': path.resolve(__dirname, '../app/src'),
      // Inclua o caminho do node_modules raiz
      // 'node_modules': path.resolve(__dirname, '../../node_modules'),
    }
  },
  watchFolders: [
    path.resolve(__dirname, '../app'),
    path.resolve(__dirname, '../../node_modules'), // Adicione esta linha
  ],
};
