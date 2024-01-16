import Blog from "../components/Blog";
import Categories from "../components/Categories";
// import { useState, useEffect } from "react";


async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Beare ${process.env.STAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch("http://localhost:1337/api/categories", options);
    const response = await res.json();
    // console.log("Fetch Functionsn:", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Beare ${process.env.STAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      "http://localhost:1337/api/blogs?populate=*",
      options
    );
    const response = await res.json();
     console.log("Fetch Functionsn Blogs:",response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function page() {
  const categorie = await fetchCategories();
  const blogs = await fetchBlogs();

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
      </div>

      {/* Categories */}
      <Categories categories={categorie} />

      {/* Blogs */}
      <Blog blogs={blogs} />

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

{
  /* {console.log(blog.attributes.img.data.attributes.formats.thumbnail.url)} */
}
{
  /* <img src={`blog.attributes.img.data.attributes.formats.thumbnail.url`} alt="data"/> */
}

// const [categories, setCategories] = useState(null);
// const [blogs, setBlogs] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     const fetchedCategories = await fetchCategories();
//     const blogs = await fetchBlogs();
//     setCategories(fetchedCategories);
//     setBlogs(blogs);
//   };

//   fetchData();
// }, []);
{
  /* <div className="flex  px-48  bg-black py-5">
        {categories && categories.data ? (
          categories.data.map((category) => (
            <div key={category.id} className="text-white border-2 text-2xl p-7">
              {category.attributes.Title}
            </div>
          ))
        ) : (
          <p> </p>
        )}
      </div> */
}
{
  /* <div>
        {blogs && blogs.data ? (
          blogs.data.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.attributes.title}</h2>
              <p>{blog.attributes.content}</p>
              {console.log(blog.attributes.img.data.attributes.url)}
              {blog.attributes.img && blog.attributes.img.data && (
          <Image
            src={blog.attributes.img.data.attributes.url}
            alt={"image"}
            width={30}
            height={40}
          />
        )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */
}
