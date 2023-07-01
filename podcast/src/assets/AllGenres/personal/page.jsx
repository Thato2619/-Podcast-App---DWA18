import React from 'react'
import personalGrowth from '../utils/assets/showGenres/personalGrowth'
import {growth} from './personalGrowth'
import genres from '@/app/utils/assets/genre/genres';
import Link from 'next/link'
import {useRouter} from 'next/router'


function page() {

    const [buttonPod, setButtonPod ] = useState(['']);

    const handlePodButtonClick = (id) => {
        if (buttonPod.includes(id)){
            let episodes = buttonPod.filter((el) => el !== id);
            setButtonPod(episodes)
        } else {
            setButtonPod([...buttonPod, growth])
        }
    }


    useEffect(() => {
        allEpisodes(growth);
    }, [buttonPod])

    const allEpisdoes = () => {
        if(buttonPod.length > 0){
            let PodItems = growth.map((episode) => {
                let temp = growth.filter((show) => show.id === episode)
                return temp;
            });
            setButtonPod(PodItems.flat())

        } else {
            setButtonPod([...growth])
        }
    }


   const getImage = genres.map( genreImg => {
        genreImg.image
    })

  return (
  <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            personalGrowth && personalGrowth.map(growth => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={growth.id}>
                    <img 
                    className="rounded-t-lg" alt="POD_IMG" 
                    src={getImage}/>

                    <div className='p-3'>
                        <h3 className='text-3xl font-bold text-[#e9e2e7] mb-3'>{growth.title}</h3>
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span 
                        className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {growth.seasons.map(data => {
                                {data.season}
                            }) }
                        </p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{growth.updated}</h5>
                        <div className='justify your flex items to the end by using justify-end inside your flex container'>
                            <Link href="/comedy">
                                <button className='bg-[#fbfbf2] hover:bg-[#a39ba8] cursor-pointer border-2 border-[#090708] rounded-full text-center font-bold text-[#080708] px-3 py-1'>

                                    {
                                        
                                    }
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            
    </div>
</div>

  </div>
  )
}

export default page
