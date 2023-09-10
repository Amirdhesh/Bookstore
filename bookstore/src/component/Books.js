import axios from 'axios';
import React,{useEffect,useState} from 'react'


function Books({GenreType, SearchTag}) {
  const [products, setproducts] = useState([])

  async function getbooks(){  // To get the book details using api endpoint
    const response = await axios.get('http://127.0.0.1:5000/books')
    if(response.status){
      setproducts(response.data)
    }
  }

  useEffect(() => {
      getbooks();
  }, [])

  return (
    <div className='grid grid-cols-5 gap-7 p-6 '>
      {products.map((book, index)=>{  
        {console.log(book.bookname)}
        {if ((book.genre === GenreType || GenreType === 'all') || (book.bookname.toLowerCase().includes(SearchTag.toLowerCase()))){
          return(
            <Productt key={index} {...book}/>
          )
        }}
      })}
      
    </div>
  )
}

export default Books
  


function Productt({ bookname, description, }) {
  const shortcontent=description.slice(0,120)
  
  return (
      <div className="border p-4 h-74 w-56 rounded-lg shadow-xl text-center">
          
          <h2 className="text-xl text-black font-bold h-30">{bookname}</h2>
          <div className='h-30'>{shortcontent}...<span className='text-blue-600'>Read more</span></div>
          <div className='w-70 h-7 bg-blue-700 text-white'>Read</div>
      </div>
  );
}