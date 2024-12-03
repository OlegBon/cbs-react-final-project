import "./Products.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ref, onValue, off } from "firebase/database";
import { database } from "../../../firebase-config";
import {
  setProducts,
  setCurrentPage,
} from "../../../data/reducers/productsReducer";
import Product from "./Product/Product";

const Products = ({ products: externalProducts }) => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.products.products);
  const currentPage = useSelector((state) => state.products.currentPage);
  const itemsPerPage = useSelector((state) => state.products.itemsPerPage);

  const products = externalProducts || reduxProducts;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  useEffect(() => {
    if (!externalProducts) {
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
    }
  }, [dispatch, externalProducts]);

  return (
    <div className="Products">
      <div className="Products-All">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products found or loading...</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastProduct >= products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
