import React from 'react'
//["8291", "5718"]
import newsShowOne from '../assets/show/8291.json'
import newsShowTwo from '../assets/show/5718.json'


function News() {
    const newsShow = [...newsShowOne, ...newsShowTwo]
  return (
    <div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            newsShow.map(news => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={news.id}>
                    <img className="rounded-t-lg" alt="POD_IMG" src={news.image}/>
                    <div className='p-3'>
                        
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {news.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{news.updated}</h5>
                        
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

export default News
