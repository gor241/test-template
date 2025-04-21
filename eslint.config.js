// @ts-check

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  // Базовые правила JS
  js.configs.recommended,
  
  // Базовые правила TS (без строгой проверки типов)
  ...tseslint.configs.recommended,
  
  // Глобальные настройки
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Браузерные глобальные переменные
        ...globals.node,    // Node.js глобальные переменные
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
      },
    },
  },
  
  // Простые правила для всех файлов
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Предупреждает об использовании console.log
      'no-debugger': 'warn',                                // Предупреждает об использовании debugger
      'no-alert': 'warn',                                   // Предупреждает об использовании alert
      'no-unused-vars': 'off',                              // Отключено в пользу TS версии
      '@typescript-eslint/no-unused-vars': ['warn', {       // TS версия для неиспользуемых переменных
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
  
  // Конфигурация для .ts/.tsx файлов
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
  
  // Игнорируемые файлы и директории
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.git/**',
      '*.config.js',
      'vite.config.ts',
      'public/**',
      'coverage/**',
    ],
  }
); 