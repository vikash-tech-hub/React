import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input 
        type="text" 
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  )
}

export default Card
