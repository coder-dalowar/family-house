'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const Explore: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#E2E2E2] pt-[70px] lg:pt-[100px] pb-[120px] sm:pb-[150px] md:pb-[200px] lg:pb-[240px]">
      <div className="pl-4 sm:pl-[calc((100%-600px)/2)] md:pl-[calc((100%-730px)/2)] lg:pl-[calc((100%-984px)/2)] xl:pl-[calc((100%-1240px)/2)] 2xl:pl-[calc((100%-1600px)/2)]">
        {/* Title */}
        <div className="pb-[40px] lg:pb-[50px] xl:pb-[65px] border-b border-b-black">
          <h3 className="text-black text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] tracking-[-1px]" data-aos="fade-up">
            Zobacz, jak wygląda <br /> Family House
          </h3>
        </div>

        {/* Explore Slider */}
        <div className="pt-[45px] lg:pt-[70px]" data-aos="fade-up">
          <Swiper
            className="explore_slider !overflow-visible"
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { spaceBetween: 15 },
              768: { spaceBetween: 20 },
              1024: { spaceBetween: 20 },
              1280: { spaceBetween: 30 },
            }}
          >
            {[
              { img: 'explore-1.png', title: 'Salon', desc: '1 rozkładana sofa' },
              { img: 'explore-2.png', title: 'Kuchnia', desc: '' },
              { img: 'explore-3.png', title: 'Łazienka', desc: '2 łazienki' },
              { img: 'explore-4.png', title: 'Sypialnia 1', desc: 'Łóżko podwójne' },
              { img: 'explore-5.png', title: 'Sypialnia 2', desc: '2 łóżka pojedyncze' },
              { img: 'explore-6.png', title: 'Sypialnia 3', desc: '1 łóżko piętrowe' },
            ].map((slide, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[350px] lg:!w-[400px] xl:!w-[460px] 2xl:!w-[510px]"
              >
                <div className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[460px] 2xl:w-[510px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[460px] 2xl:h-[510px] border border-black rounded-[50%] flex items-center justify-between pl-[25px] md:pl-[30px] lg:pl-[50px] xl:pl-[75px] pr-2">
                  <Image
                    src={`/assets/img/${slide.img}`}
                    alt={slide.title}
                    width={122}
                    height={122}
                    className="w-[122px] h-[122px] object-cover rounded-[50%]"
                  />
                  <div className="text-right">
                    <h4 className="text-brown text-[25px] md:text-[32px] lg:text-[40px] xl:text-[47px] font-normal tracking-[0.47px] leading-[105%]">
                      {slide.title}
                    </h4>
                    {slide.desc && (
                      <p className="text-primary text-base md:text-lg xl:text-xl font-light leading-[140%] tracking-[-0.2px]">
                        {slide.desc}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Explore Details */}
          <div className="pt-[60px] lg:pt-[90px]">
            <div className="max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1426px] w-full flex items-center justify-between">
              <h4 className="text-brown text-[28px] md:text-[36px] lg:text-[42px] xl:text-[55px] 2xl:text-[65px] font-normal leading-[43.077%] tracking-[-0.65px]" data-aos="fade-up">
                Salon
              </h4>
              {/* ✅ Button instead of Link */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[85px] md:w-[120px] cursor-pointer xl:w-[140px] 2xl:w-[170px] inline-block transition-all hover:opacity-60" data-aos="zoom-in"
              >
                <Image
                  src="/assets/img/right-arrow-rounded.svg"
                  alt="Right Arrow"
                  width={170}
                  height={50}
                  className="w-full"
                />
              </button>
            </div>
            <div className="max-w-[773px] w-full mt-5">
              <p className="text-primary text-base md:text-lg xl:text-xl font-light leading-[140%] tracking-[-0.2px]" data-aos="fade-up">
                Serce domu, w którym spotykają się wszyscy Goście – nasz salon to
                przestrzeń pełna ciepła i domowej atmosfery. Przytulne wnętrze zdobi
                kominek, który w chłodniejsze dni otula blaskiem ognia i tworzy
                niezapomniany klimat górskiego domu. Wygodna sofa zachęca do wspólnego
                odpoczynku, rozmów i planowania kolejnych wypraw w Tatry. Duże okna
                wpuszczają światło i pozwalają podziwiać ogród, sprawiając, że każdy
                moment spędzony w salonie staje się wyjątkowy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
