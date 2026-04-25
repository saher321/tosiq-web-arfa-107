import axios from 'axios';
import React, { useEffect, useState } from 'react'

const notes_url = "http://localhost:5000/notes";
const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const response = await axios.get(notes_url)
      if (response.data.status == true) {
        setNotes(response.data.notes)
      } else {
        console.log("Failed to fetch data")
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }

  useEffect(() => {
    getNotes();
  }, [])

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((item, i) => {
          return (
            <li key={i}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.content}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
