import { Link } from "react-router-dom";
import "./LogoHeader.css";
import logo from "../../../assets/shop-logo.png";

const LogoHeader = () => {
  return (
    <div className="Logo-Header">
      <Link to="/">
        <img src={logo} className="Logo" alt="Shop Logo" />
        <p className="Shop-Motto">Lorem Ipsum Dolor</p>
      </Link>
    </div>
  );
};

export default LogoHeader;
