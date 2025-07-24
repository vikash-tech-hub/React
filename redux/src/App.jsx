
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './features/Counter/counterSlice';
import { decrement,reset,incrementByAmount } from './features/Counter/counterSlice';
import { useState } from 'react';

function App() {
const count = useSelector((state) => state.counter.value);
const [amount ,setAmount]=useState(0)
const dispatch=useDispatch();
function handleincrement(){

  dispatch(increment())
}
function handledecrement(){
    dispatch(decrement())

}
function handlereset(){
  dispatch(reset())
}
function amountclick(){
  dispatch(incrementByAmount(amount))
}
  return (
    <div>
      <button onClick={handleincrement}>
+
      </button>
<p>count:{count}</p>
      <button onClick={handledecrement}>
-
      </button>
<br />
<br />
      <button onClick={handlereset}>

reset
      </button>
      <br />
      <br />
      <input type="number"
      value={amount}
      placeholder='enter number'
      onChange={(e) => setAmount(e.target.value)} />
    <br />
    <br />
     <button onClick={amountclick}>

inc by amount
      </button>
    </div>
  )
}

export default App
