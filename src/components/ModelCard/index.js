// third-party libraries
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// styles
import './ModelCard.scss';

// components
import Button from '../Button';

const ModelCard = ({ make, model, history }) => {
  const makeUrl = make.toLowerCase().replace(' ', '-');
  const modelUrl = model.toLowerCase().replace(' ', '-');

  const changeRoute = () => {
    history.push(`/${makeUrl}/${modelUrl}`);
  };

  return (
    <Link to={`/${makeUrl}/${modelUrl}`} className='model-card-item '>
      <p className='model-card-value'>{model}</p>
      <Button name='View' onClick={changeRoute} />
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
