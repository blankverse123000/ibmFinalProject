import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;

export const selectCartItems = (state) => state.cart.cartItems;
