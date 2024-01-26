'use client'

import { HambergerMenu } from 'iconsax-react'
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './sidebar';

function MobileMenu() {
    const [showMobile, setShowMobile] = useState(false);
    const sidebarRef = useRef<HTMLElement>(null);
    const menuButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const documentClick = (e: any) => {
            if(!sidebarRef.current?.contains(e.target) && !menuButton.current?.contains(e.target)){
                setShowMobile(false);
            }  
        } 
        
        document.addEventListener("click", documentClick)
        return () => {
            document.removeEventListener("click", documentClick)
        }
    }, [])

    const toggleDropwDown = () => {
        setShowMobile(prevState => !prevState)
    }

    return (
        <>
            <button ref={menuButton} className="sm:hidden" onClick={toggleDropwDown}><HambergerMenu size={20} /></button>
            <aside ref={sidebarRef} className={`fixed w-fit h-screen z-[60] top-0 transition-all overflow-hidden ${showMobile ? "left-0" : "-left-full"}`}>
                <Sidebar />
            </aside>
        </>
    )
}

export default MobileMenu