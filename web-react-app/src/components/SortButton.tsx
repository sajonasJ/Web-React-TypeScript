import React, { useState, ChangeEvent } from 'react';
import '../css/SortButton.css';

export interface SortOption {
  label: string;
  value: string;
}

export interface SortProps {
  options: SortOption[];
  handleSort: (selectedOption: string) => void;
}

function SortButton(props: SortProps) {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Call the handleSort function with the selected sorting option
    props.handleSort(selectedValue);
  };

  return (
    <div className='sort-button'>
      <label htmlFor="dropDown"></label>
      <select className="dropDown" value={selectedOption} onChange={handleChange}>
        {props.options.map((option) => (
          <option className='sort-option' value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortButton;
