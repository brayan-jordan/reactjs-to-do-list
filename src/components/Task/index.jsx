import './style.css'
import { FiTrash2 } from 'react-icons/fi'

function Task({ description, isSelected, id, deleteTask, changeStatus, editValue }) {
    return (
        <div className="task">
            <input type="text" value={description} className="task-description" onChange={(event) => editValue(id, event.target.value)} />
            <div className='task-options'>
                <input type="checkbox" checked={isSelected} onChange={() => changeStatus(id)} className='change-status' />
                <button className='delete-button' onClick={() => deleteTask(id)}>
                    <FiTrash2 className='delete-button-icon' />
                </button>
            </div>
        </div>
    )
}

export default Task