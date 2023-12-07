import { v4 as uuidv4 } from 'uuid';

const saveTitle = (title) => {
    const id = uuidv4();
    
    console.log(`Note Title: ${title}`)
};

export default saveTitle;