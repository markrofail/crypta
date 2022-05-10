module.exports = {
  'env': {
    "react-native/react-native": true,
  },
  "extends": [
    "@react-native-community",
    "prettier",
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  "plugins": ["react", "react-native", 'prettier', '@typescript-eslint'],
  'rules': {
    "max-len": ["error", { "code": 120 }],
  },
};
