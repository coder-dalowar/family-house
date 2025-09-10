'use client';

import Image from 'next/image';
import React from 'react';

const MountainSection: React.FC = () => {
  return (
    <section className="pt-[100px] lg:pt-[135px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Column */}
          <div className="w-full lg:max-w-[350px] xl:max-w-[450px] 2xl:max-w-[600px]" data-aos="zoom-in-right">
            <Image
              src="/assets/img/mountain.png"
              alt=""
              className="max-w-full relative z-10 mx-auto lg:mx-0"
              width="600"
              height="400"
            />
          </div>

          {/* Right Column */}
          <div className="w-full lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[760px]">
            <div className="lg:text-right pb-[45px] lg:pb-[60px] relative after:w-[220%] after:h-[1px] after:block after:bg-[#B3B3B3] after:absolute after:bottom-0 after:right-0">
              <h3 className="text-black text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] leading-[111.111%] tracking-[-1px] z-10 relative" data-aos="zoom-in-left">
                Odetchnij górskim <br />powietrzem
              </h3>
              <Image
                src="/assets/img/lins-shape-2.svg"
                alt=""
                className="max-w-[250px] xl:max-w-[356px] absolute right-5 top-6"
                width="356"
                height="100"
              />
            </div>

            <div className="pt-[45px] lg:pt-[60px]" data-aos="fade-up">
              <div className="flex items-center gap-[80px] md:pl-6 mb-[15px] justify-between md:justify-start">
                <p className="text-[#6D6D6D] text-base font-normal leading-[120%]">Data przyjazdu</p>
                <p className="text-[#6D6D6D] text-base font-normal leading-[120%]">Data odjazdu</p>
              </div>

              <div className="flex items-center lg:justify-end gap-[10px] flex-wrap">
                <div className="bg-white border border-black md:max-w-[260px] lg:max-w-[240px] xl:max-w-[325px] w-full h-[68px] flex items-center justify-between px-8 rounded-xl">
                  <div className="flex items-center gap-[7px]">
                    <h3 className="text-[#6D6D6D] text-xl md:text-[28px] xl:text-[34px] !font-work-sans font-bold leading-[120%]">19</h3>
                    <div>
                      <h4 className="text-[#A4A4A4] text-lg xl:text-xl !font-work-sans font-normal leading-[120%]">Sie</h4>
                      <p className="text-[#B7B7B7] text-xs font-normal leading-[120%]">2025</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Image src="/assets/img/arrow-right-brown.svg" alt="" className="w-[20px]" width="20" height="20" />
                  </div>
                  <div className="flex items-center gap-[7px]">
                    <h3 className="text-[#6D6D6D] text-xl md:text-[28px] xl:text-[34px] !font-work-sans font-bold leading-[120%]">22</h3>
                    <div>
                      <h4 className="text-[#A4A4A4] text-lg xl:text-xl !font-work-sans font-normal leading-[120%]">Sie</h4>
                      <p className="text-[#B7B7B7] text-xs font-normal leading-[120%]">2025</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-black max-w-[112px] w-full h-[68px] flex items-center justify-center px-8 rounded-xl">
                  <p className="text-[#6D6D6D] text-lg xl:text-xl whitespace-nowrap">2 os.</p>
                </div>

                <div className="px-1">
                  <Image
                    src="/assets/img/arrow-right-brown-big.svg"
                    alt="arrow"
                    className="w-[35px] sm:w-[40px] transition-all"
                    width="40"
                    height="40"
                  />
                </div>

                <div>
                  <button
                    type="button"
                    className="text-[#F4EFEB] text-lg md:text-xl xl:text-2xl font-ivymode font-normal leading-[106%] bg-brown h-[68px] inline-flex items-center justify-center px-5 xl:px-8 rounded-xl cursor-pointer transition-all hover:opacity-85"
                  >
                    Rezerwuj pobyt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MountainSection;