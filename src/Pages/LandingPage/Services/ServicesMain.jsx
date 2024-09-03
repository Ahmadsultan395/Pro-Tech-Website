import React from 'react'
import { SiWebex } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";


const ServicesMain = () => {
  const  listData = [
        {icon:<FaApple/>, title:'App Development' , 
            desc:'Create high-performance mobile applications designed to engage users, streamline operations, and drive business success, with intuitive interfaces and innovative features tailored to meet specific market demands.'
        },        {icon:<FaWebflow/>, title:'Web Development' , 
            desc:'Develop robust and scalable websites tailored to your business needs, enhancing user experience and optimizing performance to drive engagement and conversion through cutting-edge design and technology.'
        },        {icon:<FaDigitalOcean/>, title:'Digital Marketing' , 
            desc:'Implement comprehensive digital marketing strategies to boost brand visibility, attract and retain customers, and achieve measurable growth through targeted campaigns, SEO, content marketing, and data-driven insights.'
        }
    ]
  return (
    <>
    <div className='px-8 py-5 md:py-10 md:px-28'>
        <div>
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-black font-bold'>
                Our Services
            </h1>
            <p className='text-[.9rem] md:text-[1rem]  w-full md:w-[50%]'>
            We offer cutting-edge software solutions, from web development and mobile apps to cloud services and digital marketing.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-3 md:gap-3  mt-3 md:mt-0'>
            {listData.map((row, index)=>(
                <div key={index} className='md:max-w-full border-[1px] border-gray-700 p-5 rounded-xl mt-0 md:mt-10 
                 cursor-pointer  hover:bg-[#db8a3b] group transition duration-300'>
                <h1 className='text-xl md:text-3xl mb-2 text-[#db8a3b] group-hover:text-white transition duration-300'>
                    {row.icon}
                </h1>
                <h1 className='text-[1.1rem] md:text-[1.8rem] font-bold text-black mb-2 group-hover:text-white transition duration-300'>{row.title}</h1>
                <p className='text-[0.9rem] md:text-[1rem] text-gray-700 group-hover:text-white transition duration-300'>{row.desc}</p>
            </div>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default ServicesMain