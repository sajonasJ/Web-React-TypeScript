// Import necessary libraries
import React, { useState, ChangeEvent } from 'react';
import '../css/SortButton.css';

// Import necessary libraries
export interface SortOption {
  label: string;
  value: string;
}

// Define SortProps interface for SortButton properties
export interface SortProps {
  options: SortOption[];
  handleSort: (selectedOption: string) => void;
}
// SortButton component
function SortButton(props: SortProps) {
  // Define state for selected option
  const [selectedOption, setSelectedOption] = useState('default');

  // Handle change in selected option
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Call the handleSort function with the selected sorting option
    props.handleSort(selectedValue);
  };

  // Render SortButton component
  return (
    <div className='sort-button'>
      <label htmlFor="sort-dropDown"></label>
      <select className="sort-dropDown" value={selectedOption} onChange={handleChange}>
        {props.options.map((option) => (
          <option className='sort-option' key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortButton;
