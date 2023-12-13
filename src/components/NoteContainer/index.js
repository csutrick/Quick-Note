import React, { useRef, useEffect } from "react";

import Note from './note.js'
import createNewNote from "../../util/createNewNote.js";

import { MdNoteAdd } from "react-icons/md";

const NoteContainer = ({ allNotes, setAllNotes }) => {
    const inputRef = useRef(null);

    const addNote = () => {
        console.log('Note added!');

        // Create new note, add it to front of allNotes array
        const newNote = createNewNote();
        setAllNotes((prevNotes) => [newNote, ...prevNotes]);
    };

    useEffect(() => {
        // Focus on input field after the component renders
        if (inputRef.current) {
          inputRef.current.focus();
        }
    }, [allNotes]); // Run this effect when allNotes changes

    return (
        <section className='bg-gray-100 w-3/4 h-fit flex flex-col 
        rounded-2xl drop-shadow-md'>
            {/* Add Note */}
            <div className='bg-gray-500 flex flex-row flex-nowrap rounded-t-2xl p-3 pb-1'>
                <button onClick={addNote}
                className=''>
                    <MdNoteAdd className='text-white text-4xl hover:scale-105'/>
                </button>
            </div>
            {/* Render the Users notes */}
            <div className='grid grid-cols-2 grid-flow-row auto-rows-auto gap-4 p-4'>
                {allNotes.map((note) => (
                    <Note key={note.id} inputRef={inputRef}
                    note={note} setAllNotes={setAllNotes} />
                ))}
            </div>
        </section>
    )
};

export default NoteContainer;