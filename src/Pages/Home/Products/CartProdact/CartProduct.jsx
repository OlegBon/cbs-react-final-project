import "./CartProduct.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { setProduct } from "../../../../data/reducers/cartProductReducer";
import { database } from "../../../../firebase-config";
import { ref, get } from "firebase/database";
import ButtonAddToCart from "../Product/ButtonAddToCart/ButtonAddToCart";

const CartProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cartProduct.product);
  const isLoggedIn = useSelector((state) => state.modal.hasAccount);
  const { formattedTitle } = useParams();
  const location = useLocation();
  const originalTitle = location.state?.originalTitle || formattedTitle;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(database, "/products");

    get(productsRef)
      .then((snapshot) => {
        const productsData = snapshot.val();
        const productData = productsData.find(
          (product) => product.title === originalTitle
        );

        if (productData) {
          dispatch(setProduct(productData));
        } else {
          console.error("Product not found!");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [originalTitle, dispatch]);

  if (loading) {
    return (
      <div className="Cart-Product-Loading">
        <div className="Spinner"></div>
        Loading...
      </div>
    );
  }

  return (
    <div className="Cart-Product">
      <img src={product.images[0]} alt={product.title} />
      <div className="Cart-Product-Description">
        <h2>{product.title}</h2>
        <h3>Price: {product.price}$</h3>
        <p>{product.description}</p>
        {isLoggedIn && <ButtonAddToCart product={product} />}
      </div>
    </div>
  );
};

export default CartProduct;
