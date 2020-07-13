module.exports = {
  stories: ['../src/**/*.stories.(js|ts|tsx|mdx)'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
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
