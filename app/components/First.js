"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react';

function First() {
    const [countdown, setCountdown] = useState({
        days: 20,
        hours: 20,
        minutes: 20,
        seconds: 20,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (
                countdown.days === 0 &&
                countdown.hours === 0 &&
                countdown.minutes === 0 &&
                countdown.seconds === 0
            ) {
                clearInterval(interval); // Timer has reached 0, stop the interval
            } else {
                const newCountdown = { ...countdown };

                if (newCountdown.seconds === 0) {
                    newCountdown.seconds = 59;
                    if (newCountdown.minutes === 0) {
                        newCountdown.minutes = 59;
                        if (newCountdown.hours === 0) {
                            newCountdown.hours = 23;
                            if (newCountdown.days > 0) {
                                newCountdown.days -= 1;
                            }
                        } else {
                            newCountdown.hours -= 1;
                        }
                    } else {
                        newCountdown.minutes -= 1;
                    }
                } else {
                    newCountdown.seconds -= 1;
                }

                setCountdown(newCountdown);
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup when the component unmounts
    }, [countdown]);

    return (
        <>
            <div className=' bg-blue-50 h-screen'
                style={{
                    backgroundImage: `url('/Desktop.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='px-20 pt-10'>
                    <img src='/logo.png' alt='logo' className='  w-20 h-7 ' />

                </div>
                <div className=' w-full h-4/5 px-20 pt-8' style={{
                    //border: '2px solid red',
                }}>
                    <div style={{
                        float: 'left',
                        width: '50%',
                    }}>
                        <h1 className='text-white text-[60px] font-semibold' style={{
                            //border: '2px solid red'
                        }}>Get ready for</h1>
                        <h1 className='text-white text-[60px] font-semibold bottom-4 relative' style={{
                            //border:  '2px solid blue'
                        }}>your</h1>
                        <h1 className='text-[#61ABEB] text-[60px] font-semibold bottom-8 relative'> technological</h1>
                        <h1 className='text-[#61ABEB] text-[60px] font-semibold bottom-16 relative'>journey.</h1>
                        <p className='text-white bottom-5 relative '>We are halfway....</p>
                    </div>

                    <div className='h-full text-center items-center justify-center bottom-8 relative ' style={{
                        //border: '2px solid blue',
                        float: 'right',
                        width: '50%',
                    }}>
                        <div className='' style={{
                            float: 'left',
                            width: '50%',
                        }}>
                            <span className='text-[90px] font-semibold text-white' style={{
                                //  border: '2px solid yellow'
                            }} >
                                {countdown.days}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative' style={{
                                //border: '2px solid green'
                            }}>Days</p>
                            <span className='text-[90px] font-semibold text-white' >
                                {countdown.minutes}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative' style={{
                                //border: '2px solid green'
                            }}>Minutes</p>

                        </div>
                        <div className='' style={{
                            float: 'right',
                            width: '50%',
                        }}>
                            <span className='text-[90px] font-semibold text-white' >
                                {countdown.hours}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative'>Hours</p>
                            <span className='text-[90px] font-semibold text-white' >
                                {countdown.seconds}
                            </span>
                            <p className='text-white text-[30px] w-1/3 mx-16 bottom-4 relative'>Seconds</p>

                        </div>

                    </div>
                </div>
                <div className=''>
                    <p className='text-white text-center text-xs '>Copyrights @ Root Integrated Technologies Pvt. Ltd 2023</p>
                </div>
            </div>
        </>
    )
}

export default First