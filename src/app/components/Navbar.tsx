
import Image from "next/image"
import Logo from "@/app/assets/Logo.png";

const Navbar = () => {
  return (
    <div className='bg-[#043873]  h-[92px] w-full py-4 px-[220px] sm:px-6 md:px-16 flex flex-wrap  justify-between items-center '>
      <div className='w-[150px] sm:w-[180px] lg:w-[191px] h-[34px]'>
        
<Image src ={Logo} alt="logo" />
</div>
<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 sm:mt-0'>

<ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-[32px] justify-between text-white'>
<li className='w-[78px] h-[23px] font-sans font-medium text-sm sm:text-base lg:text-lg leading-[23px]'>Products</li>
<li className='w-[78px] h-[23px] font-sans font-medium text-sm sm:text-base lg:text-lg leading-[23px]'>Solutions</li>
<li className='w-[78px] h-[23px] font-sans font-medium text-sm sm:text-base lg:text-lg leading-[23px]'>Resources</li>
<li className='w-[78px] h-[23px] font-sans font-medium text-sm sm:text-base lg:text-lg leading-[23px]'>Pricing</li>

</ul>
</div>
<div className="w-[126px] h-[60px] mt-4 sm:mt-0">
  <button className="py-2 px-6 sm:py-2 sm:px-8 lg:py-4 lg:px-10  bg-[#FFE492] rounded-lg font-InterVariable font-medium leading-[23px] text-[#043873] text-sm sm:text-base lg:text-lg">Login
  </button>
</div>
</div>

      
  
  );
}

export default Navbar;
