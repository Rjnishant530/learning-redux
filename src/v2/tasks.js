import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");

const initialState = [];
var id = 0;

export default createReducer(initialState, {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    return state.filter((task) => task.id !== action.payload.id);
  },
  [completeTask.type]: (state, action) => {
    return state.map((v) => (v.id === action.payload.id ? { ...v, completed: true } : v));
  },
});
