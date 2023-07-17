import React from 'react'
import {AiOutlineSearch } from 'react-icons/ai';
import fondVideo from '../assets/beachVid.mp4';
function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video autoPlay loop muted src={fondVideo} className='w-full h-screen object-cover'></video>

        <div className="absolute w-full h-screen top-0 left-0 bg-gray-900/30"></div>

        <div className='absolute top-0 w-full h-screen justify-center flex flex-col
        text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2 className='py-2 mb-2'>Top 1% locations Worldwide</h2>
            <form action="" className='flex mx-auto justify-between max-w-[700px] p-1 w-full rounded-full border bg-white h-10'>
                <div>
                    <input type="text" className='bg-transparent text-slate-800 px-4 py-1 max-w-[300px] w-full sm:w-[400px] font-[Poppins] focus:outline-none' placeholder='Rechercher une destination...'/>
                </div>
                <div>
                    <AiOutlineSearch size={30} className='text-slate-400 pt-1 me-2 ' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
