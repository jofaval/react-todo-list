# CHANGELOG #
All the changes, additions, bugfixes, etc. made to this project.

## 2022-01-05
### Added
- Create `Task` tests. Now only checking if it renders
- Now there's a button to indicate the complete status, which shows as a green border if completed
- Add credits section in README.md
- Install `redux-persist` to save the `state` locally

### Modified
- Refactor and extracted `store` and `<Provider>` from `index.tsx` into separate files and component, the provider is now called `<ReduxProvider>`
- `<Task>` now doesn't need `removeTask` as a prop, because it properly uses the `TodoContext`.
- Refactor `<TodoList>` component
  - Now uses friendly relative paths, and has a `<NoTasksFound>` notice
- Inputs now have a full width in `<AddTask>`
- Edit button now only appers if a task is being edited
- Refactor a little bit the visual style, and implement a purple color theme
- Redux `Provider` file is now called `ReduxProvider`
- Now the PWA's manifest title is a more appropiate one, "To-Do List" instead of "React App"
- Improved `<Button>` UX with a hovering title and opacity indicator when disabled
- Refactor tasks display into a separate component called `<Tasks>`
- Visually improve the `<Task>` component

### Fixed
- `<ReduxProvider>` didn't call the `{children}` so all the tests were failing just because of that, there was nothing to check, it was empty
- Don't use `<ReduxProvider>`, the Provider doesn't work properly and leaves the state empty

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