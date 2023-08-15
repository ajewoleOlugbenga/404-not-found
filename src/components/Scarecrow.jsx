import React from 'react';
import Scarecrow from '../images/Scarecrow.png';

const scarecrow = () => {
  return (
   <main>
    <section className='flex flex-col items-center justify-center md:flex-row md:gap-12 '>
      <div className='md:pt-48'>
      <img 
      src={Scarecrow} 
      alt="Scarecrow"
       className='w-286 md:w-286'
       />
       </div>
       <div className='w-52 h-16 md:w-56 md:h-20'>
        <h1 className='font-mono text-3xl text-gray-900 font-bold pb-5 md:w-80 md:font-extrabold md:text-4xl md:mb-5'>
          I have bad news for you
        </h1>
        <p className='font-mono w-72 pb-12'>
          The page you are looking for might be removed or is temporarily unavailable 
        </p>
        <button type='submit' 
        className='bg-gray-900 text-white font-mono p-5 hover:bg-gray-600'
        >BACK TO HOMEPAGE</button>
       </div>
    </section>
   </main>
  )
}

export default scarecrow
