'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="pt-[110px] md:pt-[120px] lg:pt-[150px] xl:pt-[200px]">
            <div className="container">
                {/* Contact Title */}
                <div>
                    <h3 className="text-[#1A1917] text-[28px] md:text-[36px] xl:text-[48px] font-normal leading-[105%] tracking-[-0.96px] mb-4" data-aos="fade-up">
                        Masz jakieś pytania?
                    </h3>
                    <p className="text-[#1A1917] text-base md:text-lg font-normal leading-normal" data-aos="fade-up">
                        Skorzystaj z formularza kontaktowego
                    </p>
                </div>

                {/* Contact Wrapper */}
                <div className="flex flex-col lg:flex-row md:items-start md:justify-between gap-[30px] pt-[45px] lg:pt-[85px]">
                    {/* Left Column */}
                    <div className="w-full lg:max-w-[910px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[56px] mb-[30px] xl:mb-[38px]">
                            <div data-aos="fade-up">
                                <input
                                    className="text-black text-base font-work-sans font-normal leading-normal w-full h-[55px] border border-black py-2 px-4 rounded-lg outline-none placeholder:text-[#A4A4A4] placeholder:opacity-100"
                                    type="text"
                                    placeholder="Imię"
                                />
                            </div>
                            <div data-aos="fade-up">
                                <input
                                    className="text-black text-base font-work-sans font-normal leading-normal w-full h-[55px] border border-black py-2 px-4 rounded-lg outline-none placeholder:text-[#A4A4A4] placeholder:opacity-100"
                                    type="text"
                                    placeholder="Nazwisko"
                                />
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <input
                                className="text-black text-base font-work-sans font-normal leading-normal w-full h-[55px] border border-black py-2 px-4 rounded-lg outline-none placeholder:text-[#A4A4A4] placeholder:opacity-100"
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:max-w-[612px]">
                        <textarea
                            className="text-black text-base font-work-sans font-normal leading-normal w-full h-[152px] border border-black py-2 px-4 rounded-lg outline-none resize-none placeholder:text-[#A4A4A4] placeholder:opacity-100"
                            placeholder="Treść" data-aos="fade-up"
                        ></textarea>
                        <div className="sm:text-right">
                            <div className="flex items-start sm:justify-end gap-2.5 py-[22px]" data-aos="fade-up">
                                <input
                                    type="checkbox"
                                    id="check"
                                    className="shrink-0 w-3.5 h-3.5 border border-black rounded-[3px] accent-brown cursor-pointer mt-[5px]"
                                />
                                <label
                                    htmlFor="check"
                                    className="text-[#040404] text-sm font-normal leading-normal cursor-pointer"
                                >
                                    Zgadzam się na warunki przetwarzania danych osobowych
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-[#F4EFEB] text-xl xl:text-2xl font-ivymode font-normal leading-normal bg-brown inline-block px-11 py-3 border-none outline-none rounded-lg cursor-pointer transition-all hover:opacity-85" data-aos="fade-up"
                            >
                                Wyślij wiadomość
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Details Section */}
                <div className="pt-[100px] lg:pt-[150px] xl:pt-[190px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    {/* Left Column */}
                    <div className="w-full max-w-[815px]">
                        <div>
                            <h3 className="text-[#1F1F1F] text-[25px] md:text-[30px] 2xl:text-[36px] font-normal leading-[136.111%] mb-5" data-aos="fade-up">
                                Udanego pobytu
                            </h3>
                            <ul>
                                <li className="text-black text-base 2xl:text-xl font-light leading-[140%] tracking-[-0.2px]" data-aos="fade-up">
                                    Doba hotelowa
                                </li>
                                <li className="text-black text-base 2xl:text-xl font-light leading-[140%] tracking-[-0.2px]" data-aos="fade-up">
                                    Zameldowanie od 15:00
                                </li>
                                <li className="text-black text-base 2xl:text-xl font-light leading-[140%] tracking-[-0.2px]" data-aos="fade-up">
                                    Wymeldowanie do 11:00
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between pt-[45px] xl:pt-[60px]">
                            <div>
                                <div className="mb-[22px]">
                                    <h4 className="text-black text-lg 2xl:text-xl !font-work-sans font-medium mb-2.5" data-aos="fade-up">
                                        Lokalizacja
                                    </h4>
                                    <p className="text-primary text-base 2xl:text-xl font-normal tracking-[-0.2px] flex items-center gap-2.5" data-aos="fade-up">
                                        <Image
                                            src="/assets/img/location.svg"
                                            alt="location-icon"
                                            className="w-5 2xl:w-6"
                                            width="24"
                                            height="24"
                                        />
                                        Witów 115a, 34-512 Witów
                                    </p>
                                </div>
                                <div className="mb-[35px] xl:mb-[52px]">
                                    <h4 className="text-black text-lg md:text-xl !font-work-sans font-medium mb-2.5" data-aos="fade-up">
                                        Email
                                    </h4>
                                    <Link
                                        className="text-primary text-base 2xl:text-xl font-normal tracking-[-0.2px] inline-flex items-center gap-2.5 transition-all hover:text-brown"
                                        href="mailto: kontakt@familyhouse.pl" data-aos="fade-up"
                                    >
                                        <Image
                                            src="/assets/img/email.svg"
                                            alt="email-icon"
                                            className="w-5 2xl:w-6"
                                            width="24"
                                            height="24"
                                        />
                                        kontakt@familyhouse.pl
                                    </Link>
                                </div>
                                <ul className="flex items-center gap-5">
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-sm 2xl:text-base font-normal tracking-[-0.16px] transition-all hover:text-brown"
                                        >
                                            Regulamin
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-sm 2xl:text-base font-normal tracking-[-0.16px] transition-all hover:text-brown"
                                        >
                                            Polityka prywatności
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Menu */}
                            <div className="max-w-[327px] w-full mt-[40px] xl:mt-0">
                                <ul className="flex items-center gap-x-4 2xl:gap-x-5 gap-y-1 flex-wrap">
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            O nas
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            Oferta
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            Atrakcje
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            Galeria
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li data-aos="fade-up">
                                        <Link
                                            href="#"
                                            className="text-primary text-base 2xl:text-xl font-normal leading-[165%] tracking-[0.2px] transition-all hover:text-brown"
                                        >
                                            Kontakt
                                        </Link>
                                    </li>
                                </ul>
                                <div className="mt-[50px]" data-aos="fade-up">
                                    <p className="text-primary text-base font-light leading-[120%] mb-[5px]">
                                        Szybki kontakt
                                    </p>
                                    <Link
                                        className="text-primary text-base 2xl:text-lg font-bold leading-normal inline-flex items-center gap-2.5 transition-all hover:text-brown"
                                        href="tel: +48 690 402 823"
                                    >
                                        <Image
                                            src="/assets/img/tel.svg"
                                            alt="tel-icon"
                                            className="w-[17px]"
                                            width="17"
                                            height="17"
                                        />
                                        +48 690 402 823
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="pt-[40px] lg:pt-[70px] pb-[15px] lg:pb-[25px]">
                            <ul className="flex flex-col gap-1.5" data-aos="fade-up">
                                <li>
                                    <Link href="#" className="w-8 inline-block group">
                                        <Image
                                            src="/assets/img/facebook-dark.svg"
                                            alt="facebook"
                                            className="w-full transition-all group-hover:social-icon-hover"
                                            width="32"
                                            height="32"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-8 inline-block group">
                                        <Image
                                            src="/assets/img/instagram-dark.svg"
                                            alt="instagram"
                                            className="w-full transition-all group-hover:social-icon-hover"
                                            width="32"
                                            height="32"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full max-w-full lg:max-w-[620px]" data-aos="fade-left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83296.93991424341!2d19.889369870553587!3d49.27584065190892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f29294ef3939%3A0xdf8d87a1716ba6a0!2sZakopane%2C%20Poland!5e0!3m2!1sen!2sbd!4v1757219166529!5m2!1sen!2sbd"
                            className="w-full h-[350px] md:h-[465px] border-0 grayscale"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;