import React from 'react'
import TodoListItem from './TodoListItem';

function TodoList({list, toggleTask, onEditTask, onDeleteTask}) {
    return (
        <ul>
            {list.map(item => (
                <TodoListItem key={item.id} item={item} toggleTask={toggleTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
            ))}
        </ul>
    )
}

export default TodoList
