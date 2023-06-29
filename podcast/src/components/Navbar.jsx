import React from 'react'

function Navbar() {
  return (
  
  <div classsName="pb-10 bg-[#202020] text-[#e9e2e7] text-sm flex flex-wrap justidy-between border border-l-0 border-r-0 border-t-[0.4px] border-b-[1px] border-[#a07e96] py-4 px-6">
          <a href='/'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Home</button>
          </a>
          <a href='/growth'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Personal Growth</button>
          </a>
          <a href='/investigative'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Investigative Journalism</button>
          </a>
          <a href='/history'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">History</button>
          </a>
          <a href='/comedy'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Comedy</button>
          </a>
          <a href='/entertainment'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Entertainment</button>
          </a>
          <a href='/business'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Business</button>
          </a>
          <a href='/fiction'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Fiction</button>
          </a>
          <a href='/news'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">News</button>
          </a>
          <a href='/kids-family'>
            <button className="bg-[#090708] hover:bg-[#a07e96] cursor-pointer border-2 border-[#a07e96] rounded-full text-center px-3 py-1 ">Kids & Family</button>
          </a>
    </div>

  )
}

export default Navbar