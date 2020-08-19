const remarkCodesandbox = require('remark-codesandbox')

module.exports = {
  title: 'Kodiak UI',
  tagline: 'A performant and accessible hook and component library for React',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'skyverge',
  projectName: 'kodiak-ui',
  themeConfig: {
    navbar: {
      title: 'Kodiak UI',
      logo: {
        alt: 'SkyVerge Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: '/introduction',
          activeBasePath: '',
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
          remarkPlugins: [[remarkCodesandbox, { mode: 'iframe' }]],
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
