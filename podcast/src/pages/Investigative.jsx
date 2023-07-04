import React from 'react'

import InvestigateShowOne from '../assets/show/10716.json'
import InvestigateShowTwo from '../assets/show/5675.json'
import InvestigateShowThree from '../assets/show/10539.json'
import InvestigateShowFour from '../assets/show/9177.json'
import InvestigateShowFive from '../assets/show/8860.json'
import InvestigateShowSix from '../assets/show/5012.json'
import InvestigateShowSeven from '../assets/show/9054.json'
import InvestigateShowEight from '../assets/show/7654.json'
import InvestigateShowNine from '../assets/show/8256.json'
import InvestigateShowTen from '../assets/show/8291.json'
import InvestigateShowEle from '../assets/show/5718.json'
import InvestigateShowTwe from '../assets/show/5276.json'
import InvestigateShowThi from '../assets/show/5964.json'
import InvestigateShowFor from '../assets/show/6465.json'
import InvestigateShowFif from '../assets/show/5320.json'
import InvestigateShowSixteen from '../assets/show/6451.json'
import InvestigateShowSeventeen from '../assets/show/5692.json'
import InvestigateShowEighteen from '../assets/show/6430.json'


function Investigative() {

    const InvestigativeShows = [
        ...InvestigateShowOne, 
        ...InvestigateShowTwo,
        ...InvestigateShowThree,
        ...InvestigateShowFour,
        ...InvestigateShowFive,
        ...InvestigateShowSix,
        ...InvestigateShowSeven,
        ...InvestigateShowEight,
        ...InvestigateShowNine,
        ...InvestigateShowTen,
        ...InvestigateShowEle,
        ...InvestigateShowTwe,
        ...InvestigateShowThi,
        ...InvestigateShowFor,
        ...InvestigateShowFif,
        ...InvestigateShowSixteen,
        ...InvestigateShowSeventeen,
        ...InvestigateShowEighteen
    ]

  return (
    <div>
    <div className='"  animate-slideup rounded-lg cursor-pointer'>
    <div className=' backdrop-blur animate-slideup'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative w-full h-56 group'>
        {
            InvestigativeShows.map(invest => (
                <div className ='shadow-lg rounded-lg p-4 bg-white/5 bg-opacity-80 backdrop-blur' key={invest.id}>
                    <img className="rounded-t-lg" alt="POD_IMG" src={invest.image}/>
                    <div className='p-3'>
                        
                        <p className='text-lg text-[#e9e2e7]'> 
                        <span className='text-lg font-bold text-[#e9e2e7]'>Season:</span> 
                            {invest.seasons}</p>
                        <h5 className='text-lg font-normal text-[#a07e96]'>{invest.updated}</h5>
                        
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

export default Investigative

/**
 * [
    "10716",
    "5675",
    "10539",
    "9177",
    "8860",
    "5012",
    "9054",
    "7654",
    "8256",
    "8291",
    "5718",
    "5276",
    "5964",
    "6465",
    "5320",
    "6451",
    "5692",
    "6430"
  ]
 */