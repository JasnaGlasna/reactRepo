import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, placeholder, value, onChange, name }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <p>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {name === 'password' && (
        <button
          type="button"
          className="eye-button"
          onMouseDown={togglePasswordVisibility}
          onMouseUp={togglePasswordVisibility}
        >
          <i
            className={
              inputType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'
            }
          ></i>
        </button>
      )}
    </p>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};
