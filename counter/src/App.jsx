import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCounter]=useState(15)
  //let count =0

  const addvalue=()=>{
     count=count+1
     setCounter(count)
     console.log("value added",count)
  }

  const subvalue=()=>{
  
     count=count-1
     setCounter(count)
     console.log("value subbed",count)
    }
  
    const clearvalue=()=>{
      setCounter(0)
      console.log("value cleared")
    }

  return (
    <>
    <h1>hello</h1>
    <h2>counter value : {count}</h2>
    <button id="add" onClick={addvalue}>Add</button>
    <br/><br/>
    <button id="sub" onClick={subvalue}>Sub</button>
    <br/><br/>
    <button id="clear" onClick={clearvalue}>clear</button>
    
    </>
  )
}

export default App
