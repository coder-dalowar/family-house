'use client';

import Link from 'next/link';
import React from 'react';

const FooterSection: React.FC = () => {
    return (
        <footer className="bg-white py-[45px]">
            <div className="container">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-[20px] md:gap-[30px] lg:gap-[45px] 2xl:gap-[60px]">
                    <p className="text-black text-sm 2xl:text-base font-inter font-medium tracking-[-0.14px]">
                        &copy; 2025 Family House. Wszelkie prawa zastrzeżone.
                    </p>
                    <p className="text-black text-sm 2xl:text-base font-inter font-medium tracking-[-0.14px]">
                        Design: <Link href="#" className="underline">Cobance Studio</Link> | Development:{' '}
                        <Link href="#" className="underline">234.studio</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;