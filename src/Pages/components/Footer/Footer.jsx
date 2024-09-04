import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='text-gray-600'>

    <div className='flex flex-col relative'>
    <div className='relative flex '>
        <h1 className='z-10 text-black text-xl md:text-2xl font-bold absolute left-3 top-1.5'>ProTech..</h1>
        <div  className= 'z-0 bg-[#db8a3b]  h-12 w-12 rounded-full absolute top-0 left-0'></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus amet quibusdam fugit natus nihil aspernatur ut voluptatum velit inventore.
      </p>
      <button>Write Your Email Address</button>
      <button>Subscribe</button>
    </div>

   </div>
   
   </>
  )
}

export default Footer