import React from 'react'
import {Provider} from 'react-redux'
import Todo from './components/TodoWrapper'
import store from './store'
console.log(store)

function App() {
  return <Provider store={store}>
      <Todo />
    </Provider>

}

export default App
