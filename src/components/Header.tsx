

const Header = () => {
  return (
    <div className="bg-white text-black w-full">
      <div className="max-w-[85%] mx-auto">
        <div className="mt-[50px] flex flex-row gap-10">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header