import React from "react";

import addNote from "../../util/createNewNote";

import { MdNoteAdd } from "react-icons/md";
import { TfiLayoutColumn2Alt, TfiLayoutColumn3Alt } from "react-icons/tfi";

const Navbar = ({ allNotes, setAllNotes, columns, setColumns }) => {
    {/* Add note to local storage */}
    const createNewNote = () => {
        const newNote = addNote();
        setAllNotes(prevNotes => [newNote, ...prevNotes]);
    };

    const toggleColumns = () => {
        setColumns(!columns);
    };

    return (
        <nav className='z-40 flex flex-col justify-center items-center py-2'>
            <h1 className='text-4xl text-gray-600 font-bold tracking-widest drop-shadow-lg'>Quick Notes</h1>
            {/* Hold user buttons */}
            <div className='bg-gray-400 flex flex-row justify-center items-center mt-2 mb-1 px-8 py-1 rounded-lg drop-shadow-md'>
                {/* Change format of user Note */}
                {columns ? (
                    <button onClick={toggleColumns}
                    className='mr-2 transition-all duration-100 ease-in-out drop-shadow-md hover:drop-shadow-lg hover:scale-[1.1] active:scale-[1.35]'>
                        <TfiLayoutColumn2Alt className='text-white text-3xl'/>
                    </button>
                ) : (
                    <button onClick={toggleColumns}
                    className='mr-2 transition-all duration-100 ease-in-out drop-shadow-md hover:drop-shadow-lg hover:scale-[1.1] active:scale-[1.35]'>
                        <TfiLayoutColumn3Alt className='text-white text-3xl'/>
                    </button>
                )}
                {/* Create new note */}
                <button onClick={createNewNote}
                className='ml-2 transition-all duration-100 ease-in-out drop-shadow-md hover:drop-shadow-lg hover:scale-[1.1] active:scale-[1.35]'>
                    <MdNoteAdd className='text-white text-4xl'/>
                </button>
            </div>
            <h2 className='text-sm text-gray-600 font-bold tracking-widest drop-shadow-lg'>
                {`${allNotes.length} ${allNotes.length === 1 ? 'Note' : 'Notes'} Found`}
            </h2>
        </nav>
    )
};

export default Navbar;