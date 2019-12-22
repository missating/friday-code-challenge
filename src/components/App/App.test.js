import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

it('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains('navbar-container')).toBe(
    true
  );
  expect(container).toHaveTextContent('Friday Code Challenge');
});
