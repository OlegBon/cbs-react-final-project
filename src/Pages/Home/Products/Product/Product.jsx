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

    let recentlyViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    const isProductInList = recentlyViewed.some(
      (item) => item.id === product.id
    );

    if (!isProductInList) {
      const fullProduct = {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        stock: product.stock,
        rating: product.rating,
        category: product.category,
        description: product.description,
        returnPolicy: product.returnPolicy,
      };

      recentlyViewed.unshift(fullProduct);

      if (recentlyViewed.length > 10) recentlyViewed.pop();
    } else {
      recentlyViewed = recentlyViewed.filter((item) => item.id !== product.id);
      recentlyViewed.unshift({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        stock: product.stock,
        rating: product.rating,
        category: product.category,
        description: product.description,
        returnPolicy: product.returnPolicy,
      });
    }

    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));

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
