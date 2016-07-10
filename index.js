module.exports = {
    extends:
      ['eslint:recommended'].concat(
        [
          './rules/best-practices',
          './rules/errors',
          './rules/es6',
          './rules/node',
          './rules/style',
          './rules/variables',
        ].map(require.resolve)
      ),
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
    },
    rules: {},
};
