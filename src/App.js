import logo from './logo.svg';
import './App.css';
import { useState } from "react"
function App() {
  const [hidden, setHidden] = useState(false)
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Wonderful Recipes</h1>
        <button onClick={(event) => (setHidden(true))}>hide me</button>
        <button onClick={(event) => (setHidden(false))}>show me</button>
        {hidden ? <p>hidden</p> : <p>i am not hidden</p>}
        <h2>{counter}</h2>
        <button onClick={(event) => (setCounter(counter + 1))}>increment</button>
        <button onClick={(event) => (setCounter(counter - 1))}>decrement</button>

      </div>

    </div>
  );
}

export default App;
