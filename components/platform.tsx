import React from 'react'

interface Props{
    color : string;
    width: string;
    name: string;
    amount: string;
    percent: string;
}

function Platform({color, width, name, amount, percent}: Props) {
    return (
        <div className='space-y-1 xs:space-y-2 sm:space-y-3'>
            <h5 className='text-[#22242C] dark:text-white transition-colors text-base xs:text-lg font-semibold'>{name}</h5>
            <div className='rounded-full bg-[#F5F5F5] dark:bg-gray-200 w-full h-2 xs:h-3'>
                <div className={`${color} ${width} h-full rounded-full platforms-width`} />
            </div>
            <div className='flex justify-between dark:text-white transition-colors text-sm xs:text-base'>
                <span>${amount}</span>
                <span>+{percent}%</span>
            </div>
        </div>
    )
}

export default Platform