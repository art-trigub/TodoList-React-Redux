export const SAVE_TASK_ACTION = 'SAVE-TASK'
export const EDIT_TASK_ACTION = 'EDIT-TASK'
export function saveTaskToList(value) {
    return value.id
    ? {
        type: EDIT_TASK_ACTION,
        value: value
    }
    : {
        type: SAVE_TASK_ACTION,
        value: value
    }
}

export const DELETE_TASK_ACTION = 'DELETE-TASK'
export function deleteTaskFromList(value) {
    return {
        type: DELETE_TASK_ACTION,
        value: value
    }
}

export const SAVE_EDITED_TASK_ACTION = 'CHANGE-TASK'
export function updateTask(value) {
    return {
        type: SAVE_EDITED_TASK_ACTION,
        value: value
    }
}

export const SHOW_MODAL_ACTION = 'MODAL-ACTIVE';
export function showModal() {
    return {
        type: SHOW_MODAL_ACTION,
    }
}

export const CHANGE_INPUT_ACTION = 'CHANGE-INPUT'
export function onChangeInput(value) {
    return {
        type: CHANGE_INPUT_ACTION,
        value: value
    }
}

export const CLEAR_INPUT_ACTION = 'CLEAR-INPUT';
export function clearInput() {
    return {
        type: CLEAR_INPUT_ACTION,
        value: {id: '', title: '', isDone: ''}
    }
}

export const SELECT_TASK_ACTION = 'SELECT-TASK';
export function selectTask(value) {
    return {
        type: SELECT_TASK_ACTION,
        value: value
    }
}

export const TOGGLE_TASK_ACTION = 'TOGGLE-TASK';
export function toggleTask(value) {
    return {
        type: TOGGLE_TASK_ACTION,
        value: value
    }
}

