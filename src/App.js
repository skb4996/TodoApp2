import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form"
import TodosList from "./components/TodoList";
import { getTasks } from './service/tasksService';

function App() {

  const[input, setInput] = useState("");
  const[todos, setTodos] = useState([]);
  const[editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const tasks = await getTasks(); 
      setTodos(tasks);
    }
    fetchData();
    console.log(todos);
  }, []);
  console.log(todos);
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}/>
        </div>
        <div>
          <TodosList todos={todos} 
                     setTodos={setTodos} 
                     setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
