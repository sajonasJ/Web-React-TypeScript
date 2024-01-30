import '../css/Main.css';
import TaskCard from '../components/TaskCard';
import SignUp from '../components/Signup';
import TaskButton from '../components/TaskButton';
import React, { useState } from 'react';

function Main() {
    const [isMiddleCardVisible, setIsMiddleCardVisible] = useState(false);
    const [isBottomCardVisible, setIsBottomCardVisible] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAction = (action: string) => {
        // Handle the logic for each action here
        switch (action) {
            case 'add':
                // Perform add operation
                alert('Add operation clicked!');
                setIsAddModalOpen(true);
                break;
            case 'edit':
                // Perform edit operation
                alert('Edit operation clicked!');
                break;
            case 'delete':
                // Perform delete operation
                alert('Delete operation clicked!');
                break;
            case 'view':
                // Perform view operation
                alert('View operation clicked!');
                setIsMiddleCardVisible(!isMiddleCardVisible);
                setIsBottomCardVisible(!isBottomCardVisible);
                break;
            default:
                // Default action or error handling
                console.error('Invalid action');
        }
    };
    const handleAddModalClose = () => {
        // Close the Add modal
        setIsAddModalOpen(false);
    };
    const handleAddTask = () => {
        // Implement logic to handle adding a task here
        // You can access the input values and perform necessary actions
        alert('Task added!');
        setIsAddModalOpen(false); // Close the modal after adding a task
    };

    return (
        <div className="main-container">
            <h2 className='task-list'>Task List</h2>
            <div className="overlay" style={{ display: isAddModalOpen ? 'block' : 'none' }}></div>
            <div className="action-buttons">
                <TaskButton label="Add" onClickHandler={() => handleAction('add')} color="#8ac926" />
                <TaskButton label="Edit" onClickHandler={() => handleAction('edit')} color="#ffca3a" />
                <TaskButton label="View" onClickHandler={() => handleAction('view')} color="#1982c4" />
                <TaskButton label="Delete" onClickHandler={() => handleAction('delete')} color="#ff595e" />
            </div>
            <TaskCard
                isMiddleCardVisible={isMiddleCardVisible}
                isBottomCardVisible={isBottomCardVisible}
            />
            {/* <SignUp/> */}

            {/* Add Task Modal */}
            {isAddModalOpen && (
                <dialog className='dialog-modal' open>
                    <h2 className='dialog-h2'>Add Task</h2>
                    <label className='dialog-label'>Title: <input className='dialog-text' type="text" /></label>
                    <label className='dialog-label'>Description: <textarea className='dialog-textarea'></textarea></label>
                    <label className='dialog-label'>Due Date: <input className='dialog-date' type="date" /></label>
                    <label className='dialog-label'>Priority:
                        <select className='dialog-select'>
                            <option className='dialog-option' value="important">Important</option>
                            <option className='dialog-option' value="normal">Normal</option>
                            <option className='dialog-option' value="low">Low</option>
                        </select>
                    </label>
                    <button className='dialog-button' onClick={handleAddTask}>Add Task</button>
                    <button className='dialog-button' onClick={handleAddModalClose}>Cancel</button>
                </dialog>
            )}
        </div>

    );
}
export default Main;