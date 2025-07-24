import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 function handleClick(){
  alert("i am clicked")
 }
 function handleMouse(){
  alert("main ek para ")
 }
 function handlechange(e){
  console.log("value change hui h",e.target.value)
 }
 function handleSubmit(e){
  e.preventDefault()
  alert("form submit kr du kya")
 }
  return (
    <>
      <div>
        <button onClick={()=>alert("button hua click")}>
          clik me
        </button>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handlechange}/>
          <button>Submit</button>
        </form>
        {/* <p onMouseOver={handleMouse}>i am para</p>
        <button onClick={handleClick}>
          click me
        </button> */}
      </div>
    </>
  )
}

export default App
