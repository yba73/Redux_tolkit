import { useDispatch } from "react-redux";
import Edit from "./Edit";
import { removeTodos } from "../features/TodoList";
import { useState } from "react";

const Task = (props) => {
  const { id, desc, isDone } = props;

  const handleCheck = () => {
    setChecked(!checked);
  };
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(removeTodos(id));
    console.log(id);
  };

  return (
    <div>
      <div className="cardbox">
        <input
          input
          className="completed"
          type="checkbox"
          onChange={handleCheck}
        />
        <label style={{ textDecoration: checked ? "line-through" : "none" }}>
          {desc} {isDone}
        </label>
        <div className="tools">
          <Edit id={id} desc={desc} />

          <button className="delete" onClick={() => removeTodo(id)}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;