// Import necessary libraries
import React, { ReactNode, MouseEvent, CSSProperties } from 'react';
import '../css/TaskButton.css';

// Define ButtonProps interface for button properties
interface ButtonProps {
  label: ReactNode; // Label to be displayed on the button
  onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void; // Handler for click event
  color?: string; // Optional color for the button
}
// TaskButton component
const TaskButton = ({ label, onClickHandler, color }: ButtonProps) => {
  // Define button style
  const buttonStyle: CSSProperties = {
    backgroundColor: color || 'defaultColor' // Use provided color or default color
  };

  // Render TaskButton component
  return (
    <button className='task-button' onClick={onClickHandler} style={buttonStyle}>
      {label}
    </button>
  );
};

export default TaskButton;
