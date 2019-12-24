// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Button.scss';

const Button = ({ onClick, name }) => {
  return (
    <button type='button' onClick={onClick} className='button'>
      {name}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
