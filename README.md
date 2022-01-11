# To-Do List with React #

Project started as a playground and warmup for a technical interview (at the start).

## Description

The basic idea is to provide a home screen with a list of tasks with a completition status, Mobile-First.

Check out the final product at [jofaval.github.io/react-todo-list](https://jofaval.github.io/react-todo-list)

### Why?

Have I not done a To-Do list before? yes, with react.js? yes I have, without it? we, *almost* all, have done it. But it's a good playground for a component structure testing.

## Installation process

### Pre-Requirements

#### Browser

It's been tested with Mozilla Firefox, but you can use anything you'd like

*This is what will be used, you don't need to configure it*

#### Testing

- `react-testing-library`
- `jest`

#### Libraries

- `typescript`
- `react.js`
- `redux`
- `styled-components`

#### CI/CD

- `Github Actions`

### Guide

In the folder that you may want the project, execute the following command (on Git BASH if you're running a Windows)

This will clone (download) the repository locally on your device
```shell
git clone https://github.com/jofaval/react-todo-list.git
```

Then you'll need to install the dependencies (if node.js is not installed, please do so before this step at, [node.js](https://nodejs.org/es/download/))
```shell
cd react-todo-list
npm install
```

## Deploy

It's all handled by Github Actions, to see the full configuration file, check out [branching.yml](./.github/workflows/branching.yml)

It publishes the build with Github Pages, deployed at [jofaval.github.io/react-todo-list](https://jofaval.github.io/react-todo-list)

## Features

### Main

- **CRUD** (**C**reate/**R**ead/**U**pdate/**D**elete) of Tasks
- Complete status toggler, you can mark as completed, and toggle their visibility but completetion status
- Search bar by title to find the right task(s)
- Save the tasks on your device (browser/phone)
- PWA, so you can install it anywhere you have a browser
- Responsive design, works on phone/tablet/browser

### Secondary

- Make the APP work offline
- Share the same content between different tabs
- A more detailed task (description, category)
- Saving create/update timestamps to display the last updated text

## Design Pattern

Design with mobile-first in mind,

1. Functionality is always the first priority, there's no compose if there's no product to which apply it to. It's not a design concept, but it's worth keeping in mind
2. UX goes before the UI, a simple, native, uggly button can do if it's where it's supposed to be. UX may be the most important part of a feature (visually-wise)
3. UI goes last, it's usually a matter of browsing to get a moodboard (even mentally) of what you're looking for.

## Tech Stack

Made with cra-template pwa typescript

```shell
npx create-react-app my-app --template cra-template-pwa-typescript
```

### Frontend

- **TypeScript**
  - The static typed version of JavaScript, good for preventing errors before execution, and easier usage (since you should always know exactly what you're working with!)
- **react.js**
  - One of the most used Frontend Libraries, and a perfect fit for small/medium projects such as this with a smaller team (just me).
- **redux stack**
  - **redux** - Is the go to for state management between components (and a better fit for the actual use-case)
  - **react-redux** - **redux** configured for **react.js**
  - **redux-persist** - Allows for the **redux** state to be locally saved (no matter the device)
  - **redux-thunk** - Implements interacion with the **redux** store
  - **redux-state-sync** - Allows for the **redux** state to be shared between tabs on the same device.
- **styled-components**
  - Cleaner styling for components with inheritance
**jest + react-testing-library**
  - The full package for a complete Frontend testing experience

### CI/CD

- **Github Actions**
  - A free CI/CD, and easy to configure for an open github repo, it's a new trend and with tons of community contributions.

## Testing

The tests will be executed BEFORE every deploy, but it's a good practice to test it before comitting/pushing, and ALWAYS after some system-breaking refactoring

### How to run the tests?

```shell
npm run test
```

## How to use?

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Credits
- [Ibrahima Ndaw's How to Use Redux in Your React TypeScript App](https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/)
- [Redux State Sync's Official Repo](https://dev.to/cassiolacerda/with-redux-3g41)
- React's and the Official packages' documentation
- StackOverflow
- Support by Github Pages and Github Actions