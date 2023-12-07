import React, { useState, useEffect } from "react";

import saveTitle from "./util/saveTitle";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  const [note, setNote] = useState({ id: '', title: '', content: '' });

  // Runs every time the title changes
  useEffect(() => {
    console.log('Title changed n saved:', note.title);
  }, [note.title]);

  // Runs every time the content changes
  useEffect(() => {
    console.log(`${note.title} content has changed`);
  }, [note.content]);

  return (
    <main>
      <Navbar />
      <div className='h-[200px] w-full flex flex-row justify-center items-center'>
        <Sidebar setNote={setNote} note={note} />
        <Notes setNote={setNote} note={note} />
      </div>
      <Footer />
    </main>
  );
};

export default App;
