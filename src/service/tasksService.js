import axios from "axios";
import { API_URL} from './config';

async function getTasks() {
    const response = await axios.get(API_URL);
    const tasks = response.data;

    return tasks;
};

async function createTask(task) {
    const response = await axios.post(API_URL, task);
    const newTask = response.data;

    return newTask;
}

async function deleteTask(task) {
    const response = await axios.delete(`${API_URL}/${task.task_id}`);
    return response.data;
}

async function markTask(task) {
    const updatedTask = {...task, completed: !task.completed};
    const response = await axios.put(`${API_URL}/${task.task_id}`, updatedTask);
    return response.data;
}

async function updateTask(task) {
    console.log('task', task);
    let updatedTask;
    if(task){
      updatedTask = {...task};
      console.log('task', updatedTask);
      const response = await axios.put(`${API_URL}/${task.task_id}`, updatedTask);
      return response.data;
    }
    return null;
  }  


export {getTasks, createTask, deleteTask, markTask, updateTask}