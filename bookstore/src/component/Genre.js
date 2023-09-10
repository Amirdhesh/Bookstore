import React from 'react'

function Genre({setGenreType}) {

  return (
    <div>
        <div className='flex justify-center'> <hr className='w-[1200px]  h-0.5 bg-black'></hr></div>
        <div className='flex justify-evenly'>
          <div onClick={()=>setGenreType('all')}>
              All
          </div>
          <div onClick={()=>setGenreType('Fiction')}>
              Fiction
          </div>
          <div onClick={()=>setGenreType('Non-fiction')}>
              Non-Fiction
          </div>
          <div onClick={()=>setGenreType('Novel')}>
              Novel
          </div>
          <div onClick={()=>setGenreType('Kids')}>
              Kids
          </div>
          <div onClick={()=>setGenreType('Magazine')}>
              Magazine
          </div>
          <div onClick={()=>setGenreType('Comics')}>
              Comics
          </div>
          <div onClick={()=>setGenreType('Spirituality')}>
              Spirituality
          </div>
          <div onClick={()=>setGenreType('Poetry')}>
              Poetry
          </div>
        </div>
        
        <div className='flex justify-center'> <hr className='w-[1200px]  h-0.5 bg-black'></hr></div>
    </div>
  )
}

export default Genre