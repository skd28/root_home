import React from "react";

function Hidden() {
  return (
    <>
      <div className="   h-screen bg-blue-50 lg:hidden bg-fixed sm:bg-cover sm:bg-center bg-[url('/mobile.jpg')] md:bg-[url('/Desktop.jpg')]">
        {/* Logo */}
        <div className="px-5 pt-10 xs:px-10 md:px-7 lg:px-16 ">
          <img src="/logo.png" alt="logo" className="  w-20 h-7 " />
        </div>
        <div
          className=" mx-5 text-center   text-white text-5xl  font-bold font-inter mt-10 xs:text-6xl xs:mx-12 xs:mt-10 sm:text-8xl sm:mt-20 sm:mx-28  
                   md:text-8xl md:mx-40  xl:mx-96 xl:text-8xl xl:mt-5 "
        >
          Please open on desktop for better view.
        </div>
        <div className=" h-1/2 mt-10 ">
          <p className="text-white text-center text-xs ">
            Copyrights @ Root Integrated Technologies Pvt. Ltd 2023
          </p>
        </div>
      </div>
    </>
  );
}

export default Hidden;
