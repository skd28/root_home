import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { connect } from "http2";

function BlogCard({ blog }) {
  console.log("Blog Page :", blog);
  const imageUrl = blog.attributes.img.data[0].attributes.url;
  // console.log("Image Url :", imageUrl)
  //const deaparment= blog.attributes.categories.data[0].attributes.Title;

  // console.log("Deaprment :" ,deaparment)

  return (
    <div className=" h-60  shadow-lg p-4 mb-4 overflow-hidden border-4 border-[#61ABEB] mx-24">
      <div className="flex ">
        <div className="mx-2">
          <Image
            priority
            src={imageUrl}
            alt={"image not found"}
            width={300}
            height={250}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2 mx-4 w-1/2">
          <h2 className="text-3xl  mb-2 text-white font-inter font-medium  ">
            {blog.attributes.title}
          </h2>
          {/* <p className="text-black bg-blue-200  font-medium font-inter text-base w-fit p-1 mt-3">
            {blog.attributes.categories.data[0].attributes.Title}
          </p> */}
        </div>
        <Link href={`/blog/${blog.attributes.slug}`}>
          <div className="bg-sky-700  px-14 py-4 float-right  relative top-2/4 shadow-md shadow-white">
            <button className=" font-inter font-bold text-4xl text-white text-center  ">
              Read
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
