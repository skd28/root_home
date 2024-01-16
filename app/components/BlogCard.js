import Link from "next/link";
import React from "react";
import Image from "next/image";

function BlogCard({ blog }) {
  // console.log("Blog Page :", blog);
  const imageUrl =
    "http://127.0.0.1:1337" + blog.attributes.img.data.attributes.url;

  return (
    <div className=" shadow-lg p-4 mb-4 overflow-hidden border-4 border-[#61ABEB] mx-24">
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
