module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  ignorePatterns: ['**/src/assets/'],
  plugins: ['import-alias', 'simple-import-sort'],
  rules: {
    'react-native/no-unused-styles': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^react$', '^[a-z]'], ['^@']],
      },
    ],
    'import-alias/import-alias': [
      'warn',
      {
        relativeDepth: 0,
        aliases: [
          {alias: '@api/index', matcher: '^src/api'},
          {alias: '@assets', matcher: '^src/assets'},
          {alias: '@components', matcher: '^src/components'},
          {alias: '@navigation', matcher: '^src/navigation'},
          {alias: '@screens', matcher: '^src/screens'},
          {alias: '@store', matcher: '^src/store'},
          {alias: '@utils', matcher: '^src/utils'},
        ],
      },
    ],
  },
};
