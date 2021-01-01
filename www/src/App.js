import React, { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
// import { addTask, getAllTasks } from "./services/services";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [bgColor, setBgColor] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    // const data = {
    //   title: text,
    //   completed: false,
    // };

    // addTask(data)
    //   .then((res) => {
    //     console.log("Succeffuly add task to DB", res);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });
    setText("");
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

  //chnage bg color
  const handleBgColor = (e) => {
    setBgColor(e.target.value);
  };

  // useEffect(() => {
  //   getAllTasks()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <main className="app">
      <h1>To Do - List</h1>
      <div className="content">
        <ToDoForm
          className="form"
          text={text}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBgColor={handleBgColor}
        />
        <ToDoItems
          className="list-items"
          todos={todos}
          removeItems={removeItems}
          editItems={editItems}
          bgColor={bgColor}
        />
      </div>
    </main>
  );
};

export default App;
