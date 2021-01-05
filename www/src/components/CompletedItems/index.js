import React, { useEffect } from "react";
import CompletedItem from "../CompletedItem";
import { getCompletedTodos } from "../../services/services";
import "./style.css";

const CompletedItems = ({
  hadleNonCompleted,
  completedTodos,
  setCompletedTodos,
}) => {
  useEffect(() => {
    getCompletedTodos()
      .then((res) => {
        const data = res.data;
        setCompletedTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setCompletedTodos]);

  return (
    <div className="unordered-list-completedTodos">
      <h3>Completed Todos</h3>
      <ul>
        {completedTodos.map((completedTodo, index) => (
          <CompletedItem
            key={index}
            completedTodo={completedTodo}
            index={index}
            hadleNonCompleted={hadleNonCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default CompletedItems;
