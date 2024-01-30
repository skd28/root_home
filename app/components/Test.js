"use client";
import React from "react";
import Lotiee from "lottie-react";
import home from ".//Root_Home_Page_Lotee.json";
import { useState } from "react";

function Test() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 200; // Adjust the value based on your design
  };

  const scrollRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 200; // Adjust the value based on your design
  };

  return (
    <>
      {/* Landing Page 1  */}
      <div className=" bg-black   lg:grid lg:grid-cols-2  ">
        <div className=" py-20  lg:relative lg:left-14">
          <div
            className=" text-[#61ABEB]  font-semibold font-inter   mx-auto text-center w-3/5 text-2xl py-5 
            xs:w-3/5 xs:text-4xl xs:leading-tight sm:text-7xl sm:w-2/3 sm:leading-tight md:leading-tight  md:text-7xl md:w-2/3
            lg:leading-tight lg:text-8xl lg:w-full lg:h-3/5 lg:text-left
        "
          >
            Building security for tomorrow
          </div>
          <div
            className="text-white  text-xs text-center w-3/4  mx-auto py-5 
            xs:w-3/4 xs:text-lg  sm:text-xl sm:w-2/3  md:w-2/3 md:text-2xl lg:text-3xl lg:w-2/3 lg:mx-0 lg:text-left lg:my-4 "
          >
            At Root, we innovate advanced security networks and develop products
            tailored for the next generation.
          </div>
        </div>
        <div>
          <Lotiee
            animationData={home}
            className="w-4/5 h-4/5 hidden lg:block  relative left-28 mt-14 ms-3"
          ></Lotiee>
        </div>
      </div>

      {/* Landing Page 2  */}
      <div className="bg-[#001131]  flex flex-col-reverse lg:grid lg:grid-flow-col    py-10 gap-10 ">
        <div className="text-white lg:grid lg:grid-flow-col hidden ">
          <div className="relative left-7">
            <div className=" grid grid-flow-row ">
              <button
                className={`w-5/6 py-7 text-center text-white text-base font-bold font-inter border-l-2 border-y-2  ${
                  activeTab === "tab1" ? "bg-blue-500 text-black" : ""
                }`}
                onClick={() => handleTabClick("tab1")}
              >
                Client Co-ordination
              </button>
              <button
                className={`w-5/6 py-7 text-center text-white text-base font-bold font-inter border-l-2 ${
                  activeTab === "tab2" ? "bg-blue-500 text-balck" : ""
                }`}
                onClick={() => handleTabClick("tab2")}
              >
                Planning
              </button>
              <button
                className={`w-5/6 py-7 text-center text-white text-base font-bold font-inter border-l-2 border-y-2 ${
                  activeTab === "tab3" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab3")}
              >
                Prototyping
              </button>
              <button
                className={`w-5/6 py-7 text-center text-white text-base font-bold font-inter border-l-2 ${
                  activeTab === "tab4" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab4")}
              >
                Development
              </button>
              <button
                className={`w-5/6 py-7 text-center text-white text-base font-bold font-inter border-l-2 border-y-2 ${
                  activeTab === "tab5" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab5")}
              >
                Review
              </button>
              <button
                className={`w-5/6 py-7 text-center text-white text-base font-bold font-inter border-l-2 border-b-2 ${
                  activeTab === "tab6" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab6")}
              >
                Maintain
              </button>
            </div>
          </div>
          <div className="border-4 px-5 w-fit">
            <div className="mt-4">
              {activeTab === "tab1" && (
                <div className="  bg-fixed ">
                  <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">
                    #1
                  </div>
                  <div className=" w-3/5 h-1/6 text-blue-400 text-4xl font-bold font-inter ">
                    Client Coordination
                  </div>
                  <div className="w-fit  pt-4 text-white text-base font-normal font-inter my-2 ">
                    Client coordination for what exactly they require is
                    essential. We get only your issues and start planning on it
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div className=" bg-fixed w-full h-1/2 ">
                  <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">
                    #2
                  </div>
                  <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">
                    Planning
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter my-2 ">
                    We plan carefully for our clients, focusing on their needs.
                    Our goal is clear: allocate resources wisely to achieve the
                    best results for optimal satisfaction.
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">
                    #3
                  </div>
                  <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">
                    Prototyping
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter my-2">
                    We craft idea samples for clients before the final product,
                    allowing us to refine and visualize concepts. This ensures
                    the end result meets expectations and requirements
                    effectively for client satisfaction.
                  </div>
                </div>
              )}
              {activeTab === "tab4" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">
                    #4
                  </div>
                  <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">
                    Development
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter my-2  ">
                    Developing a client project involves understanding
                    requirements, strategic planning, design, coding, rigorous
                    testing, client feedback, refinement, deployment, and
                    ongoing monitoring for optimal performance and support.
                  </div>
                </div>
              )}
              {activeTab === "tab5" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">
                    #5
                  </div>
                  <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">
                    {" "}
                    Review
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter  ">
                    Our core team meticulously checks every detail before
                    finalizing any task, ensuring that everything meets our high
                    standards. We're dedicated to completing requirements
                    promptly, well within the specified timeline.
                  </div>
                </div>
              )}
              {activeTab === "tab6" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2 ">
                    #6
                  </div>
                  <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter ">
                    {" "}
                    Maintain
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter my-2">
                    We ensure the smooth progress of the project by maintaining
                    a thorough understanding of every aspect.
                  </div>
                </div>
              )}
            </div>

            <div className="pb-10   my-5">
              <div className="grid grid-flow-col ">
                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
              </div>
              <div className="grid grid-flow-col pt-5 ">
                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden ">
          <div className=" flex flex-row px-5">
            <div className=" border-4 border-blue-600 ">
              <button
                onClick={scrollLeft}
                className="font-bold text-white text-3xl py-5 xs:text-4xl sm:text-6xl "
              >
                {"<"}{" "}
              </button>
            </div>
            <div
              id="slider"
              className="snap-x flex snap-mandatory overflow-scroll   scroll-smooth scrollbar-hide"
            >
              <div className="snap-start w-fit">
                <button
                  className={`w-full h-24 px-7 text-center text-white text-xl font-bold font-inter border-2  xs:px-20 sm:h-28 md:text-3xl md:h-28 ${
                    activeTab === "tab1" ? "bg-blue-500 text-black" : ""
                  }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Client Co-ordination
                </button>
              </div>
              <div className="snap-start w-fit">
                <button
                  className={`w-full h-24  px-7 text-center text-white text-xl font-bold font-inter border-2 xs:px-20 sm:h-28 md:text-3xl md:h-28  ${
                    activeTab === "tab2" ? "bg-blue-500 text-balck" : ""
                  }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Planning
                </button>
              </div>

              <div className="snap-start w-fit">
                <button
                  className={`w-full h-24 px-7 text-center text-white text-xl font-bold font-inter border-2 xs:px-20 sm:h-28 md:text-3xl md:h-28 ${
                    activeTab === "tab3" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleTabClick("tab3")}
                >
                  Prototyping
                </button>
              </div>

              <div className="snap-start w-fit">
                <button
                  className={`w-full h-24 px-7 text-center text-white text-xl font-bold font-inter border-2 xs:px-20 sm:h-28 md:text-3xl  md:h-28 ${
                    activeTab === "tab4" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleTabClick("tab4")}
                >
                  Development
                </button>
              </div>
              <div className="snap-start w-fit">
                <button
                  className={` w-full px-7 h-24 text-center text-white text-xl font-bold font-inter border-2 xs:px-20 sm:h-28 md:text-3xl md:h-28 ${
                    activeTab === "tab5" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleTabClick("tab5")}
                >
                  Review
                </button>
              </div>
              <div className="snap-start w-fit">
                <button
                  className={` h-24 px-7 text-center text-white text-xl font-bold font-inter border-2  xs:px-20 sm:h-28 md:text-3xl md:h-28 ${
                    activeTab === "tab6" ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handleTabClick("tab6")}
                >
                  Maintain
                </button>
              </div>
            </div>
            <div className=" border-4 border-blue-600">
              <button
                onClick={scrollRight}
                className="font-bold text-white text-3xl py-5 xs:text-4xl sm:text-6xl "
              >
                {">"}{" "}
              </button>
            </div>
          </div>
          <div className="border-4  w-fit  mx-5 ">
            <div className="mt-4 ">
              {activeTab === "tab1" && (
                <div className="  bg-fixed  ">
                  <div className="sm:grid sm:grid-flow-col  sm:mx-32 sm:gap-10">
                    <div className="w-1/4 h-1/6 text-white text-5xl font-bold font-inter my-2 px-4  sm:my-0 sm:w-full sm:h-full sm:px-0  sm:text-7xl md:text-8xl ">
                      #1
                    </div>
                    <div className=" w-3/5 h-1/6 text-blue-400 text-3xl font-bold font-inter px-4  sm:px-0 sm:w-full sm:h-full  sm:text-4xl md:text-6xl ">
                      Client Coordination
                    </div>
                  </div>
                  <div className="w-fit  pt-4 text-white text-sm font-normal font-inter my-2 px-4  sm:mx-auto sm:w-3/4 sm:text-xl sm:text-center md:text-2xl">
                    Client coordination for what exactly they require is
                    essential. We get only your issues and start planning on it
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div className=" bg-fixed w-full h-1/2 ">
                  <div className="sm:grid sm:grid-flow-col  sm:mx-32 sm:gap-10">
                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter my-2  px-4 sm:my-0 sm:w-full sm:h-full sm:px-0  sm:text-7xl md:text-8xl ">
                      #2
                    </div>
                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter  px-4  sm:px-0 sm:w-full sm:h-full sm:my-4 sm:text-4xl md:text-6xl">
                      Planning
                    </div>
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter my-2 px-4  sm:mx-auto sm:w-3/4 sm:text-xl sm:text-center md:text-2xl">
                    We plan carefully for our clients, focusing on their needs.
                    Our goal is clear: allocate resources wisely to achieve the
                    best results for optimal satisfaction.
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="sm:grid sm:grid-flow-col  sm:mx-32 sm:gap-10">
                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter px-4  sm:my-0 sm:w-full sm:h-full sm:px-0  sm:text-7xl md:text-8xl ">
                      #3
                    </div>
                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter px-4   sm:px-0 sm:w-full sm:h-full sm:my-4  sm:text-4xl md:text-6xl">
                      Prototyping
                    </div>
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter px-4 sm:mx-auto sm:w-3/4 sm:text-xl sm:text-center md:text-2xl">
                    We craft idea samples for clients before the final product,
                    allowing us to refine and visualize concepts. This ensures
                    the end result meets expectations and requirements
                    effectively for client satisfaction.
                  </div>
                </div>
              )}
              {activeTab === "tab4" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="sm:grid sm:grid-flow-col  sm:mx-32 sm:gap-10">
                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter px-4 sm:my-0 sm:w-full sm:h-full sm:px-0  sm:text-7xl md:text-8xl ">
                      #4
                    </div>
                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter px-4  sm:px-0 sm:w-full sm:h-full  sm:my-4 sm:text-4xl md:text-6xl">
                      Development
                    </div>
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter px-4  sm:mx-auto sm:w-3/4 sm:text-xl sm:text-center md:text-2xl ">
                    Developing a client project involves understanding
                    requirements, strategic planning, design, coding, rigorous
                    testing, client feedback, refinement, deployment, and
                    ongoing monitoring for optimal performance and support.
                  </div>
                </div>
              )}
              {activeTab === "tab5" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="sm:grid sm:grid-flow-col  sm:mx-32 sm:gap-10">
                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter px-4 sm:my-0 sm:w-full sm:h-full sm:px-0  sm:text-7xl md:text-8xl  ">
                      #5
                    </div>
                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter px-4  sm:px-0 sm:w-full sm:h-full  sm:text-4xl sm:my-4 md:text-6xl ">
                      Review
                    </div>
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter px-4 sm:mx-auto sm:w-3/4 sm:text-xl sm:text-center md:text-2xl ">
                    Our core team meticulously checks every detail before
                    finalizing any task, ensuring that everything meets our high
                    standards. We're dedicated to completing requirements
                    promptly, well within the specified timeline.
                  </div>
                </div>
              )}
              {activeTab === "tab6" && (
                <div className="  bg-fixed w-full h-1/2 ">
                  <div className="sm:grid sm:grid-flow-col  sm:mx-32 sm:gap-10">
                    <div className="w-1/4 h-1/6 text-white text-7xl font-bold font-inter px-4 sm:my-0 sm:w-full sm:h-full sm:px-0  sm:text-7xl md:text-8xl  ">
                      #6
                    </div>
                    <div className="w-3/5 h-1/5 text-blue-400 text-4xl font-bold font-inter px-4  sm:px-0 sm:w-full sm:h-full sm:my-4 sm:text-4xl  md:text-6xl">
                      Maintain
                    </div>
                  </div>
                  <div className="w-fit h-1/4 pt-4 text-white text-base font-normal font-inter px-4 sm:mx-auto sm:w-3/4 sm:text-xl sm:text-center md:text-2xl">
                    We ensure the smooth progress of the project by maintaining
                    a thorough understanding of every aspect.
                  </div>
                </div>
              )}
            </div>

            <div className="pb-10   my-5 px-4 sm:mx-24 sm:py-5   ">
              <div className="grid grid-flow-col sm:justify-center sm:gap-7 ">
                <div className="w-14 h-14 bg-zinc-300 rounded-full md:w-20 md:h-20"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full md:w-20 md:h-20"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full md:w-20 md:h-20"></div>
              </div>
              <div className="grid grid-flow-col pt-5 sm:justify-center sm:gap-7  ">
                <div className="w-14 h-14 bg-zinc-300 rounded-full md:w-20 md:h-20"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full md:w-20 md:h-20"></div>
                <div className="w-14 h-14 bg-zinc-300 rounded-full md:w-20 md:h-20"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-blue-400  font-semibold text-center font-inter    text-7xl xs:text-8xl sm:text-9xl md:text-9xl md:px-20 h-1/2 lg:w-1/2 lg:h-3/5 lg:text-right  lg:text-8xl  mt-4 lg:relative  lg:left-36 ">
            Proper. Faster. Robust.
          </div>
          <div className="  text-white  font-inter  text-center text-lg px-3 py-10 xs:px-5 xs:text-xl sm:text-3xl   sm:px-20 lg:w-2/3 md:px-24 lg:h-2/5  lg:relative lg:left-36  lg:text-right lg:py-0 lg:px-0 lg:text-xl ">
            Our philosophy revolves around creating exceptional products and
            networks that guarantee top-notch security. We achieve this by
            constantly researching, developing faster solutions, and ensuring
            they stay super strong.
          </div>
        </div>
      </div>

      {/* Landing Page 3 */}
      

      {/* Landing Page 4 */}
      <div className="bg-[#001131] lg:grid lg:grid-cols-2 flex flex-col-reverse items-center py-10 ">
        <div className=" text-center items-center justify-center  ">
          <div className="md:hidden">
            <div className=" grid grid-flow-col mt-10  w-4/5 mx-auto gap-10 xs:py-5 xs:gap-16 sm:gap-24 sm:py-5">
              <img
                className="w-24 h-8 my-auto  xs:w-full xs:h-full sm:w-full sm:h-full "
                src="/Layer_0_12_.png"
                alt="image not found"
              />
              <img
                className="w-24 h-14 xs:w-full xs:h-full sm:w-full sm:h-full "
                src="/Group 224.png"
                alt="image not found"
              />
            </div>
            <div className=" grid grid-flow-col mt-10  w-4/5 mx-auto gap-10 xs:py-5 xs:gap-16  sm:gap-24 sm:py-5 ">
              <img
                className="w-24 h-8 my-auto xs:w-full xs:h-full  sm:w-full sm:h-4/5 "
                src="/Layer_0_11_.png"
                alt="image not found"
              />
              <img
                className="w-24 h-14 xs:w-full xs:h-full sm:w-full sm:h-full "
                src="/Layer_0_18_.png"
                alt="image not found"
              />
            </div>
            <div className=" grid grid-flow-col mt-10  w-4/5 mx-auto gap-10 xs:py-5  xs:gap-16 sm:gap-24 sm:py-5">
              <img
                className="w-24 h-14 my-auto xs:w-full xs:h-full sm:w-full sm:h-full "
                src="/Dq9Riu_3_.png"
                alt="image not found"
              />
              <img
                className="w-24 h-12  xs:w-full xs:h-fullsm:w-full sm:h-4/5 "
                src="/hJ8NHr.tif_1_.png"
                alt="image not found"
              />
            </div>
            <div className=" grid grid-flow-col mt-10  w-4/5 mx-auto gap-10  xs:py-5 xs:gap-16 sm:gap-24 sm:py-5">
              <img
                className="w-28 h-14 my-auto xs:w-full xs:h-full sm:w-full sm:h-full "
                src="/Group 226.png"
                alt="image not found"
              />
              <img
                className="w-28 h-12  xs:w-full xs:h-full sm:w-full sm:h-full  "
                src="/Veq5jy.tif_1_.png"
                alt="image not found"
              />
            </div>
          </div>

          <div className="hidden md:block ">
            <div className="  grid grid-flow-col mt-10  w-4/5 mx-20 gap-32 py-5 items-center text-center ">
              <img
                className="w-full h-full my-auto    "
                src="/Layer_0_12_.png"
                alt="image not found"
              />
              <img
                className="w-full h-full  "
                src="/Group 224.png"
                alt="image not found"
              />
              <img
                className="w-full h-full my-auto   "
                src="/Layer_0_11_.png"
                alt="image not found"
              />
            </div>
            <div className=" grid grid-flow-col  w-4/5 mx-20 gap-32 my-10 items-center text-center">
              <img
                className="w-full h-3/4 my-auto "
                src="/Layer_0_18_.png"
                alt="image not found"
              />
              <img
                className="w-full h-4/5 relative left-16"
                src="/Dq9Riu_3_.png"
                alt="image not found"
              />
              <img
                className="w-4/5 h-3/4 my-auto relative left-10 "
                src="/Layer_0_16_.png"
                alt="image not found"
              />
            </div>
            <div className=" grid grid-flow-col  w-4/5 mx-20 gap-32  py-4 items-center text-center">
              <img
                className="w-full h-full my-auto"
                src="/hJ8NHr.tif_1_.png"
                alt="image not found"
              />
              <img
                className="w-full h-full"
                src="/Group 226.png"
                alt="image not found"
              />
              <img
                className="w-full h-full my-auto"
                src="/Veq5jy.tif_1_.png"
                alt="image not found"
              />
            </div>
          </div>

          <div className="  bg-sky-700 mt-20 mx-auto shadow-md shadow-white my-5 py-8  xs:mx-10  ">
            <button className="text-white  h-10 text-center  text-4xl font-bold font-inter  ">
              Learn More
            </button>
          </div>
        </div>

        <div className="">
          <div
            className="  text-white font-bold font-inter   py-6 px-14 text-center text-3xl xs:text-6xl xs:px-14 
          sm:text-7xl sm:px-16 md:text-8xl md:px-24 lg:w-full lg:px-8 lg:text-right "
          >
            Trusted by best of the best in the field
          </div>
          <div
            className="  text-white  font-bold font-inter py-6 px-14 text-center text-lg xs:text-3xl xs:px-16  
          sm:text-4xl sm:px-20 md:text-5xl md:px-24 lg:w-full lg:px-8 lg:text-right lg:text-4xl"
          >
            From ITS to Havells, wehave served many companies who are globally
            topping charts in their field
          </div>
        </div>
      </div>

      {/* Landing Page 6 */}
      <div className=" bg-[rgb(0,17,49)] py-10">
        <div className="   flex flex-col lg:grid lg:grid-cols-2   ">
          <div className=" px-10  ">
            <div className=" w-full text-white  text-4xl  font-bold font-inter text-center  py-3 xs:text-6xl  xs:px-5 sm:text-7xl  sm:px-8
              md:text-9xl md:px-12 lg:w-full lg:px-0 lg:h-2/3 lg:text-8xl lg:pb-3 lg:text-left  ">
              Sharing what we have mastered
            </div>
            <div className=" w-full py-3 text-white  text-lg font-normal  font-inter text-center xs:text-xl xs:px-7 sm:text-2xl sm:px-10 md:text-3xl md:py-5  md:px-0 
             lg:text-2xl lg:w-3/5 lg:h-1/4 lg:text-left">
              Here are some blogs which will help you in implementing practices
              not just for big, but any clientele you have.
            </div>
          </div>
          <div>
            <div className=" border-2 bg-[#000000] grid grid-flow-row lg:grid-flow-col w-5/6 mt-4 md:grid-flow-col mx-auto   lg:w-5/6  lg:px-5  ">
              <div className="w-full lg:w-5/6  text-white text-2xl font-bold font-inter py-3  text-center  xs:text-4xl xs:px-5 sm:text-6xl sm:px-7
               md:text-4xl md:w-4/5 md:px-0 lg:text-2xl ">
                How to implement Redis and Celery to automate .....
              </div>
              <div className="mx-3">
                <div className="lg:w-full w-3/5 h-1/4 bg-blue-200 my-5 mx-auto md:mx-0 md:w-full border-2">
                  <div className="text-black text-sm py-1 font-normal font-inter text-center xs:text-lg sm:text-2xl md:text-xl md:px-3 lg:text-lg">
                    TECHNOLOGY
                  </div>
                </div>
                <div className=" w-3/5 h-1/3  bg-sky-700 shadow my-3 mx-auto md:mx-0 md:w-full  lg:my-1 lg:w-full lg:h-1/3">
                  <div className="  text-center text-white text-xl py-1 font-bold font-inter xs:text-lg sm:text-2xl md:text-2xl  ">
                    Read
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className=" border-2 bg-[#000000] grid grid-flow-row lg:grid-flow-col mx-auto w-5/6  lg:px-5 py-3 md:grid-flow-col ">
                <div className="lg:w-5/6 w-full text-white text-2xl    font-bold font-inter text-center  xs:text-4xl xs:px-5  sm:text-6xl sm:px-7
                md:text-4xl md:w-4/5 md:px-0  lg:text-2xl ">
                  How to implement Redis and Celery to automate .....
                </div>
                <div className="mx-3 ">
                  <div className=" w-3/5 h-1/4 bg-blue-200 my-5 mx-auto md:w-full border-2 lg:w-full">
                    <div className="text-black text-sm py-1 font-normal font-inter text-center xs:text-lg sm:text-2xl  md:text-xl md:px-3  lg:text-lg ">
                      TECHNOLOGY
                    </div>
                  </div>
                  <div className=" w-3/5 h-1/3 bg-sky-700 shadow my-3  mx-auto md:w-full  lg:my-1 lg:w-full lg:h-1/3">
                    <div className="  text-center text-white text-xl font-bold font-inter py-1 xs:text-lg sm:text-2xl md:text-2xl ">
                      Read
                    </div>
                  </div>
                </div>
              </div>

              <div className=" border-2 bg-[#000000] grid grid-flow-row lg:grid-flow-col mx-auto w-5/6  lg:px-5 py-3  md:grid-flow-col">
                <div className="lg:w-5/6 w-full  text-white text-2xl  font-bold font-inter text-center  xs:text-4xl xs:px-5 sm:text-6xl sm:px-7 
                md:text-4xl md:w-4/5 md:px-0 lg:text-2xl ">
                  How to implement Redis and Celery to automate .....
                </div>
                <div className="mx-3">
                  <div className="lg:w-full w-3/5 h-1/4 bg-blue-200 my-5  mx-auto md:w-full">
                    <div className="text-black text-sm py-1 font-normal font-inter text-center xs:text-lg  sm:text-2xl md:text-xl md:px-3 lg:text-lg ">
                      TECHNOLOGY
                    </div>
                  </div>
                  <div className=" w-3/5 h-1/3  bg-sky-700 shadow my-3  mx-auto  md:w-full lg:my-1 lg:h-1/3  lg:w-full">
                    <div className="  text-center text-white text-xl font-bold font-inter py-1 xs:text-lg sm:text-2xl md:text-2xl ">
                      Read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-10 pt-4 w-3/4 lg:w-96 h-24 lg:h-20  ">
            <button className="text-white text-center  text-2xl font-bold font-inter w-3/4 lg:w-96 lg:h-10 h-20 mx-7 xs:mx-9 md:text-4xl md:mx-16 lg:text-3xl lg:mx-0">
              Explore More Blogs
            </button>
          </div>
      </div>

      {/* Landing Page 7 */}

      <div className=" lg:grid lg:grid-cols-2 bg-[#000000] py-20 ">
        <div className=" text-white text-4xl font-bold font-inter px-5 py-5 xs:text-5xl xs:px-10  sm:text-7xl sm:px-10 md:text-8xl md:px-16 md:py-10">
          We always like a cup of coffee. Let’s have one :)
        </div>
        <div className="mx-auto py-5 ">
          <div className="grid grid-cols-2 mx-5 xs:mx-8 sm:mx-10 md:mx-14">
            <button
              className={`py-5  border text-2xl text-white xs:text-3xl  sm:text-4xl md:text-5xl ${
                activeTab === "tab1" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              India
            </button>
            <button
              className={`py-5  border text-2xl text-white xs:text-3xl sm:text-4xl md:text-5xl ${
                activeTab === "tab2" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              USA
            </button>
          </div>

          <div className="mt-4 mx-8 md:mx-14">
            {activeTab === "tab1" && (
              <div>
                <div className="grid grid-flow-row md:grid-flow-col gap-10 ">
                  <div className="  text-white text-xl font-bold font-inter  px-2 h-24 xs:text-2xl sm:text-2xl md:text-xl md:h-24">
                    703, Rajhans Montessa, Magdalla, Surat - 000111
                  </div>
                  <div className="  text-white text-xl font-bold font-inter px-2  h-28 xs:text-2xl sm:text-2xl md:text-xl md:h-24">
                    308-308A Mint Chambers, 45/47 Mint Road, Mumbai 400001 INDIA
                  </div>
                </div>
                <div className="grid grid-flow-row md:grid-flow-col  my-4   md:gap-0 md:my-0 md:py-4">
                  <div className="  text-white text-base font-normal font-inter    h-10 xs:text-2xl sm:text-2xl md:px-0 md:text-xl ">
                    info@roottechnologies.co.in
                  </div>
                  <div className=" text-white text-base font-normal font-inter   h-10 xs:text-2xl sm:text-2xl md:px-0 md:py-0 md:text-xl  ">
                    +1 (212) 271 8732
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <div className="grid grid-flow-row md:grid-flow-col ">
                  <div className=" text-white text-xl font-bold font-inter py-4  h-24 xs:text-2xl sm:text-2xl">
                    440 Cobia Dr, Unit 1101, Katy TX 77494 USA
                  </div>
                  <div className=" text-white text-xl font-bold font-inter py-4  h-24 xs:text-2xl sm:text-2xl ">
                    7 Teleport Dr, Staten Island, NY 10311 USA
                  </div>
                </div>
                <div className="grid grid-flow-row md:grid-flow-col md:py-4 ">
                  <div className=" text-white text-base font-normal font-inter  py-2 h-10 xs:text-2xl sm:text-2xl md:px-0 md:text-xl">
                    info@roottechnologies.co.in
                  </div>
                  <div className=" text-white text-xl font-normal font-inter  h-10 xs:text-2xl sm:text-2xl md:px-0 md:py-0 md:text-xl">
                    +1 (212) 271 8732
                  </div>
                </div>
              </div>
            )}

            <div className="md:grid md:grid-cols-2 py-10  hidden lg:hidden ">
              <div>
                <div className="w-72 h-14 bg-white mb-5  mx-auto   ">
                  <input className="w-72 h-12 pl-4 " placeholder="Name"></input>
                </div>
                <div className="w-72 h-14 bg-white mx-auto  ">
                  <input
                    className="w-72 h-12 pl-4  "
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div className="w-72 h-14 bg-white     ">
                <input
                  className="w-72  h-12 pl-4   "
                  placeholder="Contact"
                ></input>
              </div>
            </div>

            <div className="md:hidden lg:block">
              <div className="w-4/5 h-16 bg-white mb-5 mt-14  mx-auto  ">
                <input className="w-4/5 h-14 pl-4  " placeholder="Name"></input>
              </div>
              <div className="w-4/5  h-16 bg-white mx-auto">
                <input className="w-4/5 h-14 pl-4 " placeholder="Email"></input>
              </div>
              <div className="w-4/5  h-16 bg-white my-5 mx-auto    ">
                <input
                  className="w-4/5  h-14 pl-4  "
                  placeholder="Contact"
                ></input>
              </div>
            </div>

            <div className="w-4/5 h-28 bg-white mx-auto     md:w-full md:h-40">
              <textarea
                className="w-4/5  h-24 pl-4 pt-3  md:w-full md:h-40 "
                placeholder="What can we help you with?"
              ></textarea>
            </div>
            <div className=" h-20 bg-sky-700  my-5 shadow-md shadow-white md:my-8 ">
              <button className="text-white  h-10 text-center  text-xl font-bold font-inter pt-5 xs:mx-10 xs:text-2xl sm:text-2xl sm:mx-40 md:mx-52 lg:mx-10">
                I am interested and want to connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;

//  xs:w-3/5 xs:text-5xl sm:text-7xl sm:w-2/3
