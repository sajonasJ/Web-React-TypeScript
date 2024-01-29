import '../css/Main.css';
import TaskCard from '../components/TaskCard';
import SignUp from '../components/Signup';
import TaskButton from '../components/TaskButton';

function Main() {
    const handleAction = (action: string) => {
        // Handle the logic for each action here
        switch (action) {
            case 'add':
                // Perform add operation
                alert('Add operation clicked!');
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
                break;
            default:
                // Default action or error handling
                console.error('Invalid action');
        }
    };
    return (
        <div className="main-container">
            <h2 className='task-list'>Task List</h2>
            {/* Action Buttons */}
            <div className="action-buttons">
                <TaskButton label="Add" onClickHandler={() => handleAction('add')} color="#8ac926" />
                <TaskButton label="Edit" onClickHandler={() => handleAction('edit')} color="#ffca3a" />
                <TaskButton label="View" onClickHandler={() => handleAction('view')} color="#1982c4"/>
                <TaskButton label="Delete" onClickHandler={() => handleAction('delete')} color="#ff595e" />
            </div>
            <TaskCard />
            {/* <SignUp/> */}
        </div>

    );
}
export default Main;