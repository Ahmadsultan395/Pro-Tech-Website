import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Portfolio/Portfolio.css'

const TestimonialMain = () => {

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
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024, // Medium screens (tablets, small desktops)
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 900, // Medium screens (tablets, small desktops)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600, // Small screens (mobile devices)
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true, // Ensure full width on small screens
                centerPadding: "0px" // Remove extra padding
            }
          }
        ]
      };
      
  return (
        <>
      <div className='px-8 py-10 md:px-28 mt-10 bg-gray-100 '>
        <div className='flex flex-col md:flex-row items-center mb-5'>
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-black font-bold'>
                Testimonails
            </h1>
        </div>
      <Slider {...settings} className=''>
      {listData.map((row, index)=>(
        <div key={index} className='max-w-full md:max-w-full border-[1px] border-gray-700  p-5 rounded-xl'>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto magnam quasi aut similique totam molestias.
        </p>
        <h1 className='text-[1.2rem] font-bold mt-5'>Tech pro</h1>
        <p className='text-[.9rem] text-[#db8a3b]'>description</p>
    </div>
      ))}
      
  </Slider>
      </div>
        </>
  )
}

export default TestimonialMain