import React from 'react'
import logo from './../Assests/book-store-logo-removebg-preview.png'
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
function Navbar({setShowSiinin, setSearchTag}) {
  
  return (
    <div className='sticky top-0 right-0 bg-white '>
          <div className='flex justify-between p-0'>
              <div className='ml-16 p-0'> 
                <img src={logo} alt='logo' className='w-40 h-10 mt-5 '/>
              </div>
              <div className='flex mt-7 h-7'>
                <input type='search' placeholder='Search all books...' className='w-30 h-7 border-0 outline-0' onChange={(e)=>setSearchTag(e.target.value)}/>
                <SearchIcon style={{fontSize:28}}/>
              </div>
              <div className='flex gap-1 mr-20'>
                  <Link to='/history' className='mt-7 mb-4'>History</Link>
                  <div className="h-7 border-l w-0.5 bg-black mt-7 mb-4 "></div>
                  {(localStorage.getItem('Isloggedin')==='true')?<div className='mt-7 mb-4' onClick={()=>localStorage.setItem('Isloggedin',false)} >Account</div>:<div className='mt-7 mb-4' onClick={()=>setShowSiinin(true)}>Login</div> }
              </div>
          </div>
          <div className='flex justify-center'> <hr className='w-[1200px]  h-0.5 bg-black shadow-2xl shadow-zinc-700'></hr></div>
             
          
    </div>
  )
}

export default Navbar