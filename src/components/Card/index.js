// third-party libraries
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import './Card.scss';

const Card = ({ carMakeModel }) => {
  return (
    <Link
      to={`/${carMakeModel.toLowerCase().replace(' ', '-')}`}
      className='card-grid-item'
    >
      <p className='card-value'>{carMakeModel}</p>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  carMakeModel: PropTypes.string.isRequired,
};
