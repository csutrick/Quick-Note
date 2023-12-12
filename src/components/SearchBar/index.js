import React from "react";

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <section className='w-3/4 h-11 flex flex-row items-center justify-center mb-4 rounded-x-full drop-shadow-md'>
            {/* User input field */}
            <input type="text" placeholder="Search Notes"
            className='h-full w-full rounded-l-full pl-4 text-3xl outline-none bg-gray-100'/>
            {/* Button to search notes */}
            <button className='h-full w-24 flex items-center justify-center rounded-r-full
            bg-blue-300'>
                <FiSearch className='text-3xl text-white'/>
            </button>
        </section>
    )
};

export default SearchBar;