import React, { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
import {
  addTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} from "./services/services";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [bgColor, setBgColor] = useState("");

  //Get all tasks from DB
  useEffect(() => {
    getAllTodos()
      .then((res) => {
        const data = res.data;
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: text,
      completed: false,
    };

    addTodo(data)
      .then((res) => {
        return getAllTodos();
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });

    setText("");
  };

  //remove ToDos
  const removeItems = (i) => {
    let newTodos = [...todos];
    newTodos.map((todo, index) => {
      if (index === i) {
        const id = todo._id;
        deleteTodo(id)
          .then((res) => {
            return getAllTodos();
          })
          .then((res) => {
            setTodos(res.data);
          })
          .catch((err) => {
            console.log("Error", err);
          });
      }
      return newTodos;
    });
  };

  //edit ToDos
  const editItems = (newValue, i) => {
    let newTodos = [...todos];
    newTodos.map((todo, index) => {
      if (index === i) {
        const id = todo._id;
        const data = {
          ...todo,
          title: newValue,
        };
        updateTodo(id, data)
          .then((res) => {
            return getAllTodos();
          })
          .then((res) => {
            setTodos(res.data);
          })
          .catch((err) => console.log(err));
      }
      return newTodos;
    });
  };

  //chnage bg color
  const handleBgColor = (e) => {
    setBgColor(e.target.value);
  };

  //Mark as completed
  const handleCompleted = (i) => {
    setTodos(
      todos.map((todo, index) => {
        if (index === i) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return {
          ...todo,
        };
      })
    );
  };

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
          handleCompleted={handleCompleted}
        />
      </div>
    </main>
  );
};

export default App;
