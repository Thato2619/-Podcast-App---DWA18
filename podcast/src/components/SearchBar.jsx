import React from 'react'
import {useEffect, useRef} from 'react'
import axios from 'axios'
import { GrSearch } from 'react-icons/gr'
import shows from '../assets/genre/genres'

function SearchBar({searchPod, setSearchPod}) {
    
    const inputRef = useRef()

    /*useEffect(() => {
        inputRef.current.focus();
    }, [])*/

    const handleChange = (event) => {
        setSearchPod(event.target.value);
    }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const filterItems = Shows.filter((show) => 
        show.title.toLowerCase().includes(searchPod.toLowerCase())
        );
        onSearch(filterItems)
    }

  return (
  <div className='flex items-center'>
    <div className='flex w-full' onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Search'
                className=' hidden md:flex w-full px-4 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 focus:bg-black  focus:outline-none focus:ring-[1px] ring-[#a07e96] placeholder:text-zinc-400'
                value={searchPod}
                onChange={handleChange}
            /> 
           
           
            <button type='submit'  className=' hidden md:flex bg-zinc-700 px-5 py-3 '>
                <GrSearch size={20} />
            </button>
        </div>
        </div>
    
  )
}

export default SearchBar