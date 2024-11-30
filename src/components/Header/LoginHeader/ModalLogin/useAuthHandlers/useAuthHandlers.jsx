import { useDispatch } from "react-redux";
import {
  closeModal,
  setHasAccount,
} from "../../../../../data/reducers/modalReducer";
import { auth } from "../../../../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthHandlers = (email, password) => {
  const dispatch = useDispatch();

  const signIn = () => {
    if (!email || !password) {
      console.log("Email And Password Are Required!");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully Signed In!");
        dispatch(setHasAccount(true));
        dispatch(closeModal());
      })
      .catch((error) => console.error("Error Signing In:", error));
  };

  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Successfully Created Account");
        dispatch(setHasAccount(true));
        dispatch(closeModal());
      })
      .catch((error) => console.error("Error Creating Account:", error));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully Logged Out");
        dispatch(setHasAccount(false));
        dispatch(closeModal());
      })
      .catch((error) => console.error("Error Logging Out:", error));
  };

  return { signIn, createAccount, logOut };
};
