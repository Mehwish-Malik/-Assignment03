import React from 'react';
import Image from 'next/image';
import Arrow from "@/app/assets/Arrow.png"
const Task = () => {
  return (
    <div className="w-full h-auto py-[80px] px-5 md:py-[140px] md:px-[80px] lg:px-[220px] bg-[#043873] font-inter">
    <div className="max-w-[1064px] mx-auto">
      {/* Heading */}
      <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-tight tracking-[-2%] text-white text-center lg:text-left">
        Your work, everywhere you are
      </h1>
  
      {/* Paragraph */}
      <div className="mt-6 text-center lg:text-centre">
        <p className="font-normal text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] tracking-[-2%] text-white">
          Access your notes from your computer, phone, or tablet by synchronising with various services,
           including whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS,
           Linux, Android, and iOS. A terminal app is also available!
        </p>
      </div>
  
      {/* Button */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <button className="flex items-center gap-2 py-3 px-6 rounded-md bg-[#4F9CF9] text-white hover:bg-[#3578E5] mx-auto">
          <span className="text-base font-medium">Try Taskey</span>
          <Image src={Arrow} alt="Arrow Icon" width={14} height={14} />
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default Task;
