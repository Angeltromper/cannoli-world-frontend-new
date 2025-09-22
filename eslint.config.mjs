import js from '@eslint/js'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
    { ignores: ['dist/**', 'node_modules/**', 'coverage/**'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
            globals: { ...globals.browser }
        },
        plugins: { react, 'react-hooks': hooks },
        settings: { react: { version: 'detect' } },
        rules: {
            ...js.configs.recommended.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/jsx-key': 'warn',
            'react/self-closing-comp': 'warn',
            'react/no-unknown-property': 'warn',
            'react/prop-types': 'off'
        }
    },
    {
        files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'],
        languageOptions: { globals: { ...globals.vitest, ...globals.browser } },
        rules: {
            'no-console': 'off',
            'no-unused-expressions': 'off'
        }
    },
    {
        files: ['vite.config.*', 'eslint.config.*', '*.config.*', 'scripts/**'],
        languageOptions: { globals: { ...globals.node } }
    }
]
