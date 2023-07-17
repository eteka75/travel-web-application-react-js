import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaPinterest} from 'react-icons/fa'
import '../index.css';

function Navbar() {
    const [nav,setNav]=useState(false);

const handleNav= () => {
    setNav(!nav);
};

  return (
    <div className=' shadow-sm'>
    <div className='absolute z-10 md:w-[80%] px-4 w-full md:left-[10%] flex h-16 text-white justify-between items-center space-x-4 mx-auto'>
        <div >
            <h1 className={nav?'hidden':'text-lg p-0 sm:pl-4 font-weight-bold'} >Hotels.</h1>
        </div>
        <ul className='hidden md:flex text-xs'>
            <li>Accueil</li>
            <li>Destinations</li>
            <li>Voyages</li>
            <li>Visiter</li>
            <li>Tickets</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20} />
        </div>
        <div  className='md:hidden  pe-4 z-10'>
            {nav?'':<HiOutlineMenuAlt4 onClick={handleNav} className='cursor-pointer text-slate-100' size={20} />}
        </div>

    </div>
     {/* Mobile Menu */}
     <div className={nav?'absolute z-10  text-black ease-in-out duration-200 transition-all left-0 top-0 w-full px-4 py-4 shaow-2xl bg-gray-100/95 flex flex-col':'absolute left-[-100%] duration-150'}>
     {nav?<AiOutlineClose onClick={handleNav} className='cursor-pointer text-slate-700 absolute right-4' size={20} />:''}

     <h1 className='text-lg'>Hotels.</h1>
     <ul className='space-y-4 mt-6'>
         <li className='border-b'>Accueil</li>
         <li className='border-b'>Destinations</li>
         <li className='border-b'>Voyages</li>
         <li className='border-b'>Visiter</li>
         <li className='border-b'>Tickets</li>
     </ul>
     <div className='flex flex-col'>
         <button className='my-6'>Search</button>
         <button>Account</button>
     </div>
     <div className='flex justify-between py-6'>
         <FaFacebook className="icon" />
         <FaTwitter className="icon" />
         <FaYoutube className="icon" />
         <FaPinterest className="icon" />
         <FaInstagram className="icon" />
     </div>
 </div>
 </div>
  )
}

export default Navbar
