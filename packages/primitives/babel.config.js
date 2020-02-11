module.exports = function(api) {
  api.cache(true)

  const presets = []
  const plugins = ['@babel/plugin-proposal-optional-chaining']

  return {
    presets,
    plugins,
  }
}
