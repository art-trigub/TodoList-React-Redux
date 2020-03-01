import React from 'react'
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import store from '../store'

export function TodoList({taskList}) {
    return (
        <ul>
            {taskList.map((item) => (<TodoListItem item={item} key={item.id} />))}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        taskList: state.taskList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

