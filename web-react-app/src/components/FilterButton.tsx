import React, { useState, ChangeEvent } from 'react';
import '../css/FilterButton.css';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterProps {
  options: FilterOption[];
  handleFilter: (selectedOption: string) => void;
}

function FilterButton(props: FilterProps) {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Call the handleFilter function with the selected sorting option
    props.handleFilter(selectedValue);
  };

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
