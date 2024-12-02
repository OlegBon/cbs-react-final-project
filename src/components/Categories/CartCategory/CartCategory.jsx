import "./CartCategory.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  onValue,
  off,
} from "firebase/database";
import { database } from "../../../firebase-config";
import {
  setProducts,
  setLoadingProducts,
} from "../../../data/reducers/categoriesReducer";
import Product from "../../../Pages/Home/Products/Product/Product";

const CartCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.categories.products);
  const loading = useSelector((state) => state.categories.loadingProducts);

  useEffect(() => {
    if (!category) {
      console.error("Category is not defined!");
      dispatch(setLoadingProducts(false));
      return;
    }

    const productsRef = ref(database, "/products");

    const categoryQuery = query(
      productsRef,
      orderByChild("category"),
      equalTo(category)
    );

    dispatch(setLoadingProducts(true));

    const unsubscribe = onValue(categoryQuery, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const filteredProducts = Object.values(data);
        dispatch(setProducts(filteredProducts));
      } else {
        console.warn("No products found for category:", category);
        dispatch(setProducts([]));
      }

      dispatch(setLoadingProducts(false));
    });

    return () => off(categoryQuery, "value", unsubscribe);
  }, [category, dispatch]);

  if (loading) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div className="Cart-Category">
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default CartCategory;
