import React,{useState} from 'react'
import ICard from './ICard';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
        {
          url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
      ];


function Carrousel() {
    const [slide,setSlide] =useState(0);
    const lenght=sliderData.length;
    const prevSlide=()=>{
        setSlide(slide===lenght-1?0:slide+1);
    }

    const nextSlide=()=>{
        setSlide(slide===0? lenght-1:slide-1);
    }
  return (
    <div className='relative mb-20 justify-center items-center max-w-[1240px]  mx-auto px-4 py-5'>
        <BsArrowLeftSquareFill onClick={prevSlide}  className='absolute top-[50%] text-white cursor-pointer left-8' size={28}/>
        <BsArrowRightSquareFill onClick={nextSlide}  className='absolute top-[50%] text-white cursor-pointer right-8' size={28}/>
         { sliderData.map(function(el,index){
          return (<ICard key={index} index={index} img={el.url} slide={slide} />)

        }) }
        </div>
  )
}

export default Carrousel;
