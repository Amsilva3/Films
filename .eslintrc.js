// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: { Node: true},
  extends: ['expo', 'prettier', 'universe/native','universe'],
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { variables: false }],
    'react/prop-types': ['error', { ignore: ['navigation', 'navigation.navigate'] }],
  },
};