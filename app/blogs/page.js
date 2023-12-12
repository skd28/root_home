"use client";
import React from "react";
import { useState } from "react";

function page() {
  const data1 = [
    {
      id: 1,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img1.png",
      depart: "Product",
    },
    {
      id: 2,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img2.png",
      depart: "Product",
    },
  ];
  const data2 = [
    {
      id: 1,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img1.png",
      depart: "IT SECTOR",
    },
    {
      id: 2,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img2.png",
      depart: "IT SECTOR",
    },
  ];
  const data3 = [
    {
      id: 1,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img1.png",
      depart: "Networking",
    },
    {
      id: 2,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img2.png",
      depart: "Networking",
    },
  ];
  const data4 = [
    {
      id: 1,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img1.png",
      depart: "Security",
    },
    {
      id: 2,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img2.png",
      depart: "Security",
    },
  ];
  const data5 = [
    {
      id: 1,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img1.png",
      depart: "Developers",
    },
    {
      id: 2,
      text: "How to implement Redis and Celery to automate .....",
      img: "./img2.png",
      depart: "Developers",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#0F5AA9] grid grid-flow-col py-4  ">
        <div className="float-left  grid grid-flow-col ">
          <div className="w-1/2 ">
            <img src="/logo_.png" alt="Logo not found" className="mx-auto " />
          </div>

          <div className="relative right-10 ">
            <ul className="grid grid-flow-col items-center gap-14  relative top-2">
              <li className="text-white">Ethos</li>
              <li className="text-white ">Blogs</li>
              <li className="text-white ">Team</li>
              <li className="text-white ">Service</li>
              <li className="text-white   ">Carrer</li>
              <li className="text-white ">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="   text-center float-right my-auto ">
          <button className="text-white px-auto bg-[#001F40]  w-1/2 py-3  text-xs">
            Get Service Quote
          </button>
        </div>
      </div>

      {/* Main Page */}
      <div className="bg-black">
        <div className="pt-10 py-5 text-center text-white text-8xl font-bold font-inter">
          Check out our Blogs!
        </div>
        <div className=" w-3/5 mx-auto text-center text-white text-2xl font-normal font-inter">
          Our Ethos lies in developing products, networks and setting security
          by researching proper, developing faster, and keeping it robust.
        </div>

        <div className="grid grid-flow-col w-full  py-10 ">
          <div className="grid grid-flow-col  mx-64 ">
            <button
              className={`py-8 px-4 border text-2xl text-white w-full ${
                activeTab === "tab1" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              Product
            </button>
            <button
              className={` border text-2xl text-white w-full ${
                activeTab === "tab2" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              IT SECTOR
            </button>
            <button
              className={` border text-2xl text-white w-full ${
                activeTab === "tab3" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              Networking
            </button>
            <button
              className={` border text-2xl text-white w-full ${
                activeTab === "tab4" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab4")}
            >
              Security
            </button>
            <button
              className={`border text-2xl text-white w-full ${
                activeTab === "tab5" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab5")}
            >
              Developers
            </button>
          </div>
        </div>

        {/* Click on Tab */}
        <div className="text-white ">
          <div className="mt-4">
            {activeTab === "tab1" && (
              <div className=" mx-20">
                <div
                  id="slider"
                  className="  overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                >
                  {data1.map((item, key) => (
                    <div
                      key={item.id}
                      className=" cursor-pointer px-10 py-5 my-5 border border-sky-400  hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="grid grid-flow-col">
                        <div className=" w-80 h-40">
                          <img className="w-80 h-44" src={item.img} alt="image not found" />
                        </div>
                        <div className="  mx-5">
                          <div className="w-80 text-white text-4xl font-medium font-inter whitespace-normal">
                            {item.text}{" "}
                          </div>
                          <div className="bg-sky-400  text-xl w-24 font-medium font-inter text-center my-4 ">
                            {item.depart}
                          </div>
                        </div>

                        <div className="w-64 h-20 bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-24 pt-4">
                          <button className="text-white w-60 h-10 text-center  text-3xl font-bold font-inter ">
                            Read
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className=" mx-20">
              <div
                id="slider"
                className="  overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {data2.map((item, key) => (
                  <div
                    key={item.id}
                    className=" cursor-pointer px-10 py-5 my-5 border border-sky-400  hover:scale-105 ease-in-out duration-300 "
                  >
                    <div className="grid grid-flow-col">
                      <div className=" w-80 h-40">
                        <img className="w-80 h-44" src={item.img} alt="image not found" />
                      </div>
                      <div className="  mx-5">
                        <div className="w-80 text-white text-4xl font-medium font-inter whitespace-normal">
                          {item.text}{" "}
                        </div>
                        <div className="bg-sky-400  text-xl w-28 font-medium font-inter text-center my-4 ">
                          {item.depart}
                        </div>
                      </div>

                      <div className="w-64 h-20 bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-24 pt-4">
                        <button className="text-white w-60 h-10 text-center  text-3xl font-bold font-inter ">
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
            {activeTab === "tab3" && (
              <div className=" mx-20">
              <div
                id="slider"
                className="  overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {data3.map((item, key) => (
                  <div
                    key={item.id}
                    className=" cursor-pointer px-10 py-5 my-5 border border-sky-400  hover:scale-105 ease-in-out duration-300 "
                  >
                    <div className="grid grid-flow-col">
                      <div className=" w-80 h-40">
                        <img className="w-80 h-44" src={item.img} alt="image not found" />
                      </div>
                      <div className="  mx-5">
                        <div className="w-80 text-white text-4xl font-medium font-inter whitespace-normal">
                          {item.text}{" "}
                        </div>
                        <div className="bg-sky-400 text-xl w-28 font-medium font-inter text-center my-4 ">
                          {item.depart}
                        </div>
                      </div>

                      <div className="w-64 h-20 bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-24 pt-4">
                        <button className="text-white w-60 h-10 text-center  text-3xl font-bold font-inter ">
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
            {activeTab === "tab4" && (
              <div className=" mx-20">
              <div
                id="slider"
                className="  overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {data4.map((item, key) => (
                  <div
                    key={item.id}
                    className=" cursor-pointer px-10 py-5 my-5 border border-sky-400  hover:scale-105 ease-in-out duration-300 "
                  >
                    <div className="grid grid-flow-col">
                      <div className=" w-80 h-40">
                        <img className="w-80 h-44" src={item.img} alt="image not found" />
                      </div>
                      <div className="  mx-5">
                        <div className="w-80 text-white text-4xl font-medium font-inter whitespace-normal">
                          {item.text}{" "}
                        </div>
                        <div className="bg-sky-400  text-xl w-28 font-medium font-inter text-center my-4 ">
                          {item.depart}
                        </div>
                      </div>

                      <div className="w-64 h-20 bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-24 pt-4">
                        <button className="text-white w-60 h-10 text-center  text-3xl font-bold font-inter ">
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
            {activeTab === "tab5" && (
              <div className=" mx-20">
              <div
                id="slider"
                className="  overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {data5.map((item, key) => (
                  <div
                    key={item.id}
                    className=" cursor-pointer px-10 py-5 my-5 border border-sky-400  hover:scale-105 ease-in-out duration-300 "
                  >
                    <div className="grid grid-flow-col">
                      <div className=" w-80 h-40">
                        <img className="w-80 h-44" src={item.img} alt="image not found" />
                      </div>
                      <div className="  mx-5">
                        <div className="w-80 text-white text-4xl font-medium font-inter whitespace-normal">
                          {item.text}{" "}
                        </div>
                        <div className="bg-sky-400 text-xl w-28 font-medium font-inter text-center my-4 ">
                          {item.depart}
                        </div>
                      </div>

                      <div className="w-64 h-20 bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-24 pt-4">
                        <button className="text-white w-60 h-10 text-center  text-3xl font-bold font-inter ">
                          Read
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Page */}
      <div className="bg-black px-14">
        <div className="bg-black grid grid-flow-col py-2">
          <img src="/group.png" alt="logo not found " className="py-2" />
          <ul className=" text-white grid grid-flow-col  relative right-40 items-center">
            <li>About us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
          <ul className="grid grid-flow-col text-white   text-right items-center px-4">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Status</li>
          </ul>
        </div>
        <div className=" border-t border-white/1 t-1">
          <p className="text-xs leading-5 text-gray-400 text-center py-2">
            Copyright © 2023 Root Technologies - All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
