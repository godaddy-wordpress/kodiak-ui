module.exports = {
  stories: ['../src/**/*.stories.(js|ts|tsx|mdx)'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets:
                    'last 2 Chrome versions, last 2 Firefox versions, last 1 Safari versions',
                },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-proposal-optional-chaining'],
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  addons: [
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
