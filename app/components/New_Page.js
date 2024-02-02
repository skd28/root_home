"use client";
import React, { useState } from "react";

// Landing page update on this page


function New_Page() {


  // New Upadte on for screen size 
  return (
    <>
      <div
        className=" bg-blue-800 overflow-y-auto bg-cover h-screen"
        style={{
          backgroundImage: "url(/new_background.jpg)",
        }}
      >
        <div className=" py-4 xs:content-center mcr:content-center sm:content-center  lg:content-left md:content-left">
          <div >
            {/* Logo Image */}
            <img
              src="/main_logo.jpg" className=" w-40 lg:ml-[2rem] md:ml-[2rem] xs:ml-[1rem] sm:ml-[1rem] mcr:ml-[1rem]"
              alt="..."
            />
          </div>

        </div>

        <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-5 gap-2 xs:gap-10 mcr:grid-cols-1 m-[2rem]">
          <div className="content-center">
            <div className="w-[3.5rem] text-white text-[2rem] mcr:text-[2rem] mcr:w-[1rem] xs:text-[2rem] xs:w-[2rem] text-center sm:text-[2rem] lg:text-[4rem] font-bold font-inter lg:p-[2rem]">Welcome to Root Technologies. </div>
          </div>
          <div>
            <div className="lg:w-[76%] lg:h-[27px]  w-[90%]  text-white text-lg mcr:text-base xs:text-base font-normal font-inter text-left lg:text-left md:text-left py-6 lg:py-10  md:mx-0  lg:mx-0 ">We provide the following services</div>
            <div className="   md:mx-auto  sm:mx-auto mx-auto w-full">
              <div className="pb-3">
                <span className="text-white text-xl font-semibold xs:text-lg mcr:text-base lg:text-xl  font-inter h-5" >Infrastructure</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2 h-3">
                  (Network Services, RMM, Email, Security, Backup/DRAAS)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-base  mcr:text-base font-semibold lg:text-xl font-inter" >Audit</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Control Compliance Gap, Pentesting, GRC/ISMA/ITSA, Vulnerability Assessment)

                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-base  mcr:text-base font-semibold lg:text-xl font-inter" >Cloud</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Consulting, Integration, Migration, Monitoring/Management)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-base  mcr:text-base font-semibold lg:text-xl font-inter" >SEO</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (Keyword, Market Research, On/Off Page, Technical, Reports, Local, Strategy, Optimization)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white textxl text-xl xs:text-base  mcr:text-base font-semibold font-inter" >DevOps</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (IaC, Docker, Kubernetes, Monitoring/Logging, Automation, CI/CD, PaaS)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl xs:text-base   mcr:text-base font-semibold lg:text-xl font-inter" >Product Engineering</span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter px-2">
                  (CMS, E-commerce, UXI Engineering, Mobile, Web)
                </span>
              </div>

              <div className="pb-3">
                <span className="text-white text-xl  xs:text-base  mcr:text-base font-semibold lg:text-xl font-inter" >Hosting </span>
                <span className="text-white text-sm font-normal lg:text-xl font-inter">
                  (Dedicated, Private, Public, Hybrid)
                </span>
              </div>
            </div>

          </div>
        </div>

        <p className="text-lg lg:text-2xl px-5 leading-5 text-white  text-center py-5  ">
          Prepare for Lift-off: Our Website Lands Soon
        </p>

        <table className="mx-auto lg:w-[30rem] md:w-[30rem] sm:w-[15rem] xs:w-[15rem] mcr:w-[10rem]">
          <tbody className="w-full mx-20">
            <tr>
              <td>
                <img src="/id-badge-solid.svg" alt="..." className="w-[2rem] h-[2rem]" />
              </td>
              <td> <p className="text-white px-3 "> +91 98244 47659 </p></td>
            </tr>
            <tr>
              <td>
                <img src="/envelope-solid.svg" alt="..." className="w-[2rem] h-[2rem]" />
              </td>
              <td> <p className="text-white px-3"> info@roottechnologies.co.in </p></td>
            </tr>
            <tr>
              <td>
                <img src="/address-book-solid.svg" alt="..." className="w-[2rem] h-[2rem]" />
              </td>
              <td> <p className="text-white px-3 "> 703, Rajhans Montessa, Dumas Rd, beside Le Meridien Hotel, near Airport, Surat, Gujarat 395007 </p></td>
            </tr>
          </tbody>
        </table>


        <p className="text-xs leading-5 text-white  text-center py-5 lg:py-0">
        Copyright © 2023 Root Technologies Pvt Ltd.  All Rights Reserved.{" "}
        </p>




        

        {/* <p className="text-white px-3"> : 703, Rajhans Montessa, Dumas Rd, beside Le Meridien Hotel, near Airport, Surat, Gujarat 395007 </p> */}


        {/* <div className="w-[100%] h-[100%] p-2.5 justify-between items-start">
          <div className="w-[100%] text-white text-[5rem] font-bold font-['Inter']">Welcome to Root Technologies. </div>
          
          <div className="w-[100%] flex-col justify-start items-start gap-[5%]">
            <div className="w-[100%] h-[100%] relative">
              <div className="w-[404px] h-[27px] left-0 top-0 absolute text-white text-[15px] font-normal font-['Inter']">We provide the following services</div>
              <div className="w-[441px] h-[27px] left-0 top-[30px] absolute"><span className="text-white text-lg font-bold font-['Inter']">Infrastructure</span><span className="text-white text-lg font-normal font-['Inter']"> (Network Services, RMM, Email, Security, Backup/DRAAS)</span></div>
              <div className="w-[441px] left-0 top-[82px] absolute"><span className="text-white text-lg font-bold font-['Inter']">Hosting</span><span className="text-white text-lg font-normal font-['Inter']"> (Dedicated, Private, Public, Hybrid)</span></div>
              <div className="w-[441px] left-0 top-[129px] absolute"><span className="text-white text-lg font-bold font-['Inter']">Cloud</span><span className="text-white text-lg font-normal font-['Inter']"> (Consulting, Integration, Migration, Monitoring/Management)</span></div>
              <div className="w-[441px] left-0 top-[198px] absolute"><span className="text-white text-lg font-bold font-['Inter']">SEO</span><span className="text-white text-lg font-normal font-['Inter']"> (Keyword, Market Research, On/Off Page, Technical, Reports, Local, Strategy, Optimization)</span></div>
              <div className="w-[441px] left-0 top-[267px] absolute"><span className="text-white text-lg font-bold font-['Inter']">DevOps</span><span className="text-white text-lg font-normal font-['Inter']"> (IaC, Docker, Kubernetes, Monitoring/Logging, Automation, CI/CD, PaaS)</span></div>
              <div className="w-[441px] left-0 top-[336px] absolute"><span className="text-white text-lg font-bold font-['Inter']">Product Engineering</span><span className="text-white text-lg font-normal font-['Inter']"> (CMS, E-commerce, UXI Engineering, Mobile, Web)</span></div>
              <div className="w-[441px] left-0 top-[405px] absolute"><span className="text-white text-lg font-bold font-['Inter']">Audit</span><span className="text-white text-lg font-normal font-['Inter']"> (Control Compliance Gap, Pentesting, GRC/ISMA/ITSA, Vulnerability Assessment)</span></div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[200%] text-center text-white text-[32px] font-normal font-['Inter']">Prepare to Lift-Off: Our Website Lands Soon</div>
          <div className="w-[100%] text-center text-white text-sm font-normal font-['Inter']">Copyrights @ Root Integrated Technologies Pvt. Ltd 2023</div>
        </div> */}

        {/* <div className="grid grid-flow-row lg:grid-flow-col lg:mt-6 lg:gap-20 ">
          <div className="mx-auto  lg:w-1/2 ">
            <h1 className="font-inter  font-bold  text-white text-center my-4  text-[1.5rem] xs:text-[2rem] lg:text-[3rem] xs:my-2 lg:py-0">
              Welcome to Root Technologies Pvt Ltd.
            </h1>
          </div>
          

          <div className="grid grid-flow-row mx-6  md:mx-auto">
            <div className="lg:w-[76%] lg:h-[27px]  w-[90%]  text-white text-lg font-normal font-inter xs:text-center lg:text-left md:text-left py-6 lg:py-10  md:mx-0 mx-auto lg:mx-0 ">We provide the following services</div>
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
        {/* <p className="text-xs leading-5 text-white  text-center py-5 lg:py-0">
        Copyright © 2023 Root Technologies Pvt Ltd.  All Rights Reserved.{" "}
        </p> */}
      </div>
    </>
  );
}

export default New_Page;



















