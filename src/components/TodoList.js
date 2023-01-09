import React, { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { deleteTask, markTask } from '../service/tasksService';
import { PencilSquareIcon, TrashIcon} from '@heroicons/react/24/solid';

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handleDelete = async () => {
    try {
      await deleteTask(todoToDelete);
      setTodos(todos.filter((task) => task.task_id !== todoToDelete.task_id));
      setEditTodo(null);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleComplete = async (todo) => {
    try {
      const updatedTask = await markTask(todo);
      setTodos(todos.map((task) => task.task_id === todo.task_id ? updatedTask : task));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = ({ task_id }) => {
    try {
      const findTodo = todos.find((todo) => todo.task_id === task_id);
      setEditTodo(findTodo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (todo) => {
    setShowModal(true);
    setTodoToDelete(todo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.task_id}>
          <input
            type="text"
            value={todo.description}
            className= {todo.completed
            ? "list-strike"
            : "list"}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className={
                todo.completed
                  ? "button-complete task-button"
                  : "button-not-completed task-button"
              }
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDeleteClick(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
      <ConfirmDeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default TodosList;
