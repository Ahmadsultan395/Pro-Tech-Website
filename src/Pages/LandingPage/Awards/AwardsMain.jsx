import React from 'react'
import { SiWebex } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";


const AwardsMain = () => {
  const  listData = [
    {year:'2023', title:'Real Estate Platform' , 
        desc:'Built a real estate platform with property listings, search filters, and integrated contact options for agents.'
    },        {year:'2023', title:'LMS' , 
        desc:' Developed a Learning Management System (LMS) with course management, student progress tracking, and online assessments.'
    },        {year:'2023', title:'E-commerce ' , 
        desc:'Designed an online booking system with calendar integration, automated confirmations, and user-friendly interfaces.'
    }, 
        {year:'2022', title:'Social Connect' , 
            desc:'Developed a dynamic social media platform with real-time messaging, user profiles, and content sharing features.'
        },        {year:'2022', title:'Shop Master' , 
            desc:'Created a comprehensive e-commerce website with product listings, secure payment gateways, and customer account management.'
        },        {year:'2022', title:'PortfolioHub' , 
            desc:'Built a sleek, responsive portfolio website showcasing projects, skills, and professional experience for clients.'
        },
       
    ]
  return (
    <>
    <div className='px-8 py-5 md:py-10 md:px-28'>
        <div>
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-black font-bold text-center'>
               Awards Recognitions
            </h1>
            {/* <p className='text-[.9rem] md:text-[1rem]  w-full md:w-[50%]'>
            We offer cutting-edge software solutions, from web development and mobile apps to cloud services and digital marketing.
            </p> */}
        </div>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-0 mt-0 md:mt-10 '>
            {listData.map((row, index)=>(
                <div key={index} className='md:max-w-full  border-[1px] border-gray-700 p-5 rounded-xl 
                 cursor-pointer  hover:bg-[#db8a3b] group transition duration-300'>
                <h1 className='text-[1rem] md:text-xl mb-2 text-[#db8a3b] group-hover:text-white transition duration-300'>
                    {row.year}
                </h1>
                <h1 className='text-[1.1rem] md:text-[1.5rem] font-bold text-black mb-2 group-hover:text-white transition duration-300'>{row.title}</h1>
                <p className='text-[0.9rem] md:text-[1rem] text-gray-700 group-hover:text-white transition duration-300'>{row.desc}</p>
            </div>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default AwardsMain