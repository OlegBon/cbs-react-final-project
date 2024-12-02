import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loadingCategories: true,
    products: [],
    loadingProducts: true,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.loadingCategories = false;
    },
    setLoadingCategories: (state, action) => {
      state.loadingCategories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loadingProducts = false;
    },
    setLoadingProducts: (state, action) => {
      state.loadingProducts = action.payload;
    },
  },
});

export const {
  setCategories,
  setLoadingCategories,
  setProducts,
  setLoadingProducts,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
