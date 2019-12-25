// third-party libraries
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import ModelCard from '../ModelCard';
import MessageCard from '../MessageCard';

// others
import api from '../../api';

const Model = ({ make }) => {
  const { fetchCarMakesModels } = api;
  const [models, setModels] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCarMakesModels(make)
      .then(allcarMakeModels => {
        setModels(allcarMakeModels);
      })
      .catch(error => {
        setErrorMessage(() => {
          throw error;
        });
      });
  }, [make, fetchCarMakesModels]);

  return (
    <>
      <div className='model-card-container'>
        {models.map((model, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ModelCard model={model} key={index} make={make} />
        ))}
      </div>

      {/* not found */}
      {models.length === 0 && !errorMessage && (
        <MessageCard message={`${make} has no Models available`} />
      )}
    </>
  );
};

export default Model;

Model.propTypes = {
  make: PropTypes.string.isRequired,
};
