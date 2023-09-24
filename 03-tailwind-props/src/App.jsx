import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/cards'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Kishwar",
    age:30
  }
  let newArr =[1,2,3];

  return (
    <>
    
      <h1 className='bg-green-500 mb-1'>Vite + React</h1>
    
  <Cards channel="chaiaurcode" someObj={myObj} someArrt={newArr}/>
  <Cards/>
    </>
  )
}

export default App
