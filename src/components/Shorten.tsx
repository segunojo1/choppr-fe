"use client"
import React from 'react'
import { useState } from 'react'
import { GoArrowRight } from "react-icons/go";


const Shorten = () => {
  const [isActive, setIsActive] = useState<number>(1);
  const tabs = [
    {
      title: "Put Link",
      value: 1,
    },
    {
      title: "Click Shortener",
      value: 2,
    },
    {
      title: "Create Custom URL",
      value: 3
    },
    {
      title: "Create QR Code",
      value: 4,
    },
    {
      title: "Put Tracker Link",
      value: 5
    }
  ]
  return (
    <section className='shorten bg-[#292929] w-full h-[900px] relative -top-[4.6rem] pt-16 border-2 border-red-500 flex flex-col items-center overflow-hidden'>
      <div className='flex flex-row -rotate-[3.6deg] overflow-hidden border-2 border-green-500'>
        {Array(2)
          .fill(["shortlink", "Microsite", "CustomLink", "Manage"])
          .flat()
          .map((data, index) => (
            <span key={index} className="inline-flex font-[620] items-center text-[#6b6b6b] text-[3.0rem]">
              {data.toUpperCase()}
              <span className="mx-4">•</span>
            </span>
          ))}
      </div>
      <div className='flex flex-row overflow-hidden bg-[#8039DF] h-11 absolute top-[110px] py-14 mb-10 border-2 border-yellow-500 w-full'>
        {Array(2)
          .fill(["shortlink", "Microsite", "CustomLink", "Manage"])
          .flat()
          .map((data, index) => (
            <span key={index} className="inline-flex font-[620] items-center text-white text-[3.0rem]">
              {data.toUpperCase()}
              <span className="mx-4">•</span>
            </span>
          ))}
      </div>
      <div className='text-white absolute top-56 flex flex-row items-center py-20 border-b-[1px] border-b-white/[.50] w-[85%]'>
        <div className='flex flex-row items-center w-full justify-between'>
          <h3 className='text-5xl uppercase font-bold'>Shorten your link now</h3>
          <div className='flex flex-row bg-white/[.30] h-[60px] w-[450px] border-[1px] border-white/[.50] rounded-lg items-center p-3 justify-between'>
            <input type="text" className='outline-none bg-transparent w-[65%]' placeholder='https://choppr-be.com/mailtumator |' />
            <button className='flex flex-row items-center gap-5 bg-[#8039DF] h-[45px] w-[140px] p-2 rounded-lg justify-center'>
              Short Link
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className='absolute top-[28rem] w-[85%] mt-16 text-white'>
        <div className='flex flex-row items-center w-full justify-between'>
          <h3 className='text-5xl uppercase font-bold text-white'>How we work 👇</h3>
          <p className='w-[550px] text-base text-[#c2c2c2]'>All the products you need to build brands connections, manage links and QR codes, and connect with audiences everywhere, in a single unified platform.</p>
        </div>
        <div className='w-full bg-white/[.40] h-28 mt-14 rounded-lg flex flex-row justify-between items-center'>
          {tabs.map((item, index) => (
            <div key={index} className='flex flex-row items-center w-full justify-center'>
              <div className={`flex flex-row h-[55px] items-center gap-4 cursor-pointer ${isActive === item.value && "bg-[#8039DF] rounded-lg p-4"}`} onClick={() => { setIsActive(item.value) }}>
                <span className='h-7 w-7 flex items-center justify-center bg-white text-[#8039DF] rounded-full text-base font-medium'>{item.value}</span>
                <span className='text-base font-medium'>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Shorten