import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      {/* Home | About us */}
      <nav> 
        <Link to={'/'}>Home</Link> {" | "}
        <Link to={'/contact-us'}>Contact us</Link> {" | "}
        <Link to={'/about-us'}>About us</Link>
      </nav>
    </div>
  )
}

export default Navbar
