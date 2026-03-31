export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
        es2021: true,
      },
    },
    rules: {
      'semi': ['error', 'always'],       
      'quotes': ['error', 'single'],     
      'indent': ['error', 2],             
      'no-unused-vars': 'warn',          
      'comma-dangle': ['error', 'always-multiline'], 
      'eol-last': ['error', 'always'], 
    },
  },
];