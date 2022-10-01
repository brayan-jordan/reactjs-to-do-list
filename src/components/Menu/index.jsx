import './style.css'



function Menu({ onAddButtonClick }) {
    return (
        <div id='menu'>
            <button id='add-new-button' onClick={() => onAddButtonClick()}>
                <span>Add new</span>
            </button>
        </div>
    )
}

export default Menu