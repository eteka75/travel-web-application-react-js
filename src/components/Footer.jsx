import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaPinterest} from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className="mx-auto flex flex-col px-4 max-w-[1240px]">
            <div className='flex flex-col text-center justify-between items-center'>
                <div className='sm:flex justify-between items-center'>
                    <h1>Hotels.</h1>
                    <div className='grid grid-cols-5 gap-8 px-[10%] justify-between py-4 w-full sm:max-w-[250px] my-4'>
                        <FaFacebook className="icon opacity-60 hover:opacity-100" />
                        <FaTwitter className="icon opacity-60 hover:opacity-100" />
                        <FaYoutube className="icon opacity-60 hover:opacity-100" />
                        <FaPinterest className="icon opacity-60 hover:opacity-100" />
                        <FaInstagram className="icon opacity-60 hover:opacity-100" />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between text-xs'>
                        <ul className='lg:flex text-start '>
                            <li><a href="#">A propos</a></li>
                            <li><a href="#">Partenaires</a></li>
                            <li><a href="#">Carières</a></li>
                            <li><a href="#">Actualités</a></li>
                            <li><a href="#">Publicités</a></li>
                        </ul>
                        <ul className='text-right  lg:flex'>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Voyages</a></li>
                        <li><a href="#">Visiter</a></li>
                        <li><a href="#">Tickets</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
