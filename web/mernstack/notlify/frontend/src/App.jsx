import React from 'react'
import { Routes, Route } from 'react-router'
import NotesList from './pages/notes/NotesList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NotesList />}/>
    </Routes>
  )
}

export default App