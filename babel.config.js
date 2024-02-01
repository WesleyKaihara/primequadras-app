module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          alias: {
            '@routes': ['./src/main/routes'],
            '@screens': ['./src/presentation/screens'],
            '@icons': ['./src/presentation/assets/icons'],
            '@components': ['./src/presentation/components'],
            '@services': ['./src/main/services/index'],
            '@src/*': ['./src'],
          },
        },
      ],
    ],
  };
};
