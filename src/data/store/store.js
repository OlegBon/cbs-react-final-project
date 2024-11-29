import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reducers/modalReducer";
import firebaseReducer from "../reducers/firebaseReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    firebase: firebaseReducer,
  },
});

export default store;
