import React from "react";

import colorHexCodes from './colorHexCodes';

import { IoMdClose } from "react-icons/io";

const ColorSwatches = ({ handleColorButton, noteColor, setNoteColor }) => {
    const swatchClick = (hexCode) => {
        console.log("Changing Color too:", hexCode);
        setNoteColor(hexCode);
    }

    return (
        <div className='relative bg-gray-100 flex flex-col justify-center items-center min-h-32 rounded-lg p-2'>
            <h2 className='underline text-gray-500 text-xl font-bold'>Select Color:</h2>
            {/* Color swatches */}
            <div className='flex flex-row flex-wrap justify-evenly'>
                {colorHexCodes.map((hexCode, index) => (
                    <div key={index} onClick={() => swatchClick(hexCode)}
                    className={`h-8 w-8 mx-2 my-1 rounded-md ${noteColor === hexCode ? 'border-gray-500 border-4 active:border-0' : ''}
                    hover:scale-105 active:scale-110 transition-all duration-100 ease-in-out`}
                    style={{ backgroundColor: hexCode }}>
                    </div>
                ))}
            </div>
            {/* Close button */}
            <button className='absolute top-0 right-0'>
                <IoMdClose onClick={handleColorButton}
                className='text-3xl text-gray-500 hover:text-black hover:scale-110 active:scale-125
                transition-all duration-150 ease-in-out'/>
            </button>
        </div>
    )
};

export default ColorSwatches;