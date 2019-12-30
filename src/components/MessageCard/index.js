// third-party libraries
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Button from 'components/Button';

// styles
import './MessageCard.scss';

const MessageCard = ({ message, goBack, history }) => {
  const changeRoute = () => {
    history.push('/');
  };

  return (
    <div className='message-card-container'>
      <div className='message-card-container__content'>
        <p className='message-card-text'>{message}</p>
        {goBack ? <Button name='Go back' onClick={changeRoute} /> : ''}
      </div>
    </div>
  );
};

export default withRouter(MessageCard);

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
  goBack: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

MessageCard.defaultProps = {
  goBack: false,
};
