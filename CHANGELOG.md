# CHANGELOG #
All the changes, additions, bugfixes, etc. made to this project.

## 2022-01-05
### Modified
- Refactor and extracted `store` and `<Provider>` from `index.tsx` into separate files and component, the provider is now called `<ReduxProvider>`

## 2022-01-04
### Added
- Create a `TodoProvider` and implement it, allowing for context usage
- Configure `gh-pages` deploy
- Create a basic Github Action to deploy a `gh-page` with a Node environment

### Modified
- Now the inputs get cleaned after your submission

### Fixed
- `tsconfig.json` can have now a `react-jsx` value because the webpack works and compiles properly

## 2021-12-29
### Added
- Implement context and redux store
- Implemented `styled-components`

## 2021-12-28
### Added
- Project started
- Repository initialized
- Dependencies installed
- Configure absolute paths
- Create basic components
  - Todo, TodoList, Task