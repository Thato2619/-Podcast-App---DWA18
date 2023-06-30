import React from 'react'
import { GiHeadphones } from 'react-icons/gi'
import Shows from '../assets/genre/genres'

function Header() {
  return (

    <div className='flex justify-between items-center border-2 border-[#a07e96] p-4'>
        <div className='flex items-center gap-1'>
            <GiHeadphones size={30} className="text-[#a07e96]"/>
            <span className='text-xl font-tilt text=[#a07e96]'>UNPLUGGED PODCAST</span>
        </div>
    </div>

    
  )
}

export default Header
