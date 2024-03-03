import React, { useDeferredValue, useState } from "react";
import { deletetodo, edittodo } from "./action";
import { useDispatch } from "react-redux";

const Todo = ({ id, title }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(edittodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };

  const handleDelete=()=>{
    dispatch(deletetodo(id))
    setEditing(false);
  }

  return (
    <>
      {editing ? (
        <div>
          <input
            className="form-control"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item">
          <p>{title}</p>
          <div className="actions">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </li>
      )}
    </>
  );
};

export default Todo;
