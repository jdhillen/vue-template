import createConfig from '@jdhillen/eslint-config';

const config = createConfig({
  ignorePaths: ['**/coverage/**', '**/temp/**', '**/logs/**']
});

export default [...config];
