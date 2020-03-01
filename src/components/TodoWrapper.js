import {connect} from 'react-redux'
import Todo from './Todo'
import { bindActionCreators } from 'redux';
import { saveTaskToList, deleteTaskFromList, updateTask, showModal } from '../store/actions';

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
        showModal: bindActionCreators(showModal, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)