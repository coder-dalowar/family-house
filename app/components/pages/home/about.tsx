'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section
      className="bg-white pt-[75px] md:pt-[100px] xl:pt-[170px] pb-[70px] lg:pb-[100px] relative"
      id="about"
    >
      {/* Background Shape 1 */}
      <div className="absolute top-[-45px] lg:top-[-95px] left-0">
        <Image
          src="/assets/img/about-shape-1.png"
          alt="shape-1"
          width={1647}
          height={1000}
          className="max-w-[1000px] lg:max-w-[1647px]"
        />
      </div>

      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* About Left Column */}
          <div className="w-full lg:w-1/2">
            {/* Title */}
            <div className="relative pb-6 md:pb-8 lg:pb-6 xl:pb-[42px] after:w-[205%] after:h-[1px] after:block after:bg-black after:absolute after:bottom-0 after:left-0">
              <p
                className="text-black text-base md:text-xl lg:text-base 2xl:text-xl font-light leading-[120%] tracking-[-0.14px] uppercase mb-5 md:mb-8 lg:mb-5 xl:mb-10"
                data-aos="fade-up"
              >
                Wyjątkowe miejsce na udany wypoczynek{' '}
                <strong className="font-bold">w witowie na podhalu</strong>
              </p>
              <h1
                className="text-[#8E6565] text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] tracking-[-1px]"
                data-aos="fade-up"
              >
                Family House
              </h1>
            </div>

            {/* About Text */}
            <div className="max-w-[620px] w-full lg:pr-[30px] 2xl:pr-0 pt-8">
              <h2
                className="text-black text-xl 2xl:text-2xl font-work-sans font-medium leading-[137.5%] tracking-[0.24px]"
                data-aos="fade-up"
              >
                O nas
              </h2>
              <div data-aos="fade-up">
                <p
                  className="text-primary text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-normal leading-[150%] mt-5 xl:mt-[30px]"
                >
                  Podhale ma w sobie coś, co zatrzymuje czas. Zapach świeżego drewna,
                  widok górskich szczytów skąpanych w słońcu i ciepło domowego ognia – to
                  właśnie ta atmosfera stała się dla nas inspiracją do stworzenia Family
                  House. Nasz dom w samym sercu Witowa to miejsce, gdzie tradycja spotyka
                  się <br className="hidden xl:block" /> z nowoczesnością. Wnętrza łączą
                  prostotę podhalańskiego stylu z wygodą, której oczekuje współczesny
                  podróżnik.
                </p>
                <p
                  className={`text-primary text-base md:text-lg lg:text-base xl:text-xl font-normal leading-[150%] mt-5 xl:mt-[30px] ${showMore ? 'block' : 'hidden md:block'}`}
                >
                  Drewniane akcenty, przytulne przestrzenie i bliskość{' '}
                  <br className="hidden xl:block" />
                  natury sprawiają, że każdy pobyt staje się wyjątkowym doświadczeniem.
                  Family House to nie tylko dach nad głową <br className="hidden xl:block" />
                  – to przestrzeń stworzona z myślą o tych, którzy szukają wytchnienia i
                  chcą poczuć magię Tatr z bliska.
                </p>
                <p
                  className="block md:hidden text-custom-purple text-base font-semibold leading-[150%] mt-5 cursor-pointer"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? 'Show Less' : 'Load More...'}
                </p>
              </div>
            </div>
          </div>

          {/* About Right Column */}
          <div
            className="w-full lg:w-1/2 lg:pl-[40px] xl:pl-0 mt-[50px] lg:mt-0"
            data-aos="zoom-in-left"
          >
            <Image
              src="/assets/img/about.png"
              alt="about"
              width={732}
              height={472}
              className="max-w-[90%] lg:max-w-full block mx-auto z-10 relative"
            />
          </div>
        </div>
      </div>

      {/* Background Shape 2 */}
      <div className="absolute bottom-[-45px] md:bottom-[-93px] right-0">
        <Image
          src="/assets/img/about-shape-2.png"
          alt="shape-2"
          width={1768}
          height={1000}
          className="max-w-[1000px] md:max-w-[1768px]"
        />
      </div>
    </section>
  );
};

export default About;