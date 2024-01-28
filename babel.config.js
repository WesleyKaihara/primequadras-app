module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@routes': ['./src/main/routes/index.ts'],
          '@screens': ['./src/presentation/screens/index.ts'],
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
};
