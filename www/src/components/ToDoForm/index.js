import React from "react";
import "./style.css";

const ToDoForm = ({ handleChange, handleSubmit, text, handleBgColor }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        onChange={handleChange}
        value={text}
      />
      <button type="submit">Add</button>
      <input type="color" onChange={handleBgColor} />
    </form>
  );
};

export default ToDoForm;
