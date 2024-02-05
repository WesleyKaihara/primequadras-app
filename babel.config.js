module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true,
          blocklist: null,
          allowlist: null,
          verbose: false,
        },
      ],
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
            '@services': ['./src/main/services'],
            '@dtos': ['./src/domain/dtos'],
            '@src/*': ['./src'],
          },
        },
      ],
    ],
  };
};
