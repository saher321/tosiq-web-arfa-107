import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='grid place-items-center m-3'>
      <nav className='p-3 flex gap-3 shadow rounded-lg bg-white w-fit'>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about-us">About</Link>
      </nav>
    </div>
  )
}

export default Navbar
