const reactConfig = require('./eslint.react')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...reactConfig,
  extends: [
    ...reactConfig.extends,
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
}
