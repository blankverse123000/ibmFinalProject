import React from "react";
import { useSelector } from "react-redux";

const CartCard = ({ plant: { name, image, description, quantity, cost } }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <div className=" grid grid-cols-2   justify-between  w-[500px] shadow-md rounded-lg border border-gray-200 py-4 ">
        <img
          className="col-span-1 justify-self-center h-60 w-50"
          src={image}
          alt=""
        />

        <div className=" flex flex-col text-start gap-4">
          <h1 className=" text-2xl font-medium">{name}</h1>
          <p className=" text-lg ">${cost}</p>
          <div className=" flex flex-row gap-4 items-center">
            <span className=" py-1 px-3 bg-gray-300 text-2xl  ">-</span>
            <span>{quantity}</span>
            <span className=" py-1 px-3 bg-gray-300 text-xl  ">+</span>
          </div>
          <p className="text-lg text-gray-900 font-medium ">
            Total: ${cost * quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
