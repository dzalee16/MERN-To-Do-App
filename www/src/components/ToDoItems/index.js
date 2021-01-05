import React from "react";
import ToDoItem from "../ToDoItem";
import "./style.css";

const ToDoItems = ({
  todos,
  removeItems,
  editItems,
  bgColor,
  handleCompleted,
  handleEdit,
}) => {
  return (
    <div className="unordered-list-todos">
      <h3>Todos</h3>
      <ul style={{ backgroundColor: bgColor }}>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            index={index}
            removeItems={removeItems}
            editItems={editItems}
            handleCompleted={handleCompleted}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoItems;
