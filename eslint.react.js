const baseConfig = require('./eslint.base')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    // require.resolve('@vercel/style-guide/eslint/jest-react'),
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] },
  ],
}
