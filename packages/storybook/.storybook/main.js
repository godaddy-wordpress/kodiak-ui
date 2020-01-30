module.exports = {
  stories: ['../src/**/*.stories.(js|ts|tsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
}
