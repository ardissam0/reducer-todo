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

  const handleCompleted = (id) => {
    dispatch({type: 'COMPLETED_TODO', payload: id})
  }
  
  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED_TODO'})
  }
  
  return (
    <div className="App">
      <h2>Welcome, add a Todo!</h2>
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
