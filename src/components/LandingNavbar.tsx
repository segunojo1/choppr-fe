"use client"
import Link from "next/link"
import { useState } from 'react'
import { NavLink } from "@/app/lib/navlink"

const LandingNavbar = () => {
  const [isActive, setIsActive] = useState<string>("Home");

  return (
    <nav className="bg-white h-[90px] text-black items-center flex flex-row border-b-[#d6d6d6] border-b-[1px] fixed z-30 w-full top-0">
      <div className="w-[85%] mx-auto flex flex-row justify-between">
        <div className="text-4xl font-extrabold text-[#8039DF] max-lg:text-2xl">
          Logo
        </div>
        <ul className="flex flex-row w-1/5 justify-between items-center max-lg:hidden">
          {NavLink.map((item) => (
            <div key={item.name} className={`${isActive === item.name && "text-[#8039DF]"}`} onClick={() => { setIsActive(item.name) }}>
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </ul>
        <div className="flex flex-row gap-5">
          <button className="border-[#8039DF] border-[1px] rounded-xl h-[45px] w-[90px] text-[#8039DF] max-lg:w-[70px] max-lg:h-[40px]">
            Login
          </button>
          <button className="h-[45px] w-[120px] rounded-xl font-medium text-white bg-[#8039DF] max-lg:w-[70px] max-lg:h-[40px]">
            Signup
          </button>
        </div>
      </div>

    </nav>
  )
}

export default LandingNavbar