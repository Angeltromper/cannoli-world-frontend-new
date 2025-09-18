import js from '@eslint/js';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: { ...globals.browser }
        },
        plugins: { react, 'react-hooks': hooks },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off'
        },
        settings: { react: { version: 'detect' } }
    },
    {
        ignores: ['dist', 'node_modules', 'coverage']
    },
    {
        files: ['**/*.{test,spec}.{js,jsx}'],
        languageOptions: {
            globals: { ...globals.browser, ...globals.jest, ...globals.vitest }
        },
        rules: {
            'no-unused-expressions': 'off'
        }
    },
    {
        files: ['vite.config.*', 'eslint.config.*', '*.config.*', 'scripts/**'],
        languageOptions: {
            globals: { ...globals.node }
        }
    }
];
