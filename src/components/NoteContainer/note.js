import React, { useState} from "react";

import { FaRegTrashAlt } from "react-icons/fa";

const Note = ({ inputRef, note, setAllNotes }) => {
    const [noteTitle, setNoteTitle] = useState(note.title);

    const handleTitleChange = (event) => {
        // Update the local state
        setNoteTitle(event.target.value);
    };

    const handleDeleteButton = () => {
        let noteIdToDelete = note.id;

        const getStorageNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const updatedNotes = getStorageNotes.filter((note) => note.id !== noteIdToDelete);

        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setAllNotes(updatedNotes)
    };

    return (
        <div
        className='bg-green-300 relative h-32 flex flex-col items-start rounded-lg drop-shadow-md'>
            {/* NOTE title */}
            <div className='w-full flex flex-row flex-nowrap items-center bg-white rounded-t-lg'>
                <input type="text" placeholder="Note Name" ref={inputRef}
                value={noteTitle} onChange={handleTitleChange}
                className='w-full h-8 rounded-tl-lg pl-1 bg-transparent outline-none'/>
                <FaRegTrashAlt onClick={handleDeleteButton}
                className='text-2xl mx-1 text-gray-200 hover:text-red-500 hover:scale-105'/>
            </div>
            {/* NOTE id */}
            <h3 className='absolute bottom-0 pb-1 pl-1 text-xs font-bold text-gray-400 text-left'>{note.id}</h3>
        </div>
    )
};

export default Note;