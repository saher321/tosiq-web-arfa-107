import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppLayout from '../../layouts/AppLayout';
import NoteItem from '../../components/notes/NoteItem';
import { NOTE_DELETE_URL, NOTES_URL } from '../../utils/api.js';
import * as motion from 'motion/react-client';
import toast from 'react-hot-toast';
const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const square = {
    width: "100%",
    height: "100%",
  };

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

  const handleDelete = async (data) => {

    if (!confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      const response = await axios.delete(NOTE_DELETE_URL + "/" + data._id)
      if (response.data.status == true) {
        toast.success(response.data.message)
        await getNotes();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }

  return (
    <AppLayout>
      <div>
        <h2 className="text-4xl font-bold mb-[50px]">Notes</h2>

        <div className="grid grid-cols-12 gap-4">
          {notes.length == 0 ? (
            <div className="col-span-12">No records were found</div>
          ) : (
            notes.map((item, i) => {
              return (
                <div className="col-span-3" key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                    }}
                    style={square}
                  >
                    <NoteItem item={item} handleDelete={() => handleDelete(item)} />
                  </motion.div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default NotesList;
