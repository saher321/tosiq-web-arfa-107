import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// react-router :: pkg for nagivations

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
  )
}

export default App
