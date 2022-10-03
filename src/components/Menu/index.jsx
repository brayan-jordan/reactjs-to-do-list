import './style.css'
import Select from 'react-select'

function Menu({ onAddButtonClick, filterTasks }) {
    const statusFilter = [
        {
            label: "All",
            value: 0
        },
        {
            label: "Completed",
            value: 1
        },
        {
            label: "Pending",
            value: 2
        }
    ];

    return (
        <div id='menu'>
            <button id='add-new-button' onClick={() => onAddButtonClick()}>
                <span>Add new</span>
            </button>
            <Select
                options={statusFilter}
                onChange={(v1) => {
                    filterTasks(v1)
                }}
            />
        </div>
    )
}

export default Menu