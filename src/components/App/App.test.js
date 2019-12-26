// third-party libraries
import React from 'react';
import { render, cleanup } from '@testing-library/react';

// components
import App from './index';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText('Select Car')).toBeInTheDocument();
});
