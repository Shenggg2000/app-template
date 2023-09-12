module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@api': './src/api/index',
            '@components': './src/components/index',
            '@constants': './src/constants/index',
            '@hooks': './src/hooks/index',
            '@navigators': './src/navigators/index',
            '@screens': './src/screens/index',
            '@theme': './src/theme/index',
            '@utils': './src/utils/index',
          },
        },
    ]
  ]
};
