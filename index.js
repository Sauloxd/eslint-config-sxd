module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    // My customizations
    camelcase: ['error', { properties: 'always' }],
    // Line between code. See spec/javascript for demonstration
    'padding-line-between-statements': [
      'error',
      { blankLine: 'never', prev: 'const', next: 'const' },
      { blankLine: 'never', prev: 'let', next: 'let' },
      { blankLine: 'always', prev: 'const', next: 'let' },

      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
};
