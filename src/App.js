import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/index.js";
import SearchBar from "./components/SearchBar/index.js";
import NoteContainer from "./components/NoteContainer/index.js"
import Footer from "./components/Footer/index.js";

function App() {
  {/* Stores every user note */}
  const [allNotes, setAllNotes] = useState([]);

  {/* When component mounts, get localStorage notes */}
  useEffect(() => {
    console.log("Getting user Notes!");
    const userNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setAllNotes(userNotes);
  }, []);

  return (
    <main>
      <Navbar />
      <div className='w-full flex flex-col justify-center items-center my-4'>
        {/* Search user notes */}
        <SearchBar />
        {/* Renders user notes */}
        <NoteContainer allNotes={allNotes} setAllNotes={setAllNotes}/>
      </div>
      <Footer />
    </main>
  );
};

export default App;
