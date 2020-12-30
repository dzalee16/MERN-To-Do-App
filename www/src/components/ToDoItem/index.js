import React, { useState } from "react";
import "./style.css";

const ToDoItem = ({ todo, removeItems, index, editItems }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleted = (e) => {
    if (e.target.checked) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <li className="list-item">
      <input
        type="text"
        value={todo}
        onChange={(e) => editItems(e.target.value, index)}
        style={{ textDecoration: isCompleted && "line-through" }}
      />
      <button type="button" onClick={() => removeItems(index)}>
        Delete
      </button>
      <input type="checkbox" onClick={handleCompleted} />
    </li>
  );
};

export default ToDoItem;
