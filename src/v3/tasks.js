import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";

var id = 0;

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

const taskSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
    },
    gettask: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      state.tasks = state.tasks.map((v) => (v.id === action.payload.id ? { ...v, completed: true } : v));
    },
  },
});

export const { addTask, removeTask, completeTask, gettask, apiRequested, apiRequestFailed } = taskSlice.actions;
export default taskSlice.reducer;

//Action creators

export const loadTask = apiCallBegin({
  url: "/tasks",
  method: "GET",
  onStart: apiRequested.type,
  onSuccess: gettask.type,
  onError: apiRequestFailed.type,
});
