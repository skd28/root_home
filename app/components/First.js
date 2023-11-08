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

    //  useEffect(() => {
    // const interval = setInterval(() => {
    //     if (
    //         countdown.days === 0 &&
    //         countdown.hours === 0 &&
    //         countdown.minutes === 0 &&
    //         countdown.seconds === 0
    //     ) {
    //         clearInterval(interval); // Timer has reached 0, stop the interval
    //     } else {
    //         const newCountdown = { ...countdown };

    //         if (newCountdown.seconds === 0) {
    //             newCountdown.seconds = 59;
    //             if (newCountdown.minutes === 0) {
    //                 newCountdown.minutes = 59;
    //                 if (newCountdown.hours === 0) {
    //                     newCountdown.hours = 23;
    //                     if (newCountdown.days > 0) {
    //                         newCountdown.days -= 1;
    //                     }
    //                 } else {
    //                     newCountdown.hours -= 1;
    //                 }
    //             } else {
    //                 newCountdown.minutes -= 1;
    //             }
    //         } else {
    //             newCountdown.seconds -= 1;
    //         }

    //         setCountdown(newCountdown);
    //     }
    // }, 1000);

    // return () => clearInterval(interval); // Cleanup when the component unmounts
    // }, [countdown]);
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
            <div className=" bg-blue-50 h-5/6  bg-cover bg-center bg-[url('/mobile.jpg')] md:bg-[url('/Desktop.jpg')]"
                style={{
                    // backgroundImage: `url('/Desktop.jpg')`, lg:bg-[url('/Desktop.jpg')]  md:bg-[url('/mobile.jpg')]
                }}
            >
                <div className='px-5 pt-10 xs:px-10 md:px-7 lg:px-16 '>
                    <img src='/logo.png' alt='logo' className='  w-20 h-7 ' />
                </div>
                <div className=' w-full h-4/5  pt-8 grid grid-flow-row md:grid-flow-col ' >
                    <div className=' mx-auto md:mx-0 md:px-7  lg:px-16' >
                        <h1 className='text-white text-[2rem] font-semibold xs:text-[4rem] sm:text-[5rem] md:text-[4rem] lg:text-[5rem]' >Get ready for</h1>
                        <h1 className='text-white text-[2rem] font-semibold bottom-4 relative xs:text-[4rem] sm:text-[5rem] md:text-[4rem] lg:text-[5rem]' >your</h1>
                        <h1 className='text-[#61ABEB] text-[2rem] font-semibold bottom-5 relative xs:text-[4rem] sm:text-[5rem] md:text-[4rem] lg:text-[5rem]'> technological</h1>
                        <h1 className='text-[#61ABEB] text-[2rem] font-semibold bottom-5 relative xs:text-[4rem] sm:text-[5rem] md:text-[4rem] lg:text-[5rem]'>journey.</h1>
                        <p className='text-white bottom-5 relative '>We are halfway....</p>
                    </div>

                    <div className='text-center items-center justify-center relative grid grid-flow-row mx-auto  md:mx-0' >
                        <div className='grid grid-flow-col gap-20  md:gap-10 '>
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
                        <div className='grid grid-flow-col gap-20 md:gap-10 '>
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
                <div className=' pt-16'>
                    <p className='text-white text-center text-xs '>Copyrights @ Root Integrated Technologies Pvt. Ltd 2023</p>
                </div>
            </div >
        </>
    )
}

export default First