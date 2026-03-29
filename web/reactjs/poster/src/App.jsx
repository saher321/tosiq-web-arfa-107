import React from 'react'
import { Route, Routes } from 'react-router'
import Index from './pages/home/Index'
import Posts from './pages/posts/Posts'
import About from './pages/about/About'
import PostDetails from './pages/posts/PostDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<PostDetails />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
  )
}

export default App
