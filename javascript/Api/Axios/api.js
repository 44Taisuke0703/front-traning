import axios from "axios";
const getAllTodos = async () => {
  const response = await axios.get("http://localhost:3000/todo");
  console.dir(response);
  const todos = response.data;
  console.dir(todos);
  return todos;
};
const postTodo = async (todo) => {
  const response = await axios.post("http://localhost:3000/todo", todo);
  console.dir(response);
  const newTodo = response.data;
  console.dir(newTodo);
  return newTodo;
};
const putTodo = async (id, todo) => {
  const response = await axios.put(`http://localhost:3000/todo/${id}`, todo);
  console.dir(response);
  const updatedTodo = response.data;
  console.dir(updatedTodo);
  return updatedTodo;
};
const patchTodo = async (id, data) => {
  const response = await axios.patch(`http://localhost:3000/todo/${id}`, data);
  console.dir(response);
  const updatedTodo = response.data;
  console.dir(updatedTodo);
  return updatedTodo;
};
const deleteTodo = async (id) => {
  const response = await axios.delete(`http://localhost:3000/todo/${id}`);
  console.dir(response);
  return response.status;
};
