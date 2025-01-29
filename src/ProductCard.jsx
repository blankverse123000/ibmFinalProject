import React from "react";

const ProductCard = ({ plant: { name, image, description } }) => {
  return (
    <div className=" justify-self-center w-[300px] flex flex-col  p-4 flex flex-col justify-center items-center  shadow-md rounded-md relative  border border-gray-200">
      <span className=" absolute top-0 right-0 bg-red-400 text-white px-2">
        sale
      </span>
      <div className=" text-center flex flex-col justify-center items-center gap-4">
        <h1>{name}</h1>
        <img className=" w-[200px] h-[250px]" src={image} alt="" />
        <p>{description}</p>
        <button className=" py-2 px-4 rounded-md bg-green-400 text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
