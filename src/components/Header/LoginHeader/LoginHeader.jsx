import "./LoginHeader.css";
import shopLogin from "../../../assets/shop-login.png";

const LoginHeader = () => {
  return (
    <div className="Login-Header">
      <img src={shopLogin} className="Shop-Login" alt="Shop Login" />
      <p className="Shop-Login-User">not logged in shop</p>
    </div>
  );
};

export default LoginHeader;
