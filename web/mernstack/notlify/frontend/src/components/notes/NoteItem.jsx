import React from 'react';
import { GoPencil, GoTrash } from 'react-icons/go';
import { Link } from 'react-router';
import { NOTE_DELETE_URL } from '../../utils/api';
import toast from 'react-hot-toast';
import axios from 'axios';
const NoteItem = ({ item, handleDelete }) => {

  return (
    <div className='p-4 rounded-3xl' style={{backgroundColor: item.color}}>
      <div className='min-h-48'>
        <strong>{item.title}</strong>
        <p>{item.content}</p>
      </div>
      <div className="flex items-center gap-3">
        <Link className='p-2 shadow cursor-pointer bg-white rounded-full'>
          <GoPencil size={20} />
        </Link>

        <button onClick={() => handleDelete(item)} className='p-2 shadow cursor-pointer bg-white rounded-full'>
          <GoTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
