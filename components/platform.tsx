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
        <div className='space-y-3'>
            <h5 className='text-[#22242C] dark:text-white transition-colors text-lg font-semibold'>{name}</h5>
            <div className='rounded-full bg-[#F5F5F5] dark:bg-gray-200 w-full h-3'>
                <div className={`${color} ${width} h-full rounded-full`}/>
            </div>
            <div className='flex justify-between dark:text-white transition-colors'>
                <span>${amount}</span>
                <span>+{percent}%</span>
            </div>
        </div>
    )
}

export default Platform