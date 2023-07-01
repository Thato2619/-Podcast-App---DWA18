import React from 'react'
import comedyList from '../utils/module/comedyList'
import Link from 'next/link'
import comedy from '../utils/assets/showGenres/comedy'
import audioList from '../utils/module/audioLIst'
import comedyDisplay from './comedyDisplay'

function ComedyShows() {

    const displayShows = <div>
        
    </div>


 const allComedy = <div className='"  animate-slideup rounded-lg cursor-pointer'>
    
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            comedyList.map(comedy => (

                <div key={comedy.season}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-normal text-[#e9e2e7] mb-3'>SEASON 1</h3>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>{comedy.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                    className='text-lg font-bold text-[#e9e2e7]'>From Commoner to Royalty</span> 
                        </p>
                        <h5 className='text-lg font-bold text-[#a07e96]'> Diana to Meghan - Meghanomania</h5>
                        <hp className='text-lg font-normal text-[#a07e96]'>Episode : 1</hp>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            ) )
        }
            
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            comedyList.map(comedy => (

                <div key={comedy.season}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-normal text-[#e9e2e7] mb-3'>SEASON 1</h3>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>{comedy.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                    className='text-lg font-bold text-[#e9e2e7]'>From Commoner to Royalty</span> 
                        </p>
                        <h5 className='text-lg font-bold text-[#a07e96]'> Diana to Meghan - Meet the Markles</h5>
                        <hp className='text-lg font-normal text-[#a07e96]'>Episode : 2</hp>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            ) )
        }
            
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            comedyList.map(comedy => (

                <div key={comedy.season}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-normal text-[#e9e2e7] mb-3'>SEASON 1</h3>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>{comedy.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                    className='text-lg font-bold text-[#e9e2e7]'>From Commoner to Royalty</span> 
                        </p>
                        <h5 className='text-lg font-bold text-[#a07e96]'>Diana to Meghan - Whatever 'in Love' Means</h5>
                        <hp className='text-lg font-normal text-[#a07e96]'>Episode : 3</hp>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            ) )
        }
            
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            comedyList.map(comedy => (

                <div key={comedy.season}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-normal text-[#e9e2e7] mb-3'>SEASON 1</h3>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>{comedy.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                    className='text-lg font-bold text-[#e9e2e7]'>From Commoner to Royalty</span> 
                        </p>
                        <h5 className='text-lg font-bold text-[#a07e96]'> Diana to Meghan - Battle Royale"</h5>
                        <hp className='text-lg font-normal text-[#a07e96]'>Episode : 4</hp>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            ) )
        }
            
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            comedyList.map(comedy => (

                <div key={comedy.season}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-normal text-[#e9e2e7] mb-3'>SEASON 1</h3>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>{comedy.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                    className='text-lg font-bold text-[#e9e2e7]'>From Commoner to Royalty</span> 
                        </p>
                        <h5 className='text-lg font-bold text-[#a07e96]'> Reporters Who Cover the Royals</h5>
                        <hp className='text-lg font-normal text-[#a07e96]'>Episode : 5</hp>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            ) )
        }
            
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            comedyList.map(comedy => (

                <div key={comedy.season}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-normal text-[#e9e2e7] mb-3'>SEASON 2</h3>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>{comedy.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                    className='text-lg font-bold text-[#e9e2e7]'>A Real Life 'Succession' Story</span> 
                        </p>
                        <h5 className='text-lg font-bold text-[#a07e96]'> The Murdochs - Rupert</h5>
                        <hp className='text-lg font-normal text-[#a07e96]'>Episode : 1</hp>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            ) )
        }
            
    </div>
</div>

  </div>

  

  return (

    <div>
        {allComedy}
        
    </div>
  )
}

export default ComedyShows

/**
 *   <div key={comedy.id}>
                    <div className='p-3'>
                        <h3 className='text-2xl font-bold text-[#e9e2e7] mb-3'>comedy</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                        className='text-lg font-bold text-[#e9e2e7]'>Description:</span> 
                            3
                        </p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>20222</h5>
                        <audio key='6807'  preload='none' controls controlsList='nodownload' className='w-100'>
                            <source src="https://podcast-api.netlify.app/placeholder-audio.mp3"  type='audio/mp3'/>
                        </audio>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>comedy</button>
                            </Link>
                        </div>
                    </div>
                </div>
 */
