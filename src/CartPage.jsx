import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductNav from "./ProductNav";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0
  );
  return (
    <div>
      <ProductNav />

      <div>
        <h1 className=" text-3xl  text-center  my-4  font-semibold">
          Total Cart Amount: ${total ? total : "0"}
        </h1>
        <div className=" flex flex-col justify-center items-center gap-4 ">
          {cartItems &&
            cartItems.map((item) => (
              <CartCard key={item.id} plant={item} total={total} />
            ))}
          <div className=" flex flex-col gap-4">
            <Link
              to={"/ProductList"}
              className=" border border-gray-400 bg-green-400 text-lg py-2 px-4 text-white rounded-lg"
            >
              Continue Shopping
            </Link>
            <button className=" border border-gray-400 bg-green-400 text-lg py-2 px-4 text-white rounded-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
