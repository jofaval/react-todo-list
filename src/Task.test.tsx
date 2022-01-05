import React from 'react';
import { render, screen } from '@testing-library/react';
import { removeTask } from "src/store/actionCreator";
import Task from './components/Task/Task';
import ReduxProvider from './store/ReduxProvider';

const ToTest: React.FC = () => {
  return <ReduxProvider>
    <Task task={{
      title: 'Test',
      complete: false
    }} />
  </ReduxProvider>
}

test('renders a task', () => {
  expect(true).toBe(true);
  render(<ToTest />);

  const taskElement = screen.getByText(/Test/)
  expect(taskElement).toBeInTheDocument();
});