import React from "react";

import addNote from "../../util/createNewNote";

import { MdNoteAdd } from "react-icons/md";

const Navbar = ({ setAllNotes }) => {

    {/* Add note to local storage */}
    const createNewNote = () => {
        const newNote = addNote();
        setAllNotes(prevNotes => [newNote, ...prevNotes]);
        console.log("New note added");
    };

    return (
        <nav className='z-40 bg-gray-400 flex flex-col justify-center items-center py-1'>
            <h1 className='text-sm text-gray-600 font-bold tracking-widest'>Quick Notes</h1>
            {/* Hold user buttons */}
            <div className='flex flex-row justify-center items-center mt-1 mb-2'>
                {/* Change format of user Note */}
                <h2 className='mr-2 font-bold text-white'>Columns</h2>
                {/* Create new note */}
                <button onClick={createNewNote}
                className='transition-all duration-100 ease-in-out
                hover:scale-[1.1] active:scale-[1.35]'>
                    <MdNoteAdd className='text-white text-4xl'/>
                </button>
                {/* Toggle light/dark mode */}
                <h2 className='ml-2 font-bold text-white'>Theme</h2>
            </div>
            <h2 className='text-sm text-gray-600 font-bold tracking-widest'># Notes</h2>
        </nav>
    )
};

export default Navbar;