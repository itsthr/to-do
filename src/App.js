import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "./action";
import Todolist from "./Todolist";

const App = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle,
      };
      dispatch(addtodo(newTodo));
      setTodoTitle("");
    }
  };
  return (
    <div className="container mt-5 w-50">
      <h3 className="text-primary text-center">Todo </h3>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => handleTodo()}>
          Add
        </button>
      </div>
      <Todolist />
    </div>
  );
};

export default App;
