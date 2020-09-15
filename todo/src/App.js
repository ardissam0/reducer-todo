
//imported all neccessary imports
import React, { useReducer } from 'react';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/todoList';
import { initialState, reducer } from './Reducers/reducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: 'ADD_TODO', payload: newTodo})
  }
  //created handle function
  const handleCompleted = (id) => {
    dispatch({type: 'COMPLETED_TODO', payload: id})
  }
  //used to clear completed tasks
  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED_TODO'})
  }
  //returned todoForm and TodoList component and a button to clear the tasks using the clearCompleted function
  return (
    <div className="App">
      <h2>Todo App</h2>
     <TodoForm addTodo={addTodo} />
     <TodoList state={state} handleCompleted={handleCompleted} />
     <button onClick={(event) => {
     event.preventDefault()
     clearCompleted()
     }}>Clear</button>
    </div>
  );
}

export default App;
