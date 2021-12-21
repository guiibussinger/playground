module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-quotes': ['error', 'prefer-single']
  }
};
