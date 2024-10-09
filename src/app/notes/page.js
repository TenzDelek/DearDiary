/*export default function Notes() {
    return (
      <div>
        <h1>Notes Page</h1>
      </div>
    );
}*/
'use client'; 
import { useState } from 'react';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { text: note, id: Date.now() }]);
      setNote("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        <textarea
          className="w-full p-2 border rounded mb-4"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note here..."
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={addNote}
        >
          Add Note
        </button>
        <div className="mt-4">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NoteItem({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(note.text);

  const saveEdit = () => {
    setIsEditing(false);
    note.text = editText;
  };

  return (
    <div className="bg-gray-200 p-2 rounded mb-2">
      {isEditing ? (
        <div>
          <textarea
            className="w-full p-2 border rounded mb-2"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></textarea>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
            onClick={saveEdit}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>{note.text}</p>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mt-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
  
