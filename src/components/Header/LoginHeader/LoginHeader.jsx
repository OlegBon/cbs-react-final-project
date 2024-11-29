import "./LoginHeader.css";
import shopNoLogin from "../../../assets/shop-no-login.png";
import shopLogin from "../../../assets/shop-login.png";
import { useEffect } from "react";
import ModalLogin from "./ModalLogin/ModalLogin";
import { database } from "../../../firebase-config";
import { off, onValue, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../data/reducers/modalReducer";
import { setData } from "../../../data/reducers/firebaseReducer";

const LoginHeader = () => {
  const dispatch = useDispatch();
  const { modalState, hasAccount, email } = useSelector((state) => state.modal);

  useEffect(() => {
    const rootRef = ref(database, "/");
    onValue(rootRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(setData(data || {}));
    });
    return () => off(rootRef);
  }, [dispatch]);

  return (
    <div className="Login-Header">
      {modalState && <ModalLogin />}

      <img
        src={hasAccount ? shopLogin : shopNoLogin}
        className="Shop-Login"
        alt="Shop Login"
        onClick={() => dispatch(openModal())}
      />

      <p className="Shop-Login-User">
        {hasAccount ? email || "logged in" : "not logged in shop"}
      </p>
    </div>
  );
};

export default LoginHeader;
