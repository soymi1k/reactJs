import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev => prev + 1);
  const onChange = event => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH For", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter Change");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div className="App">
      <header className="App-header">
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        />
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
