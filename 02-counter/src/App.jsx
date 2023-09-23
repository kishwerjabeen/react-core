import { useState } from 'react'
import './App.css'

function App() {

let counter = 5;

  const addValue = () => { console.log("Value added" , Math.random());}
  return (
    <>
      <h1>Counter with React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}>Add Value </button>
       <br/>
      <button>Remove Value </button>
    </>
  )
}

export default App
