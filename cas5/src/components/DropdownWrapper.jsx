import React, { useState } from 'react';

const DropdownWrapper = ({ elements }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>Select an option:</label>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        {elements.map((element) => (
          <option key={element.value} value={element.value}>
            {element.name}
          </option>
        ))}
      </select>
      {/* <p>Selected Option: {selectedValue}</p> */}

    </div>
  );
};

export default DropdownWrapper;
