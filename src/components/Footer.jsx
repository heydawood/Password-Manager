import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-900 text-white flex flex-col justify-center items-center fixed bottom-0 w-full' >
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/ &gt;</span>
            </div>
            <div className='flex font-mono justify-center items-center'>
                Created with<img className='h-4 m-1' src="/heart.png" alt="love" />by Dawood Faisal
            </div>

        </div>
    )
}

export default Footer
