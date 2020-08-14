## Installation

- Run `yarn` in the repository's root directory to install everything you need for development.
- Run `yarn build` in the root directory to build the modules.

## Running Tests

- `yarn test` will run the tests once.
- `yarn test -w` will run the tests on every change.
- `yarn test -u` to update snapshots.

## Building

[preconstruct](https://preconstruct.tools/) is used to build the source files

- Run `yarn build` in the root directory to build the modules.
  - Run `yarn` again to setup dev mode.
- Run `yarn build:watch` to build packages on every change.
  - This should not be necessary in most cases because `yarn install` will setup each `dist` folder with a reference to the packages `src/index.tsx`.

## Release

- Run `yarn release`

## Adding a new package

- Run `cd packages` from root and `mkdir yourpackagename`
- Go into the package folder and run `yarn init -y` and update the `package.json` with any specifics
- Create the file `src/index.tsx`
- Run `yarn run preconstruct init` to setup the main and module folder

## Documentation Website Development

- from the root `cd website` to change to the docs folder.
- `yarn run start` to start a development server.
- Update the docs in the `docs` folder.
- Update `sidebars.js` to place the doc in the sidebar.
