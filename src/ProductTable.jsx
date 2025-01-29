import React from "react";
import ProductCard from "./ProductCard";

const ProductTable = ({ category, plants }) => {
  return (
    <div className=" p-4 flex flex-col gap-4">
      <h1 className="  mx-auto w-1/3 text-2xl border-t-2  border-b-2 border-gray-500 text-center">
        {category}
      </h1>
      <div className=" grid grid-cols-3 gap-4 justify-center px-20 py-4 items-center  ">
        {plants.map((plant) => (
          <ProductCard plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
