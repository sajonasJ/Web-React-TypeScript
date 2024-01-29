import TaskButton from '../components/TaskButton';
import '../css/TaskCard.css';
import React, { useState } from 'react';

interface CardProps {
    num?: number | string;
    title?: string;
    description?: string;
    duedate?: number | string;
    priority?: string;
}

const TaskCard = ({
    num = '1',
    title = 'Title',
    description = 'Description',
    duedate = 'Due Date',
    priority = 'Status'
}: CardProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="taskcard-container">
            <p className='taskcard-num'>{num}</p>
            <h3 className="taskcard-title">{title}</h3>
            <p className="taskcard-text">{description}</p>
            <p className="taskcard-due">{duedate}</p>
            <p className="taskcard-priority">{priority}</p>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        </div>
    );
};

export default TaskCard;
