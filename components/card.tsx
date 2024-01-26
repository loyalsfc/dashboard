import { Inter } from 'next/font/google';
import Image from 'next/image'
import React, { FC } from 'react'

const inter = Inter({subsets: ["latin"]})

interface Props{
    Icon: any;
    chart: string;
    title: string;
    isNegative: boolean;
    percent: string;
    value: string
}

function Card({Icon, chart, title, isNegative, percent, value}: Props) {
    return (
        <div className='section p-4 flex flex-col'>
            <div className='flex justify-between mb-1'>
                <span className="h-10 w-10 rounded-full border border-[#E6E6E6] flex items-center justify-center">
                    <Icon color="#34CAA5" size={24} variant="Bulk"/>
                </span>

                <Image
                    src={chart}
                    height={32}
                    width={104}
                    alt={`${title} chart`}
                />
            </div>
            <h5 className='xs:text-lg font-medium text-[#898989]'>{title}</h5>
            <span className='text-xl xs:text-2xl font-semibold text-[#3A3F51] dark:text-gray-200 transition-all'>{value}</span>
            <div className='flex justify-between items-center gap-1 mt-auto pt-3 desktop:pt-0'>
                <span className={`flex px-2 py-1 rounded-full text-xs xs:text-sm items-center gap-1 ${isNegative ? "bg-[#ED544E]/[12%] text-[#ED544E]": "bg-primary-green/[12%] text-primary-green"}`}>
                    {isNegative ? 
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 3.5L4.5 6.5L6.5 4.5L10.5 8.5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 8.5H10.5V5" stroke="#ED544E" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :                    
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 8.5L4.5 5.5L6.5 7.5L10.5 3.5" stroke="#34CAA5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 3.5H10.5V7" stroke="#34CAA5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    }
                    {percent}%
                </span>
                <span className={`${inter.className} text-[#606060] text-xs xs:text-sm flex-1 overflow-hidden whitespace-nowrap text-ellipsis`}>vs. previous month</span>
            </div>
        </div>
    )
}

export default Card