import { defineConfig } from 'eslint';

export default defineConfig({
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
  },
});
