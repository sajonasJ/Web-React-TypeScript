// Import necessary libraries
import React, { useState, ChangeEvent } from 'react';
import '../css/FilterButton.css';

// Define FilterOption interface for filter options
export interface FilterOption {
  label: string;
  value: string;
}

// Define FilterProps interface for FilterButton properties
export interface FilterProps {
  options: FilterOption[];
  handleFilter: (selectedOption: string) => void;
}

// FilterButton component
function FilterButton(props: FilterProps) {

  // Define state for selected option
  const [selectedOption, setSelectedOption] = useState('default');

  // Handle change in selected option
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Call the handleFilter function with the selected filter option
    props.handleFilter(selectedValue);
  };

  // Render FilterButton component
  return (
    <div className='filter-button'>
      <label htmlFor="filter-dropDown"></label>
      <select className="filter-dropDown" value={selectedOption} onChange={handleChange}>
        {props.options.map((option) => (
          <option className='filter-option' key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterButton;
