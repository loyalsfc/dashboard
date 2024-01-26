import React from 'react'

function Bar({value, height}:{value: string; height: string}) {
    return (
        <div className='w-5 sm:w-[30px] group relative'>
            <div className='bg-[#090C2C] scale-0 group-hover:scale-100 transition-all left-1/2 -top-9 -translate-x-1/2 rounded-lg px-3.5 py-1 absolute text-sm text-white shadow-lg w-fit after:contents-[""] after:block after:w-0 after:h-0 after:border-[0.5rem] after:border-transparent after:border-t-[1rem] after:border-t-[#090C2C] after:absolute after:left-1/2 after:-translate-x-1/2'>
                ${value}.000
            </div>
            <div className={`bar-item ${height} bar-animation`}/>
        </div>
    )
}

export default Bar