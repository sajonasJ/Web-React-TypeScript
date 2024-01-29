import React, { ReactNode, MouseEvent, CSSProperties } from 'react';
import '../css/TaskButton.css';

interface ButtonProps {
  label: ReactNode;
  onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: string;
}

const TaskButton = ({ label, onClickHandler, color }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: color || 'defaultColor'
  };

  return (
    <button className='task-button' onClick={onClickHandler} style={buttonStyle}>
      {label}
    </button>
  );
};

export default TaskButton;
