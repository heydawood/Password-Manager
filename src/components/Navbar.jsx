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
            </div>
        </nav>
    )
}

export default Navbar
