module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'react/jsx-uses-vars': 'error',
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], //檢核沒有使用的變數 沒有使用的變數會被警告
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-unused-vars': 0 //不核沒有使用的變數 沒有使用的變數不會被警告
  }
}
