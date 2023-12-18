import React, { useState, useEffect } from "react";

import CharacterCounter from "./characterCounter.js";

import saveTitle from "../../util/saveTitle.js";
import saveContent from "../../util/saveContent.js";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdColorFilter } from "react-icons/io";

const Note = ({ note, setAllNotes }) => {
    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteContent, setNoteContent] = useState(note.content);

    const handleTitleChange = (event) => {
        // Update the local state
        setNoteTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        // Update the local state if true
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

    {/* Change Note Color */}
    const handleColorButton = () => {
        console.log("Color Button pressed");
    };

    return (
        <div className='bg-blue-300 relative flex flex-col h-40 items-start rounded-lg transition-all duration-200 ease-in-out
        drop-shadow-md hover:drop-shadow-lg active:drop-shadow-xl hover:scale-[1.01] active:scale-[1.02]'>
            {/* NOTE title */}
            <div className='w-full flex flex-row flex-nowrap items-center bg-gray-100 rounded-t-lg'>
                <input type="text" placeholder="Note Name"
                value={noteTitle} onChange={handleTitleChange}
                className='w-full h-8 rounded-tl-lg pl-1 bg-transparent outline-none'/>
                <IoMdColorFilter onClick={handleColorButton}
                className='mx-1 text-3xl text-gray-500 hover:text-black hover:scale-110 active:scale-125
                transition-all duration-150 ease-in-out'/>
                <FaRegTrashAlt onClick={handleDeleteButton}
                className='mx-1 text-2xl text-gray-500 hover:text-red-500 hover:scale-110 active:scale-125
                transition-all duration-150 ease-in-out'/>
            </div>
            <textarea type="text" placeholder="Note Content"
            value={noteContent} onChange={handleContentChange}
            className='bg-blue-300 resize-none w-full h-full rounded-b-lg outline-none p-1'/>
            <CharacterCounter noteContent={noteContent} />
        </div>
    )
};

export default Note;