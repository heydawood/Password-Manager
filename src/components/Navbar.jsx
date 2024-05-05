import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex justify-between px-4 h-10 items-center'>
        <div className="logo font-bold">PassOP</div>
      <ul className=''>
        <li className='flex gap-4'>
            <a className='hover:font-semibold' href="/">Home</a>
            <a className='hover:font-semibold' href="#">About</a>
            <a className='hover:font-semibold' href="#">Contact</a>
        </li>
        </ul>
    </nav>
  )
}

export default Navbar
