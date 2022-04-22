import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log("call an api");
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={styles.title}>Welcome back!</h1>
        <h2>{counter}</h2>
        <button onClick={onClick}>click me</button>
        <Button text={"Hey"} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
