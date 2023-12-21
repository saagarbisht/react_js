import { useState } from "react";
import "./App.css"

function App() {
  let [count,setCount] = useState(10)
  
  function add(){
    count > 19 ? alert(`can't go above ${count}`):setCount(count + 1);
  }

  function sub(){
    count < 1 ? alert(`can't go below ${count}`) : setCount(count - 1)
  }
  return (
    <>
    <button  className="btn">Counter : {count}</button>
    <br/>
    <button onClick={add} className="btn space">Add</button>
    <button onClick={sub} className="btn space">Sub</button>
    <p className="txt">Starting value was 10 current val is {count}</p>
    </>
  )
}

export default App
