import { addProductToCart } from "../../../../../data/reducers/shoppingCartReducer";
import "./ButtonAddToCart.css";
import { useDispatch, useSelector } from "react-redux";

const ButtonAddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(
    (state) => state.shoppingCart.productsInCart
  );

  const AddToCartHandler = () => {
    const productInCart = productsInCart.find((item) => item.id === product.id);

    if (!productInCart) {
      dispatch(addProductToCart(product));
    }
  };

  return (
    <button className="Button-Add-To-Cart" onClick={AddToCartHandler}>
      Add to Cart
    </button>
  );
};

export default ButtonAddToCart;