'use client'

import { Notification } from 'iconsax-react'
import React, { useEffect, useRef, useState } from 'react'

function NotificationBox() {
    const notif = useRef<HTMLDivElement>(null)
    const [showPopup, setShowPopup] = useState<boolean>(false)

    useEffect(()=>{
        const hidePopup = (e: any) => {
            if(!notif.current?.contains(e.target)){
                setShowPopup(false)
            }
        }

        document.addEventListener("click", hidePopup)

        return () => document.removeEventListener("click", hidePopup) 
    },[])

    return (
        <div ref={notif} className='relative'>
            <button 
                onClick={()=>setShowPopup(prevState => !prevState)}
                className="hidden  h-10 w-10 text-[#0D062D] dark:text-gray-200 rounded-full border border-neutral-400 dark:border-[#737373] tablet:flex items-center justify-center"
            >
                <Notification size="20" variant="Outline"/>
            </button>

            {showPopup && <div className='max-w-60 bg-white absolute top-10 left-1/2 -translate-x-1/2 py-8 px-10 z-10 shadow-md rounded-md'>
                <p className=' italic whitespace-nowrap'>Notification is empty</p>
            </div>}
        </div>
    )
}

export default NotificationBox