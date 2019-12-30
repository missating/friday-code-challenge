// third-party libraries
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Button from 'components/Button';

// styles
import './ModelCard.scss';

// images
import car from 'assets/vehicle.png';

const ModelCard = ({ make, model, history }) => {
  const makeUrl = make.toLowerCase().replace(' ', '-');
  const modelUrl = model.toLowerCase().replace(' ', '-');

  const changeRoute = () => {
    history.push(`/${makeUrl}/${modelUrl}`);
  };

  return (
    <Link to={`/${makeUrl}/${modelUrl}`} className='model-card-item '>
      <img src={car} alt='vehicle-placeholder' width='80' />
      <p className='model-card-value'>{model}</p>
      <Button name='View' onClick={changeRoute} classes='model-card-btn' />
    </Link>
  );
};

export default withRouter(ModelCard);

ModelCard.propTypes = {
  model: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
