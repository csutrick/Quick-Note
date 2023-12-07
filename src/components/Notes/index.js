import React from "react";

const Notes = ({ setNote, note }) => {
    const handleTitleChange = (e) => {
        setNote({ ...note, title: e.target.value });
    };

    const handleContentChange = (e) => {
        setNote({ ...note, content: e.target.value });
    };
      
    return (
        <section className='bg-orange-300 h-full w-full flex flex-col group'>
            <input type="text" placeholder="Note Title"
            value={note.title} onChange={handleTitleChange}
            className='bg-gray-200 w-full h-12 p-1 text-center text-4xl outline-none'/>
            <textarea type="text" placeholder="Whats your note?"
            value={note.content} onChange={handleContentChange}
            className='resize-none w-full h-full p-1 text-lg outline-none '/>
        </section>
    )
};

export default Notes;