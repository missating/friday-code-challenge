// third-party libraries
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup } from '@testing-library/react';

// components
import MessageCard from './index';

afterEach(cleanup);

const TEST_MSG = 'Test Message';

it('renders without crashing', () => {
  const history = createMemoryHistory();

  const { getByText } = render(
    <Router history={history}>
      <MessageCard message={TEST_MSG} />
    </Router>
  );
  expect(getByText('Test Message')).toBeInTheDocument();
});
