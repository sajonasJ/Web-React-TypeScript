import TaskButton from '../components/TaskButton';
import '../css/TaskCard.css';
import React, { useState } from 'react';

interface CardProps {
    title?: string;
    description?: string;
    duedate?: Date;
    status?: string;
    priority?: string;

    isMiddleCardVisible?: boolean;
    isBottomCardVisible?: boolean;
}

const TaskCard = ({
    title = 'Buy new car',
    description = 'Things to do first',
    duedate = new Date('07/29/1989'),
    status = 'Pending',
    priority = 'High',

    isMiddleCardVisible = false,
    isBottomCardVisible = false,
}: CardProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="taskcard-container">
            <div className='left-card'>
                <div className='top-card'>
                    <div className='title-card'>
                        <h3 className="taskcard-title">{title}</h3>
                    </div>
                    <div className='status-card'>
                        <label className="taskcard-label">Status: </label>
                        <p className="taskcard-status">{status}</p>
                    </div>
                </div>

                {isMiddleCardVisible && (
                    <div className='middle-card'>
                        <label className="taskcard-label">Description:</label>
                        <p className="taskcard-text">{description}</p>
                    </div>
                )}
                {isBottomCardVisible && (
                    <div className='bottom-card'>
                        <div className='priority-card'>
                            <label className="taskcard-label">Priority:</label>
                            <p className="taskcard-priority">{priority}</p>
                        </div>
                        <div className='due-card'>
                            <label className="taskcard-label">Due Date:</label>
                            <p className="taskcard-due">{duedate?.toLocaleDateString()}</p>

                        </div>

                    </div>
                )}
            </div>
            <div className='right-card'>
                <input className='card-input' type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            </div>
        </div>
    );
};

export default TaskCard;
