import React from 'react'

const Footer = () => {
    return (
        <div className='bg-blue text-white flex justify-center items-center w-full py-1 gap-10'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-orange'> &lt;</span>

                <span>Safe</span><span className='text-orange'>ZONE/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by Soumojit </div>
        </div>
    )
}

export default Footer