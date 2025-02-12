import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductNav from "./ProductNav";
import CartCard from "./CartCard";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.cost, 0);
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
        </div>
      </div>
    </div>
  );
};

export default CartPage;
