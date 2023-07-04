import React from 'react'
import kidsFamShowOne from '../assets/show/8188.json'
import kidsFamShowTwo from '../assets/show/9687.json'
import kidsFamShowThree from '../assets/show/9702.json'
import kidsFamShowFour from '../assets/show/9665.json'
import kidsFamShowFive from '../assets/show/10182.json'
import kidsFamShowSix from '../assets/show/9994.json'
import kidsFamShowSeven from '../assets/show/9705.json'
import kidsFamShowEight from '../assets/show/10934.json'
import kidsFamShowNine from '../assets/show/9694.json'
import kidsFamShowTen from '../assets/show/9693.json'
import kidsFamShowEle from '../assets/show/9704.json'
import kidsFamShowTwe from '../assets/show/9739.json'
import kidsFamShowThir from '../assets/show/9691.json'


function KidsFam() {

  const kidsFamShows = [
    ...kidsFamShowOne,
    ...kidsFamShowTwo,
    ...kidsFamShowThree,
    ...kidsFamShowFour,
    ...kidsFamShowFive,
    ...kidsFamShowSix,
    ...kidsFamShowSeven,
    ...kidsFamShowEight,
    ...kidsFamShowNine,
    ...kidsFamShowTen,
    ...kidsFamShowEle,
    ...kidsFamShowTwe,
    ...kidsFamShowThir
  ]
  return (
    <div>
        <div className='"  animate-slideup rounded-lg cursor-pointer'>
        <div className=' backdrop-blur animate-slideup'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
            {
                kidsFamShows.map(kid => (
                    <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={kid.id}>
                        <img className="rounded-t-lg" alt="POD_IMG" src={kid.image}/>
                        <div className='p-3'>
                            
                            <p className='text-lg text-[#e9e2e7]'> 
                            <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                                {kid.seasons}</p>
                            <h5 className='text-lg font-normal text-[#a07e96]'>{kid.updated}</h5>
                            
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

export default KidsFam
