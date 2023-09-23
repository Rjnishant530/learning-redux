import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTask = createAsyncThunk("fetchTask", async (a, rejectWithValue) => {
  try {
    const data = await fetch("http://localhost:5000/api/tasks");
    const tasks = await data.json();
    return { tasks };
  } catch (error) {
    return rejectWithValue({ error: error.message });
  }
});

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
  extraReducers: {
    [fetchTask.fulfilled]: (state, action) => {
      state.tasks.push(...action.payload.tasks);
      state.loading = false;
    },
    [fetchTask.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTask.error]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const { addTask, removeTask, completeTask, putTask } = taskSlice.actions;
export default taskSlice.reducer;
