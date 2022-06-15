import { createSlice } from "@reduxjs/toolkit";
const TodoList = createSlice({
  name: "TodoList",
  initialState: {
    Todo: [{ desc: "task1", id: Math.random(), isDone: false }],
  },
  reducers: {
    //Add lsit
    addList: (state, action) => {
      state.Todo.push(action.payload);
    },

    // removeTodos
    removeTodos: (state, action) => {
      const index = state.Todo.findIndex((el) => el.id === action.payload.id);
      state.Todo.splice(index, 1);
    },

    updatedesc: (state, action) => {
      state.Todo = state.Todo.map((el) =>
        el.id === action.payload.id ? { ...el, desc: action.payload.desc } : el
      );
    },
  },
});
export const { addList, removeTodos, updatedesc } = TodoList.actions;
export default TodoList.reducer;
