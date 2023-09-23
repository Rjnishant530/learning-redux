import * as actionTypes from "./actionTypes"

const initialState = [];
let id = 0;
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: payload.task,
          completed: false,
        },
      ];
    case actionTypes.REMOVE_TASK:
      return state.filter((task) => task.id !== payload.id);
    case actionTypes.COMPLETE_TASK:
      return state.map(v => v.id === payload.id ? { ...v,completed : true } :v)
    default:
      return state;
  }
}
