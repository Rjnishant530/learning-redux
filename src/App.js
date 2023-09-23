import logo from "./logo.svg";
import "./App.css";
import store from "./v3/store";
import { addTask, removeTask, completeTask, putTask } from "./v3/tasks";

const method1 = async () => {
  try {
    const data = await fetch("http://localhost:5000/api/tasks");
    const tasks = await data.json();
    store.dispatch(putTask({ tasks }));
  } catch (error) {
    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
  }
};

function App() {
  method1();
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
