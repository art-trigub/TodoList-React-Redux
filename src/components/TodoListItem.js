import React from 'react'
import { connect } from 'react-redux';
import { deleteTaskFromList, selectTask, showModal, toggleTask } from '../store/actions';
import { bindActionCreators } from 'redux';

export function TodoListItem({item, selectTask, deleteTaskFromList, showModal, toggleTask}) {
    function onEditClick(e) {
        e.stopPropagation();
        showModal();
        selectTask(item)
    }

    function onDeleteClick(e) {
        e.stopPropagation();
        deleteTaskFromList(item) 
    }

    function onToggleTask() {
        toggleTask(item)
    }

    return (
        <li className={`task-item ${item.isDone ? 'done' : ''}` } onClick={onToggleTask}>
            {item.title}
            <button onClick={onEditClick}>  edit</button>
            <span onClick={onDeleteClick}>  X</span>
        </li>
    )
}

function mapDispatchToProps(dispatch) {
    return { 
        deleteTaskFromList: bindActionCreators(deleteTaskFromList, dispatch),
        selectTask: bindActionCreators(selectTask, dispatch),
        showModal: bindActionCreators(showModal, dispatch),
        toggleTask: bindActionCreators(toggleTask, dispatch)
    }
}

function mapStateToProps() {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)
