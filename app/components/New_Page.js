"use client";
import React, { useState } from "react";

function New_Page() {
  // for pushing new ref
  const data = [
    {
      id: 1,
      heading: "Infrastructure",
      content:
        " We provide end-to-end infrastructure services, focusing on advisory, design, implementation, monitoring, and management for business-centric solutions. Continuous improvement is our commitment. ",
    },
    {
      id: 2,
      heading: "Audit",
      content:
        "Opt for our IT Audit services for unbiased reviews of infrastructure, controls, and compliance, with expert suggestions for security enhancements",
    },
    {
      id: 3,
      heading: "Cloud Services",
      content:
        "Explore comprehensive cloud solutions for businesses of all sizes. From advice to secure implementation, we expertly manage diverse platforms, including Azure and AWS. ",
    },
    {
      id: 4,
      heading: "SEO",
      content:
        "Crafting impactful websites, we're India's premier web development agency. From SEO-focused to mobile-friendly, our designs marry strategy, creativity, and user trends for real-world impact",
    },
    {
      id: 5,
      heading: "DeOps",
      content:
        "Supercharge innovation with DevOps as a Service. Streamline software development, foster collaboration, and achieve business goals effortlessly in the dynamic tech landscape. ",
    },
    {
      id: 6,
      heading: "Development",
      content:
        " India's top web agency crafts impactful websites. From SEO to mobile adaptability, our designs blend brand strategy, creativity, and trends for real-world impact. ",
    },
    {
      id: 7,
      heading: "Hosting",
      content: "",
      content:
        " Unlock strategic success with Root's Managed Hosting. We handle hosting, ensuring reliability and budget-friendly support for your competitive edge.",
    },
  ];

  const [iterator, setIterator] = useState(0);

  const moveForward = () => {
    if (iterator < data.length - 1) {
      setIterator((prevIterator) => prevIterator + 1);
    }
  };

  const moveBackward = () => {
    if (iterator > 0) {
      setIterator((prevIterator) => prevIterator - 1);
    }
  };

  return (
    <>
      <div
        className=" h-screen lg:bg-blue-800 overflow-hidden bg-cover  "
        style={{
          backgroundImage: "url(/background.jpg)",
        }}
      >
        <div className="py-3 px-4 lg:mx-20 lg:my-10">
          <img
            src="/main_logo.jpg"
            className="w-1/5 h-1/5 lg:w-[4rem] lg:h-1/6 "
            alt="..."
          />
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:mt-16 lg:gap-20">
          <div className="mx-auto   ">
            <h1 className="font-inter text-3xl font-bold my-4 text-white text-center xs:px-2 xs:text-4xl xs:py-10 sm:text-6xl md:text-7xl lg:text-5xl lg:py-0">
              Welcome to Root Technologies.
            </h1>
          </div>

          <div className="flex flex-row xs:px-8 px-3 lg:px-60  mx-auto lg:w-3/5">
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
                <h1 className=" text-center text-3xl py-3 text-[#000000] w-full xs:text-3xl sm:text-4xl md:text-7xl
                 lg:text-4xl lg:py-0 lg:text-right  lg:h-20  lg:whitespace-nowrap">
                  {data[iterator].heading}
                </h1>
                <p className="text-base text-white  text-justify px-4   sm:text-xl md:text-2xl lg:text-xs">
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
          </div>
        </div>

        <p className="text-xs leading-5 text-white  text-center py-14 xs:py-20 lg:py-24 px-20">
          Copyright © 2023 Root Technologies - All Rights Reserved.{" "}
        </p>
      </div>
    </>
  );
}

export default New_Page;
