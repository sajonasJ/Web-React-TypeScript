import '../css/Main.css';
import TaskCard from '../components/TaskCard';
import TaskButton from '../components/TaskButton';
import React, { useState } from 'react';
import NewCard from '../components/NewCard';
import { TaskObject } from '../components/Storage';
import { StorageService } from '../components/Storage';
import SortButton,{ SortOption} from '../components/SortButton';

function Main() {
    const [isMiddleCardVisible, setIsMiddleCardVisible] = useState(false);
    const [isBottomCardVisible, setIsBottomCardVisible] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const initialTasks = StorageService.getTasks();
    const [tasks, setTasks] = useState(initialTasks);
    const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);
    const [currentTask, setCurrentTask] = useState<TaskObject | null>(null);
    const [isEdit, setIsEdit] = useState(false);


    const handleAction = (action: string, index?: number) => {
        // Handle the logic for each action here
        switch (action) {
            case 'add':
                // Perform add operation
                alert('Add operation clicked!');
                setIsEdit(false); // Set isEdit to false when adding a new task
                setIsAddModalOpen(true);
                break;
            case 'edit':
                // Perform edit operation
                alert('Edit operation clicked!');
                if (index !== undefined) {
                    setIsEdit(true); // Set isEdit to true when editing an existing task
                    setIsAddModalOpen(true);
                    console.log(index);
                }
                break;
            case 'delete':
                // Perform delete operation
                alert('Delete operation clicked!');
                handleDelete(); // Use the handleDelete function
                break;
            case 'view':
                // Perform view operation
                alert('View operation clicked!');
                setIsMiddleCardVisible(!isMiddleCardVisible);
                setIsBottomCardVisible(!isBottomCardVisible);
                break;

            case 'sort':
            break;

            default:
                // Default action or error handling
                console.error('Invalid action');
        }
    };
    const handleSort = (selectedOption: string) => {
        // Implement sorting logic based on the selected option
        // Update the 'tasks' state with the sorted array
        // For example, you can use the Array.sort() method
      };

      const sortOptions: SortOption[] = [
        { label: 'Sort By: Default ', value: 'default' },
        { label: 'Name: (A-Z)', value: 'nameAsc' },
        { label: 'Name: (Z-A)', value: 'nameDesc' },
        { label: 'Date: ASC', value: 'dateAsc' },
        { label: 'Date: DESC', value: 'dateDesc' },
        { label: 'Priorit: High', value: 'high' },
        { label: 'Priority: Medium', value: 'medium' },
        { label: 'Priority: Low', value: 'Low' },
        // Add more sorting options as needed
      ];

    const handleAddModalClose = () => {
        // Close the Add modal
        setIsAddModalOpen(false);
    };
    const handleAddTask = (newTask: TaskObject) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setIsAddModalOpen(false);
        StorageService.setTasks(updatedTasks);
        console.log(updatedTasks);
    };
    const handleCheckboxChange = (index: number) => {
        const updatedCheckedIndexes = checkedIndexes.includes(index)
            ? checkedIndexes.filter((i) => i !== index)
            : [...checkedIndexes, index];
        setCheckedIndexes(updatedCheckedIndexes);
        setCurrentTask(tasks[index]);
    };

    const handleDelete = () => {
        const updatedTasks = tasks.filter((_, index) => !checkedIndexes.includes(index));
        setTasks(updatedTasks);
        setCheckedIndexes([]);
        StorageService.setTasks(updatedTasks);
    }
    return (
        <div className="main-container">
            <h2 className='task-list'>Task List</h2>
            <div className="overlay" style={{ display: isAddModalOpen ? 'block' : 'none' }}></div>
            <div className="action-buttons">
                <TaskButton label="Add" onClickHandler={() => handleAction('add')} color="#8ac926" />
                <TaskButton label="Edit" onClickHandler={() => handleAction('edit', checkedIndexes[0])} color="#ffca3a" />
                <TaskButton label="View" onClickHandler={() => handleAction('view')} color="#1982c4" />
                <TaskButton label="Delete" onClickHandler={() => handleAction('delete')} color="#ff595e" />
                <SortButton options={sortOptions} handleSort={handleSort} />
            </div>

            {/* Render existing tasks */}
            {tasks.map((task: TaskObject, index) => (
                <TaskCard key={index}
                    index={index} // Pass the index as a prop
                    {...task}
                    isMiddleCardVisible={isMiddleCardVisible}
                    isBottomCardVisible={isBottomCardVisible}
                    isChecked={checkedIndexes.includes(index)}
                    onCheckboxChange={handleCheckboxChange} // Pass the callback function
                    onDelete={() => handleAction('delete', index)}
                    onEdit={() => handleAction('edit', index)}
                />
            ))}

            {isAddModalOpen && (
                <NewCard
                    currentTask={currentTask}
                    handleAddTask={handleAddTask}
                    handleAddModalClose={handleAddModalClose}
                    isEdit={isEdit}
                />)}
        </div>
    );
}
export default Main;