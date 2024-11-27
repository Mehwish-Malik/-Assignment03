import React from 'react';
import Image from 'next/image';
import ImgContainer from "@/app/assets/imgcontainer.png"
import Arrow from "@/app/assets/arrow.png"
const Needs = () => {
  return (
  
    <div className="w-full py-10 px-5 lg:py-[140px] lg:px-[220px] gap-10 lg:gap-[98px] font-inter flex flex-col lg:flex-row items-centre">
    {/* Left Section */}
    < div className="w-full max-w-[400px] h-[200px] lg:w-[1000px] lg:h-[332.09px] bg-[#C4DEFD]">
  <Image src={ImgContainer}  alt="" width={1000} height={632}
  />
  </div>
    {/* Right Section */}
    <div className="w-full max-w-[700px] lg:w-[669px] lg:h-[411px] relative top-[10px]">
      {/* Heading */}
      <div className="w-full">
        <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold leading-snug lg:leading-[87.14px] tracking-tight text-[#212529]">
          Customise it to your needs
        </h1>
      </div>
  <br />
      {/* Paragraph */}
      <div className="mt-4 text-justify">
        <p className="text-sm lg:text-lg font-normal leading-6 lg:leading-[30px] tracking-tight text-[#212529]">
          
 Customise  the app with plugins, custom themes, and multiple text editors (Rich
 Text or Markdown).Or create your own scripts and plugins using the Extension API.
        </p>
      </div>
  
      {/* Button */}
      <div className="mt-6">
        <button className="flex items-center gap-2 py-3 px-6 rounded-md bg-[#4F9CF9] text-white hover:bg-[#3578E5]">
          <span className="text-base font-medium">Let’s Go</span>
          <Image src={Arrow} alt="Arrow Icon" width={14} height ={14} />
      </button>
    </div>
  </div>
</div>
  )
}
export default Needs;
  