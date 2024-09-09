import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Portfolio.css'

const PortfolioMain = () => {

    const listData = [
        {img:'/wport.jpg',
            title:'Web Development',
            subtitle:'websites'
        },
        {img:'/aport.jpg',
            title:'App Development',
            subtitle:'websites'
        },
        {img:'/dport.jpg',
            title:'Digital Marketing',
            subtitle:'websites'
        }

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024, // Medium screens (tablets, small desktops)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600, // Small screens (mobile devices)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
  return (
        <>
      <div className='px-8 md:px-28'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-black font-bold'>
                Some Projects
            </h1>
            <p className='uppercase text-[.9rem] md:text-[1rem] text-center'>View All Project 
                <div className='border-b-2 border-gray-700 h-2   -mt-1 m-auto'></div>
                </p>
                <button>View</button>
        </div>
      <Slider {...settings} >
      {listData.map((row, index)=>(
        <div key={index} className='max-w-full'>
        <div className='h-[18rem] rounded-xl overflow-hidden mx-1'>
        <img src={row.img}  alt="" className=' w-full h-full object-cover'/>
        </div>
        <div>
            <p className='text-[.9rem] md:text-[1rem] pt-4 bd-2 text-gray-700'>{row.subtitle}</p>
            <h1 className='text-[.9rem] md:text-[1rem] font-bold'>{row.title}</h1>
        </div>
    </div>
      ))}
      
  </Slider>
      </div>
        </>
  )
}

export default PortfolioMain