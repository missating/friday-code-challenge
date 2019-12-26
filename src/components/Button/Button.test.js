// third-party libraries
import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';

// components
import Button from './index';

afterEach(cleanup);

const TEST_NAME = 'test-name';
const TEST_CLASSES = 'test-class';

describe('Button Component', () => {
  it('captures click', done => {
    const handleClick = () => {
      done();
    };

    const { getByText } = render(
      <Button onClick={handleClick} name={TEST_NAME} classes={TEST_CLASSES} />
    );
    const node = getByText('test-name');
    fireEvent.click(node);
  });

  it('renders with only default classname if classes props is passed', () => {
    const { container } = render(<Button name={TEST_NAME} />);
    expect(container.firstChild.classList.contains('button')).toBe(true);
  });
});
