import React from 'react';

const Dropdown = ({ options, selected, setSelected }) => {
  return (
    <div>
      <select
        className="p-2 border rounded"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
