import React from 'react';
import { TodoForm } from './components/todoForm';
import { TodoList } from './components/todoList';
import { intialState, reducer } from './reducers/reducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
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
     <TodoList state={state} handleCompleted={handleCompleted} />
     <TodoForm addTodo={addTodo} />
     <button onClick={(event) => 
     event.preventDefault(
       clearCompleted()
     )}>Clear</button>
    </div>
  );
}

export default App;
