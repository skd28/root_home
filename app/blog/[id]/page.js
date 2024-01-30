import React from "react";
import Link from "next/link";
import Image from "next/image";

async function fetchBlog(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `https://blog-rta6.onrender.com/api/blogs/${id}`,
      options
    );
    const response = await res.json();
    //console.log("Block Page all :",response)
    return response;
  } catch (err) {
    console.error(err);
  }
}

const page = async ({ params }) => {
  const blog = await fetchBlog(params.id);

  const imageUrl = blog.data.attributes.img.data[0].attributes.url;
  // console.log("Image Url : ",imageUrl)
  //  const deparemnt = blog.data.attributes.categories.data.attributes.Title;
  //   console.log("Deaprment :",deparemnt)
  return (
    <>
      <div className=" bg-black">
        <div className="max-w-4xl mx-auto p-4 bg-black">
          <div>
            {/* <p className="text-black bg-blue-200  font-medium font-inter text-base w-fit p-1 mt-3">
              {blog.data.attributes.categories.data[0].attributes.Title}
            </p> */}
            <div dangerouslySetInnerHTML={blog.data.attributes.title} />
            {/* <h1 className="text-5xl text-white font-inter font-bold">
              {blog.data.attributes.title}
            </h1>
            dangerouslySetInnerHTML=
            {{
              __html: blog.data.attributes.description,
            }} */}
            {/* <p className="text-3xl font-bold font-inter text-white my-3">
            <div dangerouslySetInnerHTML={{ __html: blog.data.attributes.description }} />
            </p> */}
            {/* {blog.data.attributes.description && (
              <p
                className="text-3xl font-bold font-inter text-white my-3"
                dangerouslySetInnerHTML={{
                  __html: blog.data.attributes.description,
                }}
              />
            )} */}
          </div>
          <div className="mt-4 flex items-center ">
            <span className="text-sm text-white">
              {blog.data.attributes.reading_time} min read {"|"} Published on{" "}
              {""} {new Date(blog.data.attributes.publishedAt).toLocaleString()}
            </span>
          </div>
          <div className=" overflow-hidden rounded-lg py-10 ">
            <Image
              width={500}
              height={500}
              src={imageUrl}
              alt={"Image not Found"}
              className="relative left-[15%]"
            />
          </div>

          <p className=" mt-2 text-white">{blog.data.attributes.content}</p>
        </div>
        <Link href="/blogs" className="text-white">
          {"<Back"}{" "}
        </Link>
      </div>
    </>
  );
};

export default page;
