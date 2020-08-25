const remarkCodesandbox = require('remark-codesandbox')
const path = require('path')

module.exports = {
  title: 'Kodiak UI',
  tagline: 'A performant and accessible hook and component library for React',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'skyverge',
  projectName: 'kodiak-ui',
  themeConfig: {
    algolia: {
      apiKey: '704c4830b1c72946dd20fe251945d2e6',
      indexName: 'kodiak-ui',
    },
    navbar: {
      title: 'Kodiak UI',
      logo: {
        alt: 'SkyVerge Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/introduction',
          label: 'Documentation',
          position: 'right',
        },
        {
          href: 'https://github.com/skyverge/kodiak-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/skyverge',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/skyverge/kodiak-ui',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SkyVerge Inc. Built with Docusaurus.`,
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
          path: 'docs',
          routeBasePath: '/',
          include: ['**/*.md', '**/*.mdx'],
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
          editUrl: 'https://github.com/skyverge/kodiak-ui/edit/master/website/',
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
