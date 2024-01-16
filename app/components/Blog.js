"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "../../context/CategoryContext";

function Blog({ blogs }) {
  // console.log("Blogs :" ,blogs)
  const { category } = useContext(CategoryContext);

  const filteredBlogs = blogs.data.filter((blog) => {
    return blog.attributes.categories.data.some(
      (cat) => cat.attributes.Title == category
    );
  });

  return (
    <div className="grid grid-cols-1 bg-black p-2">
      {filteredBlogs?.map((blog) => (
        <div key={blog.id}>
          {/* {console.log(blog)} */}
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
}

export default Blog;
