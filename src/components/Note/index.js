import React, { useState, useEffect } from "react";

import CharacterCounter from "./CharacterCounter.js";
import ColorSwatches from "./ColorSwatches.js"

import saveTitle from "../../util/saveTitle.js";
import saveContent from "../../util/saveContent.js";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdColorFilter } from "react-icons/io";
import deleteNote from "../../util/deleteNote.js";

const Note = ({ note, setAllNotes }) => {
    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteContent, setNoteContent] = useState(note.content);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;

        if (newTitle.length <= 32) {
            // Update the local state
            setNoteTitle(event.target.value);
        } else if (event.nativeEvent.inputType === 'deleteContentBackward') {
            // Allow backspace/delete to remove characters
            setNoteTitle(newTitle.slice(0, 32));
        }
        // Ignore other input events if the limit is reached
    };

    const handleContentChange = (event) => {
        const newContent = event.target.value;

        if (newContent.length <= 200) {
             // Update the local state if true
            setNoteContent(event.target.value);
        } else if (event.nativeEvent.inputType === 'deleteContentBackward') {
            // Allow backspace/delete to remove characters
            setNoteContent(newContent.slice(0, 200));
        }
        // Ignore other input events if the limit is reached
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
        const updatedNotes = deleteNote(note.id);
        setAllNotes(updatedNotes);
    };

    {/* Change Note Color */}
    const handleColorButton = () => {
        setIsColorPickerOpen(prevState => !prevState);
    };

    return (
        <div className=''>
            {!isColorPickerOpen ? (
                // Actual User Note
                <div className='relative flex flex-col h-32'>
                    {/* NOTE title */}
                    <div className='w-full flex flex-row flex-nowrap items-center rounded-t-lg bg-gray-100'>
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
                    {/* NOTE content */}
                    <textarea type="text" placeholder="Note Content"
                    value={noteContent} onChange={handleContentChange}
                    className='bg-blue-300 resize-none w-full h-full p-1 rounded-b-lg outline-none'/>
                    {/* NOTE character counter */}
                    <CharacterCounter noteContent={noteContent} />
                </div>
            ) : (
                // Color picker for note color
                <ColorSwatches handleColorButton={handleColorButton}/>
            )}
        </div>
    )
};

export default Note;