import React, { useState} from "react";

const Note = ({ note, inputRef }) => {
    const [noteTitle, setNoteTitle] = useState(note.title);

    const handleTitleChange = (event) => {
        // Update the local state
        setNoteTitle(event.target.value);
    };

    return (
        <div
        className='bg-green-300 relative h-32 flex flex-col items-start rounded-lg drop-shadow-md'>
            {/* NOTE title */}
            <input type="text" placeholder="Note Name" ref={inputRef}
            value={noteTitle} onChange={handleTitleChange}
            className='w-full h-8 rounded-t-lg pl-1'/>
            {/* NOTE id */}
            <h3 className='absolute bottom-0 pb-1 pl-1 text-xs font-bold text-gray-400 text-left'>{note.id}</h3>
        </div>
    )
};

export default Note;