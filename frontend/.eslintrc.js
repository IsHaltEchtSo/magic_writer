module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 0,
    'quotes': [2, 'single', {'avoidEscape': true}],
    'max-len': [2, {code: 80, ignorePattern: '^import|export .*'}],
  },
};
