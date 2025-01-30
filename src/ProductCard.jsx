import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ plant: { name, image, description, cost } }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = () => {
    if (cartItems.find((item) => item.name === name)) {
      return;
    }
    dispatch({
      type: "cart/addToCart",
      payload: { name, image, description, cost, quantity: 1 },
    });
  };

  return (
    <div className=" justify-self-center w-[300px] flex flex-col  p-4  justify-center items-center  shadow-md rounded-md relative  border border-gray-200">
      <span className=" absolute top-0 right-0 bg-red-400 text-white px-2">
        sale
      </span>
      <div className=" text-center flex flex-col justify-center items-center gap-4">
        <h1>{name}</h1>
        <img className=" w-[200px] h-[250px]" src={image} alt="" />
        <p className=" text-red-400 textxl">${cost}</p>
        <p>{description}</p>
        <button
          onClick={handleAddToCart}
          className=" cursor-pointer py-2 px-4 rounded-md bg-green-400 text-white"
        >
          {cartItems.find((item) => item.name === name)
            ? "Added to Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
