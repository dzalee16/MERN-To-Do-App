import React from "react";
import "./style.css";

const CompletedItem = ({ index, completedTodo, hadleNonCompleted }) => {
  return (
    <li className="list-item-completedTodo">
      <input
        className={`text-input ${completedTodo.completed && "completed"}`}
        type="text"
        value={completedTodo.title}
        disabled
      />
      <input
        type="checkbox"
        readOnly
        checked={completedTodo.completed ? "chekced" : null}
        className="chkbox-input-completedTodo"
        onClick={() => hadleNonCompleted(index)}
      />
    </li>
  );
};

export default CompletedItem;
