import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount]=useState(0)
  const[total,setTotal]=useState(0)
  // first-slide effect function
  // second-clean up function
  // third-commas seperated dep list

  //  syntax

  // useEffect(()=>{
  //   first
  //   return()=>{
  //     second
  //   }
  // },[count])

  // variation:1

  // run on every render

  // useEffect(()=>{
  //   alert("i will run each render")
  // })

  // variation 2

  // that run only first render
  
  // useEffect(()=>{
  //   alert("i will only first render")
  // },[])

  // variation 3

  // useEffect(()=>{
  //   alert("I wil run every time when count updated")

  // },[count])


  // variation 4
 
  //multiple dependncies


  // useEffect(()=>{
  //   alert("I wil run every time when count/total updated")

  // },[count,total])



  // variation 5
  // is baar lets a add a cleanup function


useEffect(()=>{
    alert("count is updated")
    return()=>{
      alert("count is unamount from ui")
    }
  },[count])





function handlecount(){
  setCount(count+1)
}
function handletotal(){
  setTotal(total+1)
}
  return (
    
     <div>
      <button onClick={handlecount}>
        update count
      </button>
      <br />
      count is :{count}
      <br />
      <button onClick={handletotal}>
        update Total
      </button>
      <br />
      Total is :{total}
     </div>
    
  )
}

export default App
