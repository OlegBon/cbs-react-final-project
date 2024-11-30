import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reducers/modalReducer";
import firebaseReducer from "../reducers/firebaseReducer";
import weatherReducer from "../reducers/weatherReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    firebase: firebaseReducer,
    weather: weatherReducer,
  },
});

export default store;
