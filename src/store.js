import { configureStore } from "@reduxjs/toolkit";
import TodoList from "./features/TodoList";
export default configureStore({
  reducer: {
    TodoList,
  },
});
