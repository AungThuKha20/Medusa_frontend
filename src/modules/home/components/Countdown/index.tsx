import React from "react"
import Countdown from "react-countdown"

const TimeRemaining = ({ targetDate }:{targetDate:Date}) => {
   const p_style = " w-[22%] py-[10px] bg-white md:text-[16px] text-[14px] rounded-[10px] font-semibold flex flex-col text-slate-600";
  return (
    <div>
      <Countdown
        date={new Date(targetDate)}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span>Time's up!</span>
          }
          return (
            <div className=" flex justify-between text-center w-full lg:px-[14px] md:px-[10px]  px-[15px] absolute lg:bottom-[20%] md:bottom-[26%] bottom-[115px]">
              <p className={`${p_style}`}>
                {days} <br /> <span className=" md:text-[14px]  sm:text-[12px] font-normal"> Days</span>
              </p>{" "}
              <p className={`${p_style}`}>
                {hours} <br /> <span className=" md:text-[14px] sm:text-[12px] font-normal"> Hours</span>
              </p>{" "}
              <p className={`${p_style}`}>
                {minutes} <br /> <span className=" md:text-[14px] sm:text-[12px] font-normal"> Mins</span>
              </p>{" "}
              <p className={`${p_style}`}>
                {seconds} <br /> <span className=" md:text-[14px] sm:text-[12px] font-normal"> Sec</span>
              </p>
            </div>
          )
        }}
      />
    </div>
  )
}

export default TimeRemaining
