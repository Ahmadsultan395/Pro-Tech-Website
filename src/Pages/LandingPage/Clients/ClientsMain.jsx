import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Portfolio/Portfolio.css'

const ClientsMain = () => {

    const listData = [
        {img:'/clients1.png',
            title:'Web Development',
            subtitle:'websites'
        },
        {img:'/clients2.png',
            title:'App Development',
            subtitle:'websites'
        },
        {img:'/clients1.png',
            title:'Digital Marketing',
            subtitle:'websites'
        }

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024, // Medium screens (tablets, small desktops)
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 600, // Small screens (mobile devices)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      
  return (
        <>
      <div className='px-8 md:px-28 mt-10 bg-gradient-to-b from-white to-gray-200'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-black font-bold'>
                Some Projects
            </h1>
        </div>
      <Slider {...settings} >
      {listData.map((row, index)=>(
        <div key={index} className='max-w-sm '>
        <div className='h-[18rem] rounded-xl overflow-hidden mx-1 flex justify-center items-center'>
        <img src={row.img}  alt="" />
        </div>
    </div>
      ))}
      
  </Slider>
      </div>
        </>
  )
}

export default ClientsMain