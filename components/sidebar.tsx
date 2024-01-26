'use client'

import Image from 'next/image'
import React from 'react'
import { ArrowCircleRight2, Box, Category, DiscountShape, InfoCircle, Logout, Profile2User, Setting2, TrendUp } from "iconsax-react";
import Link from 'next/link';


function Sidebar() {
    
    const handleSwitch = () => {
        document.documentElement.classList.toggle('dark')
    }

    return (
        <ul className="h-full flex flex-col gap-1 py-5 bg-[#F7F8FA] border-r border-r-[#EBECF2] dark:bg-[#171717] dark:border-r-[#737373] transition-all">
            <li>
                <Link href="/" className="block px-5 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5"/>
                    </svg>
                </Link>
            </li>
            <li className="nav-item relative active">
                <Category color="#b2abab" variant="Bulk"/>
            </li>
            <li className="nav-item">
                <TrendUp size="24" color="#b2abab" variant="Broken"/>
            </li>
            <li className="nav-item">
                <Profile2User color="#b2abab" variant="Broken"/>
            </li>
            <li className="nav-item">
                <Box color="#b2abab" variant="Broken"/>
            </li>
            <li className="nav-item">
                <DiscountShape color="#b2abab" variant="Broken"/>
            </li>
            <li className="nav-item">
                <InfoCircle color="#b2abab" variant="Broken"/>
            </li>
            <li className="px-1.5">
                <button onClick={handleSwitch} className="bg-white dark:bg-[#262626] flex flex-col gap-2 p-2 rounded-full mx-auto">
                    <span className="bg-primary-green dark:bg-[#262626] transition-all toggle-item">
                        <Image
                            src={"/brightness.svg"}
                            height={18}
                            width={18}
                            alt="Moon Icon"
                        />
                    </span>
                    <span className="toggle-item dark:bg-primary-green transition-all">
                        <Image
                            src={"/moon.svg"}
                            height={24}
                            width={24}
                            alt="Moon Icon"
                        />
                    </span>
                </button>
            </li>
            <li className="nav-item mt-auto">
                <ArrowCircleRight2 color="#b2abab" variant="Broken"/>
            </li>
            <li className="nav-item">
                <Setting2 color="#b2abab" variant="Broken"/>
            </li>
            <li className="nav-item">
                <Logout color="#b2abab" variant="Broken"/>
            </li>
        </ul>
    )
}

export default Sidebar