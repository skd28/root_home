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


            {/* <div className='border-2 border-red-800 bg-black  grid grid-flow-col'>
                <div className='     px-14'>
                    <div class="w-96 h-64 text-blue-400 text-5xl font-semibold font-['Inter']">Building security for tomorrow</div>

                    <h3 className='text-white w-1/2  border-2'>We at Root construct security, networks and products for the generation of tomorrow</h3>
                </div>

                <div className='  '>
                    <div className='flex flex-row'>
                        <h3 className='border-2 bg-[#61ABEB]'>Security</h3>
                        <h3 className='bg-[#61ABEB] border-y-2'>Auditing</h3>
                        <h3 className='border-2 bg-[#61ABEB]'>Networks</h3>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Navbar