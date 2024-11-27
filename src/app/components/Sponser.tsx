import React from 'react';
import Image from 'next/image';
import Apple from "@/app/assets/Apple.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack from "@/app/assets/Slack.png";
import Google from "@/app/assets/Google.png";

const Sponser = () => {
    return (
      <div className="w-full h-auto py-[80px] px-5 md:py-[140px] md:px-[80px] lg:px-[220px] gap-10 font-inter">
        {/* Heading */}
        <div className="max-w-[1482px] mx-auto flex justify-center md:justify-start">
          <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[72px] leading-tight tracking-[-2%] text-[#212529] mx-auto">
            Our sponsors
          </h1>
        </div>
  
        {/* Sponsor Logos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-20 items-center justify-center max-w-[1482px] mx-auto">
          {/* Apple Logo */}
          <div className="flex justify-centre">
            <Image src={Apple} alt="Apple Logo" className="h-auto max-h-[68px]" />
          </div>
          {/* Microsoft Logo */}
          <div className="flex justify-center">
            <Image src={Microsoft} alt="Microsoft Logo" className="h-auto max-h-[62px]" />
          </div>
          {/* Slack Logo */}
          <div className="flex justify-center">
            <Image src={Slack} alt="Slack Logo" className="h-auto max-h-[71px]" />
          </div>
          {/* Google Logo */}
          <div className="flex justify-center">
            <Image src={Google} alt="Google Logo" className="h-auto max-h-[70px]" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Sponser;
  