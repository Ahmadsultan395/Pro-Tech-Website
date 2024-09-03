import React from 'react'
import { SiWebex } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";


const NewsMain = () => {
  const  listData = [
        {icon:<FaApple/>, title:'App Development' , 
            subtitle:'Design / 22 Aug, 2021'
        },        {icon:<FaWebflow/>, title:'Web Development' , 
            subtitle:'Design / 22 Aug, 2021'
        },        {icon:<FaDigitalOcean/>, title:'Digital Marketing' , 
            subtitle:'Design / 22 Aug, 2021'
        }
    ]
  return (
    <>
    <div className='px-8 py-5 md:py-10 md:px-28'>
        <div className='flex justify-center items-center flex-col'> 
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-black font-bold text-center'>
                Latest News
            </h1>
            <p className='text-[.9rem] md:text-[1rem]  w-full md:w-[50%] text-center'>
            We offer cutting-edge software solutions, from web development and mobile apps to cloud services and digital marketing.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-3 md:gap-3  mt-3 md:mt-0'>
            {listData.map((row, index)=>(
                <div key={index} className='md:max-w-full border-[1px] h-96 p-5 mt-0 md:mt-10 
                 cursor-pointer  hover:bg-[#db8a3b] group transition duration-300 bg-[url("/wport.jpg")]
                 bg-cover bg-center object-cover'>
                {/* <h1 className='text-xl md:text-3xl mb-2 text-[#db8a3b] group-hover:text-white transition duration-300'>
                    {row.icon}
                </h1> */}
                <div className='w-full h-full flex flex-col justify-end'>
                <p className='text-[0.9rem] md:text-[1rem] text-gray-700 group-hover:text-white transition duration-300'>{row.subtitle}</p>
                <h1 className='text-[1.1rem] md:text-[1.8rem] font-bold text-white mb-2 group-hover:text-white transition duration-300'>{row.title}</h1>
                </div>
            </div>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default NewsMain