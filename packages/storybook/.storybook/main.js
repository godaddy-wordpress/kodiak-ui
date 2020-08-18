module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|tsx|mdx)'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => {
        if (/node_modules/.test(prop?.parent?.fileName)) {
          return false
        }
        return true
      },
    },
  },
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
    },
  ],
}
