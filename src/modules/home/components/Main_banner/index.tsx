'use client';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../Main_banner/main_banner.css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const MainBanner = () => {
  const banner_gp = [
    {
      src: "https://images.unsplash.com/photo-1529058993007-d6011678776d?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       header: "Modern Products",
            para : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      src: "https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Da Mouth AngerFist",
      para : "facere aperiam deleniti possimus, quaerat necessitatibus obcaecati "
    },
    {
      src: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Revolution AngerFist",
      para : "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      src: "https://images.unsplash.com/photo-1520316587275-5e4f06f355e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Knock Knock AngerFist",
      para : " Facilis veritatis commodi odit qui similique porro hic."
    },
  ];
 

  return (
    <div className="w-full  h-[80%] overflow-y-hidden  ">
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      speed={1000}
      loop
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className={"mySwiper h-full "}
    >
      {banner_gp.map((banner, index) => (
        <SwiperSlide key={index} className='w-full '>
          <div 
            className='w-full h-screen bg-cover bg-center flex flex-col justify-start lg:pt-[10%] md:pt-[20%] pt-[50%]  items-center'
            style={{ backgroundImage: `url(${banner.src})` }}
          >
               <h1 className=' text-gray-100 lg:text-[60px] md:text-[50px] text-[30px] font-semibold font-sans '>{banner.header}</h1>
             <p className=' md:w-[60%] w-[80%] text-gray-200 text-center lg:text-[24px] md:text-[20px] text-[18px] mt-[10px]'>{banner.para}</p>
              <a className=' py-[5px] mt-[25px] cursor-pointer px-[25px] bg-transparent transition-all duration-500 hover:border-yellow-700  hover:bg-yellow-700 text-white border-[2px] text-[20px] font-semibold border-white'>Learn More</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default MainBanner;