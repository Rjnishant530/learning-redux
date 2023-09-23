import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";

export default configureStore({
  reducer: {
    task: taskReducer,
    employee: employeeReducer,
  },
});
