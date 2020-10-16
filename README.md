<p align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
  <a href="https://skyverge.com">
    <img src="https://user-images.githubusercontent.com/1162694/74063113-c6bad100-49bd-11ea-982d-3c4b17df80ab.png" alt="SkyVerge" />
  </a>
</p>

<p align="center">Themable component library and utility hooks for React</p>

[![SkyVerge](https://circleci.com/gh/skyverge/kodiak-ui.svg?style=svg)](https://circleci.com/gh/skyverge/kodiak-ui)
[![Known Vulnerabilities](https://snyk.io/test/github/skyverge/kodiak/badge.svg)](https://snyk.io/test/github/skyverge/kodiak)
[![Coverage Status](https://coveralls.io/repos/github/skyverge/kodiak-ui/badge.svg?branch=master)](https://coveralls.io/github/skyverge/kodiak-ui?branch=master)
[![CodeFactor](https://www.codefactor.io/repository/github/skyverge/kodiak-ui/badge)](https://www.codefactor.io/repository/github/skyverge/kodiak-ui)

## Intro

Kodiak UI is a set of primitive and complex components and React hooks for building applications. It is used and built by the fine folks at [SkyVerge](https://skyverge.com) on [Jilt](https://jilt.com) and other products.

All components are built on the [Theme UI](https://theme-ui.com/) and [Styled System](https://styled-system) libraries to build applications on constraint-based design principles. All components accept the styled-system style props for quick and consistent styling based upon the Theme UI theme specification.

Kodiak hooks are small, reusable, and well tested to provide the most consistent approach to manipulating state, data, and side effects.

## Get started

```
// Install primitive components
yarn add @kodiak-ui/primitives react react-dom theme-ui

// Install hooks
yarn add @kodiak-ui/hooks react react-dom
```

All complex components (i.e. Dropdown, Combobox, Accordion) are separate packages and will need to be installed as needed.

```
yarn add @kodiak-ui/dropdown
```

Once primitive components or a complex component have been installed, create a theme object to match the design of your application.

```js
// example theme.js
export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}
```

Finally, just like in Emotion or Styled Components, you need to wrap your application with Theme UI's ThemeProvider component.

```jsx
// basic usage
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/alexandermchan"><img src="https://avatars2.githubusercontent.com/u/1864372?v=4" width="100px;" alt=""/><br /><sub><b>Alex Chan</b></sub></a><br /><a href="https://github.com/skyverge/kodiak-ui/commits?author=alexanderchan" title="Code">💻</a> <a href="#ideas-alexanderchan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-alexanderchan" title="Maintenance">🚧</a> <a href="https://github.com/skyverge/kodiak-ui/pulls?q=is%3Apr+reviewed-by%3Aalexanderchan" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/TAYTS"><img src="https://avatars0.githubusercontent.com/u/29126748?v=4" width="100px;" alt=""/><br /><sub><b>TAY TS</b></sub></a><br /><a href="https://github.com/skyverge/kodiak-ui/commits?author=TAYTS" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://jilt.com"><img src="https://avatars0.githubusercontent.com/u/1162694?v=4" width="100px;" alt=""/><br /><sub><b>Wesley Cole</b></sub></a><br /><a href="https://github.com/skyverge/kodiak-ui/commits?author=wesleycole" title="Code">💻</a> <a href="#design-wesleycole" title="Design">🎨</a> <a href="#maintenance-wesleycole" title="Maintenance">🚧</a> <a href="https://github.com/skyverge/kodiak-ui/pulls?q=is%3Apr+reviewed-by%3Awesleycole" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!