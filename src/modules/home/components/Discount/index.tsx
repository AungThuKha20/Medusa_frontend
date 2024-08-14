"use client"
import React, { useState } from "react"

const Discount = () => {
  const cards = [
    {
      img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      content: "UP TO 30%OFF",
    },
    {
      img: "https://images.unsplash.com/photo-1637160151664-0afc8ecd112f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      content: "UP TO 10%OFF",
    },
  ];

  return (
    <div className="flex justify-center w-full lg:mt-[100px] mt-[50px]">
      <div className="flex md:flex-row flex-col  justify-center gap-[20px] w-full px-[2.5%] max-w-[1660px]">
        {cards.map((card, index) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <div
              key={index}
              className="md:w-1/2 w-full xl:h-[400px] lg:h-[350px] h-[300px] relative select-none"
              style={{ overflow: 'hidden' }}
            >
              <img
                src={card.img}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
                alt=""
              />
              <div className="absolute xl:bottom-[15%] bottom-[74%] left-[5%]">
                <p className="text-gray-950 lg:text-[35px] md:text-[30px] text-[25px] font-semibold">{card.content}</p>
                <a
                  className="text-gray-950 text-[14px] border-b-[1px] hover:text-orange-900 font-semibold transition-all hover:border-orange-900 duration-500 border-slate-950 "
                  href=""
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Discovery Now
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Discount
