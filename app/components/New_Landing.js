import React from 'react'

function New_Landing() {
    return (
        <>

            <div className='h-screen  object-cover  overflow-y-auto ' style={{
                backgroundImage: "url(/new_background.jpg)",
            }}>

                <div className='p-[1rem]'>
                    <img className='w-[5rem] xs:w-[7rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem]' src="/main_logo.jpg" alt='...' />
                </div>

                <div className='text-center  lg:mt-6'>
                    <div className='text-white text-[1.6rem] xs:text-[2.5rem] xs:w-[18rem] sm:text-[3rem] sm:w-[26rem] md:w-[30rem] lg:w-[33rem] lg:text-[2.5rem]  w-[15rem]  mx-auto'>
                        Welcome to Root Technical
                    </div>

                    <div className='text-white text-[1rem] xs:text-[1.2rem] xs:w-[18rem]  sm:text-[2rem] sm:w-[26rem] md:w-[30rem] lg:w-[33rem] lg:text-[1.8rem] w-[15rem]    mx-auto py-[0.5rem]'>
                        Taking a short break. See you back online soon.
                    </div>

                    <div className='bg-[E2EBF0] bg-white w-[15rem] xs:w-[18rem] sm:w-[20rem] md:w-[26rem] lg:w-[28rem]  mx-auto px-7 xs:px-7 rounded-md my-[0rem] lg:my-3 py-[0.8rem] lg:py-4 ' >
                        <div className='text-left py-[0.3rem] text-[0.6rem]  xs:text-[0.9rem]'>
                            We offer <strong> Networking </strong>, <strong>Security </strong> and  <strong>Product development </strong>  as our services.
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem]'> 
                            If you want to connect us, below is our office and contacts given below:
                        </div>

                        <div className='py-[0.3rem]'>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>Email:</h4>
                            <h4 className=' text-left  text-[0.6rem] xs:text-[0.9rem]'>info@roottechnologies.co.in</h4>
                        </div>
                        <div className='py-[0.3rem]'>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>Phone:</h4>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>
                                +91 98244 47659
                            </h4>

                        </div>
                        <div className='py-0.3rem]'>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>Address:</h4>
                            <h4 className='text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem]'>308-308A Mint Chambers, 45/47 Mint Road, Mumbai 400001 INDIA</h4>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>
                                Rajhans Montessa, Office 703, Surat-Dumas Rd, Surat 395007 INDIA
                            </h4>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default New_Landing
