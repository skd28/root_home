"use client"
import React, { useState, useEffect } from 'react';

function Second() {

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference <= 0) {
                clearInterval(interval); // Timer has reached 0, stop the interval
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup when the component unmounts
    }, []);

    return (
        <>
            <div className='bg-blue-50 h-screen bg-cover bg-center' style={{
                backgroundImage: `url('/Desktop.jpg') `
            }}>
                <img src='/logo.png' alt='logo' className='w-20 h-7' />
                <div className='w-full h-4/5 px-20 pt-8'>
                    <div style={{ float: 'left', width: '50%' }}>
                        <h1 className='text-white text-[60px] font-semibold'>Get ready for</h1>
                        <h1 className='text-white text-[60px] font-semibold bottom-4 relative'>your</h1>
                        <h1 className='text-[#61ABEB] text-[60px] font-semibold bottom-8 relative'>technological</h1>
                        <h1 className='text-[#61ABEB] text-[60px] font-semibold bottom-16 relative'>journey.</h1>
                        <p className='text-white bottom-5 relative'>We are halfway....</p>
                    </div>

                    <div className='h-full text-center items-center justify-center bottom-8 relative' style={{ float: 'right', width: '50%' }}>
                        <div style={{ float: 'left', width: '50%' }}>
                            <span className='text-[90px] font-semibold text-white'>
                                {countdown.days}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative'>Days</p>
                            <span className='text-[90px] font-semibold text-white'>
                                {countdown.minutes}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative'>Minutes</p>
                        </div>
                        <div style={{ float: 'right', width: '50%' }}>
                            <span className='text-[90px] font-semibold text-white'>
                                {countdown.hours}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative'>Hours</p>
                            <span className='text-[90px] font-semibold text-white'>
                                {countdown.seconds}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative'>Seconds</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white text-center text-xs'>Copyrights @ Root Integrated Technologies Pvt. Ltd 2023</p>
                </div>
            </div>

        </>
    )
}

export default Second