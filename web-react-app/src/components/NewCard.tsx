import '../css/NewCard.css';

interface NewCardProps {
    handleAddTask: () => void;
    handleAddModalClose: () => void;
}
function NewCard({ handleAddTask, handleAddModalClose }: NewCardProps) {
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

            <div className='dialog-label-grp'>
                <label className='dialog-label'><h3 className='dialog-h3'>Priority:</h3>
                    <select className='dialog-select'>
                        <option className='dialog-option' value="important">Important</option>
                        <option className='dialog-option' value="normal">Normal</option>
                        <option className='dialog-option' value="low">Low</option>
                    </select>
                </label>
            </div>

            <div className='dialog-btn-grp'>
                <button className='dialog-button' onClick={handleAddTask}>Add Task</button>
                <button className='dialog-button' onClick={handleAddModalClose}>Cancel</button>
            </div>
        </dialog>
    );
}
export default NewCard;