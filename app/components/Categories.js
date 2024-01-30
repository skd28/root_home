"use client";
import React, { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "../../context/CategoryContext";

function Categories({ categories }) {
  const  {changeCategory}  = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(categories?.data[0].attributes.Title);
  },[]);

  return (
    <div className=" flex bg-black  px-auto py-14  text-center justify-center ">
      {categories?.data?.map((category) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
}

export default Categories;
