import { DocumentDownload } from 'iconsax-react';
import Image from 'next/image';
import React from 'react'
import ViewReceiptModal from './modal/view-receipt-modal';

interface Props{
    image: string;
    name: string;
    date: string;
    amount: number;
    status: "Paid" | "Refund"
}

function OrderItem({image, name, date, amount, status}: Props) {
  return (
    <tr className='py-3 border-t border-t-[#EDF2F6] dark:border-t-[#737373]'>
        <td className='py-3'>
            <div className='flex items-center gap-2.5 pr-6'>
                <div className='h-8 w-8 rounded-full overflow-hidden'>
                    <Image
                        src={image}
                        height={32}
                        width={32}
                        alt={`${name} image` }
                        className=' object-top object-cover'
                    />
                </div>
                <span className='font-medium text-[#3A3F51] whitespace-nowrap dark:text-gray-200 transition-colors'>{name}</span>
            </div>
        </td>
        <td className='text-[#737373] py-3 pr-6'>{date}</td>
        <td className='text-[#0D062D] dark:text-white transition-colors  font-medium pr-6'>${amount.toLocaleString()}</td>
        <td className={`${status === "Paid" ? "text-primary-green" : "text-[#ED544E]"} py-3 pr-6`}>{status}</td>
        <td className='py-3 pr-6'>
            <ViewReceiptModal date={date} name={name} amount={amount} status={status}/> 
        </td>
    </tr>
  )
}

export default OrderItem