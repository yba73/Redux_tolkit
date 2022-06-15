import { useSelector } from "react-redux";
import Task from "./Task";
const ListTask = () => {
  const todo = useSelector((state) => state.TodoList.Todo);
  return (
    <div>
      <div className="todolist">
        <h3>List of tasks</h3>
      </div>
      {todo.map((el) => (
        <>
          <Task key={Math.random()} {...el} />
        </>
      ))}
    </div>
  );
};

export default ListTask;
