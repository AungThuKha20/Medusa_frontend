import React from "react"

const Categories = () => {
  const cards = [
    {
      content: "Coming Soon",
      style:" text-slate-100",
      button_style:"bg-slate-100 text-slate-900 bg-opacity-80 hover:bg-gray-100 ",
      img: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      style: " w-[60%]",
      content: "Popular ",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      content: "Moderns",
      style:" text-slate-100",
      button_style:"bg-slate-100 text-slate-900 bg-opacity-80 hover:bg-gray-100 ",
      img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxwcm9kdWN0fGVufDB8fDB8fHww",
    },

  ]

  return (
    <div className="flex justify-center w-full">
      <div className=" flex md:flex-row flex-col justify-center gap-[10px]  w-full px-[2.5%]  max-w-[1660px]  ">
        {cards.map((card, index) => (
        <div key={index} className="group w-full h-full cursor-pointer overflow-hidden relative">
        <img
          src={card.img}
          alt={card.content}
          className="object-cover w-full transition-transform duration-700 lg:h-[300px]  md:h-[250px] h-[320px] rounded-md group-hover:scale-105"
        />
        <div className="absolute lg:top-[10px] md:top-[150px] top-[55%] left-0  lg:p-[30px] md:p-[10px] p-[30px]  rounded-md">
          <p className={`lg:text-[36px] md:text-[26px] text-[30px] mb-[10px] ${card.style} font-semibold`}>{card.content}</p>
          <a href="#" className={`${card ?.button_style || ` bg-slate-900 bg-opacity-90 leading-none text-slate-50 hover:bg-yellow-900 `} lg:px-[40px] md:px-[30px] px-[40px] transition-all duration-500 py-[8px] md:py-[5px] lg:py-[6px]  lg:text-[18px] text-[16px] align-middle content-center  font-semibold   `}>
            Shop Now
          </a>
        </div>
      </div>
      
        ))}
      </div>
    </div>
  )
}

export default Categories
