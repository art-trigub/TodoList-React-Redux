import React from 'react'

function TodoListItem({item, toggleTask, onEditTask, onDeleteTask}) {
    function onClickTask() {
        toggleTask(item.id)
    }

    function onEdit(e) {
        e.stopPropagation();
        onEditTask(item.id)
    }

    function onDelete(e) {
        e.stopPropagation();
        onDeleteTask(item.id)
    }

    return (
        <li 
        onClick={onClickTask}
        className={`task-item ${item.isDone ? 'done' : ''}`}>
            {item.title}
            <span onClick={onEdit}>  edit</span>
            <span onClick={onDelete}>  X</span>
        </li>
    )
}

export default TodoListItem
