import React from 'react';
import { render, screen } from '@testing-library/react';
import { removeTask } from "src/store/actionCreator";
import Task from './components/Task/Task';
import { createStore, applyMiddleware, Store, Action } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import persistingReducer from "./store/persistingReducer"
import { PersistPartial } from 'redux-persist/es/persistReducer';

const store: Store<PersistPartial, Action<any>> & {
  dispatch: DispatchType
} = createStore(persistingReducer, applyMiddleware(thunk))

const ToTest: React.FC = () => {
  return <Provider store={store}>
    <Task task={{
      title: 'Test',
      description: 'Desc',
      category: 'Category',
      complete: false
    }} />
  </Provider>
}

test('renders a task', () => {
  render(<ToTest />);

  const taskElement = screen.getByText(/Test/i)
  expect(taskElement).toBeInTheDocument();
});

test('renders a task, with a description', () => {
  render(<ToTest />);

  const taskElement = screen.getByText(/Desc/i)
  expect(taskElement).toBeInTheDocument();
});

test('renders a task, with a category', () => {
  render(<ToTest />);

  const taskElement = screen.getByText(/Category/i)
  expect(taskElement).toBeInTheDocument();
});