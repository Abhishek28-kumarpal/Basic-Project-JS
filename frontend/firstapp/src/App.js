
import React, { useState } from 'react';
import App2 from './App2';
function App() {

  let [counter, setCounter] = useState(15);
  // let count=15;



//  ----------------------------------//1st function created incerease the value
  const addValue = ()=>{
  console.log("click",counter);
  // count=count+1;
  // setcount(count+1);
  if(counter<20){
  setCounter(counter+1);
  }
  
 }
// ----------------------------------------2nd function created decrease the value 
 const removeValue = ()=>{
  console.log("click",counter);
  if(counter>0){
    setCounter(counter-1);
  }
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