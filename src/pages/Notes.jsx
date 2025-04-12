import React, { useState, useEffect } from 'react';
import './Notes.css';

function Notes() {
  const [text, setText] = useState('');

  // Load saved note on mount
  useEffect(() => {
    const savedNote = localStorage.getItem('myNote');
    if (savedNote) {
      setText(savedNote);
    }
  }, []);

  // Save note on change
  useEffect(() => {
    localStorage.setItem('myNote', text);
  }, [text]);

  return (
    <div className="notes-container">
      <h2>📝 Notes</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your notes here..."
      ></textarea>
      <p className="autosave-hint">✨ Your notes are automatically saved.</p>
    </div>
  );
}

export default Notes;
