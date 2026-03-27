import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <h2>
        {children}
      </h2>
      <Footer />
    </div>
  )
}

export default WebLayout
