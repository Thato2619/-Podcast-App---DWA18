import React from 'react'
import { useState } from 'react'
import { GiHeadphones } from 'react-icons/gi'
import { GrSearch } from 'react-icons/gr'
import axios from 'axios'
import Shows from '../assets/genre/genres'
import SearchBar from './SearchBar'

function Header() {
    
    
  return (

    <div className='flex justify-between items-center border-2 border-[#a07e96] p-4'>
        <div className='flex items-center gap-1'>
            <GiHeadphones size={30} className="text-[#a07e96]"/>
            <h1 className='text-xl text-[#a07e96] font-bold font-tilt'>UNPLUGGED PODCAST</h1>
        </div>
        <div>
            <SearchBar  />
        </div>
        

    </div>
    

    
  )
}

export default Header
