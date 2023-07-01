import React from 'react'
import comedyShows from '../assets/AllGenres/comedy/comedyShows'

function Episodes() {
  return (
    <div>
        <div classsName="pb-10 bg-[#202020] text-[#e9e2e7] text-sm flex flex-wrap justify-between border border-l-0 border-r-0 border-t-[0.4px] border-b-[1px] border-[#a07e96] py-4 px-6">
          <a href='/'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">SEASONS</button>
          </a>

          <tbody>
              {comedyShows.map((comPod, id) => (
                  <tr key={id} className='bg-[#090708] h-12 text-[#e9e2e7] hover:bg-[#a07e96] '>
                      <td className='text-center'>{id}</td>
                      <td>{comPod.title}</td>
                      <td>{}</td>
                      <td></td>
                  </tr>
              ))

              }
          </tbody>
       
    </div>
    </div>
  )
}

export default Episodes
