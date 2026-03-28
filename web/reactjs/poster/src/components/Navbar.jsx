import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about-us">About</Link>
      </nav>
    </div>
  )
}

export default Navbar
