import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

const App = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todoValue]);
    setTodoValue("");
  };

  //remove ToDos
  const removeItems = (i) => {
    let newTodos = [...todos];
    newTodos = newTodos.filter((item, index) => i !== index);
    setTodos(newTodos);
  };

  //edit ToDos
  const editItems = (newValue, i) => {
    setTodos((prev) =>
      prev.map((item, index) => (index === i ? newValue : item))
    );
  };

  return (
    <main className="app">
      <h1>To Do - List</h1>
      <div className="content">
        <ToDoForm
          className="form"
          todoValue={todoValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ToDoItems
          className="list-items"
          todos={todos}
          removeItems={removeItems}
          editItems={editItems}
        />
      </div>
    </main>
  );
};

export default App;
