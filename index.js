module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  rules: {
    // Stylistics
    quotes: ['error', 'single'],
    indent: ["error", 2],
    semi: ['error', 'always'],
    'array-bracket-spacing': ["error", 'never'],
    'computed-property-spacing': ["error", "never"],
    'comma-dangle': ["error", "never"],
    'comma-spacing': ["error", { "before": false, "after": true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ["error", "1tbs", { "allowSingleLine": true }],
    'eol-last': ["error", "always"],
    'func-call-spacing': ["error", "never"],
    // 'implicit-arrow-linebreak': ["error", "below"],
    'jsx-quotes': ["error", "prefer-double"],
    'key-spacing': ["error", { "beforeColon": false }],
    'keyword-spacing': ["error", { "before": true }],
    'linebreak-style': ["error", "unix"],
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 1, "maxBOF": 1 }],
    'no-trailing-spaces': ['error'],
    'no-whitespace-before-property': ["error"],
    'newline-per-chained-call': ["error"],
    'object-curly-newline': ["error", { "consistent": true }],
    'object-curly-spacing': ["error", "always"],
    'one-var': ["error", "never"],

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    // React specific
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      return: "parens-new-line",
      arrow: "parens-new-line"
    }],
    "react/jsx-indent": ['error', 2, {checkAttributes: true, indentLogicalExpressions: true}],
    "react/jsx-closing-tag-location": ['error'],
    "react/jsx-no-useless-fragment": ['error'],
  }
};
