import React, {useState, useEffect} from 'react'
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import ModalForm from './ModalForm';
import store from '../store';
  console.log(store)

function Todo({taskList, newTaskList, addTaskToList, modalActive, showModal}) {
  return (
    <>
      <button onClick={showModal}>Add</button>
      <ModalForm />
      <TodoList />
    </>
  )
}

export default Todo








// const [modalActive, setModalActive] = useState(false)
  // const [taskList, setTaskList] = useState([])
  // const [newTask, setNewTask] = useState({
  //   title: '',
  //   isDone: ''
  // })
  
  // function showModalForm() {
  //   setModalActive(!modalActive)
  // }

  // function onChange (changes) {
  //   setNewTask({
  //     ...newTask,
  //     ...changes
  //   })
  // }


  // function onSaveTask(task) {
  //   task.id
  //   ? editTask(task) 
  //   : saveTask(task);
  //   setNewTask({
  //     title: '',
  //     isDone: ''
  //   })
  //   showModalForm();
  // }

  // function saveTask(task) {
  //   task.id = Date.now();
  //   setTaskList([...taskList, task])
    
  // }

  // function editTask(task) { 
  //   setTaskList(taskList.map(item => (
  //     item.id === task.id ? task : item
  //   )))
  // }

  // function onEditTask(id) {
  //   setNewTask(taskList.find((item) => item.id === id))
  //   showModalForm();
  // }
  
  // function onDeleteTask(id) {
  //   const newListTask = taskList.filter((item) => {
  //     return item.id !== id 
  //   })
  //   setTaskList(newListTask)
  // }

  // function toggleTask(id) {
  //   const newListTask = taskList.map((item) => {
  //     return item.id !== id
  //     ? item 
  //     : {
  //       ...item,
  //       isDone: !item.isDone
  //     }
  //   })
  //   setTaskList(newListTask)
  // }

      /* <div>
        <button onClick={showModalForm}>Add new</button>
        <TodoList list={taskList} toggleTask={toggleTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        <ModalForm 
        task={newTask} 
        modalActive={modalActive} 
        onCancelModal={showModalForm} 
        onChange={onChange} 
        onSaveTask={onSaveTask}
        />
      </div> */