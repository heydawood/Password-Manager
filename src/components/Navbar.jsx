import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className='mycontainer flex justify-between px-4 py-5 h-10 items-center '>
                <div className="logo font-bold text-2xl">
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/ &gt;</span>
                </div>
                {/* <ul className=''>
                    {/* <li className='flex gap-4'>
                        <a className='hover:font-semibold' href="/">Home</a>
                        <a className='hover:font-semibold' href="#">About</a>
                        <a className='hover:font-semibold' href="#">Contact</a>
                    </li>
                </ul> */}
                <div>
                <a href="https://github.com/heydawood" target='_blank'>
                <button className='text-white bg-green-600 my-5 rounded-full flex justify-between items-center ring-1 ring-white'>
                <img className='invert w-10 p-1 px-2' src="/github.svg" alt="github" /> 
                    <span className='font-bold px-2'>GitHub</span>
                </button>
                </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
