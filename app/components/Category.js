"use client";
import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

function Category({ cat }) {
  const { category, changeCategory } = useContext(CategoryContext);

  return (
    <>
      <div className="border-2">
        <div
          onClick={() => changeCategory(cat.attributes.Title)}
          // className="p-4 rounded-lg shadow-sm cursor-pointer"
          className={`${
            cat.attributes.Title === category ? "bg-[#61ABEB] " : "bg-black"
          }
         p-7  shadow-sm cursor-pointer text-white font-inter font-normal text-center`}
        >
          {cat.attributes.Title}
        </div>
      </div>
    </>
  );
}

export default Category;
