import Image from "next/image";
import ImgContainer from "@/app/assets/Imgcontainer.png";
import Arrow from "@/app/assets/Arrow.png"; 

const Extension = () => {
  return (
    <div className="py-[120px] px-[20px] md:py-[180px] md:px-[60px] lg:py-[220px] lg:px-[140px] bg-[#043873] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="md:flex items-center gap-[40px]">
          {/* Text Section */}
          <div className="text-white mb-10 md:mb-0 md:w-1/2">
            <h2 className="font-bold text-[32px] leading-[40px] md:text-[48px] md:leading-[60px] lg:text-[64px] lg:leading-[77.45px] tracking-[-2%] mb-6">
            Use as Extension
            </h2>
            <p className="font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[30px] tracking-[-2%]">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            
            </p>
            <div className="mt-8">
              <button className="flex items-center justify-between px-6 py-3 bg-[#4F9CF9] text-white text-[16px] md:text-[18px] font-medium">
              Let’s Go
                <Image
                  className="ml-3"
                  src={Arrow}
                  alt="Arrow pointing to the right"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative bg-[#C4DEFD] rounded-lg overflow-hidden mx-auto w-full max-w-[600px]">
              <Image
                src={ImgContainer}
                alt="Image"
            
                width={824}
                height={549}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
