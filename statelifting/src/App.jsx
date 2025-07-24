import { useState } from 'react'
import './App.css'
import Card from './component/Card' // adjust the path to where your Card is

function App() {
  // create state
  const [name, setName] = useState('')

  return (
    <>
      <h1>React Props Example</h1>
      <Card name={name} setName={setName} />
      <p>Current name: {name}</p>
      <Card name={name} setName={setName} />
      <p>Current name: {name}</p>
    </>
  )
}

export default App
