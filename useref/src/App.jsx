import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let val=useRef(0)
  let btn=useRef()
function handle(){
  val.current=val.current+1
  console.log("value of val",val.current)
  setCount(count+1);
}

function changecolor(){
    btn.current.style.backgroundColor="red";
}
useEffect(()=>{
  console.log("main phir se render");
  
}
  
)
  return (
    <div>
      <button 
      ref={btn}
      onClick={handle}>
        increment
      </button>
<br />
<br />
      <button onClick={changecolor}>
        change color of the button
      </button>
      <div>
        count:{count}
      </div>
    </div>
  )
}

export default App
