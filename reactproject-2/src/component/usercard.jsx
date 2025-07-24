import React from 'react'
import "./usercard.css"
const usercard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt="" />
      <p  id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default usercard
