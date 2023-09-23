import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";
import error from "../middleware/error";
import makeApiCall from "../middleware/makeAPICall";

export default configureStore({
  reducer: {
    task: taskReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), makeApiCall, error],
});
