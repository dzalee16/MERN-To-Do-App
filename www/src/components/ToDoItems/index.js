import React from "react";
import ToDoItem from "../ToDoItem";
import "./style.css";

const ToDoItems = ({ todos, removeItems, editItems }) => {
  return (
    <ul className="unordered-list">
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          removeItems={removeItems}
          editItems={editItems}
        />
      ))}
    </ul>
  );
};

export default ToDoItems;
