module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  plugins: ['vue', 'html', 'standard'],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 1,
    'no-use-before-define': 1,
    'no-redeclare': 1,
    'no-console': 0,
    quotes: ['error', 'single']
  }
};
