import React from "react";
import { UseSelector, useSelector } from "react-redux";
import Todo from "./Todo";

const Todolist = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </>
  );
};

export default Todolist;
