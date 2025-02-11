const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    // 'eslint:recommended',
    'prettier',
    // 'turbo',
  ],
  plugins: [
    // 'jest',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  rules: {
    // Imports
    'import/no-self-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: false, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'unknown',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
    'import/no-default-export': 'off',
    'import/no-named-as-default': 'error',
    'import/named': 'error',
    'import/no-absolute-path': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    // Sorting
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}
