import React from 'react'

function ICard({img,index,slide}) {
  return (
    <div className={index===slide?'hover:shadow-xl opacity-100 duration-500 w-full':'opacity-0s'}>
                {slide===index && <img src={img} className='rounded-lg' alt="/"/>}

    </div>
  )
}

export default ICard
