import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleclick(){
    setCount(count+1);
  }
  return (
    <>
      <div>
       <Button incrementCount={handleclick} text="Clickme">
        <h1>{count}</h1>
        </Button>
        {/* between two component is called children */}
        {/* opening tag */}
        <Card name="Vikash">  
        <h1>best web developer</h1>
        <p>try to be consistent</p>
        <p>will complete the course soon</p>
        </Card>

        {/* two tyoe of define the childres s
        1.card tag as a clasa
        2. in card tag

         */}
        <Card children="main ek ladka hu">
          Hello ji
        </Card>

      </div>
    </>
  )
}

export default App
