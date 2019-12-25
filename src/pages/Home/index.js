// third-party libraries
import React, { useState, useEffect } from 'react';

// components
import SelectBox from '../../components/SelectBox';
import Model from '../../components/Model';
import MessageCard from '../../components/MessageCard';
import ErrorBoundary from '../../components/ErrorBoundary';

// others
import api from '../../api';

const Home = () => {
  const { fetchCarMakes } = api;
  const [carMakes, setCarMakes] = useState([]);
  const [make, setMake] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCarMakes()
      .then(allcarMakes => {
        setCarMakes(allcarMakes);
      })
      .catch(error => {
        setErrorMessage(() => {
          throw error;
        });
      });
  }, [fetchCarMakes]);

  return (
    <>
      <SelectBox
        options={carMakes}
        onChange={event => setMake(event.target.value)}
        value={make}
        name='Car Make'
      />
      {!make && !errorMessage && (
        <MessageCard message='Hello, Select A Registered Car To Get Started' />
      )}
      <ErrorBoundary>{make && <Model make={make} />}</ErrorBoundary>
    </>
  );
};

export default Home;
