// import { Link } from "react-router-dom";
import "./MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="Menu-Header">
      {/* <Link to="#about-us"> */}
      <a href="#about-us">
        <p className="Link-Menu-Header">About Us</p>
      </a>
      {/* </Link> */}
      {/* <Link to="#text"> */}
      <a href="#text">
        <p className="Link-Menu-Header">Text</p>
      </a>
      {/* </Link> */}
      {/* <Link to="#products"> */}
      <a href="#products">
        <p className="Link-Menu-Header">Products</p>
      </a>
      {/* </Link> */}
    </div>
  );
};

export default MenuHeader;
