import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Navbar2 = () => {
    const [isOpen , setIsOpen] = useState(false);

    const handleMenuOpen =()=>{
        setIsOpen(!isOpen);
    }

  return (
    <>
    <div className='bg-gray-300 flex justify-between items-center py-7 px-5 static w-full' >
    <div>
    <div className='relative flex items-center'>
        <h1 className='z-10 text-black text-xl md:text-2xl font-bold absolute left-3 '>ProTech..</h1>
        <div  className= 'z-0 bg-[#db8a3b]  h-12 w-12 rounded-full absolute -top-6 left-0'></div>
      </div>
    </div>
      
       <ul className={`flex flex-col items-center  bg-gray-300 justify-center  -ml-5   w-full  absolute   gap-5 rounded-b-full      
       ${isOpen ? 'top-[65px] transit duration-500 opacity-100' : 'top-[-400px]  transit duration-500 md:opacity-100 opacity-0'}`}>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Home</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Services</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">About</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Contact</a></li>
            <li className='text-black hover:text-gray-600 text-[1rem]'><a href="">Blogs</a></li>
        </ul>

        <button className=' ' onClick={handleMenuOpen}>
        { isOpen ? (<IoMdClose className='text-[#a0652a] text-2xl'/>) : (<FaBars className='text-[#b16f2e] text-2xl' /> )}
        </button>
    </div>
    </>
  )
}

export default Navbar2