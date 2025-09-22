'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Explore: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);


  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const slides = [
    {
      img: 'explore-1-lg.png',
      title: 'Salon',
      desc: '1 rozkładana sofa',
      longDesc:
        'Serce domu, w którym spotykają się wszyscy Goście – nasz salon to przestrzeń pełna ciepła i domowej atmosfery. Przytulne wnętrze zdobi kominek, który w chłodniejsze dni otula blaskiem ognia i tworzy niezapomniany klimat górskiego domu. Wygodna sofa zachęca do wspólnego odpoczynku, rozmów i planowania kolejnych wypraw w Tatry. Duże okna wpuszczają światło i pozwalają podziwiać ogród, sprawiając, że każdy moment spędzony w salonie staje się wyjątkowy.'
    },
    {
      img: 'explore-2-lg.png',
      title: 'Kuchnia',
      desc: '',
      longDesc:
        'Aneks kuchenny w Family House został zaprojektowany tak, aby Goście mogli cieszyć się pełną swobodą podczas przygotowywania posiłków. Do dyspozycji jest lodówka, piekarnik, płyta kuchenna, czajnik oraz komplet naczyń i kuchennych akcesoriów. Poranna kawa z ekspresu smakuje tu wyjątkowo, szczególnie wypita na tarasie z widokiem na ogród. Kuchnia łączy funkcjonalność z domową atmosferą, dzięki czemu wspólne gotowanie i rodzinne posiłki stają się ważnym elementem pobytu w górach.'
    },
    {
      img: 'explore-3-lg.png',
      title: 'Łazienka',
      desc: '2 łazienki',
      longDesc:
        'Łazienka w Family House została urządzona tak, by zapewnić Gościom maksymalny komfort podczas pobytu. Do dyspozycji jest przestronny prysznic, umywalka z lustrem oraz toaleta. Dodatkowym udogodnieniem jest pralka, dzięki której bez problemu można zadbać o świeżość ubrań po aktywnym dniu w górach. Funkcjonalne rozwiązania i dostępne wyposażenie sprawiają, że łazienka idealnie spełnia potrzeby zarówno rodzin z dziećmi, jak i osób podróżujących w gronie przyjaciół.'
    },
    {
      img: 'explore-4-lg.png',
      title: 'Sypialnia 1',
      desc: 'Łóżko podwójne',
      longDesc:
        'Przytulna sypialnia z dużym, podwójnym łóżkiem to idealne miejsce na odpoczynek po dniu spędzonym w górach. Jasne wnętrze, miękka pościel i spokojny klimat sprawiają, że od razu można poczuć domową atmosferę. To przestrzeń stworzona zarówno dla par, jak i osób ceniących wygodę i prywatność. Widok na ogród dodaje uroku, a ciche otoczenie Witowa pozwala obudzić się wyłącznie przy śpiewie ptaków i zapachu świeżego, górskiego powietrza.'
    },
    {
      img: 'explore-5-lg.png',
      title: 'Sypialnia 2',
      desc: '2 łóżka pojedyncze',
      longDesc:
        'Sypialnia wyposażona w dwa pojedyncze łóżka to doskonałe rozwiązanie dla dzieci, przyjaciół lub rodzeństwa podróżującego razem. Komfortowe materace i świeża pościel zapewniają spokojny sen, a jasne wnętrze sprzyja wypoczynkowi o każdej porze dnia. To praktyczna i zarazem przytulna przestrzeń, w której każdy znajdzie dla siebie miejsce. Dzięki tej aranżacji Family House świetnie sprawdza się jako dom dla rodzin, dając swobodę i wygodę wszystkim Gościom.'
    },
    {
      img: 'explore-6-lg.png',
      title: 'Sypialnia 3',
      desc: '1 łóżko piętrowe',
      longDesc:
        'Sypialnia z łóżkiem piętrowym to miejsce, które szczególnie ucieszy dzieci, ale świetnie sprawdzi się także dla dorosłych ceniących praktyczne rozwiązania. Łóżko piętrowe zapewnia wygodny sen dwóm osobom, a przytulne wnętrze sprzyja relaksowi i zabawie. To idealna przestrzeń dla najmłodszych, którzy mogą poczuć klimat wspólnego wyjazdu w góry. Jasne wykończenie i funkcjonalne wyposażenie sprawiają, że sypialnia staje się wygodnym i radosnym zakątkiem Family House.'
    }
  ];

  return (
    <section className="bg-[#E2E2E2] pt-[85px] sm:pt-[120px] lg:pt-[100px] pb-[120px] sm:pb-[150px] md:pb-[200px] lg:pb-[240px]">
      <div className="pl-4 sm:pl-[calc((100%-600px)/2)] md:pl-[calc((100%-730px)/2)] lg:pl-[calc((100%-984px)/2)] xl:pl-[calc((100%-1240px)/2)] 2xl:pl-[calc((100%-1600px)/2)]">
        <div className="pb-[40px] lg:pb-[50px] xl:pb-[65px] border-b border-b-black">
          <h3
            className="text-black text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] tracking-[-1px]"
            data-aos="fade-up"
          >
            Zobacz, jak wygląda <br /> Family House
          </h3>
        </div>

        <div className="pt-[45px] lg:pt-[70px]" data-aos="fade-up">
          <Swiper
            className="explore_slider !overflow-visible"
            slidesPerView="auto"
            spaceBetween={30}
            // loop={true}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex(index)}
                className={`!w-[300px] md:!w-[350px] lg:!w-[400px] xl:!w-[460px] 2xl:!w-[510px] cursor-pointer transition-all ${selectedIndex === index ? 'z-20' : ''
                  }`}
              >
                <div
                  className={`relative w-[300px] md:w-[350px] lg:w-[400px] xl:w-[460px] 2xl:w-[510px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[460px] 2xl:h-[510px] border border-black rounded-[50%] flex items-center justify-end pl-[25px] md:pl-[30px] lg:pl-[50px] xl:pl-[75px] pr-2 cursor-pointer`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <Image
                    src={`/assets/img/${slide.img}`}
                    alt={slide.title}
                    width={800}
                    height={800}
                    quality={100}
                    className={`w-[122px] h-[122px] object-cover rounded-[50%] absolute z-10 top-1/2 -translate-y-1/2 left-[20px] md:left-[30px] lg:left-[40px] xl:left-[70px] transition-all duration-300 ${selectedIndex === index ? 'w-full h-full !left-0' : ''
                      }`}
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
              <div className="lg:max-w-[950px] order-2 md:order-1">
                <div className="min-h-[300px]">
                  <h4
                    className="text-brown text-[28px] md:text-[36px] lg:text-[42px] xl:text-[55px] 2xl:text-[65px] font-normal leading-[43.077%] tracking-[-0.65px] md:pt-8 pb-6 md:pb-10"
                    data-aos="fade-up"
                  >
                    {selectedIndex !== null
                      ? slides[selectedIndex].title
                      : slides[0].title}
                  </h4>
                  <p
                    className="text-primary text-base md:text-lg xl:text-xl font-light leading-[140%] tracking-[-0.2px]"
                    data-aos="fade-up"
                  >
                    {selectedIndex !== null
                      ? slides[selectedIndex].longDesc
                      : slides[0].longDesc}
                  </p>
                </div>
              </div>

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
