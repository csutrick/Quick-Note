import React from "react";

import addNote from "../../util/createNewNote";

import { MdNoteAdd } from "react-icons/md";

const NoNotes = ({ setAllNotes }) => {
    {/* Add note to local storage */}
    const createNewNote = () => {
        const newNote = addNote();
        setAllNotes(prevNotes => [newNote, ...prevNotes]);
        console.log("New note added");
    };

    return (
        <div className='h-60 flex flex-col items-center justify-center'>
            <h3 className='text-sm font-bold text-gray-500 drop-shadow-md'>No Notes Found</h3>
            <div className='flex flex-row flex-nowrap items-center justify-center group'>
                <h3 className='text-3xl font-bold text-gray-500 drop-shadow-md group-hover:tracking-wider transition-all duration-100 ease-in-out'>Add</h3>
                <MdNoteAdd onClick={createNewNote}
                className='mx-1 text-4xl text-gray-500 transition-all duration-100 ease-in-out drop-shadow-md hover:drop-shadow-lg hover:scale-[1.1] active:scale-[1.35]'/>
                <h3 className='text-3xl font-bold text-gray-500 drop-shadow-md group-hover:tracking-wider transition-all duration-100 ease-in-out'>Note</h3>
            </div>
        </div>
    )
};

export default NoNotes;