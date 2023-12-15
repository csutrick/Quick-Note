import React, { useState, useEffect } from "react";

import saveTitle from "../../util/saveTitle.js";
import saveContent from "../../util/saveContent.js";

import { FaRegTrashAlt } from "react-icons/fa";

const Note = ({ note, setAllNotes }) => {
    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteContent, setNoteContent] = useState(note.content);

    const handleTitleChange = (event) => {
        // Update the local state
        setNoteTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        // Update the local state
        setNoteContent(event.target.value);
    };

    {/* When noteContent changes save content */}
    useEffect(() => {
        saveContent(note.id, noteContent);
    }, [noteContent]);

    {/* When noteTitle changes save title */}
    useEffect(() => {
        saveTitle(note.id, noteTitle);
    }, [noteTitle]);

    {/* Delete Current Note */}
    const handleDeleteButton = () => {
        let noteIdToDelete = note.id;

        const getStorageNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const updatedNotes = getStorageNotes.filter((note) => note.id !== noteIdToDelete);

        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        setAllNotes(updatedNotes);
    };

    return (
        <div
        className='bg-blue-300 relative h-32 flex flex-col items-start rounded-lg drop-shadow-md'>
            {/* NOTE title */}
            <div className='w-full flex flex-row flex-nowrap items-center bg-white rounded-t-lg'>
                <input type="text" placeholder="Note Name"
                value={noteTitle} onChange={handleTitleChange}
                className='w-full h-8 rounded-tl-lg pl-1 bg-transparent outline-none'/>
                <FaRegTrashAlt onClick={handleDeleteButton}
                className='text-2xl mx-1 text-gray-200 hover:text-red-500 hover:scale-105'/>
            </div>
            <textarea type="text" placeholder="Note Content"
            value={noteContent} onChange={handleContentChange}
            className='bg-transparent resize-none w-full h-full rounded-b-lg p-1 outline-none'/>
            {/* NOTE id */}
            <h3 className='absolute bottom-0 pb-1 pl-1 text-xs font-bold text-gray-400 text-left'>{note.id}</h3>
        </div>
    )
};

export default Note;