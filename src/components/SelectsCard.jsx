import React from 'react'

function SelectsCard({img,text}) {
  return (
    <div className="relative">
            <img src={img} alt="/" className='w-full h-full object-cover' />
            <div className='bg-gray-900/30 hover:bg-gray-900/5 duration-300 absolute w-full h-full top-0 left-0'>
                <p className='absolute left-4 bottom-4 text-2xl text-white font-bold'>{text}</p>
            </div>
        </div>
  )
}

export default SelectsCard;
