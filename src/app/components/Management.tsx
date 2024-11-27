import Image from "next/image";
import Arrow from "@/app/assets/Arrow.png";
import ImgContainer from "@/app/assets/Imgcontainer.png";
import groupimg from "@/app/assets/Worktogether.png"

const Management = () => {
  return (
    <div className="max-w-full py-[140px] px-[20px] md:px-[60px] lg:px-[100px] xl:px-[220px] gap-[50px] font-inter">
      {/* Section Container */}
      <div className="flex flex-col lg:flex-row items-center gap-[30px]">
        {/* Text Section */}
        <div className="max-w-[672px]">
          <h1 className="font-bold text-[36px] md:text-[48px] lg:text-[72px] leading-tight tracking-[-2%]">
            Project Management
          </h1>
          <p className="mt-4 text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] tracking-[-2%] text-[#212529]">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
          </p>
          <button className="mt-6 flex items-center gap-2 py-[10px] px-[20px] rounded-md bg-[#4F9CF9] text-white">
            <span className="text-[16px] md:text-[18px] font-medium">
              Get Started
            </span>
            <Image src={Arrow} alt="Arrow Icon" width={14} height={14} />
          </button>
        </div>

        {/* Image Section */}
        <div className="max-w-[710px]">
          <Image
            src={ImgContainer}
            alt="Image Container"
            
          />
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="max-w-[1480px] mx-auto px-4 md:px-8 lg:px-16 gap-10">
  {/* Outer Container */}
  <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <Image
        src={groupimg}
        alt="Group Image"
        className="w-full h-auto"
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      
      <h1 className="font-bold text-[71px] leading-[87px] tracking-[-2%] max-w-[600px] lg:whitespace-nowrap">
        Work together
      </h1>

      {/* Description */}
      <p className="text-lg leading-[30px] tracking-[-2%] text-[#212529] max-w-[600px]  lg:whitespace-nowrap">
        With whitepace, share your notes with your colleagues and collaborate on
        them. <br />can also publish a note to the internet and share the URL
        with others.
      </p>

      {/* Button */}
      <div>
        <button className="flex items-center gap-2 py-3 px-6 rounded-md bg-[#4F9CF9] text-white hover:bg-[#3578E5] transition">
          <span className="text-base font-medium">Try it now</span>
          <Image src={Arrow} alt="Arrow Icon" width={14} height={14} />
        </button>
      </div>
    </div>
  </div>
</div>
</div>
)
}
export default Management;