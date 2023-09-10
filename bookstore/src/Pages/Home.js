import React, { useState } from 'react'
import Imagescroller from '../component/Imagescroller'
import Genre from '../component/Genre'
import Books from '../component/Books'


function Home({SearchTag}) {
    const [GenreType, setGenreType] = useState("all");
    
   
  return (
    <div >
        
        <Imagescroller/>
          
          
        <Genre setGenreType={setGenreType} />
        <Books GenreType={GenreType} SearchTag={SearchTag}/>
        
    </div>
  )
}

export default Home