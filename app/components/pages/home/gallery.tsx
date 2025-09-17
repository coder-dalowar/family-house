'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Gallery: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (previewImage) {
      // Disable scrolling when modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // For mobile devices
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [previewImage]);

  return (
    <section className="bg-[#F4EFEB] relative pt-[100px] lg:pt-[167px] pb-[85px] lg:pb-[102px]">
      {/* Shape */}
      <img
        src="assets/img/gallery-shape.png"
        alt=""
        width="1091"
        height="500"
        className="max-w-[1091px] absolute left-0 top-0"
      />

      <div className="container">
        {/* Gallery Title */}
        <div className="mb-[60px] lg:mb-[96px] relative z-50">
          <h3 className="text-[#010101] text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[111.111%] tracking-[-1px] mb-4 md:mb-5 xl:mb-6" data-aos="fade-up">
            Galeria
          </h3>
          <p className="text-black text-base md:text-lg xl:text-xl font-light tracking-[-0.14px] uppercase" data-aos="fade-up">
            Jak jest w family house? <strong className="font-bold">zobacz sam!</strong>
          </p>
        </div>
      </div>

      {/* Gallery Wrapper */}
      <div className="pl-4 sm:pl-[calc((100%-600px)/2)] md:pl-[calc((100%-730px)/2)] lg:pl-[calc((100%-984px)/2)] xl:pl-[calc((100%-1240px)/2)] 2xl:pl-[calc((100%-1600px)/2)] mt-[-185px] md:mt-[-238px]" data-aos="fade-up">
        <Swiper
          className="gallery_slider w-full h-full !overflow-visible"
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {/* Gallery Slide 1 */}
          <SwiperSlide className="!w-[574px] mt-[238px] z-50">
            <div className="relative">
              <img src="assets/img/gallery-1.png" alt="" className="w-full" width="574" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-1.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 2 */}
          <SwiperSlide className="!w-[428px] mt-[377px] ml-[-100px] z-40">
            <div className="relative">
              <img src="assets/img/gallery-2.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-2.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 3 */}
          <SwiperSlide className="!w-[428px] mt-[0px] ml-[-60px] z-30">
            <div className="relative">
              <img src="assets/img/gallery-3.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-3.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 4 */}
          <SwiperSlide className="!w-[574px] mt-[457px] ml-[-214px]">
            <div className="relative">
              <img src="assets/img/gallery-4.png" alt="" className="w-full" width="574" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-4.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 5 */}
          <SwiperSlide className="!w-[428px] mt-[238px] mx-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-5.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-5.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 6 */}
          <SwiperSlide className="!w-[428px] mt-[426px] mr-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-6.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-6.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 7 */}
          <SwiperSlide className="!w-[428px] mt-[101px] mr-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-7.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-7.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 8 */}
          <SwiperSlide className="!w-[574px] mt-[238px] z-50">
            <div className="relative">
              <img src="assets/img/gallery-8.png" alt="" className="w-full" width="574" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-8.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 9 */}
          <SwiperSlide className="!w-[428px] mt-[377px] ml-[-106px] z-40">
            <div className="relative">
              <img src="assets/img/gallery-9.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-9.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 10 */}
          <SwiperSlide className="!w-[428px] mt-[0px] ml-[-63px] z-30">
            <div className="relative">
              <img src="assets/img/gallery-10.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-10.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 11 */}
          <SwiperSlide className="!w-[574px] mt-[457px] ml-[-214px]">
            <div className="relative">
              <img src="assets/img/gallery-11.png" alt="" className="w-full" width="574" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-11.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 12 */}
          <SwiperSlide className="!w-[428px] mt-[1px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-12.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-12.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 13 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-13.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-13.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 14 */}
          <SwiperSlide className="!w-[428px] mt-[0px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-14.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-14.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 15 */}
          <SwiperSlide className="!w-[551px] mt-[0px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-15.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-15.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
            <div className="relative mt-[39px]">
              <img src="assets/img/gallery-16.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-16.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 16 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-17.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-17.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 17 */}
          <SwiperSlide className="!w-[428px] mt-[1px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-18.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-18.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 18 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-19.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-19.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 19 */}
          <SwiperSlide className="!w-[428px] mt-[1px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-20.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-20.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 20 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-21.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-21.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 21 */}
          <SwiperSlide className="!w-[428px] mt-[0px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-22.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-22.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 22 */}
          <SwiperSlide className="!w-[551px] mt-[0px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-23.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-23.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
            <div className="relative mt-[39px]">
              <img src="assets/img/gallery-24.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-24.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 23 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-25.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-25.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 24 */}
          <SwiperSlide className="!w-[428px] mt-[1px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-26.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-26.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 25 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[40px]">
            <div className="relative">
              <img src="assets/img/gallery-27.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-27.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 26 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-28.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-28.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 27 */}
          <SwiperSlide className="!w-[428px] mt-[1px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-29.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-29.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 28 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-30.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-30.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 29 */}
          <SwiperSlide className="!w-[551px] mt-[0px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-31.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-31.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
            <div className="relative mt-[39px]">
              <img src="assets/img/gallery-32.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-32.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 30 */}
          <SwiperSlide className="!w-[428px] mt-[0px] ml-[38px]">
            <div className="relative">
              <img src="assets/img/gallery-33.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-33.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 31 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[39px]">
            <div className="relative mt-[39px]">
              <img src="assets/img/gallery-34.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-34.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 32 */}
          <SwiperSlide className="!w-[428px] mt-[1px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-35.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-35.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 33 */}
          <SwiperSlide className="!w-[428px] mt-[0px] ml-[38px]">
            <div className="relative">
              <img src="assets/img/gallery-36.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-36.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 34 */}
          <SwiperSlide className="!w-[428px] mt-[378px] ml-[40px]">
            <div className="relative">
              <img src="assets/img/gallery-37.png" alt="" className="w-full" width="428" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-37.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>

          {/* Gallery Slide 35 */}
          <SwiperSlide className="!w-[551px] mt-[0px] ml-[39px]">
            <div className="relative">
              <img src="assets/img/gallery-38.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-38.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
            <div className="relative mt-[39px]">
              <img src="assets/img/gallery-39.png" alt="" className="w-full" width="551" height="400" />
              <button type="button" className="w-[52px] h-[52px] absolute right-5 bottom-5 cursor-pointer z-10" onClick={() => setPreviewImage('assets/img/gallery-39.png')}>
                <img src="assets/img/plus-circle.svg" alt="" className="w-full" width="52" height="52" />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {previewImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999999999999999]">
          <div className="w-full h-full relative flex justify-center items-center">
            {/* Close Button */}
            <button
              className="absolute top-4 cursor-pointer right-4 text-white text-4xl"
              onClick={() => setPreviewImage(null)}
            >
              &times;
            </button>

            {/* Image Container */}
            <div className="max-w-4xl max-h-[90%] w-full h-full flex items-center justify-center p-4">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;