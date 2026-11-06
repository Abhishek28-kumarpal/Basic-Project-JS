
import { useState } from 'react';
import App2 from './App2'
function App() {

  // const [count, setcount]=useState(15) 
  let count=15

  const addValue= ()=>{
  console.log("click",count);
    count=count+1;
  }
  return (
    <>
    <h1>Abhishek Kumar Pal</h1>
    <h2>Counter value: {count}</h2>

    <button onClick={addValue}>Add value: {count}</button>
    <br/>
    <button>Remove value: {count}</button>
    <App2/>

    </>
  );
}

 
export default App;