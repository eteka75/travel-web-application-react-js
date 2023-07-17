import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Keywest from '../assets/keywest.jpg';
import Maldive from '../assets/maldives.jpg';
import Maldive2 from '../assets/maldives2.jpg';

function Destionation() {
  return (
    <div className='max-w-[1240px] text-center mx-auto py-16 px-4'>
        <h1>All-Inclusive Resorts</h1>
        <p className='mb-6'>One the Caribbean's Best Beaches</p>
        <div className='grid gap-2 grid-rows-none grid-cols-2 md:grid-cols-5 md:gap-2 py4'>
            <img className="w-full h-full object-cover hover:shadow-2xl col-span-2 md:col-span-3 md:row-span-2" src={BoraBora} alt="/" />
            <img className="w-full h-full object-cover hover:shadow-2xl" src={BoraBora2} alt="/" />
            <img className="w-full h-full object-cover hover:shadow-2xl" src={Keywest} alt="/" />
            <img className="w-full h-full object-cover hover:shadow-2xl" src={Maldive} alt="/" />
            <img className="w-full h-full object-cover hover:shadow-2xl" src={Maldive2} alt="/" />
        </div>
    </div>
  )
}

export default Destionation
