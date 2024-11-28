import { Link } from "react-router-dom";
import "./CartHeader.css";
import shopCart from "../../../assets/shop-cart.png";

const CartHeader = () => {
  return (
    <div className="Cart-Header">
      <Link to="/cart">
        <img src={shopCart} className="Shop-Cart" alt="Shop Cart" />
        <span className="Products-In-Cart">0</span>
      </Link>
    </div>
  );
};

export default CartHeader;
