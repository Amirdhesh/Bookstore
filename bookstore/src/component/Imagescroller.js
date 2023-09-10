import React, { useEffect, useState } from 'react';
import image1 from './../Assests/image1.png';
import image2 from './../Assests/image2.png';
import image3 from './../Assests/image3.png';


const images = [image1, image2, image3];
const interval = 6000;

function ImageScroller() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), interval);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className='flex justify-center items-center'>
      <p className='text-2xl bg-gray-700 max-h-full' onClick={()=>setCurrent((current - 1+images.length) % images.length)}>{'<'}</p>
      {images.map((src, index) => (
        <img className='w-[1000px] h-[450px] m-5 rounded-lg'
          key={index} 
          src={src} 
          alt={`Slide ${index}`} 
          style={{display: index === current ? 'block' : 'none'}}
        />
      ))}
      <p className='text-2xl bg-gray-700 max-h-full' onClick={()=>setCurrent((current + 1) % images.length)}>{'>'}</p>
    </div>
  );
}

export default ImageScroller;
