import React from 'react'
import {Button1 , Button2} from '../Botton/Button'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";



const Footer = () => {
  const quicklink = [
    {name:'Home' , route:'/'},
    {name:'Service' , route:'/'},
    {name:'About' , route:'/'},
    {name:'Porfolio' , route:'/'},
    {name:'Blogs' , route:'/'},
    {name:'Contact' , route:'/'},
  ]

  const sociallink = [
    {name:<FaFacebookF/> , route:'/'},
    {name:<FaLinkedinIn/> , route:'/'},
    {name:<FaInstagram/> , route:'/'},
    {name:<FaTwitter/> , route:'/'},
    {name:<FaThreads/> , route:'/'},
    
  ]


  return (
   <>
   <div className='text-gray-600 p-5'>

    <div className='grid grid-cols-3 gap-10 '>
    <div className=' flex flex-col items-start relative  w-full'>
    <div className='relative flex '>
        <h1 className='z-10 text-black text-xl md:text-2xl font-bold absolute left-3 top-1.5'>ProTech..</h1>
        <div  className= 'z-0 bg-[#db8a3b]  h-12 w-12 rounded-full absolute top-0 left-0'></div>
      </div>
      <div className='mt-16'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus amet quibusdam fugit natus nihil aspernatur ut voluptatum velit inventore.
      </p>
      </div>
      <Button1 name='Write your email address' mt='mt-5' />
      <Button2 name='Subscribe' mt='mt-3'/>
    </div>

    <div className=' w-full flex justify-center'>
    <div className=' flex flex-col items-start  '>
      <h1  className='text-[#db8a3b] text-2xl font-semibold'>Quick Links</h1>

      {quicklink.map((links, index)=>(
        <li className='list-none py-1 hover:text-[#db8a3b]'>
          <Link to={links.route}>{links.name}</Link>
        </li>
      ))}
    </div>
    </div>

    <div className='  w-full'>
    <div className=' flex flex-col items-start '>
      <h1 className='text-[#db8a3b] text-2xl font-semibold mb-5'>Social Links</h1>
      <div className='flex '>
      {sociallink.map((links, index)=>(
         <div className='border-2 border-[#db8a3b] p-[7px] rounded-full hover:bg-[#db8a3b] hover:text-white m-1'>
         <a href="" className=''>
          {links.name}
         </a>
       </div>
      ))}
      </div>
    </div>
    </div>

    </div>

    </div>
   
   </>
  )
}

export default Footer