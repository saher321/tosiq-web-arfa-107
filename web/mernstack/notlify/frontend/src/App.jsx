import React from 'react'
import { Routes, Route } from 'react-router'
import NotesList from './pages/notes/NotesList'
import AddNote from './pages/notes/AddNote'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NotesList />}/>
      <Route path='/notes/add' element={<AddNote />}/>
      <Route path='/' element={<NotesList />}/>
    </Routes>
  )
}

export default App