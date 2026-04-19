import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    todo: [
      {
        id: nanoid(),
        title: "Testing",
      },
      {
        id: nanoid(),
        title: "second todo",
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    deleteTodo: (state, action) => {
      const index = state.todo.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.todo.splice(index, 1);
    },
    editTodo: (state, action) => {
      const index = state.todo.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.todo[index].title = action.payload.title
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

// const [todo , setTodo] = usestate([{},{}])
// add , delete , edit
