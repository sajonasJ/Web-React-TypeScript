import '../css/Main.css';
import TaskCard from '../components/TaskCard';
import SignUp from '../components/Signup';
import TaskButton from '../components/TaskButton';
import React, { useState } from 'react';
import NewCard from '../components/NewCard';
import { TaskObject } from '../components/NewCard';



function Main() {
    const [isMiddleCardVisible, setIsMiddleCardVisible] = useState(false);
    const [isBottomCardVisible, setIsBottomCardVisible] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [tasks, setTasks] = useState<TaskObject[]>([]);

    const handleCheckboxChange = (index?: number) => {
        const updatedTasks = [...tasks];
        setTasks(updatedTasks);
    };


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
    const handleAddTask = (newTask: TaskObject) => {
        // Create a new task object using the input values from NewCard
        // For simplicity, assuming newTask has the same structure as TaskObject
        // In a real application, you might want to validate and sanitize input values
        const updatedTasks = [...tasks, newTask];

        // Update the state with the new array of tasks
        setTasks(updatedTasks);

        // Close the modal after adding a task
        setIsAddModalOpen(false);
        // console.log(newTask);
        console.log(updatedTasks);

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

            {/* <SignUp/> */}

            {/* Render existing tasks */}
            {tasks.map((task: TaskObject, index) => (
                <TaskCard  key={index}
                index={index} // Pass the index as a prop
                {...task}
                isMiddleCardVisible={isMiddleCardVisible}
                isBottomCardVisible={isBottomCardVisible}
                onCheckboxChange={handleCheckboxChange} // Pass the callback function
                />
            ))}


            {isAddModalOpen && (
                <NewCard
                    handleAddTask={handleAddTask}
                    handleAddModalClose={handleAddModalClose}
                />)}
        </div>

    );
}
export default Main;