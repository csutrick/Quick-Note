import { v4 as uuidv4 } from 'uuid';

const saveTitle = (activeNote) => {
    console.log(`Adding ${activeNote.title} to notes`)

    // Check if the note object has an ID
    if (!activeNote.id) {
        const id = uuidv4();
        activeNote.id = id;

        console.log(`CREATING NEW note ${activeNote.title} with ID: ${id}`);
    } else {
        console.log(`USING EXISTING note ${activeNote.title} with ID: ${activeNote.id}`);
    }

    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    storedNotes.push(activeNote);
    localStorage.setItem('notes', JSON.stringify(storedNotes));
};

export default saveTitle;