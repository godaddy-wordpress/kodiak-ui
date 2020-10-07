module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|tsx|mdx)'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: true,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => {
        if (/node_modules/.test(prop && prop.parent && prop.parent.fileName)) {
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
