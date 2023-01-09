import React from 'react';
import axios from 'axios';
import {createTask, getTask, updateTask} from '../service/tasksService';
const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updatedTask = async (editTodo, description) => {
        try {
          editTodo.description = input;
          const updatedTodo = await updateTask(editTodo);
          if (!updatedTodo) {
            return;
          }
          const newTodos = todos.map((todo) => {
            if (todo.task_id === editTodo.task_id) {
              return updatedTodo;
            }
            return todo;
          });
          setTodos(newTodos);
        } catch (error) {
        }
        setEditTodo(null);
      };
      ;      
      
    const onInputChange = (event) => {
       
        setInput(event.target.value);
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();

        if (!editTodo) {
         // Create a new task using the input value
         const task = { description: input, completed: false };

         // Call the createTask function to create the task
         const newTask = await createTask(task);

        // Add the new task to the list of tasks
        setTodos([...todos, newTask]);

        // Clear the input field
        setInput('');
        } else {
            updatedTask(editTodo, input);
            setInput('');
        }
    }
   
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" 
                    placeholder={!editTodo? 'Enter a Task...':'Edit Task'}
                    className='task-input'
                    value={input}
                    required
                    onChange={onInputChange}
                    />
            <button className='button-add' type='submit'>
                {editTodo ? "Ok" : "Add"}
            </button>
        </form>
    )
}

export default Form;