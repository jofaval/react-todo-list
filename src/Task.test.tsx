import React from 'react';
import { render, screen } from '@testing-library/react';
import Task from './components/Task/Task';
import AppWrapper from './containers/AppWrapper/AppWrapper';

const ToTest: React.FC = () => {
  return <AppWrapper>
    <Task task={{
      title: 'Test',
      description: 'Desc',
      category: 'Category',
      complete: false
    }} />
  </AppWrapper>
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