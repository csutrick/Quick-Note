import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import Note from "./components/Note/index.js";

import addNote from "./util/createNewNote.js";

function App() {
  {/* Stores every user note */}
  const [allNotes, setAllNotes] = useState([]);

  {/* When component mounts, get localStorage notes */}
  useEffect(() => {
    console.log("Getting user Notes!");
    const userNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setAllNotes(userNotes);
  }, []);

  {/* Add note to local storage */}
  const createNewNote = () => {
    const newNote = addNote();
    setAllNotes(prevNotes => [newNote, ...prevNotes]);
    console.log("New note added");
  };

  return (
    <main>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center my-4'>
        <button onClick={createNewNote}
        className='my-2 bg-green-400 px-4 py-1'>
          Add Note
        </button>
        {/* Note Container */}
        {allNotes.length === 0 ? ( // If theres notes or not
            <div className=''>
              <p className='bg-blue-300 text-2xl font-bold'>No Notes</p>
            </div>
          ) : (
            <div className='w-full grid grid-cols-2 grid-flow-row auto-rows-auto gap-4 p-4'>
              {allNotes.map((note) => (
                <Note key={note.id} note={note}
                setAllNotes={setAllNotes} />
              ))}
            </div>
          )}
      </div>
      <Footer />
    </main>
  );
};

export default App;
