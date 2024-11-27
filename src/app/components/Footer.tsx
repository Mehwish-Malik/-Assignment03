import React from 'react';
import Image from "next/image";
import Logo from "@/app/assets/Logo.png"
const Footer = () => {
    return (
      <div className="w-full h-auto py-10 px-5 md:py-[80px] md:px-[40px] lg:px-[220px] font-inter bg-[#043873]">
        {/* Logo and Intro Section */}
        <div className="flex flex-col  lg:flex-row lg:justify-between gap-10">
          {/* Logo and Text */}
          <div className="max-w-[240px]">

            <Image src={Logo} alt="logo" className="mb-4" />
            <p className="font-normal text-[16px] md:text-[18px] text-[#F7F7EE] leading-[28px] md:leading-[30px]">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>
  
          {/* Links Section */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 lg:gap-[100px]">
            {/* Product Section */}
            <div>
              <p className="font-bold text-[18px] text-white mb-4">Product</p>
              <ul className="space-y-2">
                <li className="text-[16px] text-[#FFE492]">Overview</li>
                <li className="text-[16px] text-white">Pricing</li>
                <li className="text-[16px] text-white">Customer stories</li>
              </ul>
            </div>
  
            {/* Resources Section */}
            <div>
              <p className="font-bold text-[18px] text-white mb-4">Resources</p>
              <ul className="space-y-2">
                <li className="text-[16px] text-white">Blog</li>
                <li className="text-[16px] text-white">Guides & tutorials</li>
                <li className="text-[16px] text-white">Help center</li>
              </ul>
            </div>
  
            {/* Company Section */}
            <div>
              <p className="font-bold text-[18px] text-white mb-6">Company</p>
              <ul className="space-y-2">
                <li className="text-[16px] text-white">About us</li>
                <li className="text-[16px] text-white">Careers</li>
                <li className="text-[16px] text-white">Media kit</li>
              </ul>
            </div>
          </div>
        </div>
    
  <br />
  <br />
  <br />
  <br />
        {/* Footer Bottom Section */}
        <hr className='border-[1px] border-[#2E4E73]' />
        <div className="mt-8 ml-[550px] flex flex-col items-center lg:items-start">
            
          <p className="font-normal text-[16px] text-white">
            ©2021 Whitepace LLC.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  