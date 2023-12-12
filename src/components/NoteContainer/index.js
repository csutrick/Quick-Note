import React from "react";

import Note from './note.js'

const NoteContainer = ({ allNotes, setAllNotes }) => {
    return (
        <section className='bg-gray-100 w-3/4 h-fit p-4 grid grid-cols-2 grid-flow-row auto-rows-auto gap-4 
        rounded-2xl drop-shadow-md'>
            {/* Render the Users notes */}
            {allNotes.map((note) => (
                <Note key={note.id} note={note}/>
            ))}
        </section>
    )
};

export default NoteContainer;