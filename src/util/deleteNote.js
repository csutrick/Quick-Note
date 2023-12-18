const deleteNote = (Id) => {
    console.log(`deleting note with ID: ${Id}`);

    const getStorageNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = getStorageNotes.filter((note) => note.id !== Id);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    return updatedNotes;
};

export default deleteNote;