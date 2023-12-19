import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import Note from "./components/Note/index.js";

function App() {
  {/* Stores every user note */}
  const [allNotes, setAllNotes] = useState([]);
  const [columns, setColumns] = useState(true);
  const columnNumber = columns === true ? 'grid-cols-2' : 'grid-cols-3';

  {/* When component mounts, get localStorage notes */}
  useEffect(() => {
    console.log("Getting user Notes!");
    const userNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setAllNotes(userNotes);
  }, []);

  return (
    <main className='h-screen flex flex-col'>
      <Navbar allNotes={allNotes} setAllNotes={setAllNotes} columns={columns} setColumns={setColumns}/>
      {/* Note Container */}
      <div className='w-full flex flex-col justify-center items-center'>
        {allNotes.length === 0 ? ( // If theres notes or not
            <div className=''>
              <p className='bg-blue-300 text-2xl font-bold'>No Notes</p>
            </div>
          ) : (
            <div className={`w-full grid ${columnNumber} grid-flow-row auto-rows-auto gap-4 p-4`}>
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
