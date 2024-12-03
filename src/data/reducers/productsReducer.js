import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    currentPage: 1,
    itemsPerPage: 4,
  },
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    setCurrentPage: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
    setItemsPerPage: (state, action) => {
      return { ...state, itemsPerPage: action.payload };
    },
  },
});

export const { setProducts, setCurrentPage, setItemsPerPage } =
  productsSlice.actions;
export default productsSlice.reducer;
