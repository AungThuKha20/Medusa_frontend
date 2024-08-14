"use client"
import React, { useRef, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Autoplay, Navigation } from "swiper/modules"
import TimeRemaining from "../Countdown"
import StarRating from "../Star_rating"

const Deal = ({ products, iconList, quickBtnStyle }:{products:Array<any>,iconList:Array<any>,quickBtnStyle:string}) => {
  const [cardsPerSlide, setCardsPerSlide] = useState(4)
  const [swiperSpeed ,setSwiperSpeed] = useState(1000)

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>
  }

  const chunkedProducts = Array.from(
    { length: Math.ceil(products.length / cardsPerSlide) },
    (_, i) =>
      products.slice(i * cardsPerSlide, i * cardsPerSlide + cardsPerSlide)
  )

  const flash1 = [
    {
      img: "https://images.unsplash.com/photo-1660782937311-b95c36bfa46d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      remainTime: "2024-10-31T23:59:29",
    },
    {
      img: "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTUzNTgzMHx8ZW58MHx8fHx8",
      remainTime: "2024-09-20T22:59:51",
    },
    {
      img: "https://images.unsplash.com/photo-1554735490-5974588cbc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      remainTime: "2024-08-31T04:59:31",
    },
    {
      img: "https://images.unsplash.com/photo-1556756483-7bf188a604e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwcm9kdWN0fGVufDB8fDB8fHww",
      remainTime: "2024-11-22T18:59:22",
    },
    {
      img: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      remainTime: "2024-10-31T23:59:33",
    },
    {
      img: "https://images.unsplash.com/photo-1524738258074-f8125c6a7588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      remainTime: "2024-08-20T04:59:44",
    },
    {
      img: "https://images.unsplash.com/photo-1588800347304-ec7e6f353327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8VXBlNGRacWYzX0V8fGVufDB8fHx8fA%3D%3D",
      remainTime: "2024-10-09T11:59:55",
    },
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxwcm9kdWN0fGVufDB8fDB8fHww",
      remainTime: "2024-09-24T12:59:11",
    },
    {
      img: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      remainTime: "2024-09-12T23:59:24",
    },
    {
      img: "https://images.unsplash.com/photo-1552879948-16c32e175ae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      remainTime: "2024-12-31T01:59:55",
    },
  ]

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperInstance = document.querySelector(".mySwiper")?.swiper
      swiperInstance.params.navigation.prevEl = prevRef.current
      swiperInstance.params.navigation.nextEl = nextRef.current
      swiperInstance.navigation.update()
    }

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1)
        setSwiperSpeed(300)
      } else if (window.innerWidth < 768) {
        setCardsPerSlide(2)
      } else if (window.innerWidth < 1280) {
        setCardsPerSlide(3)
      } else {
        setCardsPerSlide(4)
        setSwiperSpeed(1000)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [prevRef, nextRef])

  return (
    <div className=" w-full md:mt-[80px] mt-[50px] flex flex-col items-center relative max-w-[1660px]">
      <h1 className="red lg:text-[46px] md:text-[36px] text-[26px] text-center mt-[50px] xl:mb-[80px] md:mb-[50px] mb-[40px] relative md:w-[500px] w-[60%]">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom absolute top-[50%] translate-y-[-50%] md:text-[30px] text-[20px] left-0"
        >
          <AiOutlineLeft className="icon-thin" />
        </button>
        Flash Deals
        <button
          ref={nextRef}
          className="swiper-button-next-custom absolute top-[50%] translate-y-[-50%] md:text-[30px] text-[20px] right-0"
        >
          <AiOutlineRight className="icon-thin" />
        </button>
      </h1>
      <div className="flex items-center justify-center w-full ">
        <Swiper
          rewind={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation,Autoplay]}
          speed={swiperSpeed}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full"
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          {chunkedProducts.map((productChunk, index) => (
            <SwiperSlide key={index} className="flex w-full">
              <div
                className={`grid grid-cols-${cardsPerSlide} lg:gap-x-[30px] gap-x-[10px] gap-y-[0px] w-full`}
              >
                {productChunk.map((ch, idx) => {
                  const discountPercentage = Math.random() * 70
                  const discountedPrice = (ch.l_name =
                    ch.price - (ch.price * discountPercentage) / 100)

                  // Get an image and remainTime from the flash1 array
                  const imageIndex =
                    (index * cardsPerSlide + idx) % flash1.length
                  const { img: randomImage, remainTime } = flash1[imageIndex]

                  return (
                    <div
                      key={ch.id}
                      className=" h-full w-full    overflow-hidden relative group"
                    >
                      <div className="lg:h-[500px] rounded-[10px]   h-[350px] select-none overflow-hidden">
                        <img
                          src={randomImage}
                          className=" h-full w-full  group-hover:scale-110 object-cover transition-transform duration-1000"
                          alt={ch.title}
                        />
                      </div>
                      <TimeRemaining targetDate={new Date(remainTime)} />

                      <div className="flex-col top-0 right-0 gap-[8px] absolute flex p-[10px]">
                        {iconList.map((item, iconIdx) => (
                          <button key={iconIdx} className={`${quickBtnStyle}`}>
                            {item.icon}
                          </button>
                        ))}
                      </div>
                      <span className="px-[10px] py-[4px] text-slate-50 rounded-tl-[10px] rounded-br-[10px] left-0 top-0 bg-red-700 md:text-[18px] text-[15px] absolute">
                        {discountPercentage.toFixed(0)}% OFF
                      </span>
                      <div className="pb-[10px] px-[10px] h-full">
                        <div className="flex flex-col items-center">
                          <div className="mt-[0px]">
                            <StarRating rating={ch.rating} />
                          </div>
                          <p className="mb-[3px] md:text-[18px] text-[16px]">
                            {ch.title}
                          </p>
                          <p className="mb-2 md:text-[16px] text-[14px]">
                            ${discountedPrice.toFixed(0)}{" "}
                            <span className="ml-[5px] text-slate-500 md:text-[15px] text-[13px] line-through">
                              ${ch.price.toFixed(0)}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Deal
