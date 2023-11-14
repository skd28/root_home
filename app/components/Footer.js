"use client"
import React from 'react'
import { useState } from 'react';

function Footer() {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (

        <>
            <div className=' bg-black  grid grid-flow-col '>
                <div className=' px-20 my-20'>
                    <div className="w-2/3 h-4/5 text-blue-400 text-8xl font-semibold font-inter ">Building security for tomorrow</div>
                    <div className='text-white w-3/5 text-3xl '>We at Root construct security, networks and products for the generation of tomorrow</div>
                </div>

                <div>
                    <div className="max-w-md mx-auto mt-8">
                        <div className="flex">
                            <button
                                className={`py-4 px-4 border text-2xl text-white ${activeTab === 'tab1' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Security
                            </button>
                            <button
                                className={`py-4 px-4 border text-2xl text-white ${activeTab === 'tab2' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Auditing
                            </button>
                            <button
                                className={`py-4 px-4 border text-2xl text-white ${activeTab === 'tab3' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab3')}
                            >
                                Networks
                            </button>
                        </div>
                        <div className="mt-4">
                            {activeTab === 'tab1' &&
                                <div>
                                    <button className='text-white bg-[#0F5AA9] mx-2'> Penetration Testing</button>
                                    <button className='text-white bg-[#0F5AA9] mx-2'>Malware Analysis</button>
                                    <button className='text-white bg-[#0F5AA9] mx-2'>Sanitization</button>
                                </div>
                            }
                            {activeTab === 'tab2' &&
                                <div>
                                    <button className='text-white bg-[#0F5AA9] mx-2'> Auditing1</button>
                                    <button className='text-white bg-[#0F5AA9] mx-2'>Auditing2</button>
                                    <button className='text-white bg-[#0F5AA9] mx-2'>Auditing3</button>
                                </div>
                            }
                            {activeTab === 'tab3' &&
                                <div>
                                    <button className='text-white bg-[#0F5AA9] mx-2'>  Networks1</button>
                                    <button className='text-white bg-[#0F5AA9] mx-2'> Networks2</button>
                                    <button className='text-white bg-[#0F5AA9] mx-2'> Networks3</button>
                                </div>
                            }
                        </div>
                    </div>


                </div>
            </div>




            {/* Landing Page Two */}
            <div className='bg-[#001131]  grid grid-flow-col  py-10 gap-10 '>
                <div className='text-white grid grid-flow-col '>
                    <div className='relative left-7'>
                        <div className=' grid grid-flow-row'>
                            <button
                                className={`w-5/6 py-6 text-center text-white text-base font-bold font-inter border-l-2 border-y-2  ${activeTab === 'tab1' ? 'bg-blue-500 text-black' : ''
                                    }`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Client Co-ordination
                            </button>
                            <button
                                className={`w-5/6 py-6 text-center text-white text-base font-bold font-inter border-l-2 ${activeTab === 'tab2' ? 'bg-blue-500 text-balck' : ''
                                    }`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Planning
                            </button>
                            <button
                                className={`w-5/6 py-6 text-center text-white text-base font-bold font-inter border-l-2 border-y-2 ${activeTab === 'tab3' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab3')}
                            >
                                Prototyping
                            </button>
                            <button
                                className={`w-5/6 py-6 text-center text-white text-base font-bold font-inter border-l-2 ${activeTab === 'tab4' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab4')}
                            >
                                Development
                            </button>
                            <button
                                className={`w-5/6 py-6 text-center text-white text-base font-bold font-inter border-l-2 border-y-2 ${activeTab === 'tab5' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab5')}
                            >
                                Review
                            </button>
                            <button
                                className={`w-5/6 py-6 text-center text-white text-base font-bold font-inter border-l-2 border-b-2 ${activeTab === 'tab6' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab6')}
                            >
                                Maintain
                            </button>

                        </div>
                    </div>
                    <div className='border-4 px-5'>

                        <div className="mt-4">
                            {activeTab === 'tab1' &&
                                <div className='  bg-fixed'>
                                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">#1</div>
                                    <div className=" w-3/5 h-1/6 text-blue-400 text-4xl font-bold font-inter ">Client Coordination</div>
                                </div>
                            }
                            {activeTab === 'tab2' &&
                                <div className=' bg-fixed w-full h-1/2'>
                                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">#2</div>
                                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">Planning</div>
                                </div>
                            }
                            {activeTab === 'tab3' &&
                                <div className='  bg-fixed w-full h-1/2'>
                                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">#3</div>
                                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">Prototyping</div>
                                </div>
                            }
                            {activeTab === 'tab4' &&
                                <div className='  bg-fixed w-full h-1/2'>
                                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">#4</div>
                                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">Development</div>
                                </div>
                            }
                            {activeTab === 'tab5' &&
                                <div className='  bg-fixed w-full h-1/2'>
                                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">#5</div>
                                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter "> Review</div>
                                </div>
                            }
                            {activeTab === 'tab6' &&
                                <div className='  bg-fixed w-full h-1/2'>
                                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">#6</div>
                                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter "> Maintain</div>
                                </div>
                            }
                        </div>
                        <div className="w-full h-1/4 pt-4 text-white text-xl font-normal font-inter my-2  ">
                            Client coordination for what exactly they require is essential. We get only your issues and start planning on it
                        </div>
                        <div className='pb-20 '>
                            <div className='grid grid-flow-col '>
                                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                            </div>
                            <div className='grid grid-flow-col pt-5 '>
                                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className=''>
                    <div className="text-blue-400 text-8xl font-semibold font-[' Inter'] w-2/3 h-3/5  mt-4 relative  left-40">Proper. Faster. Robust.</div>
                    <div className="w-2/5 h-1/4  relative left-64  text-right  mt-4">
                        <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'bold', fontFamily: 'Inter' }}>Our Ethos</span>
                        <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter' }}>
                            lies in developing products, networks and setting security by
                        </span>
                        <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter', textDecoration: 'underline' }}>
                            researching proper
                        </span>
                        <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter' }}>,</span>
                        <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter', textDecoration: 'underline' }}>
                            developing faster
                            <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter' }}>,</span>
                            <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter', textDecoration: 'underline' }}>
                                keeping it robust
                            </span>
                        </span>
                        <span style={{ color: 'white', fontSize: '2xl', fontWeight: 'normal', fontFamily: 'Inter' }}>.</span>
                    </div>

                </div>

            </div>



            {/* Landing Page 3 */}
            <div className='bg-black'>

                <div className=" px-10 text-white text-8xl font-bold font-inter pt-10 ">You Name It. We Have It</div>
                <div className=" px-12 text-white text-2xl font-normal font-inter py-3">
                    Each and every service imaginable, we can serve you with master efficiency</div>
                <div className='px-10 py-5'>
                    <div className='flex flex-row '>
                        <div className="flex flex-col">
                            <button
                                className={`py-8 px-4 border text-2xl text-white w-Full ${activeTab === 'tab1' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Security
                            </button>
                            <button
                                className={`py-8 px-4 border text-2xl text-white w-full ${activeTab === 'tab2' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Auditing
                            </button>
                            <button
                                className={`py-8 px-4 border text-2xl text-white w-full ${activeTab === 'tab3' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab3')}
                            >
                                Networks
                            </button>
                            <button
                                className={`py-8 px-4 border text-2xl text-white w-full ${activeTab === 'tab4' ? 'bg-blue-500 text-white' : ''
                                    }`}
                                onClick={() => handleTabClick('tab4')}
                            >
                                Softwares
                            </button>
                        </div>
                        <div className=" bg-[#001131] flex flex-row border-4  py-8 px-8">
                            {activeTab === 'tab1' &&
                                <div className='flex flex-col h-1/2 mx-5 w-2/5  '>
                                    <button className=" w-full h-1/5  bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter ">Penetration Testing</button>
                                    <button className=" w-full h-1/5 my-4 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter ">Malware Analysis</button>
                                    <button className=" w-full h-1/5  bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter">Sanitization</button>

                                </div>


                            }
                            {activeTab === 'tab2' &&

                                <div className='flex flex-col h-1/2 mx-5 w-2/5 '>
                                    <button className=" w-full h-1/5 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter "> Auditing1</button>



                                    <button className=" w-full h-1/5 my-4 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter "> Auditing1</button>



                                    <button className=" w-full h-1/5  bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter"> Auditing1</button>



                                </div>

                            }
                            {activeTab === 'tab3' &&
                                <div className='flex flex-col h-1/2  mx-5  w-2/5'>
                                    <button className=" w-full h-1/5 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter ">Networks1</button>



                                    <button className=" w-full h-1/5 my-4 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter ">Networks2</button>



                                    <button className=" w-full h-1/5  bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter">Networks3</button>



                                </div>

                            }
                            {activeTab === 'tab4' &&
                                <div className='flex flex-col h-1/2 mx-5  w-2/5'>
                                    <button className=" w-full h-1/5 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter ">Softwares1</button>
                                    <button className=" w-full h-1/5 my-4 bg-[#0F5AA9] rounded-full  text-white text-base font-bold font-inter ">Softwares2</button>
                                    <button className=" w-full h-1/5  bg-[#0F5AA9] rounded-full text-white text-base font-bold font-inter">Softwares3</button>
                                </div>

                            }
                            <div className='bg-[#AFDAFF]  w-2/3 rounded-md  mx-10  relative left-5'>
                                <div className="w-4/5 text-black text-5xl font-bold font-inter mx-5 my-3 mt-10">$ 17 per month</div>
                                <div className="w-40 text-black text-base font-normal font-inter  mx-5 my-3">
                                    2 devices, full-scan of systems and more..</div>
                                <div className="w-5/6 h-1/5 bg-[#000000]  mx-5 my-3 mb-10 border-4 border-blue-400 text-center
                                 text-white text-base pt-3 font-bold font-inter ">Quote Me</div>
                            </div>
                            <div className='bg-[#AFDAFF] w-3/4 rounded-md mx-10 relative right-8'>
                                <div className="w-4/5  text-black text-5xl font-bold font-inter mx-5 my-3 mt-10">$ 40 per year</div>
                                <div className="w-40 text-black text-base font-normal font-inter  mx-5 my-3">2 devices, full-scan of systems and more..</div>
                                <div className="w-5/6 h-1/5 bg-[#000000]  mx-5 my-3 mb-10 border-4 border-blue-400 text-center
                                 text-white text-base pt-3 font-bold font-inter">Quote Me</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            {/* Footer Page */}
            <div className='bg-black px-14'>
                <div className='bg-black grid grid-flow-col py-2'>
                    <img src='/group.png' alt='logo not found ' className='py-2' />
                    <ul className=' text-white grid grid-flow-col  relative right-40 items-center'>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className='grid grid-flow-col text-white   text-right items-center px-4'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className=" border-t border-white/1 t-1">
                    <p className="text-xs leading-5 text-gray-400 text-center py-2">Copyright © 2023 Root Technologies - All Rights Reserved. </p>
                </div>
            </div>
        </>
    )
}

export default Footer