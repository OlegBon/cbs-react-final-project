import "./Cart.css";
import ProductInCart from "./ProductInCart/ProductInCart";
import { useSelector } from "react-redux";

const Cart = () => {
  let productsInCart = useSelector(
    (state) => state.shoppingCart.productsInCart
  );
  const isLoggedIn = useSelector((state) => state.modal.hasAccount);

  const calculateTotalPrice = () => {
    return productsInCart
      .reduce(
        (acc, productInCart) => acc + productInCart.price * productInCart.count,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="Cart">
      <h1>Cart</h1>
      {!isLoggedIn ? (
        <p>Please log in to view your cart</p>
      ) : productsInCart.length > 0 ? (
        <>
          {productsInCart.map((product) => (
            <ProductInCart key={product.id} productInCart={product} />
          ))}
          <div className="Total-Price">
            <h2>Total Price: {calculateTotalPrice()}$</h2>
            <button>Submit</button>
          </div>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
