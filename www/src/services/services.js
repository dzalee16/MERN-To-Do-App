import axios from "axios";

const baseURL = "http://localhost:5000";

//Post Todo
export const addTodo = (data) => {
  return axios.post(`${baseURL}/todos`, data);
};

//Get all Todos
export const getAllTodos = () => {
  return axios.get(`${baseURL}/todos`);
};

//Get all completed todos
export const getCompletedTodos = () => {
  return axios.get(`${baseURL}/todos/completed`);
};

//Get all non-completed todos
export const getNonCompletedTodos = () => {
  return axios.get(`${baseURL}/todos/noncompleted`);
};

//Get One Todo
export const getOneTodo = (todoId) => {
  return axios.get(`${baseURL}/todos/${todoId}`);
};

//Delete Todo
export const deleteTodo = (todoId) => {
  return axios.delete(`${baseURL}/todos/${todoId}`);
};

//Update Todo
export const updateTodo = (todoId, data) => {
  return axios.patch(`${baseURL}/todos/${todoId}`, data);
};
