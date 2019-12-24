// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

import './MessageCard.scss';

const MessageCard = ({ message }) => {
  return (
    <div className='message-card-container'>
      <p className='message-card-text'>{message}</p>
    </div>
  );
};

export default MessageCard;

MessageCard.propTypes = {
  message: PropTypes.string.isRequired,
};
