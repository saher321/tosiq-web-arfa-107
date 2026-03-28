import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WebLayout = ({ children }) => {
  return (
    <>
    <Navbar />
        <div className='mx-auto my-5 max-w-4xl'>
            { children }
        </div>
    <Footer />
    </>
  )
}

export default WebLayout
