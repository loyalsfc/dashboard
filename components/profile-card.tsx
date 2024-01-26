'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowDown2, Cards, I24Support, Logout, Setting2, User } from "iconsax-react";


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

    return (
        <div ref={profileRef} className='relative'>
            <div onClick={()=>{setHideDropDown(prevState => !prevState)}} className="px-2 py-1.5 tablet:border border-neutral-400 cursor-pointer dark:border-[#737373] flex gap-2 items-center rounded-full">
                <div className="w-8 sm:w-[38px] rounded-full overflow-hidden h-8 sm:h-[38px] relative transition-all">
                    <Image
                        src="/profile-img.jpg"
                        fill
                        alt="Profile Image"
                    />
                </div>
                <div className="text-end mr-1 hidden tablet:flex flex-col justify-center leading-none">
                    <span>Justin Bergson</span>
                    <span className="text-[#787486] text-sm">Justin@gmail.com</span>
                </div>
                <ArrowDown2 size="20" variant="Outline" className={`hidden tablet:block transition-all ${hideDropDown ? "" : "rotate-180"}`}/>
            </div>
            <div className={`absolute top-full right-0 z-50 bg-white w-[200px] dark:bg-dark desktop:w-11/12 shadow rounded-lg transition-all overflow-hidden ${hideDropDown && "hidden scale-y-0"}`}>
                <ul className="text-sm font-medium">
                    <li className="dropdown-item border-b border-b-neutral-200 dark:border-[#737373]">My Account</li>
                    <li className="dropdown-item"><User variant='Broken' size={20}/> Profile</li>
                    <li className="dropdown-item"><Cards variant='Broken' size={20}/> Billing</li>
                    <li className="dropdown-item"><Setting2 variant='Broken' size={20}/> Settings</li>
                    <li className="dropdown-item border-b border-b-neutral-200 dark:border-[#737373]"><I24Support variant='Broken' size={20}/> Support</li>
                    <li className="dropdown-item text-[#ED544E]"><Logout variant='Broken' size={20}/> Logout</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard