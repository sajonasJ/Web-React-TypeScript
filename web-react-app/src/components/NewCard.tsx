import '../css/NewCard.css';
import React, { useState } from 'react';

interface NewCardProps {
    handleAddTask: (newTask: TaskObject) => void;
    handleAddModalClose: () => void;
}

export interface TaskObject {
    title: string;
    description: string;
    duedate: Date;
    priority: string;
    status: string;
}


function NewCard({ handleAddTask, handleAddModalClose }: NewCardProps) {

    const handleAddTaskClick = () => {
        // Retrieve input values and create a TaskObject
        const titleElement = document.querySelector('.dialog-text') as HTMLInputElement;
        const descriptionElement = document.querySelector('.dialog-textarea') as HTMLTextAreaElement;
        const dueDateElement = document.querySelector('.dialog-date') as HTMLInputElement;
        const priorityElement = document.querySelector('.dialog-select-priority') as HTMLSelectElement;
        const statusElement = document.querySelector('.dialog-select-status') as HTMLSelectElement;
        

        if (titleElement && descriptionElement && dueDateElement && priorityElement && statusElement) {
            const newTask: TaskObject = {
                title: titleElement.value,
                description: descriptionElement.value,
                duedate: new Date(dueDateElement.value),
                priority: priorityElement.value,
                status: statusElement.value,
            };

            // Call the original handleAddTask function with the newTask
            handleAddTask(newTask);

            // Close the modal after adding a task
            handleAddModalClose();
        } else {
            console.error("One or more elements not found");
        }
    };


    return (
        <dialog className='dialog-modal' open>
            <h2 className='dialog-h2'>Add Task</h2>

            <div className='dialog-title-grp'>
                <label className='dialog-label'><h3 className='dialog-h3'>Title:</h3>
                    <input className='dialog-text' type="text" />
                </label>
            </div>

            <div className='dialog-desc-grp'>
                <label className='dialog-label'><h3 className='dialog-h3'>Description:</h3>
                    <textarea className='dialog-textarea'></textarea>
                </label>
            </div>

            <div className='dialog-date-grp'>
                <label className='dialog-label'><h3 className='dialog-h3'>Due Date:</h3>
                    <input className='dialog-date' type="date" />
                </label>
            </div>

            <div className='dialog-priority-grp'>
                <label className='dialog-label-row'><h3 className='dialog-h3'>Priority:</h3>
                    <select className='dialog-select-priority'>
                        <option className='dialog-option' value="high">High</option>
                        <option className='dialog-option' value="medium">Medium</option>
                        <option className='dialog-option' value="low">Low</option>
                    </select>
                </label>
            </div>

            <div className='dialog-status-grp'>
                <label className='dialog-label-row'><h3 className='dialog-h3'>Status:</h3>
                    <select className='dialog-select-status'>
                        <option className='dialog-option' value="pending">Pending</option>
                        <option className='dialog-option' value="completed">Completed</option>
                        <option className='dialog-option' value="overdue">Overdue</option>
                    </select>
                </label>
            </div>

            <div className='dialog-btn-grp'>
                <button className='dialog-button' onClick={handleAddTaskClick}>Add Task</button>
                <button className='dialog-button' onClick={handleAddModalClose}>Cancel</button>
            </div>
        </dialog>
    );
}
export default NewCard;