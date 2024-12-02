import { Link } from "react-router-dom";
import "./CartHeader.css";
import shopCart from "../../../assets/shop-cart.png";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const productsInCart = useSelector(
    (state) => state.shoppingCart.productsInCart
  );

  return (
    <div className="Cart-Header">
      <Link to="/cart">
        <img src={shopCart} className="Shop-Cart" alt="Shop Cart" />
        <span className="Products-In-Cart">{productsInCart.length}</span>
      </Link>
    </div>
  );
};

export default CartHeader;
