/* eslint-disable jsx-a11y/no-onchange */
// third-party libraries
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './SelectBox.scss';

const SelectBox = ({ options, onChange, value, name }) => {
  return (
    <>
      <div className='select-box'>
        <select
          data-testid='select'
          name={name}
          onChange={onChange}
          value={value}
          className='select-box__content'
        >
          <option value={name}>Select Car</option>
          {options &&
            options.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      </div>
      <span className='line' />
    </>
  );
};

export default SelectBox;

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
