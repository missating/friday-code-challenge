// react library
import React from 'react';

// styles
import './Select.scss';

const Select = () => {
  return (
    <div className='select-container'>
      <select className='select-container__content'>
        <option>Select Car</option>
        <option>No external background image</option>
        <option>No wrapper</option>
      </select>
    </div>
  );
};

export default Select;
