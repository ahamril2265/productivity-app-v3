import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNoteText } from '../redux/slices/notesSlice';
import './Notes.css';

function Notes() {
  const text = useSelector((state) => state.notes.text);
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem('myNote');
    if (saved) dispatch(setNoteText(saved));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('myNote', text);
  }, [text]);

  return (
    <div className="notes-container">
      <h2>📝 Notes</h2>
      <textarea
        value={text}
        onChange={(e) => dispatch(setNoteText(e.target.value))}
        placeholder="Type your notes here..."
      ></textarea>
      <p className="autosave-hint">✨ Your notes are automatically saved.</p>
    </div>
  );
}

export default Notes;
