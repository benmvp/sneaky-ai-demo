const nextConfig = require('./eslint.next')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...nextConfig,
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}
