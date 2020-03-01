import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {saveTaskToList, deleteTaskFromList, updateTask, showModal, onChangeInput, clearInput} from '../store/actions'
import store from '../store';


export function ModalForm({modalActive, showModal, newTask, onChangeInput, saveTaskToList, clearInput}) {    
    let modalStyle = {
        display: "block"
    }

    let modalHide = {
        display: "none"
    }

    function onChange(e) {
        onChangeInput({
            [e.target.name]: e.target.value
        })
    }

    function saveTask(e) {
        e.preventDefault();
        saveTaskToList(newTask)
        clearInput()
        showModal()
    }

    
    return (
        <div style={modalActive ? modalStyle : modalHide}>
            <form>
                <input onChange={onChange} type="text" name="title" value={newTask.title} />
                <button onClick={saveTask}>Save</button>
            </form>
            <button onClick={showModal}>Cancel</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        taskList: state.taskList,
        newTask: state.newTask,
        modalActive: state.modalActive
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveTaskToList: bindActionCreators(saveTaskToList, dispatch),
        deleteTaskFromList: bindActionCreators(deleteTaskFromList, dispatch),
        updateTask: bindActionCreators(updateTask, dispatch),
        showModal: bindActionCreators(showModal, dispatch),
        onChangeInput: bindActionCreators(onChangeInput, dispatch),
        clearInput: bindActionCreators(clearInput, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalForm)









// function onCancelClick() {
//     onCancelModal()
// }

// function onValueChange(e) {
//     onChange({
//         title: e.target.value
//     })
// }

// function onSubmitForm(e) {
//     e.preventDefault();
//     onSaveTask(task);
// }

// return (
//     <div style={modalStyle}>
//         <form onSubmit={onSubmitForm}>
//             <input onChange={onValueChange} value={task.title} type="text" name="title" />
//             <button>Save</button>
//         </form>
//         <button onClick={onCancelClick}>Cancel</button>
//     </div>
// )
// }