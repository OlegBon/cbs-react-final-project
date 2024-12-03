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
      <h1>
        {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        voluptates dicta minima eos hic, voluptatem eveniet possimus quam
        laborum molestias qui tempora esse. Odit, tempore iste? Quaerat suscipit
        rem aspernatur blanditiis tempore dolore esse a totam odit at nam fugiat
        hic quos, ut labore natus accusantium voluptates. Nemo dignissimos
        dolores optio, cupiditate repellendus exercitationem modi. Voluptas enim
        temporibus, quas distinctio praesentium sit. Fugiat quis adipisci sed
        voluptates, quia sapiente aliquid esse blanditiis accusamus quidem
        architecto accusantium nulla dolores ipsum non veniam doloribus facilis
        placeat, quos magni vitae? Iure est nisi adipisci fugiat, veritatis
        culpa dignissimos nemo labore sequi magni! Iure minima accusantium error
        voluptate saepe ullam, cum velit esse ipsam? Voluptatibus sequi
        repudiandae maxime itaque vero distinctio porro placeat, perferendis
        accusantium doloremque officia possimus mollitia dolore quia velit
        autem, commodi numquam! Officia quaerat magni sapiente odit facere
        consectetur earum id provident neque commodi sit, consequatur ratione
        rem beatae aliquam perspiciatis.
      </p>
      <div className="Cart-Category-Products">
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CartCategory;
