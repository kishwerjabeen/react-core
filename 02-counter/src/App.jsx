import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  // Add vaue funtion 
  const addValue = () => {

    // counter = counter + 1
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);
      
      //console.log("Value added", counter);
    }
  }

  // Remve Value funtion 
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Counter with React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
