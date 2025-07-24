import { useState } from 'react' // ✅ you missed this line
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoutBtn from './component/LogoutBtn'
import Loginbtn from './component/Loginbtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
// using if else
  // if (isLoggedIn) {
  //   return (
  //     <LogoutBtn />
  //   )
  // } else {
  //   return (
  //     <Loginbtn />
  //   )
  // }
  // using ternnery operator
  return(
    <div>
      {isLoggedIn?<LogoutBtn />:<Loginbtn />}
    </div>
    // logical operaot ->isLogged && Logoutbtn 
    // early return  if!isLoggedIn->Loginbtn
    
  )
}

export default App
