// import necessary libraries and components
import '../css/NewCard.css';
import React, { useState } from 'react';
import { TaskObject } from '../components/Storage';
import { useEffect } from 'react';

// Define the props for the NewCard component
interface NewCardProps {
    handleAddTask: (newTask: TaskObject) => void;
    handleAddModalClose: () => void;
    currentTask: TaskObject | null;
    isEdit: boolean;
}
// NewCard component
function NewCard({ handleAddTask, handleAddModalClose, currentTask, isEdit }: NewCardProps) {
    // Define initial form data
    const initialFormData: TaskObject = {
        id: 0,
        group: '',
        title: '',
        description: '',
        duedate: new Date(),
        priority: 'high',
        status: 'pending',
    };
    // Define state for newGroup, which is not used in the current code
    const [newGroup, setNewGroup] = useState('');

    // Define state for form data
    const [formData, setFormData] = useState<TaskObject>(currentTask || initialFormData);

    // Update form data when currentTask changes
    useEffect(() => {
        if (currentTask) {
            setFormData(currentTask);
        } else {
            setFormData(initialFormData);
        }
    }, [currentTask]);

    // Function to handle the click event of the Add Task button
    const handleAddTaskClick = () => {
        // Retrieve input values and create a TaskObject
        const groupElement = document.querySelector('.dialog-group-text') as HTMLInputElement;
        const titleElement = document.querySelector('.dialog-title-text') as HTMLInputElement;
        const descriptionElement = document.querySelector('.dialog-textarea') as HTMLTextAreaElement;
        const dueDateElement = document.querySelector('.dialog-date') as HTMLInputElement;
        const priorityElement = document.querySelector('.dialog-select-priority') as HTMLSelectElement;
        const statusElement = document.querySelector('.dialog-select-status') as HTMLSelectElement;

        // Check if all elements are found
        if (groupElement && titleElement && descriptionElement && dueDateElement && priorityElement && statusElement) {
            // Create a new task object with the input values
            const newTask: TaskObject = {
                id: formData.id,
                group: groupElement.value,
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
            // Log an error if one or more elements are not found
            console.error("One or more elements not found");
        }
    };

    // Render the NewCard component
    return (
        <dialog className='dialog-modal' open>
            <h2 className='dialog-h2'>Add Task</h2>
            <div className='dialog-set-grp'>
                <label className='dialog-label'>
                    <h3 className='dialog-h3'>Group:</h3>
                    <input className='dialog-group-text' type="text" defaultValue={formData.group} />
                </label>
            </div>

            <div className='dialog-title-grp'>
                <label className='dialog-label'>
                    <h3 className='dialog-h3'>Title:</h3>
                    <input className='dialog-title-text' type="text" defaultValue={formData.title} />
                </label>
            </div>

            <div className='dialog-desc-grp'>
                <label className='dialog-label'>
                    <h3 className='dialog-h3'>Description:</h3>
                    <textarea className='dialog-textarea' defaultValue={formData.description}></textarea>
                </label>
            </div>

            <div className='dialog-date-grp'>
                <label className='dialog-label'>
                    <h3 className='dialog-h3'>Due Date:</h3>
                    <input className='dialog-date' type="date" defaultValue={formData.duedate.toISOString().split('T')[0]} />
                </label>
            </div>

            <div className='dialog-priority-grp'>
                <label className='dialog-label-row'>
                    <h3 className='dialog-h3'>Priority:</h3>
                    <select className='dialog-select-priority' defaultValue={formData.priority}>
                        <option className='dialog-option' value="high">High</option>
                        <option className='dialog-option' value="medium">Medium</option>
                        <option className='dialog-option' value="low">Low</option>
                    </select>
                </label>
            </div>

            <div className='dialog-status-grp'>
                <label className='dialog-label-row'>
                    <h3 className='dialog-h3'>Status:</h3>
                    <select className='dialog-select-status' defaultValue={formData.status}>
                        <option className='dialog-option' value="pending">Pending</option>
                        <option className='dialog-option' value="completed">Completed</option>
                        <option className='dialog-option' value="overdue">Overdue</option>
                    </select>
                </label>
            </div>

            <div className='dialog-btn-grp'>
                <button className='dialog-button' onClick={handleAddTaskClick}>{isEdit ? 'Edit' : 'Add'}</button>
                <button className='dialog-button' onClick={handleAddModalClose}>Cancel</button>
            </div>
        </dialog>
    );
}
export default NewCard;