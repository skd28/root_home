"use client";
import React, { useState } from "react";

// Landing page update on this page


function New_Page() {


  // New Upadte on for screen size 
  return (
    <>
      <div
        className=" bg-blue-800 overflow-hidden bg-cover "
        style={{
          backgroundImage: "url(/new_background.jpg)",
        }}
      >
        <div className=" py-4 mx-auto">
          <div >
            {/* Logo Image */}
            <img
              src="/main_logo.jpg" className=" w-40 mx-auto"

              alt="..."
            />
          </div>
       
        </div>

        <div className="grid grid-flow-row lg:grid-flow-col lg:mt-6 lg:gap-20 ">
          <div className="mx-auto  lg:w-1/2 ">
            <h1 className="font-inter  font-bold  text-white text-center my-4  text-[1.5rem] xs:text-[2rem] lg:text-[3rem] xs:my-2 lg:py-0">
              Welcome to Root Technologies Pvt Ltd.
            </h1>
          </div>
          

          <div className="grid grid-flow-row mx-6  md:mx-auto">
            <div class="lg:w-[76%] lg:h-[27px]  w-[90%]  text-white text-lg font-normal font-inter xs:text-center lg:text-left md:text-left py-6 lg:py-10  md:mx-0 mx-auto lg:mx-0 ">We provide the following services</div>
            <div className="   md:mx-auto  sm:mx-auto mx-auto w-full">
              <div className="pb-3">
                <span className="text-white text-xl font-semibold xs:text-lg lg:text-xl  font-inter h-5" >Infrastructure</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2 h-3">
                  (Network Services, RMM, Email, Security, Backup/DRAAS)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-lg font-semibold lg:text-xl font-inter" >Audit</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Control Compliance Gap, Pentesting, GRC/ISMA/ITSA, Vulnerability Assessment)

                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-lg font-semibold lg:text-xl font-inter" >Cloud</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Consulting, Integration, Migration, Monitoring/Management)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-lg font-semibold lg:text-xl font-inter" >SEO</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Keyword, Market Research, On/Off Page, Technical, Reports, Local, Strategy, Optimization)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white textxl text-xl font-semibold font-inter" >DevOps</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (IaC, Docker, Kubernetes, Monitoring/Logging, Automation, CI/CD, PaaS)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl xs:text-lg font-semibold lg:text-xl font-inter" >Product Engineering</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (CMS, E-commerce, UXI Engineering, Mobile, Web)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-lg font-semibold lg:text-xl font-inter" >Hosting </span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter">
                  (Dedicated, Private, Public, Hybrid)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-white text-xl lg:text-3xl font-inter text-center w-3/4 mx-auto  py-2 xs:py-4 lg:my-1 0">
          Prepare for Lift-off: Our Website Lands Soon
        </div>

        <div className=" mx-5 mt-10">
          <div className="flex ">
            <img src="/id-badge-solid.svg" alt="..." width={20} height={20}  />
            <p className="text-white px-3"> : +91 98244 47659 </p>
          </div>
          <div className=" flex">
            <img src="/envelope-solid.svg" alt="..." width={20} height={20}  />
            <p className="text-white px-3"> : info@roottechnologies.co.in </p>
          </div>
          <div className="flex ">
          <img src="/address-book-solid.svg" alt="..." width={20} height={20}  /> 
          <p className="text-white px-3"> : 703, Rajhans Montessa, Dumas Rd, beside Le Meridien Hotel, near Airport, Surat, Gujarat 395007 </p>
          </div>
          
          

        </div>
        {/* Footer part content update */}
        <p className="text-xs leading-5 text-white  text-center py-5 lg:py-0">
          Copyright © 2023 Root Technologies Pvt Ltd.  All Rights Reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default New_Page;



















