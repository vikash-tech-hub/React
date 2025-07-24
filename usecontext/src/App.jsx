import { createContext, useState } from 'react'
import './App.css'
import ChildA from './component/ChildA'

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ChildA/>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
