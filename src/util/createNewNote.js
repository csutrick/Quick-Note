import { v4 as uuidv4 } from 'uuid';

const createNewNote = () => {
    console.log("Adding new note");
    // Get existing notes array from localStorage
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Create new note with new UUID
    const newNote = {
        id: uuidv4(),
        title: '',
        content: '',
    };

    // Add new note to beginning of the existing array
    const updatedNotes = [newNote, ...existingNotes];

    // Save the updated array back to localStorage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    
    return newNote;
};

export default createNewNote;