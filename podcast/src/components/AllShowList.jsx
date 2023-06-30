import React from 'react'
import Shows from '../assets/genre/genres'
function AllShowList() {
  return (
    <div>
         <div className='"  animate-slideup rounded-lg cursor-pointer'>
        <div className=' backdrop-blur animate-slideup'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
            {
                Shows.map(show => (
                    <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={show.id}>
                        <img className="rounded-t-lg" alt="POD_IMG" src={show.image}/>
                        <div className='p-3'>
                            <h3 className='text-3xl font-bold text-[#e9e2e7] mb-3'>{show.title}</h3>
                            <p className='text-lg text-[#e9e2e7]'> 
                            <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                                {show.seasons}</p>
                            <h5 className='text-lg font-normal text-[#a07e96]'>{show.updated}</h5>
                            
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

export default AllShowList