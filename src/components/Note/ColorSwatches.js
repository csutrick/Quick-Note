import React from "react";

import swatchColors from './colors.json';

import { IoMdClose } from "react-icons/io";

const ColorSwatches = ({ handleColorButton }) => {
    return (
        <div className='relative bg-blue-300 flex flex-col justify-center items-center min-h-32 rounded-lg p-2'>
            <h2 className='underline text-white text-xl font-bold'>Select Color:</h2>
            {/* Color swatches */}
            <div className='flex flex-row flex-wrap justify-evenly'>
                {swatchColors.map((color, index) => (
                    <div key={index}
                    className='h-8 w-8 mx-2 my-1 rounded-md'
                    style={{ backgroundColor: color.hex }}>
                    
                    </div>
                ))}
            </div>
            <button className='absolute top-0 right-0'>
                <IoMdClose onClick={handleColorButton}
                className='text-3xl text-gray-500 hover:text-black hover:scale-110 active:scale-125
                transition-all duration-150 ease-in-out'/>
            </button>
        </div>
    )
};

export default ColorSwatches;