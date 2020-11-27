module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  babel: async options => {
    console.log(options)
    return {
      ...options,
      // any extra options you want to set
    }
  },
}
