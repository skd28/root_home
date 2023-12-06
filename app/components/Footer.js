"use client"
import React from "react";
import { useState } from "react";
import Lotiee from 'lottie-react';
import home from './/home_page.json';

function Footer() {
  const data1 = [
    {
      id: 1,
      name: "Abdul Qadir Badri",
      Deaprt: "Executive",
    },
    {
      id: 2,
      name: "Abdul Qadir Badri",
      Deaprt: "Executive",
    },
    {
      id: 3,
      name: "Abdul Qadir Badri",
      Deaprt: "Executive",
    },
    {
      id: 4,
      name: "Abdul Qadir Badri",
      Deaprt: "Executive",
    },
    {
      id: 5,
      name: "Abdul Qadir Badri",
      Deaprt: "Executive",
    },
  ];

  const data2 = [
    {
      id: 1,
      name: "Abdul Qadir Badri",
      Deaprt: "HR",
    },
    {
      id: 2,
      name: "Abdul Qadir Badri",
      Deaprt: "HR",
    },
    {
      id: 3,
      name: "Abdul Qadir Badri",
      Deaprt: "HR",
    },
    {
      id: 4,
      name: "Abdul Qadir Badri",
      Deaprt: "HR",
    },
    {
      id: 5,
      name: "Abdul Qadir Badri",
      Deaprt: "HR",
    },
  ];

  const data3 = [
    {
      id: 1,
      name: "Abdul Qadir Badri",
      Deaprt: "Networking",
    },
    {
      id: 2,
      name: "Abdul Qadir Badri",
      Deaprt: "Networking",
    },
    {
      id: 3,
      name: "Abdul Qadir Badri",
      Deaprt: "Networking",
    },
    {
      id: 4,
      name: "Abdul Qadir Badri",
      Deaprt: "Networking",
    },
    {
      id: 5,
      name: "Abdul Qadir Badri",
      Deaprt: "Networking",
    },
  ];
  const data4 = [
    {
      id: 1,
      name: "Abdul Qadir Badri",
      Deaprt: "Security",
    },
    {
      id: 2,
      name: "Abdul Qadir Badri",
      Deaprt: "Security",
    },
    {
      id: 3,
      name: "Abdul Qadir Badri",
      Deaprt: "Security",
    },
    {
      id: 4,
      name: "Abdul Qadir Badri",
      Deaprt: "Security",
    },
    {
      id: 5,
      name: "Abdul Qadir Badri",
      Deaprt: "Security",
    },
  ];
  const data5 = [
    {
      id: 1,
      name: "Abdul Qadir Badri",
      Deaprt: "Developers",
    },
    {
      id: 2,
      name: "Abdul Qadir Badri",
      Deaprt: "Developers",
    },
    {
      id: 3,
      name: "Abdul Qadir Badri",
      Deaprt: "Developers",
    },
    {
      id: 4,
      name: "Abdul Qadir Badri",
      Deaprt: "Developers",
    },
    {
      id: 5,
      name: "Abdul Qadir Badri",
      Deaprt: "Developers",
    },
  ];

  const data6 = [
    {
      id: 1,
      name: "Abdul Qadir Badri",
      Deaprt: "Marketing",
    },
    {
      id: 2,
      name: "Abdul Qadir Badri",
      Deaprt: "Marketing",
    },
    {
      id: 3,
      name: "Abdul Qadir Badri",
      Deaprt: "Marketing",
    },
    {
      id: 4,
      name: "Abdul Qadir Badri",
      Deaprt: "Marketing",
    },
    {
      id: 5,
      name: "Abdul Qadir Badri",
      Deaprt: "Marketing",
    },
  ];
  const infra_s1 = [
    {
      id: 1,
      service: "Network Services",
      sub_services: ["Load balancing", "Security", "CDN", "VPN"],
    },
    {
      id: 2,
      service: "RMM",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,
      service: "Email  Services", //
      sub_services: ["Load balancing", "SMTP", "TLS", "VPN"],
    },
    {
      id: 4,
      service: "Security",
      sub_services: ["Load balancing", "Security", "CDN", "VPN"],
    },
    {
      id: 5,
      service: "Backup & DRAAS",
      sub_services: ["Load balancing", "Security", "CDN", "VPN"],
    },
  ];
  const infra_s2 = [
    {
      id: 1,
      advan: "TRANSPARENT GOVERNANCE MODEL",
    },
    {
      id: 2,
      advan: "COST OPTIMIZATION",
    },
    {
      id: 3,
      advan: "TINTEGRATED QUALITY SERVICE",
    },
    {
      id: 4,
      advan: "SLA DRIVEN APPROACH",
    },
    {
      id: 5,
      advan: "HIGH CUSTOMER SATISFACTION",
    },
  ];

  const host_s1 = [
    {
      id: 1,
      service: "Dedicated",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,
      service: "Private Cloud",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,
      service: "Public Cloud",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,

      service: "Hybrid Cloud",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];
  const host_s2 = [
    {
      id: 1,
      advan: "Increased Security",
    },
    {
      id: 2,
      advan: "Performance",
    },
    {
      id: 3,
      advan: "Guaranteed Solutions",
    },
    {
      id: 4,
      advan: "Dedicated & Customized Cloud Hosting",
    },
    {
      id: 5,
      advan: "Proven Processes",
    },
    {
      id: 6,
      advan: "Standardized Industry Framework",
    },
    {
      id: 8,
      advan: "Regulatory & Compliance Management",
    },
    {
      id: 9,
      advan: "Storage & Backup",
    },
    {
      id: 10,
      advan: "Comprehensive Disaster Management",
    },
    {
      id: 11,
      advan: "Cost-effective Pricing",
    },
  ];

  const cloud_s1 = [
    {
      id: 1,

      service: "Cloud Consulting",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,

      service: " Cloud Intregation",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,

      service: "Cloud Migration",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,

      service: "Cloud Monitoring & Management",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 5,

      service: "Hybrid Cloud Services",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 6,

      service: "Backup & DRAAS",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];
  const cloud_s2 = [
    {
      id: 1,
      advan: "FASTER CLOUD ADOPTION",
    },
    {
      id: 2,
      advan: "END-TO-END SUPPORT",
    },
    {
      id: 3,
      advan: "HIGHLY SECURED",
    },
    {
      id: 4,
      advan: "COST EFFECTIVE",
    },
    {
      id: 5,
      advan: "COMPLIANCE MANAGEMENT",
    },
  ];

  const seo_s1 = [
    {
      id: 1,

      service: "Keyword Research",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,

      service: "Competitor Analysis",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,

      service: "On Page Seo",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,

      service: "Off Page SEO",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 5,

      service: "Technical SEO",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 6,

      service: "Reporting and White Hat Seo Analytics",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 7,

      service: "Local Seo",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 8,

      service: "Content Strategy",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 9,

      service: "White Hat Seo",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 10,

      service: "Content creation and optimization",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];
  const seo_s2 = [
    {
      id: 1,
      advan: "Traffic increase",
    },
    {
      id: 2,
      advan: "Visibility boost",
    },
    {
      id: 3,
      advan: "Higher rankings",
    },
    {
      id: 4,
      advan: "Credibility boost",
    },
    {
      id: 5,
      advan: "User experience",
    },
    {
      id: 6,
      advan: "Cost-effective",
    },
  ];

  const dev_s1 = [
    {
      id: 1,

      service: "Infrastructure as Code (IaC)",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,

      service: "Containerization Excellence",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,

      service: "Kubernetes Orchestration ",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,

      service: " Configuration Management",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 5,

      service: "Monitoring and Logging Solutions",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 6,

      service: "Automation Excellence",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 7,

      service: "CI/CD Mastery ",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 8,

      service: "Platform-As-A-Service (Paas)",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 9,

      service: "Integration & Deployment",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 10,

      service: "DevOps Configuration Management",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];
  const dev_s2 = [
    {
      id: 1,
      advan: "Continuous",
    },
    {
      id: 2,
      advan: "Transparency",
    },
    {
      id: 3,
      advan: "Integration",
    },
    {
      id: 4,
      advan: "Quality",
    },
    {
      id: 5,
      advan: "Speed",
    },
    {
      id: 5,
      advan: "Web Application Development",
    },
  ];

  const deve_s1 = [
    {
      id: 1,

      service: "Custom Web Development",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,

      service: "E-commerce Development",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,

      service: "Content Management Systems (CMS) ",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,

      service: "User-Centric Design",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 5,

      service: "UI/UX Design",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 6,

      service: "Web Application Development ",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];
  const deve_s2 = [
    {
      id: 1,
      advan: "Efficiency",
    },
    {
      id: 2,
      advan: "Innovation",
    },
    {
      id: 3,
      advan: "Progress",
    },
    {
      id: 4,
      advan: "Prosperity",
    },
    {
      id: 5,
      advan: "Connectivity",
    },
    {
      id: 6,
      advan: "Sustainability",
    },
    {
      id: 7,
      advan: "Flexibility",
    },
  ];

  const aud_s1 = [
    {
      id: 1,

      service: "IT General Control Compliance Gap",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,

      service: "Penetration",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,

      service: "IT GRC/ISMS/ITSA Analysis Service",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,

      service: "Vulnerability",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 5,

      service: "Test",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 6,

      service: "Cyber Security",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];
  const aud_s2 = [
    {
      id: 1,
      advan: "Strengthen IT Governance.",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 2,
      advan: "Mitigate IT Risk.",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 3,
      advan: "Optimal System Check",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 4,
      advan: "Optimized IT Efficiency.",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 5,
      advan: "Verify Organization Operation",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 6,
      advan: "Audit Assurance Services",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
    {
      id: 7,
      advan: "Identify performance source.",
      sub_services: [
        "Monitoring",
        "Alerting",
        "Patching",
        "Remote",
        "Automation",
        "BDR",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className=" bg-black  grid grid-cols-2   ">
        <div className="  my-20 relative left-14">
          <div className="w-full h-3/5 text-[#61ABEB] text-8xl font-semibold font-inter  ">
            Building security for tomorrow
          </div>
          <div className="text-white w-2/3 text-3xl mt-5 ">
            At Root, we innovate advanced security networks and develop products
            tailored for the next generation.
          </div>
        </div>
        <div >
          <Lotiee animationData={home} className="w-4/5 h-4/5  mt-0 relative left-28 ms-3"></Lotiee>
          {/* <img
            src="/Gorup.png"
            alt="logo"
            className="w-4/5 h-4/5  mt-36 relative left-28 ms-3"
          /> */}
        </div>
      </div>

      {/* Landing Page Two */}
      <div className="bg-[#001131]  grid grid-flow-col  py-10 gap-10 ">
        <div className="text-white grid grid-flow-col ">
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
        <div className="">
          <div className="text-blue-400 text-8xl font-semibold font-[' Inter'] w-3/5 h-3/5 text-right  py-4  mt-4 relative  left-40 ">
            Proper. Faster. Robust.
          </div>
          <div className="w-2/3 h-2/5  relative left-28  text-right py-3  text-white">
            Our philosophy revolves around creating exceptional products and
            networks that guarantee top-notch security. We achieve this by
            constantly researching, developing faster solutions, and ensuring
            they stay super strong.
          </div>
        </div>
      </div>

      {/* Landing Page 3 */}
      <div className="bg-black">
        <div className=" px-10 text-white text-8xl font-bold font-inter pt-10 ">
          You Name It. We Have It
        </div>
        <div className=" px-12 text-white text-2xl font-normal font-inter py-3">
          Each and every service imaginable, we can serve you with master
          efficiency
        </div>
        <div className="px-10 py-5 ">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <button
                className={`py-8 px-10 border text-2xl text-white w-Full ${
                  activeTab === "tab1" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab1")}
              >
                Infrastructure
              </button>
              <button
                className={`py-8 px-4 border text-2xl text-white w-full ${
                  activeTab === "tab2" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab2")}
              >
                Audit
              </button>
              <button
                className={`py-8 px-4 border text-2xl text-white w-full ${
                  activeTab === "tab3" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab3")}
              >
                Cloud Services
              </button>
              <button
                className={`py-8 px-4 border text-2xl text-white w-full ${
                  activeTab === "tab4" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab4")}
              >
                SEO
              </button>
              <button
                className={`py-8 px-4 border text-2xl text-white w-full ${
                  activeTab === "tab5" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab5")}
              >
                DevOps
              </button>
              <button
                className={`py-8 px-4 border text-2xl text-white w-full ${
                  activeTab === "tab6" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab6")}
              >
                Development
              </button>
              <button
                className={`py-8 px-4 border text-2xl text-white w-full ${
                  activeTab === "tab7" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleTabClick("tab7")}
              >
                Hosting
              </button>
            </div>
            <div className=" bg-[#001131]   border-8 px-10 py-7 h-[42.6rem]">
              {activeTab === "tab1" && (
                <div className=" h-fit ">
                  <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                    Our infrastructure service offerings cut across advisory,
                    design, implementation, monitoring and management and are
                    business-centric. We drive continuous service improvement by
                    following industry best practices, implementing improvement
                    plans and introducing service framework to improve IT
                    infrastructure availability.
                  </div>
                  <div className="grid grid-cols-3 gap-14  h-fit">
                    <div className="  col-span-2 h-[30rem] ">
                      <div className=" text-white text-4xl font-bold font-inter my-5">
                        Offerings
                      </div>
                      {/* Slider 1 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                      >
                        {infra_s1.map((item, key) => (
                          <div
                            key={item.id}
                            className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                          >
                            <div
                              className="   text-white text-xl text-center font-bold font-inter "
                              style={{ whiteSpace: "pre-wrap" }}
                            >
                              {item.service.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.service.split(" ").length - 1 && " "}
                                </React.Fragment>
                              ))}
                              {/* {item.service} */}
                            </div>

                            <div className=" text-white  col-span-2   ">
                              {item.sub_services.map((subService, key) => (
                                <div
                                  key={key}
                                  className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                >
                                  <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="    h-[30rem] ">
                      <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                        Advantages
                      </div>

                      {/* Slider-2 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                      >
                        {infra_s2.map((item, key) => (
                          <div
                            key={item.id}
                            className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                          >
                            <div className="text-white text-base font-bold">
                              {item.advan.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.advan.split(" ").length - 1 && <br />}
                                </React.Fragment>
                              ))}

                              {/* {item.advan} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div>
                  <div className=" h-fit ">
                    <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                      Our IT Audit services provide an independent and objective
                      review of (Tinfrastructure, control configuration. and
                      regulatory compliance through in-depthtesting and expert
                      analysis. We propose implementation of appropriate
                      security measures. During a functionalaudit we examine
                      whether the company's IT systems operate according to
                      predefined business logic and identify areas which do not
                      comply with either efficiency or business requirements.
                    </div>
                    <div className="grid grid-cols-3 gap-14  h-fit">
                      <div className="  col-span-2 h-[30rem] ">
                        <div className=" text-white text-4xl font-bold font-inter my-5">
                          Offerings
                        </div>
                        {/* Slider 1 */}
                        <div
                          id="slider"
                          className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                        >
                          {host_s1.map((item, key) => (
                            <div
                              key={item.id}
                              className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                            >
                              <div
                                className="   text-white text-xl text-center font-bold font-inter "
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                {item.service.split(" ").map((word, index) => (
                                  <React.Fragment key={index}>
                                    {word}
                                    {index !==
                                      item.service.split(" ").length - 1 && " "}
                                  </React.Fragment>
                                ))}
                                {/* {item.service} */}
                              </div>

                              <div className=" text-white  col-span-2   ">
                                {item.sub_services.map((subService, key) => (
                                  <div
                                    key={key}
                                    className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                  >
                                    <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                      {subService}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="    h-[30rem] ">
                        <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                          Advantages
                        </div>

                        {/* Slider-2 */}
                        <div
                          id="slider"
                          className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                        >
                          {host_s2.map((item, key) => (
                            <div
                              key={item.id}
                              className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                            >
                              <div className="text-white text-base font-bold">
                                {item.advan.split(" ").map((word, index) => (
                                  <React.Fragment key={index}>
                                    {word}
                                    {index !==
                                      item.advan.split(" ").length - 1 && (
                                      <br />
                                    )}
                                  </React.Fragment>
                                ))}

                                {/* {item.advan} */}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div className=" h-fit ">
                  <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                    We offer a comprehensive portfolio of end-to-end cloud
                    services and solutions, advisory, design, implementation and
                    operations management for business of any size. Our Cloud
                    Services support various requirements and are delivered
                    securely. Though we provide cloud services from our own
                    cloud data center, we have knowledge and expertise to
                    monitor & manage cloud of any services like, Microsoft
                    Azure, AWS, etc.
                  </div>
                  <div className="grid grid-cols-3 gap-14  h-fit">
                    <div className="  col-span-2 h-[30rem] ">
                      <div className=" text-white text-4xl font-bold font-inter my-5">
                        Offerings
                      </div>
                      {/* Slider 1 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                      >
                        {cloud_s1.map((item, key) => (
                          <div
                            key={item.id}
                            className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                          >
                            <div
                              className="   text-white text-xl text-center font-bold font-inter "
                              style={{ whiteSpace: "pre-wrap" }}
                            >
                              {item.service.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.service.split(" ").length - 1 && " "}
                                </React.Fragment>
                              ))}
                              {/* {item.service} */}
                            </div>

                            <div className=" text-white  col-span-2   ">
                              {item.sub_services.map((subService, key) => (
                                <div
                                  key={key}
                                  className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                >
                                  <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="    h-[30rem] ">
                      <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                        Advantages
                      </div>

                      {/* Slider-2 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                      >
                        {cloud_s2.map((item, key) => (
                          <div
                            key={item.id}
                            className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                          >
                            <div className="text-white text-base font-bold">
                              {item.advan.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.advan.split(" ").length - 1 && <br />}
                                </React.Fragment>
                              ))}

                              {/* {item.advan} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab4" && (
                <div className=" h-fit ">
                  <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                    At Root Technologies, we take immense pride in our journey
                    as a leading SEO service provider since 2018. Over the
                    years, we have consistently demonstrated our commitment to
                    excellence, delivering tangible results and value to our
                    clients across the country. Our team of SEO experts
                    possesses comprehensive knowledge across all SEO approaches.
                    Whether it's on-page optimization, off-page strategies,
                    technical SEO, or local SEO,
                  </div>
                  <div className="grid grid-cols-3 gap-14  h-fit">
                    <div className="  col-span-2 h-[30rem] ">
                      <div className=" text-white text-4xl font-bold font-inter my-5">
                        Offerings
                      </div>
                      {/* Slider 1 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                      >
                        {seo_s1.map((item, key) => (
                          <div
                            key={item.id}
                            className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                          >
                            <div
                              className="   text-white text-xl text-center font-bold font-inter "
                              style={{ whiteSpace: "pre-wrap" }}
                            >
                              {item.service.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.service.split(" ").length - 1 && " "}
                                </React.Fragment>
                              ))}
                              {/* {item.service} */}
                            </div>

                            <div className=" text-white  col-span-2   ">
                              {item.sub_services.map((subService, key) => (
                                <div
                                  key={key}
                                  className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                >
                                  <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="    h-[30rem] ">
                      <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                        Advantages
                      </div>

                      {/* Slider-2 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                      >
                        {seo_s2.map((item, key) => (
                          <div
                            key={item.id}
                            className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                          >
                            <div className="text-white text-base font-bold">
                              {item.advan.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.advan.split(" ").length - 1 && <br />}
                                </React.Fragment>
                              ))}

                              {/* {item.advan} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab5" && (
                <div className=" h-fit ">
                  <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                    Unlock unparalleled speed and innovation with DevOps as a
                    Service. Embrace a streamlined, automated approach to
                    software development and operations. By harnessing the power
                    of DevOps as a Service, you can accelerate your projects,
                    enhance collaboration, and stay ahead in the rapidly
                    evolving tech landscape. Hustle faster, innovate better, and
                    achieve your business goals with ease.
                  </div>
                  <div className="grid grid-cols-3 gap-14  h-fit">
                    <div className="  col-span-2 h-[30rem] ">
                      <div className=" text-white text-4xl font-bold font-inter my-5">
                        Offerings
                      </div>
                      {/* Slider 1 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                      >
                        {dev_s1.map((item, key) => (
                          <div
                            key={item.id}
                            className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                          >
                            <div
                              className="   text-white text-xl text-center font-bold font-inter "
                              style={{ whiteSpace: "pre-wrap" }}
                            >
                              {item.service.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.service.split(" ").length - 1 && " "}
                                </React.Fragment>
                              ))}
                              {/* {item.service} */}
                            </div>

                            <div className=" text-white  col-span-2   ">
                              {item.sub_services.map((subService, key) => (
                                <div
                                  key={key}
                                  className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                >
                                  <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="    h-[30rem] ">
                      <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                        Advantages
                      </div>

                      {/* Slider-2 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                      >
                        {dev_s2.map((item, key) => (
                          <div
                            key={item.id}
                            className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                          >
                            <div className="text-white text-base font-bold">
                              {item.advan.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.advan.split(" ").length - 1 && <br />}
                                </React.Fragment>
                              ))}

                              {/* {item.advan} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab6" && (
                <div className=" h-fit ">
                  <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                    As a leading web development agency based in India, we
                    specialize in crafting websites that not only look
                    impressive but also deliver outstanding results for your
                    business. Our services cater to a wide range of needs,
                    whether you're seeking an SEO-focused website or one that
                    seamlessly adapts to mobile devices. Our approach to website
                    design combines strategic brand thinking with creative
                    innovation and the latest trends in user interface,
                    resulting in visually stunning websites that drive
                    real-world impact.
                  </div>
                  <div className="grid grid-cols-3 gap-14  h-fit">
                    <div className="  col-span-2 h-[30rem] ">
                      <div className=" text-white text-4xl font-bold font-inter my-5">
                        Offerings
                      </div>
                      {/* Slider 1 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                      >
                        {deve_s1.map((item, key) => (
                          <div
                            key={item.id}
                            className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                          >
                            <div
                              className="   text-white text-xl text-center font-bold font-inter "
                              style={{ whiteSpace: "pre-wrap" }}
                            >
                              {item.service.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.service.split(" ").length - 1 && " "}
                                </React.Fragment>
                              ))}
                              {/* {item.service} */}
                            </div>

                            <div className=" text-white  col-span-2   ">
                              {item.sub_services.map((subService, key) => (
                                <div
                                  key={key}
                                  className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                >
                                  <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="    h-[30rem] ">
                      <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                        Advantages
                      </div>

                      {/* Slider-2 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                      >
                        {deve_s2.map((item, key) => (
                          <div
                            key={item.id}
                            className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                          >
                            <div className="text-white text-base font-bold">
                              {item.advan.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.advan.split(" ").length - 1 && <br />}
                                </React.Fragment>
                              ))}

                              {/* {item.advan} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab7" && (
                <div className=" h-fit ">
                  <div className=" text-white text-sm font-normal font-inter  w-[92%] mb-4">
                    Many businesses across verticals have been using Root
                    "Managed Hosting Services" to get unparalleled hosting and
                    management services. With our Managed Hosting Services,
                    organizations can focus on their strategic goals while we
                    support their business by providing the benefits of
                    budgeted, reliable managed hosting services to keep business
                    competitive.
                  </div>
                  <div className="grid grid-cols-3 gap-14  h-fit">
                    <div className="  col-span-2 h-[30rem] ">
                      <div className=" text-white text-4xl font-bold font-inter my-5">
                        Offerings
                      </div>
                      {/* Slider 1 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border px-2 py-2 border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth "
                      >
                        {aud_s1.map((item, key) => (
                          <div
                            key={item.id}
                            className="  grid grid-cols-3 gap-5 px-5 py-7 border-4 border-sky-700  cursor-pointer hover:scale-105 ease-in-out duration-300"
                          >
                            <div
                              className="   text-white text-xl text-center font-bold font-inter "
                              style={{ whiteSpace: "pre-wrap" }}
                            >
                              {item.service.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.service.split(" ").length - 1 && " "}
                                </React.Fragment>
                              ))}
                              {/* {item.service} */}
                            </div>

                            <div className=" text-white  col-span-2   ">
                              {item.sub_services.map((subService, key) => (
                                <div
                                  key={key}
                                  className="  bg-[#36A9E1] m-1 float-left rounded-full text-center "
                                >
                                  <span className="text-black text-xs font-bold p-1 break-all w-fit">
                                    {subService}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="    h-[30rem] ">
                      <div className=" text-white text-4xl text-left font-bold font-inter my-5">
                        Advantages
                      </div>

                      {/* Slider-2 */}
                      <div
                        id="slider"
                        className=" h-[26rem] border border-sky-400 overflow-x-hidden overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide"
                      >
                        {aud_s2.map((item, key) => (
                          <div
                            key={item.id}
                            className=" cursor-pointer p-7 border-8 border-sky-400 text-center  hover:scale-105 ease-in-out duration-300 "
                          >
                            <div className="text-white text-base font-bold">
                              {item.advan.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                  {word}
                                  {index !==
                                    item.advan.split(" ").length - 1 && <br />}
                                </React.Fragment>
                              ))}

                              {/* {item.advan} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Landing Page 4 */}
      <div className="bg-[#001131] grid grid-cols-2 ">
        <div className=" text-center items-center justify-center ">
          <div className=" grid grid-flow-col mt-20  w-3/4 mx-auto gap-28">
            <img
              className="w-24 h-8 my-auto mix-blend-multiply "
              src="/Layer_0_12_.png"
              alt="image not found"
            />
            <img
              className="w-24 h-14 "
              src="/Group 224.png"
              alt="image not found"
            />
            <img
              className="w-20 h-10 my-auto "
              src="/Layer_0_11_.png"
              alt="image not found"
            />
          </div>
          <div className=" grid grid-flow-col  w-3/4 mx-auto gap-28  my-8">
            <img
              className="w-28 h-10 my-auto "
              src="/Layer_0_18_.png"
              alt="image not found"
            />
            <img
              className="w-20 h-14"
              src="/Dq9Riu_3_.png"
              alt="image not found"
            />
            <img
              className="w-24 h-7 my-auto"
              src="/Layer_0_16_.png"
              alt="image not found"
            />
          </div>
          <div className=" grid grid-flow-col  w-3/4 mx-auto gap-28 ">
            <img
              className="w-20 h-6 my-auto"
              src="/hJ8NHr.tif_1_.png"
              alt="image not found"
            />
            <img
              className="w-20 h-14"
              src="/Group 226.png"
              alt="image not found"
            />
            <img
              className="w-20 h-7 my-auto"
              src="/Veq5jy.tif_1_.png"
              alt="image not found"
            />
          </div>

          <div className="w-96 h-24 bg-sky-700   mt-32 mx-auto shadow-md shadow-white ">
          <button className="text-white w-96 h-10 text-center  text-4xl font-bold font-inter pt-6">
              Learn More
              </button>
          {/* <div className="w-96 h-20 bg-sky-700  my-5   items-center  mx-auto mt-10 pt-4">
              
            </div> */}
            {/* <div className="w-96 h-4 pt-7 text-center text-white text-4xl font-extrabold font-inter  items-center justify-center">
              
            </div> */}
          </div>
        </div>
        <div className=" py-16">
          <div className="w-full h-3/4 text-right text-white text-8xl font-bold font-inter  px-10">
            Trusted by best of the best in the field
          </div>
          <div className="w-3/5 h-1/4 text-right text-white text-2xl font-bold font-inter  relative left-52">
            From ITS to Havells, wehave served many companies who are globally
            topping charts in their field
          </div>
        </div>
      </div>

      {/* Landing Page 5 */}

      <div className="bg-black">
        <div className="w-full h-1/2 text-center text-white text-8xl font-bold font-inter py-16 ">
          Meet the Roots of our company.
        </div>
        <div className="grid grid-flow-col w-full mx-auto py-10 ">
          <div className="grid grid-flow-col  px-40 ">
            <button
              className={`py-8 px-4 border text-2xl text-white w-full ${
                activeTab === "tab1" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              Core Team
            </button>
            <button
              className={`py-8 px-14 border text-2xl text-white w-full ${
                activeTab === "tab2" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              HR
            </button>
            <button
              className={`py-8 px-4 border text-2xl text-white w-full ${
                activeTab === "tab3" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              Networking
            </button>
            <button
              className={`py-8 px-4 border text-2xl text-white w-full ${
                activeTab === "tab4" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab4")}
            >
              Security
            </button>
            <button
              className={`py-8 px-4 border text-2xl text-white w-full ${
                activeTab === "tab5" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab5")}
            >
              Developers
            </button>
            <button
              className={`py-8 px-4 border text-2xl text-white w-full ${
                activeTab === "tab6" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleTabClick("tab6")}
            >
              Marketing
            </button>
          </div>
        </div>
        {/* Click On Tabs */}
        <div className="text-white ">
          <div className="mt-4">
            {activeTab === "tab1" && (
              <div className="realtive flex items-center mx-10 py-5 ">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide  "
                >
                  {data1.map((item, key) => (
                    <div
                      key={item.id}
                      className=" w-1/3 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="w-64 h-64 bg-zinc-300 rounded-full"></div>
                      <div className="w-72 h-10 text-white text-3xl font-bold font-inter py-4">
                        {item.name}
                      </div>
                      <div className="w-60 h-10 text-white text-xl font-normal font-inter py-3">
                        {item.Deaprt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="realtive flex items-center mx-10 py-5 ">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide  "
                >
                  {data2.map((item, key) => (
                    <div
                      key={item.id}
                      className=" w-1/3 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="w-64 h-64 bg-zinc-300 rounded-full"></div>
                      <div className="w-72 h-10 text-white text-3xl font-bold font-inter py-4">
                        {item.name}
                      </div>
                      <div className="w-60 h-10 text-white text-xl font-normal font-inter py-3">
                        {item.Deaprt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="realtive flex items-center mx-10 py-5 ">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide  "
                >
                  {data3.map((item, key) => (
                    <div
                      key={item.id}
                      className=" w-1/3 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="w-64 h-64 bg-zinc-300 rounded-full"></div>
                      <div className="w-72 h-10 text-white text-3xl font-bold font-inter py-4">
                        {item.name}
                      </div>
                      <div className="w-60 h-10 text-white text-xl font-normal font-inter py-3">
                        {item.Deaprt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="realtive flex items-center mx-10 py-5 ">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide  "
                >
                  {data4.map((item, key) => (
                    <div
                      key={item.id}
                      className=" w-1/3 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="w-64 h-64 bg-zinc-300 rounded-full"></div>
                      <div className="w-72 h-10 text-white text-3xl font-bold font-inter py-4">
                        {item.name}
                      </div>
                      <div className="w-60 h-10 text-white text-xl font-normal font-inter py-3">
                        {item.Deaprt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab5" && (
              <div className="realtive flex items-center mx-10 py-5 ">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide  "
                >
                  {data5.map((item, key) => (
                    <div
                      key={item.id}
                      className=" w-1/3 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="w-64 h-64 bg-zinc-300 rounded-full"></div>
                      <div className="w-72 h-10 text-white text-3xl font-bold font-inter py-4">
                        {item.name}
                      </div>
                      <div className="w-60 h-10 text-white text-xl font-normal font-inter py-3">
                        {item.Deaprt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab6" && (
              <div className="realtive flex items-center mx-10 py-5 ">
                <div
                  id="slider"
                  className="w-full h-full overflow-x-scroll scroll whitespace-nowrap  scroll-smooth scrollbar-hide  "
                >
                  {data6.map((item, key) => (
                    <div
                      key={item.id}
                      className=" w-1/3 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 "
                    >
                      <div className="w-64 h-64 bg-zinc-300 rounded-full"></div>
                      <div className="w-72 h-10 text-white text-3xl font-bold font-inter py-4">
                        {item.name}
                      </div>
                      <div className="w-60 h-10 text-white text-xl font-normal font-inter py-3">
                        {item.Deaprt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Landing Page 6 */}
      <div className=" bg-[rgb(0,17,49)] py-10">
        <div className=" grid grid-cols-2  ">
          <div className=" px-10">
            <div className="w-3/4 h-3/4 text-white text-8xl font-bold font-inter  pb-3">
              Sharing what we have mastered
            </div>
            <div className="w-3/5 h-1/4 pt-3 text-white text-2xl font-normal font-inter ">
              Here are some blogs which will help you in implementing practices
              not just for big, but any clientele you have.
            </div>
          </div>
          <div>
            {/* First */}
            <div className=" border-2 bg-[#000000] grid grid-flow-col w-4/5 px-5 mt-4 ">
              <div className="w-5/6  text-white text-3xl font-bold font-inter py-3  ">
                How to implement Redis and Celery to automate .....
              </div>
              <div>
                <div className="w-full h-1/4 bg-blue-200 my-5 ">
                  <div className="text-black text-sm py-1 font-normal font-inter ">
                    TECHNOLOGY
                  </div>
                </div>
                <div className="w-full h-1/4 bg-sky-700 shadow my-3">
                  <div className="  text-center text-white text-xl font-bold font-inter ">
                    Read
                  </div>
                </div>
              </div>
            </div>
            {/* Second */}
            <div>
              <div className=" border-2 bg-[#000000] grid grid-flow-col w-4/5 px-5 py-3 my-4">
                <div className="w-5/6  text-white text-3xl font-bold font-inter  ">
                  How to implement Redis and Celery to automate .....
                </div>
                <div>
                  <div className="w-full h-1/4 bg-blue-200 my-3 ">
                    <div className="text-black text-sm py-1 font-normal font-inter ">
                      TECHNOLOGY
                    </div>
                  </div>
                  <div className="w-full h-1/4 bg-sky-700 shadow my-3 ">
                    <div className="  text-center text-white text-xl font-bold font-inter ">
                      Read
                    </div>
                  </div>
                </div>
              </div>
              {/* Third */}
              <div className=" border-2 bg-[#000000] grid grid-flow-col w-4/5 px-5 py-3">
                <div className="w-5/6  text-white text-3xl font-bold font-inter  ">
                  How to implement Redis and Celery to automate .....
                </div>
                <div>
                  <div className="w-full h-1/4 bg-blue-200 my-3 ">
                    <div className="text-black text-sm py-1 font-normal font-inter ">
                      TECHNOLOGY
                    </div>
                  </div>
                  <div className="w-full h-1/4 bg-sky-700 shadow my-3 ">
                    <div className="  text-center text-white text-xl font-bold font-inter ">
                      Read
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-20 bg-sky-700  my-5 shadow-md shadow-white  items-center  mx-auto mt-10 pt-4">
              <button className="text-white w-96 h-10 text-center  text-3xl font-bold font-inter ">
              View All Blogs
              </button>
            </div>
      </div>

      {/* Landing Page 7 */}

      <div className=" grid grid-cols-2 bg-[#000000] py-20">
        <div className="w-full h-full text-white text-8xl font-bold font-inter relative left-10 ">
          We always like a cup of coffee. Let’s have one :)
        </div>
        <div className="mx-auto">
          <button
            className={`py-5 px-16 border text-2xl text-white ${
              activeTab === "tab1" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            India
          </button>
          <button
            className={`py-5 px-16 border text-2xl text-white ${
              activeTab === "tab2" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            USA
          </button>

          <div className="mt-4">
            {activeTab === "tab1" && (
              <div>
                <div className="grid grid-flow-col">
                  <div className="w-52 h-full text-white text-xl font-bold font-inter pr-5">
                    703, Rajhans Montessa, Magdalla, Surat - 000111
                  </div>
                  <div className="w-52 h-full text-white text-xl font-bold font-inter pr-5">
                    308-308A Mint Chambers, 45/47 Mint Road, Mumbai 400001 INDIA
                  </div>
                </div>
                <div className="grid grid-flow-col mt-4">
                  <div className="w-60 h-16 text-white text-base font-normal font-inter  ">
                    info@roottechnologies.co.in
                  </div>
                  <div className="w-60 h-16 text-white text-xl font-normal font-inter">
                    +1 (212) 271 8732
                  </div>
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <div className="grid grid-flow-col">
                  <div className="w-52 h-full text-white text-xl font-bold font-inter pr-5">
                    440 Cobia Dr, Unit 1101, Katy TX 77494 USA
                  </div>
                  <div className="w-52 h-full text-white text-xl font-bold font-inter pr-5">
                    7 Teleport Dr, Staten Island, NY 10311 USA
                  </div>
                </div>
                <div className="grid grid-flow-col mt-4">
                  <div className="w-60 h-16 text-white text-base font-normal font-inter  ">
                    info@roottechnologies.co.in
                  </div>
                  <div className="w-60 h-16 text-white text-xl font-normal font-inter">
                    +1 (212) 271 8732
                  </div>
                </div>
              </div>
            )}

            <div className="w-96 h-14 bg-white mb-5  ">
              <input className="w-96  h-14 pl-4 "  placeholder="Name"></input>
            </div>
            <div className="w-96 h-14 bg-white">
              <input className="w-96  h-14 pl-4 " placeholder="Email"></input>
            </div>
            <div className="w-96 h-14 bg-white my-5">
              <input className="w-96  h-14 pl-4 " placeholder="Contact"></input>
            </div>
            <div className="w-96  h-24 bg-white ">
              <textarea
                className="w-96  h-24 pl-4 pt-3"
                placeholder="What can we help you with?"
              ></textarea>
            </div>
            <div className="w-96 h-20 bg-sky-700  my-5 shadow-md shadow-white">
              <button className="text-white w-96 h-10 text-center  text-xl font-bold font-inter pt-5 ">
                I am interested and want to connect
              </button>
            </div>
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

export default Footer;
