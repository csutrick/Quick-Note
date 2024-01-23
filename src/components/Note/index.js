import React, { useState, useEffect } from "react";

import ColorSwatches from "./ColorSwatches.js";
import CharacterCounter from "./characterCounter.js";

import saveTitle from "../../util/saveTitle.js";
import saveContent from "../../util/saveContent.js";
import saveColor from "../../util/saveColor.js";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdColorFilter } from "react-icons/io";
import deleteNote from "../../util/deleteNote.js";

const Note = ({ note, setAllNotes }) => {
    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteContent, setNoteContent] = useState(note.content);
    const [noteColor, setNoteColor] = useState(note.color);
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

    {/* When noteColor changes save color */}
    useEffect(() => {
        saveColor(note.id, noteColor);
    }, [noteColor]);

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
                <div className='flex flex-col h-72 sm:h-60 md:h-52 lg:h-36 drop-shadow-md hover:scale-[1.01] transition-all duration-100 ease-in'>
                    {/* NOTE title */}
                    <div className='w-full flex flex-row flex-wrap lg:flex-nowrap items-center rounded-t-lg bg-gray-100
                    border-b-2 border-gray-500'>
                        <input type="text" placeholder="Note Name"
                        value={noteTitle} onChange={handleTitleChange}
                        className='w-full h-8 rounded-tl-lg pl-1 bg-transparent text-sm sm:text-base outline-none justify-self-start text-center lg:text-left'/>
                        <div className='w-full lg:w-min flex flex-row flex-nowrap items-center justify-between border-dotted border-gray-500 border-t-2 lg:border-t-0'>
                            <CharacterCounter noteContent={noteContent}/>
                            <div className='flex flex-row items-center justify-center flex-nowrap mr-1'>
                                <IoMdColorFilter onClick={handleColorButton}
                                className='mr-0 sm:mr-1 text-2xl sm:text-3xl text-gray-500 hover:text-black hover:scale-110 active:scale-125
                                transition-all duration-150 ease-in-out'/>
                                <FaRegTrashAlt onClick={handleDeleteButton}
                                className='ml-1 text-xl sm:text-2xl text-gray-500 hover:text-red-500 hover:scale-110 active:scale-125
                                transition-all duration-150 ease-in-out'/>
                            </div>
                        </div>
                    </div>
                    {/* NOTE content */}
                    <textarea type="text" placeholder="Note Content"
                    value={noteContent} onChange={handleContentChange} style={{ backgroundColor: noteColor }}
                    className='resize-none w-full h-full p-1 rounded-b-lg outline-none text-sm sm:text-base'/>
                </div>
            ) : (
                // Color picker for note color
                <ColorSwatches 
                    handleColorButton={handleColorButton}
                    noteColor={noteColor}
                    setNoteColor={setNoteColor}
                />
            )}
        </div>
    )
};

export default Note;