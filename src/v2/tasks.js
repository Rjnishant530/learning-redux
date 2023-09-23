import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");

console.log(addTask);

const initialState = [];
var id = 0;

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case addTask.type:
      return [
        ...state,
        {
          id: ++id,
          task: payload.task,
          completed: false,
        },
      ];
    case removeTask.type:
      return state.filter((task) => task.id !== payload.id);
    case completeTask.type:
      return state.map((v) => (v.id === payload.id ? { ...v, completed: true } : v));
    default:
      return state;
  }
}
