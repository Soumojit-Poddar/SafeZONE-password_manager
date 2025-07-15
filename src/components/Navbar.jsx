import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue text-white'>
            <div className="mycontainer flex justify-between items-center px-7 py-5 h-14 ">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-orange'> &lt;</span>

                    <span>Safe</span><span className='text-orange'>ZONE/&gt;</span>


                </div>
                {/* <ul>
                    <li className='flex gap-4 '>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                <a href="https://github.com/Soumojit-Poddar/SafeZONE-password_manager"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className='text-white bg-orange my-5 mx-1 rounded-full flex  justify-between items-center ring-white ring-1'>
                        <img className='w-10 ' src="/icons/github.png" alt="github logo" />
                        <span className='font-bold pr-2 pl-1'>GitHub</span>

                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar