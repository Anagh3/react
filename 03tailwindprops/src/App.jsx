import { useState } from 'react'
import "./App.css"
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className='bg-green-400 text-black p-4 rounded-xl'>TailWind</h1>

<Card name="Anagh" buttontext="click me"/>

<Card name="Anagh P" buttontext="click me please"/>

</>
  )
}

export default App
