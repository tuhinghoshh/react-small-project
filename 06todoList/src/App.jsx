import { useState } from 'react'
import './App.css'
import Todos from "./components/Todos"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos />
    </>
  )
}

export default App
