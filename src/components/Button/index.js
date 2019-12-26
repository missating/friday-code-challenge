// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Button.scss';

const Button = ({ onClick, name, classes }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={classes ? `button ${classes}` : `button`}
    >
      {name}
    </button>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  classes: '',
  onClick: () => {},
};
