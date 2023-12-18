import React from "react";

const CharacterCounter = ({ noteContent }) => {
    const characterCount = noteContent.length;
    const textColor = characterCount >= 200 ? 'text-red-500' : 'text-gray-500';

    return (
        <div className='absolute bottom-0 left-0 flex flex-row flex-nowrap items-center justify-center'>
            <p className={`font-bold text-sm pb-1 pl-1 ${textColor}`}>
                {characterCount}/200 Characters
            </p>
        </div>
    )
};

export default CharacterCounter;