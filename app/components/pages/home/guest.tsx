'use client';

import Image from 'next/image';
import React from 'react';

const GuestSection: React.FC = () => {
  return (
    <section className="py-[80px] lg:pt-[90px] lg:pb-[100px] lg:border-t border-t-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-7">
          <h3 className="text-black text-[32px] sm:text-[36px] md:text-[45px] lg:text-[50px] xl:text-[76px] 2xl:text-[100px] font-normal leading-[107%] xl:tracking-[-3px] tracking-[-1px]" data-aos="fade-up">
            Opinie Naszych Gości 
            <sup className="text-black text-base md:text-lg xl:text-xl !font-work-sans font-medium leading-normal tracking-normal align-top">(23)</sup>
          </h3>
          <h4 className="text-black text-[28px] md:text-[50px] lg:text-[60px] xl:text-[120px] 2xl:text-[152px] !font-work-sans font-medium tracking-[1.524px] leading-[100%]" data-aos="fade-up">5,0</h4>
          <button type="button" className="w-[50px] sm:w-[70px] lg:w-[80px] xl:w-[90px] 2xl:w-[110px] inline-block cursor-pointer" data-aos="zoom-in">
            <Image src="/assets/img/add-icon.svg" alt="" className="w-full" width="110" height="110" />
          </button>
        </div>

        {/* Guest Images */}
        <div className="pt-7 flex flex-col md:flex-row items-center gap-12 md:gap-10" data-aos="fade-up">
          <div className="flex items-center">
            <Image src="/assets/img/guest-1.png" alt="" className="w-[65px] sm:w-[87px] h-[65px] sm:h-[87px] rounded-[50%]" width="87" height="87" />
            <Image src="/assets/img/guest-2.png" alt="" className="w-[65px] sm:w-[87px] h-[65px] sm:h-[87px] rounded-[50%] ml-[-13px]" width="87" height="87" />
            <Image src="/assets/img/guest-3.png" alt="" className="w-[65px] sm:w-[87px] h-[65px] sm:h-[87px] rounded-[50%] ml-[-13px]" width="87" height="87" />
            <Image src="/assets/img/guest-4.png" alt="" className="w-[65px] sm:w-[87px] h-[65px] sm:h-[87px] rounded-[50%] ml-[-13px]" width="87" height="87" />
            <div className="w-[65px] sm:w-[87px] h-[65px] sm:h-[87px] flex items-center justify-center bg-black border-3 border-white rounded-[50%] ml-[-13px]">
              <span className="text-white text-base md:text-lg xl:text-[22px] font-inter font-medium leading-normal tracking-[0.44px]">9+</span>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="text-brown text-base md:text-lg xl:text-[22px] font-ivymode font-normal leading-normal tracking-[0.44px] bg-white border border-black px-[50px] xl:px-[70px] py-[20px] xl:py-[30px] rounded-full transition-all hover:bg-black hover:text-white"
            >
              Zobacz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestSection;