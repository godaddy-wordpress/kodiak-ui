module.exports = {
  stories: ['../src/**/*.stories.(js|ts|tsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: {
          parser: 'typescript',
        },
      },
    },
  ],
}
