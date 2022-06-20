import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../features/TodoList";

const Add = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("Empty");
    } else {
      dispatch(addList({ desc: newTask, id: Math.random(), isDone: false }));
      console.log(newTask);
    }
  };

  return (
    <div>
      <div className="addbox">
        <input
          placeholder="New task here..."
          name="desc"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handelSubmit}>Add</button>
      </div>
    </div>
  );
};

export default Add;
