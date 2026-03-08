import React from 'react'

const Button = ({ title, func }) => {
  return (
    <button className='my-1 py-[3px] px-[6px] text-xs bg-blue-500 text-white rounded shadow' 
    onClick={func}>
      { title }
    </button>
  )
}

export default Button

// npm i     => node_modules