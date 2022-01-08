import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { createStore, applyMiddleware, Store, Action } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import persistingReducer from "./store/persistingReducer"
import { PersistPartial } from 'redux-persist/lib/persistReducer';

test('init app', () => {
  const store: Store<PersistPartial, Action<any>> & {
    dispatch: DispatchType
  } = createStore(persistingReducer, applyMiddleware(thunk))

  render(<Provider store={store}>
    <App />
  </Provider>);
});

test('renders to-do list app', () => {
  const store: Store<PersistPartial, Action<any>> & {
    dispatch: DispatchType
  } = createStore(persistingReducer, applyMiddleware(thunk))

  render(<Provider store={store}>
    <App />
  </Provider>);

  const titleElement = screen.getByText(/To\-Do List/i);
  expect(titleElement).toBeInTheDocument();
});

test('create a task', async () => {
  const store: Store<PersistPartial, Action<any>> & {
    dispatch: DispatchType
  } = createStore(persistingReducer, applyMiddleware(thunk))

  render(<Provider store={store}>
    <App />
  </Provider>);

  // Set task data
  const title = screen.getByPlaceholderText(/Title/i);
  fireEvent.change(title, { target: { value: 'New task' } });

  // Create the task
  const addTaskButton = screen.getByText(/ADD TASK/iu)
  fireEvent.click(addTaskButton)

  // Check if exists
  const newTaskElement = screen.getByText(/New task/i);
  expect(newTaskElement).toBeInTheDocument();
});

test('delete a task', async () => {
  const store: Store<PersistPartial, Action<any>> & {
    dispatch: DispatchType
  } = createStore(persistingReducer, applyMiddleware(thunk))

  render(<Provider store={store}>
    <App />
  </Provider>);

  // Set task data
  const title = screen.getByPlaceholderText(/Title/i);
  fireEvent.change(title, { target: { value: 'New task' } });

  // Create the task
  const addTaskButton = screen.getByText(/ADD TASK/iu);
  fireEvent.click(addTaskButton);

  // Delete the task
  const taskDeleteButton = screen.getAllByText(/DELETE/i);
  taskDeleteButton.map(button => fireEvent.click(button))

  // Check if exists
  expect(screen.queryByText(/New task/i)).not.toBeInTheDocument();
});

test('update a task', async () => {
  const store: Store<PersistPartial, Action<any>> & {
    dispatch: DispatchType
  } = createStore(persistingReducer, applyMiddleware(thunk))

  render(<Provider store={store}>
    <App />
  </Provider>);

  // Set task data
  const title = screen.getByPlaceholderText(/Title/i);
  fireEvent.change(title, { target: { value: 'New task' } });

  // Create the task
  const addTaskButton = screen.getByText(/ADD TASK/iu);
  fireEvent.click(addTaskButton);

  // Edit the task
  const taskEditButton = screen.getAllByText(/EDIT/i);
  taskEditButton.map(button => fireEvent.click(button))

  // Change the title
  fireEvent.change(title, { target: { value: 'Edited task' } });

  // Submit the the mutated task
  const editTaskButton = screen.getByText(/EDIT TASK/iu);
  fireEvent.click(editTaskButton);

  // Check if exists
  expect(screen.queryByText(/Edited task/i)).toBeInTheDocument();
});

test('editting changes the input value', async () => {
  const store: Store<PersistPartial, Action<any>> & {
    dispatch: DispatchType
  } = createStore(persistingReducer, applyMiddleware(thunk))

  render(<Provider store={store}>
    <App />
  </Provider>);

  // Set task data
  const title = screen.getByPlaceholderText(/Title/i);
  fireEvent.change(title, { target: { value: 'New task' } });

  // Create the task
  const addTaskButton = screen.getByText(/ADD TASK/iu);
  fireEvent.click(addTaskButton);

  // Change the input title
  fireEvent.change(title, { target: { value: 'Changed task' } });

  // Edit the task
  const taskEditButton = screen.getAllByText(/EDIT/i);
  taskEditButton.map(button => fireEvent.click(button))

  // Check if exists
  expect(screen.queryByText(/Changed task/i)).not.toBeInTheDocument();
});