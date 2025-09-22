'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  // Smooth scroll for scroll_down link
  useEffect(() => {
    const scrollLink = document.querySelector('.scroll_down a');
    if (scrollLink) {
      scrollLink.addEventListener('click', (e: Event) => {
        e.preventDefault();
        document.querySelector('#about')?.scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  }, []);

  return (
    <section className="lg:pt-[15px] xl:pt-[22px] lg:px-[15px] xl:px-[25px] lg:pb-[20px] xl:pb-[28px]">
      <div className="relative">

        {/* Background Video */}
        <video
          src="/assets/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[745px] sm:h-[750px] md:h-[780px] lg:h-[800px] xl:min-h-[calc(100vh-47px)] object-cover object-bottom"
        />

        {/* Hero Content */}
        <div className="w-full h-full pt-[120px] lg:pt-[130px] xl:pt-[130px] absolute inset-0">
          <div className="container h-full">
            <div className="relative w-full h-full flex flex-col">

              {/* Contact Text */}
              <div className="max-w-[185px] w-full ml-auto text-right" data-aos="fade-left">
                <p className="text-white text-base font-light leading-[120%] text-right mb-[3px]">
                  Szybki kontakt
                </p>
                <Link
                  href="tel:+48690402823"
                  className="text-white text-base lg:text-lg font-bold inline-flex items-start justify-end gap-[15px]"
                >
                  <Image
                    src="/assets/img/tel.svg"
                    alt="tel-icon"
                    width={15}
                    height={15}
                    className="w-[15px] mt-[5px]"
                  />
                  <span className="inline-block pb-2 border-b-2 border-b-white">
                    +48 690 402 823
                  </span>
                </Link>
              </div>

              {/* Social Icons */}
              <div className="text-right mt-[60px] md:mt-[80px] lg:mt-[100px]" data-aos="fade-left">
                <ul className="flex flex-col gap-1.5 items-end">
                  {['facebook', 'instagram'].map((social) => (
                    <li key={social}>
                      <Link href="#" className="w-6 md:w-8 inline-block group">
                        <Image
                          src={`/assets/img/${social}.svg`}
                          alt={social}
                          width={32}
                          height={32}
                          className="w-full transition-all group-hover:filter-[brightness(0)_saturate(100%)_invert(39%)_sepia(5%)_saturate(2831%)_hue-rotate(314deg)_brightness(105%)_contrast(77%)]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hero Text */}
              <div className="lg:mt-auto pb-[30px] lg:pb-[160px] xl:pb-[140px] pt-[16px] sm:pt-0">
                <h2 className="text-white text-[32px] md:text-[40px] lg:text-[42px] xl:text-[65px] 2xl:text-[75px] font-normal leading-[133.75%] tracking-[-1px] xl:tracking-[-3px] mb-[36px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px]" data-aos="fade-up">
                  Rodzinny wypoczynek u podnóża Tatr
                </h2>

                <div className="flex items-center gap-[80px] pl-2 mb-3 justify-between lg:justify-start" data-aos="fade-up">
                  <p className="text-white text-base font-normal leading-[120%]">
                    Data przyjazdu
                  </p>
                  <p className="text-white text-base font-normal leading-[120%]">
                    Data odjazdu
                  </p>
                </div>

                <div className="flex items-center gap-[15px] sm:gap-[17px] flex-wrap justify-between lg:justify-start" data-aos="fade-up">
                  <div className="bg-white lg:max-w-[325px] w-full h-[55px] lg:h-[60px] xl:h-[68px] flex items-center justify-between px-5 lg:px-8 rounded-xl">
                    <div className="flex items-center gap-[7px]">
                      <h3 className="text-brown text-xl md:text-[28px] xl:text-[34px] !font-work-sans font-bold leading-[120%]">
                        19
                      </h3>
                      <div>
                        <h4 className="text-[#A4A4A4] text-lg xl:text-xl !font-work-sans font-normal leading-[120%]">
                          Sie
                        </h4>
                        <p className="text-[#B7B7B7] text-xs font-normal leading-[120%]">
                          2025
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Image
                        src="/assets/img/arrow-right-brown.svg"
                        alt="arrow"
                        width={22}
                        height={22}
                        className="w-[22px]"
                      />
                    </div>
                    <div className="flex items-center gap-[7px]">
                      <h3 className="text-brown text-xl md:text-[28px] xl:text-[34px] !font-work-sans font-bold leading-[120%]">
                        22
                      </h3>
                      <div>
                        <h4 className="text-[#A4A4A4] text-lg xl:text-xl !font-work-sans font-normal leading-[120%]">
                          Sie
                        </h4>
                        <p className="text-[#B7B7B7] text-xs font-normal leading-[120%]">
                          2025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white max-w-[32%] sm:max-w-[40%] lg:max-w-[112px] w-full h-[55px] lg:h-[60px] xl:h-[68px] flex items-center justify-center px-5 lg:px-8 rounded-xl">
                    <p className="text-[#6D6D6D] text-lg whitespace-nowrap xl:text-xl">2 os.</p>
                  </div>

                  <Link
                    href="#"
                    className="w-[36px] xl:w-[50px] h-[70px] xl:h-[90px] flex items-center justify-center  -rotate-90 relative"
                  >
                    <Image
                      src="/assets/img/arrow-down.svg"
                      alt="down-arrow"
                      width={16}
                      height={16}
                      className="w-3.5 xl:w-5 transition-all duration-300 absolute top-2 left-1/2 -translate-x-1/2 animate-[wheel_2s_linear_infinite]"
                    />
                  </Link>

                  <div className="w-[49%] sm:w-[40%] lg:w-auto">
                    <button
                      type="button"
                      className="text-white text-lg md:text-xl xl:text-2xl font-ivymode font-normal leading-[106%] bg-brown h-[55px] lg:h-[60px] xl:h-[68px] block w-full lg:w-auto text-center lg:inline-flex items-center justify-center px-5 lg:px-8 rounded-xl cursor-pointer transition-all hover:bg-white hover:text-brown"
                    >
                      Rezerwuj pobyt
                    </button>
                  </div>
                </div>
              </div>

              {/* Review and Scroll Down */}
              <div className="max-w-[300px] md:max-w-[320px] lg:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[467px] w-full mx-auto lg:mx-0 lg:absolute right-0 bottom-[88px]" data-aos="zoom-in-left">
                <Image
                  src="/assets/img/line.png"
                  alt="line"
                  width={467}
                  height={10}
                  className="lg:w-full hidden lg:block"
                />
                <div className="flex items-center justify-center lg:justify-end gap-4 xl:gap-8 lg:mt-[-75px] z-10 relative">
                  {/* Review Item */}
                  <div className="flex items-center gap-[11px] relative z-20">
                    <Image
                      src="/assets/img/google-icon.svg"
                      alt="google-icon"
                      width={25}
                      height={25}
                      className="w-[25px]"
                    />
                    <Image
                      src="/assets/img/ratings.svg"
                      alt="ratings"
                      width={71}
                      height={20}
                      className="w-[71px]"
                    />
                    <span className="text-[#F4EFEB] text-[13px] font-inter font-normal leading-[120%]">
                      5,0 (23 opinie)
                    </span>
                  </div>

                  {/* Scroll Down */}
                  <div className="scroll_down">
                    <Link
                      href="#"
                      className="w-[36px] xl:w-[50px] h-[70px] xl:h-[90px] flex items-center justify-center border border-white rounded-full relative"
                    >
                      <Image
                        src="/assets/img/arrow-down.svg"
                        alt="down-arrow"
                        width={16}
                        height={16}
                        className="w-3.5 xl:w-4 transition-all duration-300 absolute top-2 left-1/2 -translate-x-1/2 animate-[wheel_2s_linear_infinite]"
                      />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;