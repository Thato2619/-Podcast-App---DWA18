

import React from 'react'
import {useState} from 'react'
import {SHOWS} from '../assets/genre/genres'



const getFilteredItems = (query, items) => {
    if(!query){
        return undefined
    }
        return items.filter(title => title.name.includes(query))
}
function Search() {
    const [query, setQuery] = useState("") 
    
    const {title} = SHOWS
    const {items} = title

    const filterItems = getFilteredItems(query, items)

  return (
    <div>
       <div className='flex items-center'>
              <div className='flex w-[600px] items-center bg-[#090708]'>
                  <input 
                  type="text"
                   placeholder='search' 
                   className='bg-[#090708] flex-1 h-1-'
                   onChange={e => setQuery(e.target.value)}/>
                    {filterItems.map((value) => 
                        <div key={value.id}>{value.title}</div>
                    )}
                    <button className='h-10 w-26 flex items-center justify-center hover:bg-[#fefefe] h-5'>
                      search
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Search
