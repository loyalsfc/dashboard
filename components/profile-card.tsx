'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowDown2, Cards, I24Support, LogoutCurve, Setting, User } from "iconsax-react";


function ProfileCard() {
    const [hideDropDown, setHideDropDown] = useState<boolean>(true);
    const profileRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const documentClick = (e: any) => {
            if(!profileRef.current?.contains(e.target)){
                setHideDropDown(true);
            }  
        } 
        
        document.addEventListener("click", documentClick)
        return () => {
            document.removeEventListener("click", documentClick)
        }
    }, [])
    

    const toggleDropwDown = () => {
        setHideDropDown(prevState => !prevState)
    }

    return (
        <div ref={profileRef} className='relative'>
            <div onClick={toggleDropwDown} className="px-2 py-1.5 border border-neutral-400 cursor-pointer dark:border-[#737373] flex gap-2 items-center rounded-full">
                <div className="w-[38px] rounded-full overflow-hidden h-[38px]">
                    <Image
                        src="/profile-img.jpg"
                        height={38}
                        width={38}
                        alt="Profile Image"
                    />
                </div>
                <div className="text-end mr-1 flex flex-col justify-center leading-none">
                    <span>Justin Bergson</span>
                    <span className="text-[#787486] text-sm">Justin@gmail.com</span>
                </div>
                <ArrowDown2 size="20" variant="Outline" className={` transition-all ${hideDropDown ? "" : "rotate-180"}`}/>
            </div>
            <div className={`absolute top-full bg-white dark:bg-dark w-11/12 shadow rounded-lg transition-all overflow-hidden ${hideDropDown && "hidden scale-y-0"}`}>
                <ul className="text-sm font-medium">
                    <li className="dropdown-item border-b border-b-neutral-200 dark:border-[#737373]">My Account</li>
                    <li className="dropdown-item"><User size={20}/> Profile</li>
                    <li className="dropdown-item"><Cards size={20}/> Billing</li>
                    <li className="dropdown-item"><Setting size={20}/> Settings</li>
                    <li className="dropdown-item"><User size={20}/> Profile</li>
                    <li className="dropdown-item border-b border-b-neutral-200 dark:border-[#737373]"><I24Support size={20}/> Support</li>
                    <li className="dropdown-item text-[#ED544E]"><LogoutCurve size={20}/> Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard