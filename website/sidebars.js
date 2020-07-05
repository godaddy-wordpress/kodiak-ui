module.exports = {
  docs: [
    'introduction',
    'getting-started',
    'themeing',
    'sx-prop',
    'variants',
    {
      type: 'category',
      label: 'Primitives',
      items: ['primitives/box', 'primitives/flex', 'primitives/grid'],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: ['components/accordion'],
    },
    {
      type: 'category',
      label: 'Hooks',
      items: ['hooks/use-id'],
    },
  ],
}
