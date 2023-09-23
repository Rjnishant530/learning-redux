import axios from "axios";
import { apiCallBegin } from "../v3/api";

const makeApiCall = (store) => (next) => async (action) => {
  if (action.type !== apiCallBegin.type) {
    return next(action);
  }

  const { method, url, data, onSuccess, onError, onStart } = action.payload;

  if (onStart) {  
    store.dispatch({ type: onStart });
  }
  try {
    const response = await axios.request({
      baseURL: "http://localhost:5000/api",
      url,
      data,
      method,
    });
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch({ type: "SHOW_ERROR",payload: { error: error.message } });
    store.dispatch({ type: onError, payload: { error: error.message } });
  }
};

export default makeApiCall;
