# CHANGELOG #
All the changes, additions, bugfixes, etc. made to this project.

This format is based on the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 2022-01-12
### Added
- CHANGELOG format is now documented

## 2022-01-11
### Added
- Vastly improve the README.md with:
  - Sections reestructuring
  - Features section
  - Design pattern section
  - Tech stack section
  - Testing Section
  - Deploy section
- Add `box-sizing: border-box;` so it doesn't break whenever a padding is added, and the full width gets calculated WITH the border and not FROM.
- Add placeholder color in Task form
- Implement `import` reducer to change the state with a given raw JSON string
  - Properly implemented with the functionality tested
  - And properly implemented the export function

### Modified
- Redesign a little bit the task form in `<AddTask>`

## 2022-01-10
### Added
- Base filtering by `complete` status
- Fully implement a show `complete` toggle with it's corresponding `settingsReducer` and group of options and a `<TodoSettings />` component
- Create an `<ErrorBoundary>` with it's own `<ErrorPage>` to handle errors in a better manner

### Installed
- `timers-browserify` for a proper timer usage with memory leak control

### Modified
- Changed the way the tasks to render filtering is coded for a clearer and cleaner code
- Fully realize the concept of extending an Action parent interface and having payloads for the actions with it's corresponding types, so that it is now properly typed
- Extracted the store and state-sync logic into an `<AppWrapper>` component for cleaner code

### Fixed
- `<TimeAgo>` had a `useEffect` with no dependecy array, so it reached quickly the maximum recursion update depth, Fixed by making it an empty array so it acts as the `componentDidMount` and `componentDidUnmount` counterparts
- Fixed tests not passing because of state and store problems, fixed with the `<AppWrapper>` component
- Fixed memory leak in `<TimeAgo>` because of the incorrect usage of `window.setInterval` switched to `NodeJS.Timeout` interval for proper a usage
- Fixed jest tests running indefinetly by focing it's exit with the `--forceExit` argument

### Detected
- Tests don't work, something broke, they are eternally running

## 2022-01-09
### Added
- Installed `redux-state-sync` to sync between the state all the tabs, thanks to the guides at:
  - https://dev.to/cassiolacerda/with-redux-3g41
  - https://github.com/aohua/redux-state-sync
- Added `created_at` and `updated_at` task fields
- Created `Date` components to display the Task `updated_at` attrbiute:
  - `<DateLocale>` to display the date in date format
  - `<TimeAgo>` to display the time since the given timestamp

### Modified
- Make the content wider on desktop, went from 800px to 1240px as the limit

## 2022-01-08
### Added
- Created a Task Search component to search bar to render **ONLY** the wanted task(s). Reducers are unstable atm, with it's corresponding types

### Modified
- Successfully register the `service-worker`, just a matter of changing `unregister` to `register`
- Add all the necessary types and reducer states,
  - Globalize them, now there's a `State` and `Action` types that unionize all the `States` and `Actions`
  - Change all the types where used
- The search bar can now search case insentively and now provides a different "Not Found" text
- Now persist imports come from `/lib/` instead of `/es/`, as it gave me an error previously, just making sure, it may have been because `es` is not actually a module dependency

### Fixed
- It now properly trims the inputted data

### Detected
- Service worker wait until not properly working
- Changing the complete status while editing will not persist when submitting the new version

## 2022-01-07
### Added
- Create and implement the edit functionality, with:
  - A new task button
  - New state actions (`SET_EDITED_TASK` and `FINISH_EDITING_TASK`)
  - And `connect` in the `<AddTask>` component
- Add new tests
  - Edit/Update test
  - Field tests
  - Correct functionality

### Modified
- Refactor complete status change into a separate `styled` component
- Add some `service-worker` code

### Fixed
- Trying to import a variable from `package.json` with `require { ... }` instead of `require(...)`

### Detected
- The `service-worker` does not work online

## 2022-01-06
### Added
- Now there's a `description` field now implemented
- And also a `category` field, by hand, atm.
- Submit is now implemented, meaning the UX is improved by enabling native submission with `Enter`

### Modified
- User input value on `<AddTask>` gets trimmed
- Visually redesign `complete` status

### Fixed
- Complete button not changing to it's own color when hovered
- Incorrect trimming, not working because it always trimmed, and it should have only been trimming when submitting

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