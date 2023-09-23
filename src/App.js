import logo from "./logo.svg";
import "./App.css";

// import store from "./v1/store";
// import { addTask, removeTask, completeTask } from "./v1/action";

// const version1 = () => {
// store.dispatch(addTask("Do Task"));
// console.log(store.getState());
// store.dispatch(removeTask(1));
// console.log(store.getState());
// store.dispatch(addTask("Do EARN"));
// console.log(store.getState());
// store.dispatch(completeTask(1));
// console.log(store.getState());
// }

// import { addTask, removeTask, completeTask } from "./v2/tasks";
// import store from "./v2/store";

// const version2 = () => {
//   store.dispatch(addTask({ task: "Do Task" }));
//   console.log(store.getState());
//   store.dispatch(removeTask({ id: 1 }));
//   console.log(store.getState());
//   store.dispatch(addTask({ task: "Do EARN" }));
//   console.log(store.getState());
//   store.dispatch(completeTask({ id: 2 }));
//   console.log(store.getState());
// };

import { addEmployee, removeEmployee } from "./v3/employees";
import { addTask, removeTask, completeTask } from "./v3/tasks";

import store from "./v3/store";

const version3 = () => {
  store.dispatch(addEmployee({ name: "Rajni" }));
  store.dispatch(removeEmployee({ id: 1 }));
  store.dispatch(addEmployee({ name: "Nishant" }));

  store.dispatch({type:"SHOW_ERROR",payload:{error:"Server Error"}})
  store.dispatch(addTask({ task: "Do Task" }));
  store.dispatch(removeTask({ id: 1 }));
  store.dispatch(addTask({ task: "Do EARN" }));
  store.dispatch(completeTask({ id: 2 }));
};

function App() {
  // version1();
  // version2();
  version3();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
