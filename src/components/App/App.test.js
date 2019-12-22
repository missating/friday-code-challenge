import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});
