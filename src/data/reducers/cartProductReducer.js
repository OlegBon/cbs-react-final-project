import { createSlice } from "@reduxjs/toolkit";

const cartProduct = createSlice({
  name: "cartProduct",
  initialState: {
    product: {},
  },
  reducers: {
    setProduct: (state, action) => {
      return { ...state, product: action.payload };
    },
  },
});

export const { setProduct } = cartProduct.actions;
export default cartProduct.reducer;
