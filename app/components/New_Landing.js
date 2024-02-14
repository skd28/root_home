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
                    <div className='text-white text-[1.6rem] xs:text-[2.5rem] xs:w-[18rem] sm:text-[3rem] sm:w-[26rem] md:w-[30rem] lg:w-[40rem] lg:text-[2.5rem]  w-[15rem]  mx-auto'>
                        Welcome to Root Integrated Technologies Pvt Ltd
                    </div>

                    <div className='text-white text-[1rem] xs:text-[1.2rem] xs:w-[18rem]  sm:text-[2rem] sm:w-[26rem] md:w-[30rem] lg:w-[33rem] lg:text-[1.8rem] w-[15rem]    mx-auto py-[0.5rem]'>
                        Taking a short break. See you back online soon.
                    </div>

                    <div className='bg-[E2EBF0] bg-white w-[15rem] xs:w-[18rem] sm:w-[20rem] md:w-[26rem] lg:w-[28rem]  mx-auto px-7 xs:px-7 rounded-md my-[0rem] lg:my-3 py-[0.8rem] lg:py-4 ' >
                        {/* <div className='text-left py-[0.3rem] text-[0.6rem]  xs:text-[0.9rem]'>
                            We offer <strong> Networking </strong>, <strong>Security </strong> and  <strong>Product development </strong>  as our services.
                        </div> */}
                        <div className='  py-[0.3rem] text-[0.8rem] xs:text-[1.2rem] text-center'>
                            <strong>Our Services </strong>
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex whitespace-normal'>
                            <img src='/circle-solid.svg'alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem] xs:[1rem] xs:h-[1.4rem] ' />
                            <strong className='whitespace-nowrap pl-1'>Infrastructure  :</strong>
                            (Network Services, RMM, Email, Security, Backup/DRAAS, Laptop, Desktop)
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex'>
                            <img src='/circle-solid.svg' alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem]  xs:h-[1.4rem] ' />
                            <strong className='whitespace-nowrap pl-1'>Audit  :</strong>
                            (Control Compliance Gap, Pentesting, GRC/ISMA/ITSA, Vulnerability Assessment)
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex'>
                            <img src='/circle-solid.svg' alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem]  xs:h-[1.4rem] ' />
                            <strong className='whitespace-nowrap pl-1'>Cloud  :</strong>
                            (Consulting, Integration, Migration, Monitoring/Management)
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex'>
                            <img src='/circle-solid.svg' alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem]  xs:h-[1.4rem] ' />
                            <strong className='whitespace-nowrap pl-1'>SEO  :</strong>
                            (Keyword, Market Research, On/Off Page, Technical, Reports, Local, Strategy, Optimization)
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex'> 
                        <img src='/circle-solid.svg' alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem]  xs:h-[1.4rem]  ' />
                            <strong className='whitespace-nowrap pl-1'>DevOps  :</strong>
                            (IaC, Docker, Kubernetes, Monitoring/Logging, Automation, CI/CD, PaaS)
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex '>
                            <img src='/circle-solid.svg' alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem]  xs:h-[1.4rem] ' />
                            <strong className='whitespace-nowrap pl-1'>Product Engineering  :</strong>
                            (CMS, E-commerce, UXI Engineering, Mobile, Web)
                        </div>
                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] flex'>
                        <img src='/circle-solid.svg' alt='...'  className='w-[0.6rem] md:h-[1.4rem] h-[0.7rem]  xs:h-[1.4rem] ' />
                            <strong className='whitespace-nowrap pl-1 '>Hosting  :</strong>
                            (Dedicated, Private, Public, Hybrid)
                        </div>

                        <div className=' text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem] pt-5'>
                            If you want to connect us, below is our office and contacts given below:
                        </div>

                        <div className='py-[0.3rem]'>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem] font-semibold'>Email:</h4>
                            <h4 className=' text-left  text-[0.6rem] xs:text-[0.9rem]'>info@roottechnologies.co.in</h4>
                        </div>
                        <div className='py-[0.3rem]'>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem] font-semibold'>Phone:</h4>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>
                                +91 98244 47659
                            </h4>

                        </div>
                        <div className='py-[0.3rem]'>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem] font-semibold'>Address:</h4>
                            <h4 className='text-left py-[0.3rem] text-[0.6rem] xs:text-[0.9rem]'>308-308A Mint Chambers, 45/47 Mint Road, Mumbai 400001 INDIA</h4>
                            <h4 className=' text-left text-[0.6rem] xs:text-[0.9rem]'>
                                Rajhans Montessa, Office 703, Surat-Dumas Rd, Surat 395007 INDIA
                            </h4>
                        </div>

                    </div>
                </div>
                {/* Fotter */}
                <p className="text-[0.7rem] w-[15rem] leading-5 text-white  text-center py-5 mx-auto lg:py-0">
                    Copyright © 2023 Root Integrated Technologies Pvt Ltd.  All Rights Reserved.{" "}
                </p>

            </div>
        </>
    )
}

export default New_Landing
