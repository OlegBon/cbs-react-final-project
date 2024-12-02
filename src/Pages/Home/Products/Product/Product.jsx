import { useSelector } from "react-redux";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import formatTitleToURL from "../../../../utils/formatTitleToURL";
import ButtonAddToCart from "./ButtonAddToCart/ButtonAddToCart";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.modal.hasAccount);

  const showMoreHandler = () => {
    const formattedTitle = formatTitleToURL(product.title);

    navigate(`/products/${formattedTitle}`, {
      state: { originalTitle: product.title },
    });
  };

  return (
    <div className="Product">
      <div>
        <img
          src={product.thumbnail || "placeholder.png"}
          alt={product.title || "Product Image"}
        />
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price}$</h3>
      {isLoggedIn && <ButtonAddToCart product={product} />}
      <button className="Button-Show-More-Info" onClick={showMoreHandler}>
        Show more info
      </button>
    </div>
  );
};

export default Product;
