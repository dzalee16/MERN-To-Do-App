import React, { useState } from "react";
import "./style.css";

const ToDoItem = ({
  todo,
  removeItems,
  index,
  editItems,
  handleCompleted,
  handleEdit,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <li className="list-item">
      <input
        className={`text-input ${todo.completed && "completed"}`}
        type="text"
        value={todo.title}
        disabled={isDisabled}
        onChange={(e) => editItems(e.target.value, index)}
      />
      {!isDisabled && (
        <button
          className="submit-edit"
          onClick={() => handleEdit(index)}
          type="button"
        >
          Submit
        </button>
      )}
      <button
        className="edit"
        type="button"
        onClick={() => setIsDisabled(!isDisabled)}
      >
        Edit
      </button>
      <button
        className="delete"
        type="button"
        onClick={() => removeItems(index)}
      >
        Delete
      </button>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        className="chkbox-input"
        onClick={() => handleCompleted(index)}
      />
    </li>
  );
};

export default ToDoItem;
