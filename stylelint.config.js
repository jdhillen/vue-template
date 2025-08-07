import stylelintConfig from '@jdhillen/stylelint-config';

export default {
  ...stylelintConfig,
  rules: {
    ...stylelintConfig.rules,
    'scss/dollar-variable-pattern': [
      '^[a-z][a-zA-Z0-9]*(-[a-z][a-zA-Z0-9]*)*$',
      {
        message: 'Expected variable to be kebab-case'
      }
    ]
  }
};
