import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalState: false,
    email: "",
    password: "",
    hasAccount: false,
  },
  reducers: {
    openModal: (state) => {
      state.modalState = true;
    },
    closeModal: (state) => {
      state.modalState = false;
      state.password = "";
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setHasAccount: (state, action) => {
      state.hasAccount = action.payload;
    },
  },
});

export const { openModal, closeModal, setEmail, setPassword, setHasAccount } =
  modalSlice.actions;
export default modalSlice.reducer;
