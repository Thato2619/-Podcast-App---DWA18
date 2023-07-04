import React from 'react'

import BusinessShowOne from '../assets/show/8364.json'
import BusinessShowTwo from '../assets/show/6717.json'
import BusinessShowThree from '../assets/show/8760.json'

function Business() {

    const BusinessShows = [...BusinessShowOne, ...BusinessShowTwo, ...BusinessShowThree]
  return (
    <div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
           BusinessShows.map(business => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={business.id}>
                    <img className="rounded-t-lg" alt="POD_IMG" src={business.image}/>
                    <div className='p-3'>
                        
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {business.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{business.updated}</h5>
                        
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <a href="">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'> All Episodes</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            
    </div>
</div>
</div>
</div>
  )
}

export default Business

//["8364", "6717", "8760"]