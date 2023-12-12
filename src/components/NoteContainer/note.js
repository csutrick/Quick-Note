import React from "react";

const Note = ({ note }) => {
    return (
        <div className='bg-green-300 h-32 flex flex-col items-center justify-center rounded-lg p-2'>
            <h3 className='text-2xl font-bold text-black text-center underline'>Title: {note.title}</h3>
            <h3 className='text-lg font-bold text-black text-center'>{note.id}</h3>
        </div>
    )
};

export default Note;