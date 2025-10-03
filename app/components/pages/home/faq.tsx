'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (openIndex !== null && accordionRefs.current[openIndex]) {
        accordionRefs.current[openIndex]!.style.maxHeight = `${accordionRefs.current[openIndex]!.scrollHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set max-height for open item

    return () => window.removeEventListener('resize', handleResize);
  }, [openIndex]);

  const accordionItems = [
    {
      question: 'Do której godziny jest doba hotelowa i czy można ją przedłużyć?',
      answer: 'Doba hotelowa obowiązuje od godziny 16:00 do 10:00. Istnieje możliwość przedłużenia pobytu po wcześniejszym uzgodnieniu.',
    },
    {
      question: 'Jak najlepiej zarezerwować pobyt?',
      answer: 'Najwygodniej rezerwować bezpośrednio poprzez kontakt z gospodarzem – telefonicznie lub online, a także poprzez booking.com.',
    },
    {
      question: 'Jak potwierdzić rezerwację?',
      answer: 'Rezerwacja zostaje potwierdzona po wpłacie zadatku i otrzymaniu wiadomości zwrotnej od gospodarza.',
    },
    {
      question: 'Co znajduję się w wyposażeniu domku?',
      answer: 'Domek ma w pełni wyposażony aneks kuchenny, pościel, ręczniki, pralkę, telewizor oraz dostęp do Wi-Fi.',
    },
    {
      question: 'Czy posiadają Państwo dodatkowe łóżeczko dla dzieci?',
      answer: 'Na życzenie możemy udostępnić łóżeczko dziecięce – prosimy o wcześniejszą informację przy rezerwacji.',
    },
    {
      question: 'Czy w domku można palić?',
      answer: 'Wewnątrz obowiązuje zakaz palenia.',
    },
    {
      question: 'Czy zwierzęta są akceptowane?',
      answer: 'Niestety nie przyjmujemy zwierząt w Family House.',
    },
    {
      question: 'Czy na miejscu jest parking?',
      answer: 'Tak, Goście mogą korzystać z bezpłatnego, prywatnego parkingu przy obiekcie.',
    },
    {
      question: 'Czy na miejscu są atrakcję dla dzieci?',
      answer: 'Tak, najmłodsi mają do dyspozycji plac zabaw w ogrodzie.',
    },
    {
      question: 'Czy w domkach działa Wi-Fi?',
      answer: 'Tak, w całym obiekcie dostępne jest bezpłatne Wi-Fi.',
    },
    {
      question: 'Czy domek ma jacuzzi?',
      answer: 'Tak, do dyspozycji Gości jest wanna z hydromasażem oraz jacuzzi.',
    },
  ];

  return (
    <section className="pt-[80px] lg:pt-[96px] pb-[50px] md:pb-[90px] xl:pb-[115px] relative" data-aos="fade-up">
      {/* FAQ Shape */}
      <Image
        src="/assets/img/faq-shape.png"
        alt=""
        width="862"
        height="500"
        className="max-w-[862px] absolute top-[-40px] right-0"
      />

      <div className=" px-0  mx-auto">
        {/* FAQ Title */}
        <div className="container text-center mb-[60px] md:mb-[95px]">
          <h3 className="text-[#010101] text-[32px] md:text-[40px] lg:text-[42px] xl:text-[62px] 2xl:text-[72px] font-normal leading-[130%] lg:leading-[111.111%] tracking-[-1px]" data-aos="fade-up">
            Najczęściej zadawane pytania (FAQ)
          </h3>
        </div>

        {/* Accordion Items */}
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item w-full md:w-[62%] mb-[30px] md:mb-[40px] ${index % 2 === 1 ? 'ml-auto' : ''}`}
            data-open={openIndex === index}
          >
            <button
              type="button"
              className="accordion-header w-full flex items-center md:justify-center gap-[30px] md:gap-[50px] px-4 pb-5 md:pb-6 border-b border-b-[rgba(0,0,0,0.50)] cursor-pointer transition-all duration-300 text-lg md:text-xl xl:text-2xl text-black font-normal leading-[120%] lg:leading-[91.667%] tracking-[-0.24px] uppercase outline-none text-center"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <Image
                src="/assets/img/accordian-arrow.svg"
                alt="icon"
                width="24"
                height="24"
                className={`w-6 arrow-icon transition-transform duration-300 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}
              />
            </button>
            <div
              className="accordion-body px-4 overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: openIndex === index ? `${accordionRefs.current[index]?.scrollHeight}px` : '0' }}
              ref={(el) => { accordionRefs.current[index] = el; }}
            >
              <div className="pt-[15px] md:text-center">
                <p className="text-[#616161] text-base md:text-lg xl:text-xl font-normal leading-[110%] tracking-[-0.2px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;