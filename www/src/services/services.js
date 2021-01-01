import axios from "axios";

const baseURL = "http://localhost:8080";

//Post task
export const addTask = (data) => {
  return axios.post(`${baseURL}/todos`, data);
};

//Get all tasks
export const getAllTasks = () => {
  return axios.get(`${baseURL}/todos`);
};

//Get One task
export const getOneTask = (taskId) => {
  return axios.get(`${baseURL}/todos/:${taskId}`);
};

//Delete task
export const deleteTask = (taskId) => {
  return axios.remove(`${baseURL}/todos/:${taskId}`);
};

//Update task
export const updateTask = (taskId, value) => {
  return axios.patch(`${baseURL}/todos/:${taskId}`);
};
