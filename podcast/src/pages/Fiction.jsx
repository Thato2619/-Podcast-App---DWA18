import React from 'react'

//["6631", "9664", "8188", "9702", "9695", "9994", "9263", "9666"]

import fictionOne from '../assets/show/6631.json'
import fictionTwo from '../assets/show/9664.json'
import fictionThree from '../assets/show/8188.json'
import fictionFour from '../assets/show/9702.json'
import fictionFive from '../assets/show/9695.json'
import fictionSix from '../assets/show/9994.json'
import fictionSeven from '../assets/show/9263.json'
import fictionEight from '../assets/show/9666.json'

function Fiction() {

    const fictionShows = [

        ...fictionOne,
        ...fictionTwo,
        ...fictionThree,
        ...fictionFour,
        ...fictionFive,
        ...fictionSix,
        ...fictionSeven,
        ...fictionEight
    ]
  return (
    <div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
           fictionShows.map(fiction => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={fiction.id}>
                    <img className="rounded-t-lg" alt="POD_IMG" src={fiction.image}/>
                    <div className='p-3'>
                        
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {fiction.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{fiction.updated}</h5>
                        
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

export default Fiction