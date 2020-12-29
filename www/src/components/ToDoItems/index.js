import React from "react";
import ToDoItem from "../ToDoItem";

const ToDoItems = ({ todos, removeItems, editItems }) => {
  return (
    <ul>
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
