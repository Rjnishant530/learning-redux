import logo from "./logo.svg";
import "./App.css";

// import store from "./v1/store";
// import { addTask, removeTask, completeTask } from "./v1/action";

import { addTask, removeTask, completeTask } from "./v2/tasks";
import store from "./v2/store";

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

const version2 = () => {
  store.dispatch(addTask({ task: "Do Task" }));
  console.log(store.getState());
  store.dispatch(removeTask({ id: 1 }));
  console.log(store.getState());
  store.dispatch(addTask({ task: "Do EARN" }));
  console.log(store.getState());
  store.dispatch(completeTask({ id: 2 }));
  console.log(store.getState());
};

function App() {
  // version1();
  version2();
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
