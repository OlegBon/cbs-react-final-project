import { createSlice } from "@reduxjs/toolkit";
import { database } from "../../firebase-config";

import { collection, addDoc } from "firebase/firestore";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    productsInCart: [],
    orderDetails: null,
  },
  reducers: {
    addProductToCart: (state, action) => {
      if (!state.productsInCart.some((pr) => pr.id === action.payload.id)) {
        let productInCart = {
          ...action.payload,
          count: 1,
        };
        state.productsInCart.push(productInCart);
      } else {
        state.productsInCart.forEach((el) => {
          if (el.id === action.payload.id) {
            el.count += 1;
          }
        });
      }
    },
    removeProductFromCart: (state, action) => {
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (pr) => pr.id !== action.payload
        ),
      };
    },
    setCountProductInCart: (state, action) => {
      state.productsInCart.forEach((el) => {
        if (el.id === action.payload.id) {
          if (action.payload.sign === "+") el.count += 1;
          if (action.payload.sign === "-" && el.count > 1) el.count -= 1;
        }
      });
    },
    submitOrder: (state, action) => {
      const order = {
        email: action.payload.email,
        orderDate: new Date().toISOString(),
        paymentMethod: action.payload.paymentMethod,
        products: state.productsInCart,
        totalAmount: state.productsInCart.reduce(
          (acc, product) => acc + product.price * product.count,
          0
        ),
        status: "new",
      };

      addDoc(collection(database, "orders"), order)
        .then(() => {
          state.productsInCart = [];
          state.orderDetails = order;
        })
        .catch((error) => console.error("Error submitting order:", error));
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  setCountProductInCart,
  submitOrder,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
