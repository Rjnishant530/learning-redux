import { createSlice } from "@reduxjs/toolkit";

var id = 0;

const taskSlice = createSlice({
  initialState: [],
  name: "tasks",
  reducers: {
    putTask: (state, action) => {
      return action.payload.tasks;
    },
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      return state.map((v) => (v.id === action.payload.id ? { ...v, completed: true } : v));
    },
  },
});

export const { addTask, removeTask, completeTask, putTask } = taskSlice.actions;
export default taskSlice.reducer;
