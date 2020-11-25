// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (babel) {
  return {
    name: '@kodiak-ui',
    visitor: {
      JSXAttribute(path) {
        if (['sx', 'variant'].includes(path.node.name.name)) {
          const expressionPath = path.get('value.expression')
          expressionPath.hoist()
        }
      },
    },
  }
}
