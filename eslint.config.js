import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  // Apply to all JS and Vue files
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Node.js globals for config files
        process: 'readonly',
        __dirname: 'readonly',
        // Vite globals
        import: 'readonly'
      }
    }
  },

  // JavaScript recommended rules
  js.configs.recommended,

  // Vue recommended rules for Vue 3
  ...pluginVue.configs['flat/recommended'],

  // Custom rules for template-friendly development
  {
    rules: {
      // Vue-specific adjustments
      'vue/multi-word-component-names': 'off', // Allow single-word components in templates
      'vue/no-unused-vars': 'warn',
      'vue/no-undef-components': 'off', // Allow router-link, etc.
      
      // Relax formatting rules (Prettier handles formatting)
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/attributes-order': 'off',
      
      // JavaScript adjustments
      'no-unused-vars': 'warn', // Warn instead of error for development
      'no-console': 'warn', // Allow console in development
      'no-debugger': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      
      // Template-friendly rules
      'no-undef': 'off' // Vue SFC handles this differently
    }
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js' // Allow flexible config files
    ]
  }
]