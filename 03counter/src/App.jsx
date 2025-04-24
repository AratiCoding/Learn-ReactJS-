
import {useState} from 'react';
import './App.css'
function App() {
  let [counter,setCounter]= useState(1);
  
const addValue=()=>{
  // counter=counter+1;
  setCounter(counter+1);
  // setCounter(prevCounter=>prevCounter+1);
  // setCounter(prevCounter=>prevCounter+1);
  // setCounter(prevCounter=>prevCounter+1);
  // setCounter(prevCounter=>prevCounter+1);
  console.log("clicked", counter);
}
const removeValue=()=>{
  setCounter(counter-1);
}
  return (
    <>
     <h1>Chai or react</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
