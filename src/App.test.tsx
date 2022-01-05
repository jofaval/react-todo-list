import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ReduxProvider from './store/Provider';

test('renders to-do list app', () => {
  expect(true).toBe(true);
  render(<React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>);

  const titleElement = screen.getByText(/To\-Do List/i);
  expect(titleElement).toBeInTheDocument();
});
