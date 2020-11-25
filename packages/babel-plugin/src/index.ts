// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (babel) {
  return {
    name: '@kodiak-ui',
    visitor: {
      JSXAttribute(path, state) {
        const attributesToHoist = state?.opts?.attributesToHoist || [
          'sx',
          'variants',
        ]
        if (attributesToHoist.includes(path.node.name.name)) {
          const expressionPath = path.get('value.expression')
          expressionPath.hoist()
        }
      },
    },
  }
}
