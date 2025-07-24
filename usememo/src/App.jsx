import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[input,setInput]=useState(0)
function expensivetask(num){
  console.log("expensive task")
  for(let i=0;i<=1000000;i++){}
  return num+2;
}
let doublevalue=expensivetask(4)
useMemo(()=>expensivetask(input),[input]);
  return (
   <div>
    <button onClick={()=>setCount(count+1)}>
      increment
    </button>
    <div>
      count:{count}
    </div>


<input type="number"
placeholder='enter number'
value={input} 
onChange={(e)=>setInput(e.target.value)}/>
    <div>
      Double:{doublevalue}
    </div>
   </div>
  )
}

export default App
