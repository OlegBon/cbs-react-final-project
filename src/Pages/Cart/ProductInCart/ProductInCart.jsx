import "./ProductInCart.css";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  setCountProductInCart,
} from "../../../data/reducers/shoppingCartReducer";

const ProductInCart = ({ productInCart }) => {
  let dispatch = useDispatch();
  const RemoveHandler = () => {
    dispatch(removeProductFromCart(productInCart.id));
  };

  const SetCountHandler = (e) => {
    let params = {
      sign: e.target.innerHTML,
      id: productInCart.id,
    };
    dispatch(setCountProductInCart(params));
  };

  return (
    <div className="Product-In-Cart">
      <img src={productInCart.images[0]} alt="" />
      <div className="Product-In-Cart-Info">
        <h2>{productInCart.title}</h2>
        <h3>
          {productInCart.price}$, Count: {productInCart.count}
        </h3>
        <button onClick={(e) => SetCountHandler(e)}>+</button>
        <button onClick={(e) => SetCountHandler(e)}>-</button>
      </div>
      <button onClick={RemoveHandler} className="Drop-Product">
        Drop product
      </button>
    </div>
  );
};

export default ProductInCart;
