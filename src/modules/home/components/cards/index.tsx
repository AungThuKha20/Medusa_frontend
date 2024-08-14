"use client"
import React, { useEffect, useState } from "react"
import { FaCartPlus, FaRegHeart, FaRegImage } from "react-icons/fa"
import StarRating from "../Star_rating"
import { motion } from "framer-motion"
import Deal from "../Deal"
import { MdKeyboardArrowDown } from "react-icons/md"
const Card = () => {
  const [active, setActive] = useState("hot")
  const [isMobile, setIsMobile] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSelect = (l_name) => {
    setActive(l_name)
    setIsDropdownOpen(false)
  }
  const cate_links = [
    {
      l_name: "hot",
    },
    {
      l_name: "arrivals",
    },
    {
      l_name: "trending",
    },
    {
      l_name: "sale off",
    },
  ]
  const iconList = [
    { icon: <FaCartPlus size={20} />, key: "cart" },
    { icon: <FaRegHeart size={20} />, key: "heart" },
    { icon: <FaRegImage size={20} />, key: "image" },
  ]
   const quickBtnStyle =
    "transition-all hover:text-slate-50 text-slate-800  hover:bg-slate-600 flex justify-center items-center duration-300 lg:w-0 lg:h-0 w-[35px] h-[35px] lg:opacity-0 group-hover:w-[35px] group-hover:h-[35px] group-hover:opacity-100 rounded-full bg-slate-50"
  const products = [
    {
      l_name: "hot",
      title: "Hot Product 1",
      rating: 4.5,
      price: 19.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 2",
      rating: 4.2,
      price: 29.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 3",
      rating: 4.0,
      price: 39.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 4",
      rating: 4.8,
      price: 49.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 5",
      rating: 4.3,
      price: 59.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 6",
      rating: 4.6,
      price: 69.99,
      isHighlight: true,
    },
    {
      l_name: "hot",
      title: "Hot Product 7",
      rating: 4.7,
      price: 79.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 8",
      rating: 4.1,
      price: 89.99,
    },
    {
      l_name: "hot",
      title: "Hot Product 9",
      rating: 4.4,
      price: 99.99,
    },

    // Arrivals Items
    {
      l_name: "arrivals",
      title: "New Arrival 1",
      rating: 4.5,
      price: 15.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 2",
      rating: 4.0,
      price: 25.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 3",
      rating: 4.7,
      price: 35.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 4",
      rating: 4.2,
      price: 45.99,
      isHighlight: true,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 5",
      rating: 4.4,
      price: 55.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 6",
      rating: 4.1,
      price: 65.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 7",
      rating: 4.6,
      price: 75.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 8",
      rating: 4.3,
      price: 85.99,
    },
    {
      l_name: "arrivals",
      title: "New Arrival 9",
      rating: 4.8,
      price: 95.99,
    },

    // Trending Items
    {
      l_name: "trending",
      title: "Trending Item 1",
      rating: 4.7,
      price: 18.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 2",
      rating: 4.6,
      price: 28.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 3",
      rating: 4.5,
      price: 38.99,
      isHighlight: true,
    },
    {
      l_name: "trending",
      title: "Trending Item 4",
      rating: 4.4,
      price: 48.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 5",
      rating: 4.3,
      price: 58.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 6",
      rating: 4.2,
      price: 68.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 7",
      rating: 4.1,
      price: 78.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 8",
      rating: 4.8,
      price: 88.99,
    },
    {
      l_name: "trending",
      title: "Trending Item 9",
      rating: 4.0,
      price: 98.99,
    },

    // Sale Off Items
    {
      l_name: "sale off",
      title: "Sale Off Item 1",
      rating: 4.4,
      price: 10.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 2",
      rating: 4.3,
      price: 20.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 3",
      rating: 4.2,
      price: 30.99,
      isHighlight: true,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 4",
      rating: 4.1,
      price: 40.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 5",
      rating: 4.0,
      price: 50.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 6",
      rating: 4.7,
      price: 60.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 7",
      rating: 4.6,
      price: 70.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 8",
      rating: 4.5,
      price: 80.99,
    },
    {
      l_name: "sale off",
      title: "Sale Off Item 9",
      rating: 4.8,
      price: 90.99,
    },
  ]
  const img_sale =
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
  const img_trend =
    "https://images.unsplash.com/photo-1561909848-977d0617f275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
  const img_arrivals =
    "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
  const img_hot =
    "https://images.unsplash.com/photo-1555378322-2d4b84bc2790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2V8ZW58MHx8MHx8fDA%3D"
  return (
    <div className="px-[2.5%] w-full flex flex-col items-center max-w-[1660px]">
      <h1 className="red lg:text-[46px] md:text-[36px] text-[26px] text-center mt-[50px] xl:mb-[50px] mb-[50px]">
        Our Products
      </h1>
      <div className=" w-full flex justify-center">
        {isMobile ? (
          <div className="relative w-full">
            <div
              onClick={toggleDropdown}
              className="md:w-[30%] w-[40%] px-2 py-[4px] text-[16px] select-none border border-slate-400  capitalize rounded-lg cursor-pointer flex justify-between items-center"
            >
              <span>{active}</span>
              <MdKeyboardArrowDown
                size={25}
                className={` text-gray-700 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 md:w-[30%] w-[40%] bg-white border border-slate-400 rounded-md mt-1">
                {cate_links.map((ca, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(ca.l_name)}
                    className="px-2 py-[2px] text-[16px] hover:bg-slate-950 select-none hover:text-slate-50 capitalize cursor-pointer"
                  >
                    {ca.l_name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="w-[500px] flex justify-between">
            {cate_links.map((ca, index) => (
              <a
                key={index}
                onClick={() => setActive(ca.l_name)}
                className={`${
                  active === ca.l_name
                    ? "border-b-[3px] text-slate-950 border-slate-500"
                    : " opacity-30"
                } uppercase text-[20px]  hover:opacity-100 transition-opacity duration-500 font-medium select-none cursor-pointer py-[10px] `}
              >
                {ca.l_name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="w-full  flex justify-center lg:mt-[50px]  mt-[20px]">
        <div className="w-full flex flex-col items-center">
          <div className="grid w-full xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 grid-rows-2 lg:gap-[20px] md:gap-[15px]  gap-[10px]">
            {products
              .filter((currentProduct) => currentProduct.l_name === active)
              .map((ca, index) => {
                const discountPercentage =
                  ca.l_name === "sale off" ? Math.random() * 50 : 0
                const discountedPrice =
                  ca.l_name === "sale off"
                    ? ca.price - (ca.price * discountPercentage) / 100
                    : ca.price

                return (
                  <div
                    key={index}
                    className={`animate_animated animate_fadeIn h-full w-full overflow-hidden relative group ${
                      ca?.isHighlight
                        ? "row-span-2 md:col-span-2 col-span-1 lg:col-start-3 md:col-start-1 row-start-1"
                        : ""
                    }`}
                  >
                    <div
                      className={`${
                        ca.isHighlight && active === ca.l_name
                          ? "lg:h-[85%] md:h-[86%] h-[400px]"
                          : "md:h-[250px] h-[300px]"
                      } select-none overflow-hidden`}
                    >
                      <motion.img
                        key={active}
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        src={
                          active === "sale off"
                            ? img_sale
                            : active === "hot"
                            ? img_hot
                            : active === "arrivals"
                            ? img_arrivals
                            : active === "trending"
                            ? img_trend
                            : img_hot
                        }
                        className={`${
                          ca.isHighlight ? "h-full" : "md:h-[250px] h-[300px]"
                        } w-full group-hover:scale-110 object-cover transition-transform duration-1000 bg-black`}
                        alt={ca.title}
                      />
                    </div>
                    <div
                      className={`${
                        ca.isHighlight
                          ? "flex-row left-[50%] translate-x-[-50%] lg:bottom-[15%] bottom-[110px]  md:gap-[30px] gap-[20px]"
                          : "flex-col top-0 right-0 gap-[8px]"
                      } absolute flex p-[10px]`}
                    >
                      {iconList.map((item, i) => (
                        <button key={i} className={`${quickBtnStyle}  `}>
                          {item.icon}
                        </button>
                      ))}
                    </div>
                    {ca.l_name === "sale off" && (
                      <span className=" px-[10px] py-[4px] text-slate-50 left-0 top-0 rounded-br-xl bg-red-700 text-[17px] absolute">
                        {discountPercentage.toFixed(0)}% OFF
                      </span>
                    )}
                    <div className="lg:pb-[10px] pb-[5px] px-[10px] h-full">
                      <div className="flex flex-col items-center">
                        <div className="mt-[0px]">
                          <StarRating rating={ca.rating} />
                        </div>
                        <p className="lg:mb-[5px] mb-[2px] text-[18px]">{ca.title}</p>
                        <p className="mb-2 text-[16px]">
                          ${discountedPrice.toFixed(0)}{" "}
                          {ca.l_name === "sale off" && (
                            <span className="ml-[5px] text-slate-500 text-[15px] line-through">
                              ${ca.price.toFixed(0)}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          <button className=" md:py-[10px] py-[4px] rounded-md hover:bg-slate-800 md:text-[16px] text-[14px] mt-[40px] transition-all duration-200 hover:text-slate-50 border-slate-900 text-slate-900 md:px-[80px] px-[70px] border-[1px]">
            View All
          </button>
        </div>
      </div>
      <Deal
        products={products}
        iconList={iconList}
        quickBtnStyle={quickBtnStyle}
      />
    </div>
  )
}

export default Card
