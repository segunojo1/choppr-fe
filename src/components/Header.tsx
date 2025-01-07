import { HiOutlineCalendar } from "react-icons/hi2";
import { IoLinkOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import qrcode from '../../public/qrCode.png'
import land from '../../public/land.png'
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white text-black w-full">
      <div className="max-w-[85%] mx-auto">
        <div className="mt-[50px] flex flex-row gap-20">
          <div className="flex flex-col gap-[40px]">
            <span className="p-3 text-[#8039DF] font-medium align-middle bg-[#D6D6D6] rounded-3xl text-center w-[28rem]">Let&apos;s make links accessible to all with simply one click. 👈</span>
            <h1 className="text-7xl w-[46rem] font-bold uppercase">
              Bio link & link shortener <span></span> for business needs
            </h1>
            <p className="text-[#7a7a7a] font-medium text-base w-[40rem]">
              On a single platform, you&apos;ll find all the tools you need to connect audiences worldwide, manage links and QR codes, and create brand relationships.
            </p>
            <div>
              <button className="text-white bg-[#8039DF] h-12 w-52 rounded-lg text-lg font-medium ">
                Get started for free
              </button>
            </div>
            <div className="flex flex-row gap-3">
              <div>
                <Image src={""} alt="" />
              </div>
              <div className="flex flex-col items-start w-40">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <ul className="flex flex-row gap-[2px]">
                    <li><IoIosStar className="text-orange-400" /></li>
                    <li><IoIosStar className="text-orange-400" /></li>
                    <li><IoIosStar className="text-orange-400" /></li>
                    <li><IoIosStar className="text-orange-400" /></li>
                    <li><IoIosStar className="" /></li>
                  </ul>
                  <h5 className="text-base font-bold">4.0</h5>
                </div>
                <h5 className="text-base font-normal text-[#7a7a7a]">from 500+ reviews</h5>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="border-[2px] border[#D6D6D6] w-[460px] px-5 py-6 rounded-2xl flex flex-col gap-5">
              <span className="flex flex-row justify-between items-center">
                <h5 className="font-bold text-base">QR CODE</h5>
                <button className="bg-[#8039DF] h-[43px] w-[150px] text-white rounded-lg text-sm font-medium">Download PNG</button>
              </span>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <Image src={qrcode} alt="this is a qrcode" width={110} height={120} />
                </div>
                <div>
                  <ul className="flex flex-col gap-2">
                    <li className="flex flex-row gap-5 items-center">
                      <IoLinkOutline size={25} className="text-[#8039DF]" />
                      <h5 className="text-base text-[#4d4d4d] font-medium">https://chopper-be/mailtumator</h5>
                    </li>
                    <li className="flex flex-row gap-5 items-center">
                      <HiOutlineCalendar size={25} className="text-[#8039DF]" />
                      <h5 className="text-base text-[#4d4d4d] font-medium">22 December 2024</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-[70px] w-[70px] bg-[#8039DF] rounded-full flex justify-center items-center z-10 absolute top-[201px] right-5">
              <IoLinkOutline size={30} className="text-white" />
            </div>
            <div className="border-[2px] border[#D6D6D6] w-[460px] px-5 py-6 rounded-2xl flex flex-col gap-5">
              <h5 className="uppercase text-black text-lg font-bold">Customize your link</h5>
              <div>
                <Image src={land} alt="" />
              </div>
              <span className="flex flex-row gap-2">
                <IoLinkOutline size={25} className="text-[#8039DF]" />
                <h6 className="font-medium text-base"><span className="text-[#8039DF]">short.</span>link/mailtumator<span className="text-[#8039DF]">|</span></h6>
              </span>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Header