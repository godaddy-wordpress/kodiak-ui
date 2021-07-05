module.exports = function (api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', { exclude: ['@babel/plugin-transform-regenerator'] }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]
  const plugins = ['@babel/plugin-proposal-optional-chaining']

  return {
    presets,
    plugins,
  }
}
