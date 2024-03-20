import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)

  // let count=0;

  let increament=()=>{
    console.log(counter);
    setCounter(counter+1)
  }
  let decreament=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     
      <h1>React Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={increament}>⬆️ counter</button>
      <br/>
      <button onClick={decreament}>⬇️counter</button>
      
    </>
  )
}

export default App
