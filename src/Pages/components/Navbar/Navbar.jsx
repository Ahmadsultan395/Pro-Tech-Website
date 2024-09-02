import React from 'react'
import { IoReorderThree } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
    <div className='flex w-full justify-between p-8'>
      <div className='relative flex '>
        <h1 className='z-10 text-black text-xl md:text-2xl font-bold absolute left-3 top-1.5'>ProTech..</h1>
        <div  className= 'z-0 bg-[#db8a3b]  h-12 w-12 rounded-full absolute top-0 left-0'></div>
      </div>
      <div >
      <IoReorderThree  className='text-red-800 text-3xl md:text-5xl mt-1'/>
      </div>
    </div>
    </>
  )
}

export default Navbar