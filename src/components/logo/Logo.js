import React from 'react'
import logo from '../../assets/icon_1.png';

export default function Logo() {
  return (
    <div className='flex items-center'>
        <img
        alt="Logo"
        className="mx-auto w-14 h-14"
        src={logo}
        /><span className='ml-1 hidden sm:block'>Noteed</span>
        <span className="sr-only">Noteed</span>    
    </div>
  )
}
