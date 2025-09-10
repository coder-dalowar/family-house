'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle offcanvas menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body overflow
    document.body.classList.toggle('overflow-hidden');
  };

  // Sticky header logic
  useEffect(() => {
    const header = document.getElementById('header');
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add('header_sticky');
      } else {
        header?.classList.remove('header_sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure header_sticky is added when menu is open
  useEffect(() => {
    const header = document.getElementById('header');
    if (isMenuOpen) {
      header?.classList.add('header_sticky');
    }
  }, [isMenuOpen]);

  // Smooth scroll for scroll_down link (if used in the component)
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
    <header
      className="bg-transparent w-full block xl:py-[42px] lg:py-[30px] md:py-[24px] py-[20px] fixed top-0 transition-all z-[1024]"
      id="header"
    >
      <div className="container">
        <nav className="flex items-center justify-between" data-aos="fade-down">
          {/* Logo */}
          <div className="logo">
            <Link
              href="#"
              className="text-[#F4EFEB] text-[27px] sm:text-[30px] md:text-[30px] lg:text-[26px] 2xl:text-[35px] font-ivymode font-normal tracking-[-1px] inline-flex items-center gap-3 2xl:gap-4"
            >
              <Image
                src="/assets/img/logo.svg"
                alt="Family House Logo"
                width={60}
                height={60}
                className="w-[48px] md:w-[54px] lg:w-[50px] 2xl:w-[60px] shrink-0"
              />
              <span>Family House</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center 2xl:gap-[55px] lg:gap-[35px] gap-[25px]">
            <ul className="flex items-center 2xl:gap-[50px] xl:gap-[30px] lg:gap-[25px] gap-[20px]">
              {['Home', 'O nas', 'Oferta', 'Atrakcje', 'Galeria', 'FAQ', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white text-base xl:text-xl font-medium transition-all hover:opacity-60"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Header Button */}
            <div className="header_btn">
              <Link
                href="#"
                className="text-brown text-base xl:text-[19px] font-ivymode font-normal tracking-[0.38px] bg-[#FFFDFD] inline-block px-[26px] py-1.5 rounded-xl transition-all hover:bg-brown hover:text-white"
              >
                Rezerwuj pobyt
              </Link>
            </div>
          </div>

          {/* Hamburger Button */}
          <div className={`group hamburgar_btn lg:hidden w-10 h-10 flex items-center justify-center ${isMenuOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="bg-transparent border-none outline-none p-0 cursor-pointer"
              onClick={toggleMenu}
            >
              <Image
                src="/assets/img/hamburgar.svg"
                alt="Menu Icon"
                width={40}
                height={40}
                className={`hamburgar_icon ${isMenuOpen ? 'hidden' : 'block'} w-10`}
              />
              <Image
                src="/assets/img/close.svg"
                alt="Close Icon"
                width={30}
                height={30}
                className={`${isMenuOpen ? 'block' : 'hidden'} w-[30px] filter-[brightness(0)_saturate(100%)_invert(39%)_sepia(5%)_saturate(2831%)_hue-rotate(314deg)_brightness(105%)_contrast(77%)]`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Offcanvas Menu */}
      <div
        className={`offcanvas_menu lg:hidden w-full h-screen bg-white pt-[100px] flex flex-col fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} -z-10 transition-all duration-500 overflow-auto`}
      >
        <div className="container">
          <div className="offcanvas_body flex flex-col h-[calc(100vh-100px)]">
            <div className="menu">
              <ul>
                {['Home', 'O nas', 'Oferta', 'Atrakcje', 'Galeria', 'FAQ', 'Kontakt'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="w-full block text-black text-base font-medium transition-all hover:text-brown border-b border-b-brown px-3 py-4 hover:pl-5"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto py-5">
              <Link
                href="#"
                className="header_btn w-full block text-center px-4 py-[14px] text-base text-white font-ivymode font-normal bg-brown rounded-xl transition-all hover:opacity-85"
                onClick={toggleMenu}
              >
                Rezerwuj pobyt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;