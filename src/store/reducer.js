import { SAVE_TASK_ACTION, EDIT_TASK_ACTION, DELETE_TASK_ACTION, SHOW_MODAL_ACTION, 
CHANGE_INPUT_ACTION, CLEAR_INPUT_ACTION, SELECT_TASK_ACTION, TOGGLE_TASK_ACTION } from "./actions";

const initialState = {
    modalActive: false,
    taskList: [],
    newTask: {
        id: '',
        title: '',
        isDone: false
    }    
};

export default function(state = initialState, action) {
    switch(action.type) {

        case SAVE_TASK_ACTION:
            action.value.id = Date.now()
            return {...state, taskList: [...state.taskList, action.value]}
        
        case EDIT_TASK_ACTION:
            return {...state, taskList: state.taskList.map((item) => {
                return item.id === action.value.id ? action.value : item })}

        case DELETE_TASK_ACTION:
            const newTask = state.taskList.filter((item) => {
                return item.id !== action.value.id
            })
            return {...state, taskList: newTask}

        case SHOW_MODAL_ACTION:
            return {...state, modalActive: !state.modalActive}

        case CHANGE_INPUT_ACTION:
            return {...state, newTask: {...state.newTask, ...action.value}}

        case CLEAR_INPUT_ACTION:
            return {...state, newTask: action.value}

        case SELECT_TASK_ACTION:
            return {...state, newTask: action.value}
        
        case TOGGLE_TASK_ACTION:
            return {...state, taskList: state.taskList.map((item) => {
                return item.id === action.value.id ? {...item, isDone: !item.isDone} : item
            })}

        default:
            return state;
    }
}