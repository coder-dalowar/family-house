'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Explore: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // store current active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: 'explore-1.png',
      title: 'Salon',
      desc: '1 rozkładana sofa',
      longDesc:
        'Serce domu, w którym spotykają się wszyscy Goście – nasz salon to przestrzeń pełna ciepła i domowej atmosfery. Przytulne wnętrze zdobi kominek, który w chłodniejsze dni otula blaskiem ognia i tworzy niezapomniany klimat górskiego domu. Wygodna sofa zachęca do wspólnego odpoczynku, rozmów i planowania kolejnych wypraw w Tatry. Duże okna wpuszczają światło i pozwalają podziwiać ogród, sprawiając, że każdy moment spędzony w salonie staje się wyjątkowy.'
    },
    {
      img: 'explore-2.png',
      title: 'Kuchnia',
      desc: '',
      longDesc:
        'Nowoczesna kuchnia wyposażona we wszystkie niezbędne sprzęty i akcesoria, aby przygotować ulubione posiłki dla całej rodziny. Duży stół sprzyja wspólnym śniadaniom i kolacjom.'
    },
    {
      img: 'explore-3.png',
      title: 'Łazienka',
      desc: '2 łazienki',
      longDesc:
        'Dwie komfortowe łazienki z prysznicem i wanną, aby każdy Gość mógł cieszyć się wygodą i prywatnością.'
    },
    {
      img: 'explore-4.png',
      title: 'Sypialnia 1',
      desc: 'Łóżko podwójne',
      longDesc:
        'Przytulna sypialnia z wygodnym podwójnym łóżkiem, zapewniająca spokojny sen po dniu pełnym atrakcji.'
    },
    {
      img: 'explore-5.png',
      title: 'Sypialnia 2',
      desc: '2 łóżka pojedyncze',
      longDesc:
        'Pokój idealny dla dzieci lub przyjaciół – dwa osobne łóżka zapewniają komfortowy odpoczynek.'
    },
    {
      img: 'explore-6.png',
      title: 'Sypialnia 3',
      desc: '1 łóżko piętrowe',
      longDesc:
        'Pokój z łóżkiem piętrowym – idealny dla najmłodszych Gości, którzy uwielbiają przygodę nawet podczas snu.'
    }
  ];

  return (
    <section className="bg-[#E2E2E2] pt-[85px] sm:pt-[120px] lg:pt-[100px] pb-[120px] sm:pb-[150px] md:pb-[200px] lg:pb-[240px]">
      <div className="pl-4 sm:pl-[calc((100%-600px)/2)] md:pl-[calc((100%-730px)/2)] lg:pl-[calc((100%-984px)/2)] xl:pl-[calc((100%-1240px)/2)] 2xl:pl-[calc((100%-1600px)/2)]">
        {/* Title */}
        <div className="pb-[40px] lg:pb-[50px] xl:pb-[65px] border-b border-b-black">
          <h3
            className="text-black text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] tracking-[-1px]"
            data-aos="fade-up"
          >
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
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // track active slide
            breakpoints={{
              0: { spaceBetween: 15 },
              768: { spaceBetween: 20 },
              1024: { spaceBetween: 20 },
              1280: { spaceBetween: 30 }
            }}
            modules={[Autoplay]}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[350px] lg:!w-[400px] xl:!w-[460px] 2xl:!w-[510px]"
              >
                <div className="group relative w-[300px] md:w-[350px] lg:w-[400px] xl:w-[460px] 2xl:w-[510px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[460px] 2xl:h-[510px] border border-black rounded-[50%] flex items-center justify-end pl-[25px] md:pl-[30px] lg:pl-[50px] xl:pl-[75px] pr-2">
                  <Image
                    src={`/assets/img/${slide.img}`}
                    alt={slide.title}
                    width={122}
                    height={122}
                    className="w-[122px] h-[122px] object-cover rounded-[50%] absolute z-10 top-1/2 -translate-y-1/2 left-[20px] md:left-[30px] lg:left-[40px] xl:left-[70px] transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:left-0"
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
          <div className="pt-6 lg:pt-[90px] pr-4 md:pr-0">
            <div className="max-w-[720px] lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1426px] w-full flex items-end md:items-start justify-between flex-col md:flex-row gap-x-8">

              {/* Slider description */}
              <div className="lg:max-w-[950px] order-2 md:order-1">
                <div className='min-h-[300px]'>
                  <h4
                    className="text-brown text-[28px] md:text-[36px] lg:text-[42px] xl:text-[55px] 2xl:text-[65px] font-normal leading-[43.077%] tracking-[-0.65px] md:pt-8 pb-6 md:pb-10"
                    data-aos="fade-up"
                  >
                    {slides[activeIndex].title}
                  </h4>
                  <p
                    className="text-primary text-base md:text-lg xl:text-xl font-light leading-[140%] tracking-[-0.2px]"
                    data-aos="fade-up"
                  >
                    {slides[activeIndex].longDesc}
                  </p>
                </div>
              </div>

              {/* Slider next arrow */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[85px] md:w-[120px] cursor-pointer xl:w-[140px] 2xl:w-[170px] inline-block transition-all shrink-0 hover:opacity-60 order-1 md:order-2"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
