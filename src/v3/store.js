import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees";
import taskReducer from "./tasks";
import log from "../middleware/log";
import error from "../middleware/error";


export default configureStore({
  reducer: {
    task: taskReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), error,log],
});
