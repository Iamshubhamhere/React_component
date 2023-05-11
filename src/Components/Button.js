import React from 'react'

function Button(props) {
  return (
    <>
    <button className={props.type}>{props.text}</button>
  </>
  )
}

export default Button