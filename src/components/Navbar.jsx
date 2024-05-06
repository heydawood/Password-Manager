import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className='mycontainer flex justify-between px-4 py-5 h-10 items-center '>
                <div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/ &gt;</span>
                </div>
                <ul className=''>
                    <li className='flex gap-4'>
                        <a className='hover:font-semibold' href="/">Home</a>
                        <a className='hover:font-semibold' href="#">About</a>
                        <a className='hover:font-semibold' href="#">Contact</a>
                    </li>
                </ul>
                <button className='text-white bg-green-700 my-5 rounded-md flex justify-between items-center'>
                <img className='invert w-10 p-1' src="/github.svg" alt="github" /> 
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
