'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Facility: React.FC = () => {
    return (
        <section className="bg-white pt-[70px] sm:pt-[100px] xl:pt-[194px] relative">
            {/* Shape */}
            <Image
                src="/assets/img/facility-shape.png"
                alt="Facility Shape"
                width={1413}
                height={500}
                className="md:max-w-[1413px] max-w-[950px] absolute right-0 md:top-[-76px] top-[-50px]"
            />

            {/* Facility Wrapper */}
            <div className="pl-4 sm:pl-[calc((100%-600px)/2)] md:pl-[calc((100%-730px)/2)] lg:pl-[calc((100%-984px)/2)] xl:pl-[calc((100%-1240px)/2)] 2xl:pl-[calc((100%-1600px)/2)]" data-aos="fade-up">
                {/* Title */}
                <div>
                    <h3 className="text-black text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] tracking-[-1px]" data-aos="fade-up">
                        Udogodnienia obiektu
                    </h3>
                </div>

                {/* Facility Slider */}
                <div className="pt-[50px] lg:pt-[80px] relative">
                    <Swiper
                        className="facility_slider w-full h-full !overflow-visible"
                        slidesPerView={3.3}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.facility-button-next',
                            prevEl: '.facility-button-prev',
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1.1, spaceBetween: 15 },
                            640: { slidesPerView: 1.4, spaceBetween: 16 },
                            768: { slidesPerView: 1.8, spaceBetween: 20 },
                            1024: { slidesPerView: 2.5, spaceBetween: 24 },
                            1280: { slidesPerView: 3.3, spaceBetween: 30 },
                        }}
                        modules={[Navigation]}
                    >
                        {[
                            {
                                icon: 'facility-icon-1.svg',
                                title: 'Wanna <br>z hydromasażem <br> i jacuzzi',
                                desc: 'Relaksująca strefa odpoczynku – idealna po górskich wędrówkach. Bąbelki i ciepła woda przywracają energię i spokój.',
                                width: 45,
                            },
                            {
                                icon: 'facility-icon-2.svg',
                                title: 'Cały obiekt dla Ciebie',
                                desc: 'Prywatność i swoboda – wynajmujesz cały dom tylko dla siebie, by cieszyć się komfortem i górską atmosferą.',
                                width: 50,
                            },
                            {
                                icon: 'facility-icon-3.svg',
                                title: 'Bezpłatny parking <br>na terenie obiektu',
                                desc: 'Wygodne i bezpieczne miejsce postojowe tuż przy domu – bez dodatkowych kosztów i bez potrzeby wcześniejszej rezerwacji.',
                                width: 50,
                            },
                            {
                                icon: 'facility-icon-4.svg',
                                title: 'Plac zabaw',
                                desc: 'Przestrzeń dla najmłodszych Gości – huśtawki i zjeżdżalnie zapewniają radość, a rodzicom dają chwilę wytchnienia w górskim otoczeniu.',
                                width: 50,
                            },
                            {
                                icon: 'facility-icon-5.svg',
                                title: 'Aneks kuchenny',
                                desc: 'W pełni wyposażony – lodówka, piekarnik, płyta kuchenna i ekspres do kawy, by przygotować posiłki w domowej atmosferze.',
                                width: 50,
                            },
                            {
                                icon: 'facility-icon-6.svg',
                                title: 'Taras',
                                desc: 'Miejsce na poranną kawę lub wieczorny relaks – z widokiem na ogród i spokojem podhalańskiej okolicy.',
                                width: 50,
                            },
                            {
                                icon: 'facility-icon-7.svg',
                                title: 'Grill',
                                desc: 'Idealny na wspólne biesiadowanie – pozwala cieszyć się smakiem potraw na świeżym powietrzu w otoczeniu górskiej natury.',
                                width: 45,
                            },
                        ].map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="px-[20px] lg:px-[30px] py-[40px] lg:py-[50px] border border-[#252324] rounded-[40px] text-center">
                                    <Image
                                        src={`/assets/img/${slide.icon}`}
                                        alt={slide.title.replace(/<br>/g, ' ')}
                                        width={slide.width}
                                        height={50}
                                        className="w-[45px] block mx-auto"
                                    />
                                    <h4
                                        className="text-black text-xl 2xl:text-2xl font-medium leading-[129.167%] tracking-[0.24px] my-5"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                    />
                                    <p className="text-primary text-base xl:text-lg 2xl:text-xl font-normal leading-[140%] tracking-[-0.2px]">
                                        {slide.desc}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="w-[105px] md:w-[100px] xl:w-[116px] flex items-center gap-4 xl:gap-5 absolute top-[108%] md:top-[-30px] xl:top-[-40px] md:right-[16%] right-[30%] select-none" data-aos="zoom-in-left">
                        <div className="swiper-button-prev facility-button-prev after:hidden !w-[35px] md:!w-[36px] lg:!w-[40px] xl:!w-[48px] !static">
                            <Image
                                src="/assets/img/left.svg"
                                alt="Previous"
                                width={48}
                                height={48}
                                className="w-full"
                            />
                        </div>
                        <div className="swiper-button-next facility-button-next after:hidden !w-[35px] md:!w-[36px] lg:!w-[40px] xl:!w-[48px] !static">
                            <Image
                                src="/assets/img/right.svg"
                                alt="Next"
                                width={48}
                                height={48}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facility;