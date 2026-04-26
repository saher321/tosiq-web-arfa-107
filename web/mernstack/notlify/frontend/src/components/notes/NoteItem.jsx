import React from 'react';

const NoteItem = ({ item }) => {
  return (
    <div className='p-4 rounded-lg' style={{backgroundColor: item.color}}>
      <strong>{item.title}</strong>
      <p>{item.content}</p>
    </div>
  );
};

export default NoteItem;
