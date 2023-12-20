import React from "react";

import { FaGithub, FaFileCode, FaPen } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-400 mt-auto flex flex-col justify-center items-center pt-4 pb-16'>
                <FaPen className='text-white text-2xl drop-shadow-lg'/>
                <h2 className='text-3xl text-white font-bold tracking-widest drop-shadow-lg'>Quick Notes</h2>
                <div className='mb-2 mt-6 flex flex-row flex-nowrap'>
                    <div className='flex flex-col items-center mr-4'>
                        <a href="https://github.com/csutrick/Quick-Note" target="_blank" rel="noopener noreferrer"
                        className='bg-white flex justify-center w-[100%] px-10 py-1 rounded-lg text-4xl drop-shadow-md hover:drop-shadow-lg active:drop-shadow-xl
                        hover:scale-105 active:scale-110 hover:bg-blue-400 active:bg-blue-300 hover:text-white active:text-gray-100 transition-all duration-150 ease-in-out'>
                            <FaFileCode />
                        </a>
                        <label className='text-white text-sm font-bold drop-shadow-md whitespace-nowrap'>View Project Code</label>
                    </div>
                    <div className='flex flex-col items-center ml-4'>
                        <a href="https://github.com/csutrick/Quick-Note" target="_blank" rel="noopener noreferrer"
                        className='bg-white flex justify-center w-[100%] px-10 py-1 rounded-lg text-4xl drop-shadow-md hover:drop-shadow-lg active:drop-shadow-xl
                        hover:scale-105 active:scale-110 hover:bg-green-400 active:bg-green-300 hover:text-white active:text-gray-100 transition-all duration-150 ease-in-out'>
                            <FaGithub />
                        </a>
                        <label className='text-white text-sm font-bold drop-shadow-md whitespace-nowrap'>View Github</label>
                    </div>
                </div>
                <h3 className='text-white font-bold text-base drop-shadow-lg tracking-wider'>Thank you for viewing my project</h3>
        </footer>
    )
};

export default Footer;