import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterContainer() {
    
  return (
    <div className='h-60 w-full bg-[#4B4747] flex flex-col justify-center items-center m-0 bottom-0'>
        <Link to='/cons' className='text-white text-xl'>About Us</Link>
        <Link to='/cons'  className='text-white text-xl'>Contact Us</Link>
        <Link to='/cons' className='text-white text-xl'>Privacy Policy</Link>
        <Link to='/cons'  className='text-white text-xl'>Term of Use</Link>
        
    </div>
  )
}
