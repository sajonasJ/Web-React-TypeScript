import '../css/Main.css';
import TaskCard from '../components/TaskCard';
import TaskButton from '../components/TaskButton';
import React, { useState, useEffect, useRef } from 'react';
import NewCard from '../components/NewCard';
import { TaskObject, StorageService } from '../components/Storage';
import SortButton, { SortOption } from '../components/SortButton';
import FilterButton, { FilterOption } from '../components/FilterButton';

function Main() {
    const [isMiddleCardVisible, setIsMiddleCardVisible] = useState(false);
    const [isBottomCardVisible, setIsBottomCardVisible] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [tasks, setTasks] = useState<TaskObject[]>([]);
    const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);
    const [currentTask, setCurrentTask] = useState<TaskObject | null>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [groupedTasks, setGroupedTasks] = useState<Record<string, TaskObject[]>>({});
    const [filterOption, setFilterOption] = useState('default');

    useEffect(() => {
        // Initialize tasks from StorageService when the component mounts
        setTasks(StorageService.getTasks());
    }, []);


    useEffect(() => {
        const groups: Record<string, TaskObject[]> = {};
        tasks.forEach(task => {
            const group = task.group || 'No Group';
            if (!groups[group]) {
                groups[group] = [];
            }
            groups[group].push(task);
        });
        setGroupedTasks(groups);
    }, [tasks]);



    const handleAction = (action: string, index?: number) => {
        // Handle the logic for each action here
        switch (action) {
            case 'add':
                // Perform add operation
                console.log(isEdit);
                if (isEdit) {
                    // If isEdit is true, return from the function
                    return;
                }
                alert('Add operation clicked!');
                setIsAddModalOpen(true);
                setIsEdit(false); // Set isEdit to false when adding a new task
                setCurrentTask(null); // Clear the current task
                setCheckedIndexes([]); // Clear the checked indexes
                break;
            case 'edit':
                // Perform edit operation
                console.log(isEdit);
                alert('Edit operation clicked!');
                if (index !== undefined) {
                    setIsEdit(true); // Set isEdit to true when editing an existing task
                    setIsAddModalOpen(true);
                    setCurrentTask(tasks[index]); // Set the current task to the task being edited
                    StorageService.setTasks(tasks);
                    console.log(index);
                }
                break;
            case 'delete':
                alert('Delete operation clicked!');
                handleDelete(); // Use the handleDelete function
                break;
            case 'view':
                alert('View operation clicked!');
                setIsMiddleCardVisible(!isMiddleCardVisible);
                setIsBottomCardVisible(!isBottomCardVisible);
                break;

            case 'sort':
                alert('Sort operation clicked!');
                break;

            case 'filter':
                alert('filter operation clicked!');
                break;

            default:
                console.error('Invalid action');
                setIsEdit(false);
        }
    };
    const handleSort = (selectedOption: string) => {
        // Implement sorting logic based on the selected option
        // Update the 'tasks' state with the sorted array
        // For example, you can use the Array.sort() method
    };

    const handleFilter = (selectedOption: string) => {
        setFilterOption(selectedOption);
    };

    const sortOptions: SortOption[] = [
        { label: 'Sort By: Default ', value: 'default' },
        { label: 'Name: (A-Z)', value: 'nameAsc' },
        { label: 'Name: (Z-A)', value: 'nameDesc' },
        { label: 'Date: ASC', value: 'dateAsc' },
        { label: 'Date: DESC', value: 'dateDesc' },
        { label: 'Priorit: High', value: 'high' },
        { label: 'Priority: Medium', value: 'medium' },
        { label: 'Priority: Low', value: 'low' },

    ];
    const filterOptions: FilterOption[] = [
        { label: 'Filter By: Default ', value: 'default' },
        { label: 'Pending', value: 'pending' },
        { label: 'Completed', value: 'completed' },
        { label: 'Overdue', value: 'overdue' },
    ];

    const handleAddModalClose = () => {
        setIsAddModalOpen(false);
        setIsEdit(false);
        setCurrentTask(null);
    };

    const taskIdCounter = useRef(StorageService.getCounter() || 0);

    const handleAddTask = (newTask: TaskObject) => {
        if (isEdit && currentTask) {
            // If isEdit is true and currentTask is not null, update the existing task
            const updatedTasks = tasks.map(task => task.id === currentTask.id ? newTask : task);
            setTasks(updatedTasks);
            StorageService.setTasks(updatedTasks);
        } else {
            // If isEdit is false, add a new task
            newTask.id = taskIdCounter.current++; // Assign a unique id to each new task
            StorageService.setCounter(taskIdCounter.current); // Update the counter in the local storage
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            StorageService.setTasks(updatedTasks);
        }
        setIsAddModalOpen(false);
    };
    const handleCheckboxChange = (index: number) => {
        const updatedCheckedIndexes = checkedIndexes.includes(index)
            ? checkedIndexes.filter((i) => i !== index)
            : [...checkedIndexes, index];
        setCheckedIndexes(updatedCheckedIndexes);
        setCurrentTask(tasks[index]);
        console.log('handlecheckboxchange', index);
    };

    const handleDelete = () => {
        const updatedTasks = tasks.filter((_, index) => !checkedIndexes.includes(index));
        setTasks(updatedTasks);
        setCheckedIndexes([]);
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
                <FilterButton options={filterOptions} handleFilter={handleFilter} />
            </div>
            <div className='group-container'>

                {Object.entries(groupedTasks).map(([group, tasksInGroup]) => (
                    <div className='groupings' key={group}>
                        <h3 className='h3-groupings'>{group}</h3>
                        {tasksInGroup.filter(task => {
                            if (filterOption === 'default') {
                                return true;
                            } else {
                                return task.status === filterOption;
                            }
                        }).map((task: TaskObject) => {
                            const taskIndex = tasks.findIndex(t => t.id === task.id);
                            return (
                                <TaskCard key={task.id}
                                    index={taskIndex}
                                    {...task}
                                    isMiddleCardVisible={isMiddleCardVisible}
                                    isBottomCardVisible={isBottomCardVisible}
                                    isChecked={checkedIndexes.includes(taskIndex)}
                                    onCheckboxChange={() => handleCheckboxChange(taskIndex)}
                                    onDelete={() => handleAction('delete', taskIndex)}
                                    onEdit={() => handleAction('edit', taskIndex)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

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