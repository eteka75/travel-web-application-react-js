import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

function Search() {
  return (
    <div className='max-w-[1240px]  mx-auto px-4 grid lg:grid-cols-3 '>
        <div className='lg:col-span-2 flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED FOR TWO PEOPLE</h2>
                <p>
                    Lorem ipsum dolor sit amet contium in molestias quod a, voluptatem, consectetur tenetur magnam ducimus nostrum architecto tempora nemo nisi numquam? Quasi eaque laborum quia nemo? Ea, officia. Corrupti commodi facilis voluptatem ipsa ad tempora fuga atque expedita quidem voluptate voluptatum ullam a error vero quis inventore et, sed hic dignissimos explicabo ducimus reiciendis vel? Fugiat dolorum nostrum modi a doloremque rem repudiandae beatae praesentium, cum recusandae consectetur architecto.
                </p>
                <p>
                    Lorem ipsum dolor sit amet contium in molestias quod a, voluptatem, consectetur tenetur magnam ducimus nostrum architecto tempora nemo nisi numquam? Quasi eaque laborum quia nemo? Ea, officia. Corrupti commodi facilis voluptatem ipsa ad tempora fuga atque expedita quidem voluptate voluptatum ullam a error vero quis inventore et, sed hic dignissimos explicabo ducimus reiciendis vel? Fugiat dolorum nostrum modi a doloremque rem repudiandae beatae praesentium, cum recusandae consectetur architecto.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nulla error, qui atque distinctio quidem placeat! Quidem aliquid doloremque consequatur aperiam reiciendis tempora voluptatem culpa temporibus eaque saepe fuga asperiores aliquam repudiandae iusto quos dolores dicta, aspernatur quisquam consectetur</p>


            </div>
            <div className='grid my-4 w-full sm:grid-cols-2 grid-cols-2 gap-8 py4'>
                <div className='flex flex-col text-center md:text-start lg:flex-row items-center'>
                    <button className='my-2'><RiCustomerService2Fill size={20} className='icon'/></button>
                    <div className='px-2'>
                        <h3 className=''>LEADING SERVICE</h3>
                        <p className='text-xs'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col text-center md:text-start lg:flex-row items-center'>
                    <button className='my-2'><MdOutlineTravelExplore size={20} className='icon'/></button>
                    <div className='px-2'>
                        <h3 className=''>LEADING SERVICE</h3>
                        <p className='text-xs'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4'>
            <div className='border text-center p-4'>
                <p>GET AN ADDITIONAL 10% OFF </p>
                <p className='py-4'>12HOURS LEFT </p>
                <p className='text-white bg-slate-900 py-1 px-6'>BOOK NOW AND SAVE</p>
            </div>
            <form action="w-full flex my-4">
                <div className='flex flex-col my-4'>
                    <label htmlFor="f">Destination </label>
                    <select className='border p-2 rounded-md'>
                        <option>Grande Antigue</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Conzumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="Check-In">Check-In</label>
                    <input type="date" id='Check-In' className='border p-2 rounded-md' />
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="Check-Out">Check-Out</label>
                    <input type="date" id='Check-Out' className='border p-2 rounded-md' />
                </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
            </form>
        </div>

    </div>
  )
}

export default Search
