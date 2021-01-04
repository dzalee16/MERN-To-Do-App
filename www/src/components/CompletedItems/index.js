import React, { useEffect } from "react";
import CompletedItem from "../CompletedItem";
import { getAllTodos } from "../../services/services";
import "./style.css";

const CompletedItems = ({
  hadleNonCompleted,
  completedTodos,
  setCompletedTodos,
}) => {
  useEffect(() => {
    getAllTodos()
      .then((res) => {
        const data = res.data;
        let completedTodos = [];
        data.forEach((elem) => {
          if (elem.completed) {
            completedTodos.push(elem);
          }
        });
        setCompletedTodos(completedTodos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setCompletedTodos]);

  useEffect(() => {
    console.log(completedTodos);
  }, [completedTodos]);

  return (
    <div className="unordered-list-completedTodos">
      <h4>Completed Todos</h4>

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
