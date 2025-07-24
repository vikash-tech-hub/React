import React from 'react'

const Card = (props) => {
  return (
    <div>
      {props.name}
      {/* use the children */}
      {props.children}
    </div>
  )
}

export default Card
