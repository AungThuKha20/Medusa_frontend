"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "../Arrival/arrival.css"
import "swiper/css"
import "swiper/css/navigation"
import { FaCartPlus, FaRegHeart, FaRegImage } from "react-icons/fa"
import { Navigation, Autoplay } from "swiper/modules"
import StarRating from "../Star_rating"

const Arrival = () => {
  const Slidee = [
    {
      card: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      content: "img1",
    },
    {
      card: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      content: "img2",
    },
    {
      card: "https://plus.unsplash.com/premium_photo-1681711648620-9fa368907a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxwcm9kdWN0fGVufDB8fDB8fHww",
      content: "img3",
    },
  ]
  const iconList = [
    { icon: <FaCartPlus size={20} />, key: "cart" },
    { icon: <FaRegHeart size={20} />, key: "heart" },
    { icon: <FaRegImage size={20} />, key: "image" },
  ]
  const quickBtnStyle =
    "transition-all hover:text-slate-50 text-slate-800  hover:bg-slate-600 flex justify-center items-center duration-300 lg:w-0 lg:h-0 w-[35px] h-[35px] lg:opacity-0 group-hover:w-[35px] group-hover:h-[35px] group-hover:opacity-100 rounded-full bg-slate-50"
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      title: "Stylish Sofa",
      price: "$499",
      rating: 4.5,
      description:
        "A comfortable and stylish sofa perfect for any living room.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1719609141104-afeaa94f458c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxwcm9kdWN0fGVufDB8fDB8fHww",
      title: "Modern Chair",
      price: "$299",
      rating: 3.2,
      description: "A modern chair that combines style and comfort.",
    },
    {
      img: "https://images.unsplash.com/photo-1555378322-a8e1515568e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNob2V8ZW58MHx8MHx8fDA%3D",
      title: "Elegant Coffee Table",
      price: "$199",
      rating: 4.7,
      description: "An elegant coffee table that fits perfectly in any home.",
    },
    {
      img: "https://images.unsplash.com/photo-1530914547840-346c183410de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      title: "Classic Armchair",
      price: "$349",
      rating: 5,
      description:
        "A classic armchair that adds a touch of elegance to your space.",
    },
    {
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      title: "Luxury Bed",
      price: "$799",
      rating: 4.8,
      description: "A luxurious bed that ensures a good night's sleep.",
    },
    {
      img:"https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      title: "Stylish Bookshelf",
      price: "$249",
      rating: 4.3,
      description: "A stylish bookshelf that enhances your home's decor.",
    },
    {
      img:"https://images.unsplash.com/photo-1522115174737-2497162f69ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      title: "Elegant Coffee Table",
      price: "$199",
      rating: 4.7,
      description: "An elegant coffee table that fits perfectly in any home.",
    },
    {
      img: "https://images.unsplash.com/photo-1520091276903-2d35a24fab56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",

      title: "Classic Armchair",
      price: "$349",
      rating: 4.4,
      description:
        "A classic armchair that adds a touch of elegance to your space.",
    },
    {
      img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNob2V8ZW58MHx8MHx8fDA%3D",

      title: "Luxury Bed",
      price: "$799",
      rating: 4.8,
      description: "A luxurious bed that ensures a good night's sleep.",
    },
  ]

  return (
    <div className="px-[2.5%] w-full max-w-[1660px]">
      <h1 className="red lg:text-[46px] md:text-[36px] text-[26px] text-center lg:mb-[80px] mb-[50px]">New Arrival</h1>
      <div className="flex xl:flex-row flex-col  gap-[30px] ">
        <div className=" xl:w-2/6 w-full ">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="SlideSwiper w-full xl:h-[970px] h-[900px]  "
          >
            {Slidee.map((sl, index) => (
              <SwiperSlide key={index} className="">
                <figure className="select-none w-full group h-full">
                  <img
                    className="w-full h-full cursor-pointer transition-all duration-1000 object-cover"
                    src={sl.card}
                    alt={sl.content}
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="xl:w-4/6 w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[20px]">
            {cards.map((ca, index) => (
              <div
                key={index}
                className="w-full h-fit overflow-hidden relative   group"
              >
                <div className=" xl:h-[200px] h-[300px] overflow-hidden">
                  <img
                    src={ca.img}
                    className="w-full xl:h-[200px] h-[300px] group-hover:scale-125 object-cover transition-all duration-1000  bg-black"
                    alt={ca.title}
                  />
                </div>
                <div className=" absolute top-0 right-0 flex flex-col p-[10px] gap-[8px]">
                  {iconList.map((item,i) => (
                    <button key={i} className={quickBtnStyle} >
                      {item.icon} 

                    </button>
                  ))}
                </div>
                <div className="pb-[10px] px-[10px] overflow-hidden  h-[102px] ">
                  <div className="flex flex-col items-center transition-all duration-500  lg:group-hover:translate-y-[-50px]">
                    <StarRating rating={ca.rating} />
                    <p className="text-[18px] my-2 mt-[0px] lg:group-hover:mt-[30px]">
                      {ca.title}
                    </p>
                    <p className=" lg:group-hover:text-[0px] group-hover:mt-0">
                      {ca.price}
                    </p>
                    <button
                      className="w-full py-[8px] hover:bg-slate-900 border-[1px] hover:border-transparent
                hover:text-slate-50 text-[16px] mt-2 bg-white border-slate-800 transition-all lg:flex items-center justify-center  hidden duration-300 text-slate-800 font-semibold"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arrival
