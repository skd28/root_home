"use client";
import React, { useState } from "react";

// Landing page update on this page

function New_Page() {

 
// New Upadte on for screen size 
  return (
    <>
      <div
        className=" lg:bg-blue-800 overflow-hidden bg-cover h-screen  "
        style={{
          backgroundImage: "url(/new_background.jpg)",
        }}
      >
        <div className="py-3 px-4 lg:mx-20 lg:my-10">
          {/* Logo Image */}
          <img
            src="/main_logo.jpg"
            className="w-1/5 h-1/5 md:w-1/6 md:h-1/6 lg:w-[7rem] lg:h-1/6 "
            alt="..."
          />
        </div>

        <div className="grid grid-flow-row lg:grid-flow-col lg:mt-8 lg:gap-20">
          <div className="mx-auto  lg:w-1/2 ">
            <h1 className="font-inter text-xl font-bold my-4 xs:my-2 text-white text-center  xs:text-3xl sm:text-4xl md:text-4xl lg:text-6xl  lg:py-0">
              Welcome to Root Technologies.
            </h1>
          </div>

          {/* <div className="flex flex-row xs:px-8 px-3 lg:px-60  mx-auto lg:w-3/5">
            <div className="">
              <button
                className="text-white text-4xl py-40  xs:py-32 xs:text-5xl sm:text-6xl lg:text-3xl lg:py-28"
                onClick={moveBackward}
              >
                {"<"}
              </button>
            </div>

            <div className=" snap-x flex snap-mandatory overflow-scroll w-full xs:px-10 sm:px-16  scroll-smooth scrollbar-hide lg:px-0">
              <div className="snap-start  h-5/6 ">
                <h1 className=" text-center text-3xl py-3 text-[#80D5FF] w-full xs:text-3xl sm:text-4xl md:text-7xl
                 lg:text-3xl lg:py-0 lg:text-right   lg:h-20  lg:whitespace-nowrap">
                  {data[iterator].heading}
                </h1>
                <p className="text-base text-white  text-center px-4  sm:text-xl md:text-2xl lg:text-xs">
                  {data[iterator].content}
                </p>
              </div>
            </div>
            <div className=" ">
              <button
                className="text-white text-4xl py-40  xs:py-32 xs:text-5xl sm:text-6xl lg:text-3xl lg:py-28"
                onClick={moveForward}
              >
                {">"}
              </button>
            </div>
          </div> */}

          <div className="grid grid-flow-row mx-6  md:mx-auto">
            <div class="lg:w-[76%] lg:h-[27px]  w-[80%] text-white text-base font-normal font-inter xs:text-center lg:text-left md:text-left py-6 lg:py-10  md:mx-0 mx-auto lg:mx-0 ">We provide the following services</div>
            <div className="overflow-y-auto xs:h-60 h-40 lg:h-60 md:w-3/4 md:mx-auto sm:w-3/5 sm:mx-auto xs:w-1/2 mx-auto w-4/5">
              <div className="pb-3">
                <span className="text-white text-base xs:text-lg lg:text-xl font-bold font-inter" >Infrastructure</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Network Services, RMM, Email, Security, Backup/DRAAS)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-base xs:text-lg font-bold lg:text-xl font-inter" >Hosting</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Dedicated, Private, Public, Hybrid)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-base xs:text-lg  font-bold lg:text-xl font-inter" >Cloud</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Consulting, Integration, Migration, Monitoring/Management)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-base xs:text-lg font-bold lg:text-xl font-inter" >SEO</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Keyword, Market Research, On/Off Page, Technical, Reports, Local, Strategy, Optimization)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-base xs:text-lg font-bold lg:text-xl font-inter" >DevOps</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (IaC, Docker, Kubernetes, Monitoring/Logging, Automation, CI/CD, PaaS)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-base xs:text-lg font-bold lg:text-xl font-inter" >Product Engineering</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (CMS, E-commerce, UXI Engineering, Mobile, Web)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-base xs:text-lg font-bold lg:text-xl font-inter" >Audit</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter">
                  (Control Compliance Gap, Pentesting, GRC/ISMA/ITSA, Vulnerability Assessment)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-white text-xl font-inter text-center w-3/4 mx-auto py-7">
          Prepare for Lift-off: Our Website Lands Soon
        </div>

        <p className="text-xs leading-5 text-white  text-center py-10">
          Copyright © 2023 Root Technologies - All Rights Reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default New_Page;
