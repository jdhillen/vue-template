import { prettierConfig } from '@jdhillen/stylelint-config/prettier';

// Add any project-specific prettier overrides here
const customOptions = {
  // Example:
  // printWidth: 120,
  // tabWidth: 4
};

export default {
  ...prettierConfig,
  ...customOptions
};
