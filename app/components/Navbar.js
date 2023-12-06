import React from 'react'


function Navbar() {
    return (
        <>
            <div className='bg-[#0F5AA9] grid grid-flow-col py-4 '>
                <div className='float-left  grid grid-flow-col '>

                    <div className='w-1/2 '>
                        <img src='/logo_.png' alt='Logo not found' className='mx-auto ' />
                    </div>

                    <div className='relative right-10 '>
                        <ul className='grid grid-flow-col items-center gap-14  relative top-2'>
                            <li className='text-white'>Ethos</li>
                            <li className='text-white '>Blogs</li>
                            <li className='text-white '>Team</li>
                            <li className='text-white '>Service</li>
                            <li className='text-white   '>Carrer</li>
                            <li className='text-white '>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='   text-center float-right my-auto '>
                    <button className='text-white px-auto bg-[#001F40]  w-1/2 py-3  text-xs'>Get Service Quote</button>
                </div>
            </div>
        </>
    )
}

export default Navbar