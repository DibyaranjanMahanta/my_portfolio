import React from 'react'
import '../Styles/Button.css'

const Button = ({text, onClick, type = 'button'}) => {
  return (
    <button className='common-btn' type={type} onClick={onClick}>{text} </button>
  )
}

export default Button