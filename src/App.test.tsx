import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AppWrapper from './containers/AppWrapper/AppWrapper';

test('init app', () => {
  render(<AppWrapper>
    <App />
  </AppWrapper>);
});

test('renders to-do list app', () => {
  render(<AppWrapper>
    <App />
  </AppWrapper>);

  const titleElement = screen.getByText(/To\-Do List/i);
  expect(titleElement).toBeInTheDocument();
});

test('create a task', async () => {
  render(<AppWrapper>
    <App />
  </AppWrapper>);

  // Set task data
  const title = screen.getByPlaceholderText(/Title/i);
  fireEvent.change(title, { target: { value: 'New task' } });

  // Create the task
  const addTaskButton = screen.getByText(/ADD TASK/iu)
  fireEvent.click(addTaskButton)

  // Check if exists
  expect(screen.getByText(/New task/i)).toBeInTheDocument();
});

test('delete a task', async () => {
  render(<AppWrapper>
    <App />
  </AppWrapper>);

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
  render(<AppWrapper>
    <App />
  </AppWrapper>);

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
  render(<AppWrapper>
    <App />
  </AppWrapper>);

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