import React, { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";
import CompletedItems from "./components/CompletedItems";
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
  const [completedTodos, setCompletedTodos] = useState([]);
  const [bgColor, setBgColor] = useState("");

  //Get all non-completed todos from DB
  useEffect(() => {
    getAllTodos()
      .then((res) => {
        const data = res.data;
        let nonCompletedTodos = [];
        data.forEach((todo) => {
          if (!todo.completed) {
            nonCompletedTodos.push(todo);
          }
        });
        setTodos(nonCompletedTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setTodos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  //Change input value
  const handleChange = (e) => {
    setText(e.target.value);
  };

  //Submitting todos
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
        const data = res.data;
        let nonCompletedTodos = [];
        data.forEach((todo) => {
          if (!todo.completed) {
            nonCompletedTodos.push(todo);
          }
        });
        setTodos(nonCompletedTodos);
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
    setTodos(
      todos.map((todo, index) =>
        index === i ? { ...todo, title: newValue } : { ...todo }
      )
    );
  };

  //Edit submit
  const handleEdit = (i) => {
    let newTodos = [...todos];
    newTodos.map((todo, index) => {
      if (index === i) {
        const id = todo._id;
        const data = {
          ...todo,
        };
        updateTodo(id, data)
          .then((res) => console.log("Sucefully update todo", res))
          .catch((err) => console.log("Error", err));
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
    todos.forEach((todo, index) => {
      if (index === i) {
        const id = todo._id;
        const data = {
          ...todo,
          completed: !todo.completed,
        };
        updateTodo(id, data)
          .then((res) => {
            console.log("Succefully updated todo as completed", res);
            return getAllTodos();
          })
          .then((res) => {
            const data = res.data;
            let todos = [];
            let completedTodos = [];
            data.forEach((todo) => {
              if (!todo.completed) {
                todos.push(todo);
              } else {
                completedTodos.push(todo);
              }
            });
            setTodos(todos);
            setCompletedTodos(completedTodos);
          })
          .catch((err) => console.log(err));
      }
    });
  };

  //Mark as non-completed
  const hadleNonCompleted = (i) => {
    completedTodos.forEach((completedTodo, index) => {
      if (index === i) {
        const id = completedTodo._id;
        const data = {
          ...completedTodo,
          completed: !completedTodo.completed,
        };
        updateTodo(id, data)
          .then((res) => {
            console.log("Succefully updated todo as completed", res);
            return getAllTodos();
          })
          .then((res) => {
            const data = res.data;
            let completedTodos = [];
            let todos = [];
            data.forEach((todo) => {
              if (todo.completed) {
                completedTodos.push(todo);
              } else {
                todos.push(todo);
              }
            });
            setCompletedTodos(completedTodos);
            setTodos(todos);
          })
          .catch((err) => console.log(err));
      }
    });
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
        {/* <button type="button">Completed Todos</button> */}
        {todos.length !== 0 && (
          <ToDoItems
            className="list-items"
            todos={todos}
            removeItems={removeItems}
            editItems={editItems}
            bgColor={bgColor}
            handleCompleted={handleCompleted}
            handleEdit={handleEdit}
          />
        )}
        <CompletedItems
          hadleNonCompleted={hadleNonCompleted}
          setCompletedTodos={setCompletedTodos}
          completedTodos={completedTodos}
        />
      </div>
    </main>
  );
};

export default App;
