import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reducers/modalReducer";
import firebaseReducer from "../reducers/firebaseReducer";
import weatherReducer from "../reducers/weatherReducer";
import productsReducer from "../reducers/productsReducer";
import cartProductReducer from "../reducers/cartProductReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";
import categoriesReducer from "../reducers/categoriesReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    firebase: firebaseReducer,
    weather: weatherReducer,
    products: productsReducer,
    cartProduct: cartProductReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoriesReducer,
  },
});

export default store;
