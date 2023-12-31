import React from 'react'
import personalShowOne from '../assets/show/10716.json'
import personalShowTwo from '../assets/show/10276.json'
import personalShowThree from '../assets/show/6756.json'
import personalShowFour from '../assets/show/10660.json'


function Personal() {

    const personalGrowth = [...personalShowOne, ...personalShowTwo, ...personalShowThree, ...personalShowFour]
  return (
    <div>
        <div className='"  animate-slideup rounded-lg cursor-pointer'>
        <div className=' backdrop-blur animate-slideup'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
            {
                personalGrowth.map(personal => (
                    <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={personal.id}>
                        <img className="rounded-t-lg" alt="POD_IMG" src={personal.image}/>
                        <div className='p-3'>
                            
                            <p className='text-lg text-[#e9e2e7]'> 
                            <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                                {personal.seasons}</p>
                            <h5 className='text-lg font-normal text-[#a07e96]'>{personal.updated}</h5>
                            
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

export default Personal

//["10716", "10276", "6756", "10660"]