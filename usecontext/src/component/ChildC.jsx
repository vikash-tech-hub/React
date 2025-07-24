import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
