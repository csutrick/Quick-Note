import React from "react";

const CharacterCounter = ({ noteContent }) => {
    const characterCount = noteContent.length;
    const textColor = characterCount >= 200 ? 'text-red-500' : 'text-gray-500';

    return (
        <div className='flex ml-1 lg:mr-1 flex-row flex-nowrap items-center justify-center'>
            <p className={`font-bold text-xs whitespace-nowrap ${textColor}`}>
                {characterCount}/200 Characters
            </p>
        </div>
    )
};

export default CharacterCounter;