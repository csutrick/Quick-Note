const saveContent = (Id, content) => {
    const existingNotes = JSON.parse(localStorage.getItem('notes'));

    // Find the index of the note with the given ID
    const noteIndex = existingNotes.findIndex((note) => note.id === Id);

    // Update the content of the note at the found index
    const updatedNote = Object.assign({}, existingNotes[noteIndex], { content });

    // Create the updated notes array
    const updatedNotes = [
        ...existingNotes.slice(0, noteIndex),
        updatedNote,
        ...existingNotes.slice(noteIndex + 1),
    ];

    // Save the updated array back to localStorage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
};

export default saveContent;