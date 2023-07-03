import React from 'react'
import {useState} from 'react'
import comedyShows from '../assets/AllGenres/comedy/comedyShows'
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

function Episodes() {

    const currentEpi = { "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"}

    const pause = 
    <div className='h-10 w-10 rounded-full border border-[#a07e96] flex items-center justify-center absolute -right-0.5 bg-[#a07e96] icon hover:scale-110' >
     <BsFillPauseFill  className='text-[#e9e2e7] text-x1'/>
    </div>

    const [favourited, setFavourited] = useState(false)
    const [playEpi , setPlayEpi] = useState("")

    const handlePlay = () => {
        choose
    }
  return (
    <div className='flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px04 rounded-lg group transition ease-out'>
        
        <div className='flex items-center'>

            <img  
            src={comedyShows.map((comedy => comedy.image))} 
            alt="" 
            className='rounded-x1 h-12 w-12 object-cover mr-3'/>
        </div>
        <div>
            <h4 className='text-[#e9e2e7] text-sm font-semibold truncate w-[450px]'>
                <span className='text-[#e9e2e7] font-semibold'>EPISODE 1: </span>
                From Commoner to Royalty
            </h4>
            <p className='text-[#a07e96] text-sm'>SEASON 1</p>
            <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
            </audio>
        </div>
        <div className='md:ml-auto flex items-center space-x-2.5'>
            <div className='flex items-center rounded -full  w-[85px] h-[10] relative cursor-pointer group-hover: border-white/40'>
                <AiFillHeart 
                className={`text-xl ml-3 hover:scale-125 transition-all duration-150 ease-out ${favourited ? "text-[#a07e96]" : "text-[#868686]" }`}
                onClick={() => setFavourited(!favourited)}
                />
                
                <div className='h-10 w-10 rounded-full border border-[#a07e96] flex items-center justify-center absolute -right-0.5 bg-[#a07e96] icon hover:scale-110'>
                    <BsFillPlayFill 
                    
                    className= {`text-xl ml-3 hover:scale-125 transition-all duration-150 ease-out ${playEpi ? <source src='https://podcast-api.netlify.app/placeholder-audio.mp3"'/> : {pause}}`}
                    onClick={() => setPlayEpi(!playEpi)}
                    
                    
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Episodes


/**
 *  
                    div className='h-10 w-10 rounded-full border border-[#a07e96] flex items-center justify-center absolute -right-0.5 bg-[#a07e96] icon hover:scale-110'>
                    <BsFillPlayFill className='text-[#e9e2e7] text-x1' />
                    </>

                    <div className='h-10 w-10 rounded-full border border-[#a07e96] flex items-center justify-center absolute -right-0.5 bg-[#a07e96] icon hover:scale-110' >
                        <BsFillPauseFill  className='text-[#e9e2e7] text-x1'/>
                    </div>
 */

