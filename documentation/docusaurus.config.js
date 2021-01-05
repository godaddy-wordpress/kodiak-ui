const remarkCodesandbox = require('remark-codesandbox')
const path = require('path')

const remarkAdmonitions = require('remark-admonitions')

module.exports = {
  title: 'Kodiak UI',
  tagline: 'A performant and accessible hook and component library for React',
  url: 'https://github.io/kodiak-ui', // Your website URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'skyverge', // Usually your GitHub org/user name.
  projectName: 'skyverge.github.io', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Kodiak UI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/skyverge/kodiak-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  stylesheets: ['https://use.typekit.net/fsd0oby.css'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Please change this to your repo.
          editUrl:
            'https://github.com/skyverge/kodiak-ui/tree/master/documentation',
          remarkPlugins: [remarkAdmonitions],
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [
              remarkCodesandbox,
              {
                mode: 'iframe',
                customTemplates: {
                  // !!! The template must be small, the files are passed in a GET request and compressed
                  // but still can hit the limit quickly.  Including the full theme in the example_template
                  // for example will cause the sandbox to fail
                  kodiak: {
                    // this can also reference a code sandbox template
                    // extends: 'cold-fire-ry31x'
                    extends: `file:${path.resolve('./example_template/')}`,
                    entry: 'src/App.tsx',
                  },
                  //
                  // Alias `react` to `new`
                  react: {
                    extends: 'new',
                  },
                  // Alias `react-component` to `new`, but also override `entry` to `src/App.js`
                  'react-component': {
                    extends: 'new',
                    entry: 'src/App.js',
                  },
                },
              },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1001, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
}
