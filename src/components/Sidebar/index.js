import React from "react";

const Sidebar = ({ setNote, note }) => {
    const handleTitleChange = (e) => {
        setNote({ ...note, title: e.target.value });
    };

    return (
        <section className='bg-green-300 h-full w-1/4 flex flex-col justify-center items-center p-2'>
            <button className='w-full h-10'>
                <input type="text" placeholder="Note Title"
                value={note.title} onChange={handleTitleChange}
                className='w-full h-full text-center text-2xl text-black rounded-lg hover:bg-blue-200'/>
            </button>
        </section>
    )
};

export default Sidebar;