import { useDispatch } from "react-redux";
import Edit from "./Edit";
import { removeTodos } from "../features/TodoList";
import { useState } from "react";

const Task = (props) => {
  const { id, desc } = props;

  const handleCheck = () => {
    setChecked(!checked);
  };
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const removeTodo = (id) => {
    if (checked === true) dispatch(removeTodos(id));
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
          {desc}
        </label>
        <div className="tools">
          <Edit id={id} desc={desc} />

          <button className="delete" onClick={() => removeTodo(id)}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
