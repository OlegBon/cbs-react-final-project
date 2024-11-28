import "./LoginHeader.css";
import shopLogin from "../../../assets/shop-login.png";
import { useEffect, useState } from "react";
import ModalLogin from "./ModalLogin/ModalLogin";
import { database } from "../../../firebase-config";
import { off, onValue, ref } from "firebase/database";

const LoginHeader = () => {
  // Modal
  const [modalState, setModalState] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const rootRef = ref(database, "/");
    onValue(rootRef, (snapshot) => {
      const data = snapshot.val();
      setData(data || {});
    });
    return () => off(rootRef);
  }, []);

  return (
    <div className="Login-Header">
      <ModalLogin
        call={modalState}
        onDestroy={() => setModalState(false)}
        email={email}
        password={password}
        setHasAccount={setHasAccount}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <img
        src={shopLogin}
        className="Shop-Login"
        alt="Shop Login"
        onClick={() => setModalState(true)}
      />
      <p className="Shop-Login-User">not logged in shop</p>
    </div>
  );
};

export default LoginHeader;
