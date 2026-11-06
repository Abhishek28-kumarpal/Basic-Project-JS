
import React, { useState } from 'react';
import App2 from './App2'
function App() {

  let [counter, setCounter] = useState(15);
  // let count=15;

  const addValue = ()=>{
  console.log("click",counter);
  // count=count+1;
  // setcount(count+1);
  setCounter(counter+1);
  
}

const removeValue = ()=>{
  console.log("click",counter);
    setCounter(counter-1);
  }
  return (
    <>
    <h1>Abhishek Kumar Pal</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value: {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value: {counter}</button>
    <p>footer: {counter}</p>
    <App2/>

    </>
  );
}

 
export default App;