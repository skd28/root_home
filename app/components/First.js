"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';

function First() {
    const [countdown, setCountdown] = useState({
        days: 30,
        hours: 30,
        minutes: 30,
        seconds: 30,
    });

    useEffect(() => {
        var countDownDate = new Date("Dec 7, 2023 23:59:59").getTime();


        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            const obj = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds

            }
            setCountdown(obj)

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                // make button for Go to Root Home button visible
            }
        }, 1000);
    }, []);

    return (
        <>
            <div className="sm:h-screen   bg-blue-50   bg-fixed sm:bg-cover sm:bg-center bg-[url('/mobile.jpg')] md:bg-[url('/Desktop.jpg')]" >
                {/* Logo */}
                <div className='px-5 pt-10 xs:px-10 md:px-7 lg:px-16 '>
                    <img src='/logo.png' alt='logo' className='  w-20 h-7 ' />
                </div>

                <div className=' w-full  pt-8  md:grid md:grid-cols-2 ' >
                    {/* Text part */}
                    <div className=' mx-auto md:mx-0 md:px-7 lg:px-16 sm:text-center  xs:text-center md:text-left text-center ' >
                      
                        <h1 className='text-white text-[2rem] font-semibold xs:text-[3rem] sm:text-[5rem] md:text-[4rem] lg:text-[4rem]' >Get ready for</h1>
                        <h1 className='text-white text-[2rem] font-semibold bottom-4 relative xs:text-[3rem] sm:text-[5rem] md:text-[4rem] lg:text-[4rem]' >your</h1>
                         
                        
                        <h1 className='text-[#61ABEB] text-[2rem] font-semibold bottom-5 relative xs:text-[3rem] sm:text-[5rem] md:text-[4rem] lg:text-[4rem]'> technological</h1>
                        <h1 className='text-[#61ABEB] text-[2rem] font-semibold bottom-5 relative xs:text-[3rem] sm:text-[5rem] md:text-[4rem] lg:text-[4rem]'>journey.</h1>
                        <p className='text-white bottom-5 relative '>We are halfway....</p>
                    </div>
                    {/* Counter */}
                    <div className='text-center items-center justify-center relative grid grid-rows-2 mx-auto md:mx-0 ' >
                        <div className='grid grid-cols-2 gap-20  md:gap-10 '>
                            <div>
                                <span className='text-[4rem] font-semibold text-white xs:text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem]'  >
                                    {countdown.days}
                                </span>
                                <p className='text-white text-[1rem] w-3/5  bottom-4 relative  mx-auto ' >Days</p>
                            </div>
                            <div >
                                <span className='text-[4rem] font-semibold text-white  xs:text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem]' >
                                    {countdown.hours}
                                </span>
                                <p className='text-white text-[1rem] w-3/5  bottom-4 relative  mx-auto '>Hours</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-20 md:gap-10 '>
                            <div>
                                <span className='text-[3rem] font-semibold text-white  xs:text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem]' >
                                    {countdown.minutes}
                                </span>
                                <p className='text-white text-[1rem] w-3/4  bottom-4 relative mx-auto ' >Minutes</p>
                            </div>
                            <div>
                                <span className='text-[4rem] font-semibold text-white  xs:text-[5rem] sm:text-[6rem] md:text-[5rem] lg:text-[6rem]' >
                                    {countdown.seconds}
                                </span>
                                <p className='text-white text-[1rem] w-3/4 bottom-4 relative  mx-auto  '>Seconds</p>
                            </div>

                        </div>

                    </div>
            
                </div>
                        {/* Footer */}
                        <div className='pb-4 h-1/4'>
                    <p className='text-white text-center text-xs xs:pt-4 sm:pt-48 lg:pt-96'>Copyrights @ Root Integrated Technologies Pvt. Ltd 2023</p>
                </div>
            </div >
        </>
    )
}

export default First
