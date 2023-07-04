import React from 'react'
import historyOne from '../assets/show/5279.json'              
import historyTwo from '../assets/show/9177.json'
import historyThree from '../assets/show/6807.json'
import historyFour from '../assets/show/8514.json'
import historyFive from '../assets/show/5629.json'
import historySix from '../assets/show/8364.json'
import historySeven from '../assets/show/5964.json'
import historyEight from '../assets/show/9041.json'
import historyNine from '../assets/show/5702.json'
import historyTen from '../assets/show/5320.json'
import historyEle from '../assets/show/6717.json'
import historyTwe from '../assets/show/5968.json'
import historyThi from '../assets/show/8760.json'


function History() {
    
    const historyShows = [
        ...historyOne,
        ...historyTwo,
        ...historyThree,
        ...historyFour,
        ...historyFive,
        ...historySix,
        ...historySeven,
        ...historyEight,
        ...historyNine,
        ...historyTen,
        ...historyEle,
        ...historyTwe,
        ...historyThi
    ]
  return (
    <div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {historyShows.map(history => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={history.id}>
                    <img className="rounded-t-lg" alt="POD_IMG" src={history.image}/>
                    <div className='p-3'>
                        
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {history.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{history.updated}</h5>
                        
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

export default History

