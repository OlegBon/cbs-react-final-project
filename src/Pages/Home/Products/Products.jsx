import "./Products.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ref, onValue, off } from "firebase/database";
import { database } from "../../../firebase-config";
import { setProducts } from "../../../data/reducers/productsReducer";
import Product from "./Product/Product";
import ProductTop from "./ProtuctTop/ProtuctTop";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const productsRef = ref(database, "/products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      if (Array.isArray(data)) {
        dispatch(setProducts(data));
      } else {
        console.error("Products data is not an array:", data);
        dispatch(setProducts([]));
      }
    });

    return () => off(productsRef);
  }, [dispatch]);

  return (
    <div className="Products">
      <p>Products Top</p>
      <div className="Products-Top">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductTop key={product.id} product={product} />
          ))
        ) : (
          <p>No products found or loading...</p>
        )}
      </div>
      <p>Products</p>
      <div className="Products-All">
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products found or loading...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
