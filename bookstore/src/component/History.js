import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import books from './../Documents/books.json'

function List({ bookname, description }) {
    return (
        <div className="py-4 h-40 w-11/12 flex item-center">
            <div className='h-36 bg-gray-600 w-36 rounded-lg m-0'></div>
            <div className='px-6 '>
            <h2 className="text-xl text-black font-bold h-10">{bookname}</h2>
            <p>{description}</p>
            </div>
            <div className='w-3/5 flex items-center justify-end text-blue-600 font-semibold text-lg'>
                Continue
                <ArrowForwardOutlinedIcon className='-mb-1 ml-1'/>
            </div>
            
        </div>
        
    );
  }
export default function History() {
    console.log(books)
  return (
    <div className='flex flex-col items-center mb-6'>
      {books.map((product, index)=>(
        <List key={index} {...product}/>
      ))}
    </div>
  )
}
