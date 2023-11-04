module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'no-trailing-spaces': 0,
    'quote-props': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    'no-unused-vars': 0,
  },
};
