import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  closeModal,
} from "../../../../data/reducers/modalReducer";
import { useAuthHandlers } from "./useAuthHandlers/useAuthHandlers";
import LoginBlock from "./LoginBlock/LoginBlock";
import "./ModalLogin.css";

const ModalLogin = () => {
  const dispatch = useDispatch();
  const { email, password, hasAccount } = useSelector((state) => state.modal);

  const { signIn, createAccount, logOut } = useAuthHandlers(email, password);

  return (
    <div className="Modal-Wind" onClick={() => dispatch(closeModal())}>
      <div className="Modal-Wind-Content" onClick={(e) => e.stopPropagation()}>
        <i className="Close-Modal-Wind" onClick={() => dispatch(closeModal())}>
          X
        </i>
        {hasAccount ? (
          <div className="Logout-Block">
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <LoginBlock
            email={email}
            password={password}
            setEmail={(value) => dispatch(setEmail(value))}
            setPassword={(value) => dispatch(setPassword(value))}
            signIn={signIn}
            createAccount={createAccount}
          />
        )}
      </div>
    </div>
  );
};

export default ModalLogin;
