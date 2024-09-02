import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";





const Hero = () => {
  return (
    <div className='bg-[url("/bg3.png")] w-full h-[100vh] bg-cover bg-no-repeat bg-center '>
        <div>
            <Navbar/>
        </div>
        <div  className='flex flex-col md:flex-row  '>
        <div className=' px-8 py-16 md:px-28 md:py-20'>
          <h1 className='text-4xl md:text-7xl font-bold '>Chris Lucas</h1>
          <h1 className='text-4xl md:text-7xl font-bold text-black mb-3 md:mb-6'>Creative Design</h1>
          <p className='text-[0.9rem] md:text-[1rem]'>Creating responsive, high-performance websites with seamless user experiences using modern web technologies.</p>
          <button className='bg-white px-2 py-2 md:px-5 md:py-2 rounded-[10px] border-[2px] border-[#db8a3b]
          text-[0.9rem] md:text-[1rem] font-semibold mt-7 md:mt-10 hover:bg-[#db8a3b] hover:text-white transition duration-500' >Contact Us</button>
        </div>
        <div className='px-8 py-5 md:px-10 md:py-20 flex flex-row md:flex-col '>
         <a href="www.google.com">
         <div className='bg-white p-2 rounded-full border-[1px] border-[#db8a3b] hover:bg-[#db8a3b]
          transition duration-500 m-1 flex items-center justify-center'>
            <FaFacebookF className=' text-[.8rem] md:text-[1rem] hover:text-white' /> 
            </div>
         </a>
         <a href="www.google.com">
         <div className='bg-white p-2 rounded-full border-[1px] border-[#db8a3b] hover:bg-[#db8a3b]
          transition duration-500 m-1 flex items-center justify-center'>
            <FaInstagram className=' text-[.8rem] md:text-[1rem] hover:text-white' /> 
            </div>
         </a>
         <a href="www.google.com">
         <div className='bg-white p-2 rounded-full border-[1px] border-[#db8a3b] hover:bg-[#db8a3b]
          transition duration-500 m-1 flex items-center justify-center'>
            <FaTwitter className=' text-[.8rem] md:text-[1rem] hover:text-white' /> 
            </div>
         </a>
         <a href="www.google.com">
         <div className='bg-white p-2 rounded-full border-[1px] border-[#db8a3b] hover:bg-[#db8a3b]
          transition duration-500 m-1 flex items-center justify-center'>
            <FaLinkedinIn className=' text-[.8rem] md:text-[1rem] hover:text-white' /> 
            </div>
         </a>
         <a href="www.google.com">
         <div className='bg-white p-2 rounded-full border-[1px] border-[#db8a3b] hover:bg-[#db8a3b]
          transition duration-500 m-1 flex items-center justify-center'>
            <FaThreads className=' text-[.8rem] md:text-[1rem] hover:text-white' /> 
            </div>
         </a>
        </div>
        </div>
    </div>
  )
}

export default Hero