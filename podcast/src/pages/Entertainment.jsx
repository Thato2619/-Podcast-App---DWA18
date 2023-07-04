import React from 'react'
// ["6807", "6631", "8256", "6756", "5702", "9620", "10758"]
import entertainmentShowOne from '../assets/show/6807.json'
import entertainmentShowTwo from '../assets/show/6631.json'
import entertainmentShowThree from '../assets/show/8256.json'
import entertainmentShowFour from '../assets/show/6756.json'
import entertainmentShowFive from '../assets/show/5702.json'
import entertainmentShowSix from '../assets/show/9620.json'
import entertainmentShowSeven from '../assets/show/10758.json'
function Entertainment() {

    const entertainmentShows = [...entertainmentShowOne, ...entertainmentShowTwo, ...entertainmentShowThree, ...entertainmentShowFour, ...entertainmentShowFive, ...entertainmentShowSix, ...entertainmentShowSeven]
  return (
    <div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
           entertainmentShows.map(entertain => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={entertain.id}>
                    <img className="rounded-t-lg" alt="POD_IMG" src={entertain.image}/>
                    <div className='p-3'>
                        
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {entertain.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{entertain.updated}</h5>
                        
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

export default Entertainment

