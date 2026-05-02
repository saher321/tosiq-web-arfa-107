import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppLayout from '../../layouts/AppLayout';
import NoteItem from '../../components/notes/NoteItem';
import { NOTES_URL } from '../../utils/api.js';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const response = await axios.get(NOTES_URL);
      if (response.data.status == true) {
        setNotes(response.data.notes);
      } else {
        console.log('Failed to fetch data');
      }
    } catch (error) {
      console.log('ERR: ', error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <AppLayout>
      <div>
        <h2 className='text-4xl font-bold mb-[50px]'>Notes</h2>
        <div className='grid grid-cols-12 gap-4'>
          {notes.map((item, i) => {
            return (
              <div className='col-span-3' key={i}>
                <NoteItem item={item}/>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default NotesList;
