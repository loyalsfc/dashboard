'use client'

import { DocumentDownload, Printer } from 'iconsax-react'
import React, { useRef, useState } from 'react'

interface Props{
    date: string;
    name: string;
    amount: number;
    status: string;
}

function ViewReceiptModal({date, name, amount, status}: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null)

    const enableModal = () => {
        setShowModal(true)
        setTimeout(()=>{
            modalRef.current?.classList.remove("translate-y-10")
        },0)
    }

    const hideModal = () => {
        modalRef.current?.classList.add("translate-y-10");
        setTimeout(() => {
            setShowModal(false)
        }, 150);
    }

    const print = () => {
        window.print()
    }

    return (
        <div>
            <button onClick={enableModal} className='flex items-center gap-1.5 text-[#292D32] dark:text-gray-200 hover:bg-dark/10  dark:hover:bg-white/10 py-1 px-2 rounded-full transition-all'>
                <DocumentDownload size={16} />
                <span className='text-sm text-[#0D062D] dark:text-white transition-colors'>View</span>
            </button>

            <div className={`fixed h-screen w-full top-0 left-0 ${showModal ? "flex" : "hidden"} z-50  items-center justify-center`}>
                <div onClick={hideModal} className="absolute h-full w-full bg-black/20 dark:bg-white/10 top-0 left-0" />

                <div ref={modalRef} className=' w-11/12 ease-in-out translate-y-10 transition-all border border-[#b2abab] max-w-md bg-white dark:bg-[#262626] rounded-lg p-4 z-[70]'>
                    <h4 className='text-lg xs:text-2xl leading-none font-medium py-3 border-b text-wrap border-b-[#b2abab] flex flex-col dark:text-neutral-400'>
                        Invoice Id #7877859
                        <span className='text-xs xs:text-sm text-neutral-600 dark:text-neutral-400'>{date}</span>
                    </h4>
                    <div className='py-4'>
                        <div className='dark:text-neutral-200'>
                            <span className='text-xs xs:text-sm text-[#b2abab]'>To:</span>
                            <h5 className='text-lg xs:text-2xl font-semibold leading-none'>{name}</h5>
                            <p className='text-xs xs:text-sm text-wrap'>No 33, Freedom way, Lekki, Lagos</p>
                        </div>

                        <div className='py-4'>
                            <table className='w-full border border-[#b2abab] text-center dark:text-neutral-400'>
                                <thead>
                                    <tr className='border-b border-b-[#b2abab] font-medium'>
                                        <td className='min-[230px]:p-2 w-1/6'>S/N</td>
                                        <td className='min-[230px]:p-2 border-x border-x-[#b2abab]'>Amount($)</td>
                                        <td className='min-[230px]:p-2 w-1/6'>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='min-[230px]:p-2 w-1/6'>1</td>
                                        <td className='min-[230px]:p-2 border-x border-x-[#b2abab]'>{amount.toLocaleString()}</td>
                                        <td className='min-[230px]:p-2 w-2/6'>
                                            <span className={`${status === "Paid" ? "text-primary-green" : "text-[#ED544E]"}`}>{status}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='flex flex-col min-[230px]:flex-row gap-3 justify-end mt-4'>
                            <button 
                                onClick={print}
                                className='py-1.5 px-4 rounded-md bg-primary-green justify-center flex text-white gap-2 items-center hover:opacity-90 transition-all'
                            >
                                <Printer size={18} /> Print
                            </button>
                            <button 
                                className='py-1.5 px-4 rounded-md border-primary-green border text-primary-green hover:bg-primary-green hover:text-white transition-all'
                                onClick={hideModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewReceiptModal