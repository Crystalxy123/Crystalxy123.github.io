import eslint from '@eslint/js';

export default [
  eslint.configs.recommended,
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'academic-website/**', 'artifacts/**'],
  },
];

