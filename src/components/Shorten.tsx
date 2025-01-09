import React from 'react'

const Shorten = () => {
  return (
    <section className='shorten bg-[#292929] w-full h-[900px] relative -top-[4.6rem] pt-14'>
      <div className='flex flex-row -rotate-[3.6deg] overflow-hidden'>
        {Array(2)
          .fill(["shortlink", "Microsite", "CustomLink", "Manage"])
          .flat()
          .map((data, index) => (
            <span key={index} className="inline-flex font-[630] items-center text-[#6b6b6b] text-[3.3rem]">
              {data.toUpperCase()}
              <span className="mx-4">•</span>
            </span>
          ))}
      </div>
      <div className='flex flex-row overflow-hidden bg-[#8039DF] h-11 absolute z-10 top-[110px] py-14'>
        {Array(2)
          .fill(["shortlink", "Microsite", "CustomLink", "Manage"])
          .flat()
          .map((data, index) => (
            <span key={index} className="inline-flex font-[630] items-center text-white text-[3.3rem]">
              {data.toUpperCase()}
              <span className="mx-4">•</span>
            </span>
          ))}
      </div>

    </section>
  )
}

export default Shorten