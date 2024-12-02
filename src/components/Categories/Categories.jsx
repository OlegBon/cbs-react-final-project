import "./Categories.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ref, onValue, off } from "firebase/database";
import { database } from "../../firebase-config";
import { setCategories } from "../../data/reducers/categoriesReducer";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const formatCategory = (category) => {
    return (
      category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")
    );
  };

  useEffect(() => {
    const productsRef = ref(database, "/products");

    const fetchCategories = () => {
      onValue(productsRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const uniqueCategories = [
            ...new Set(Object.values(data).map((product) => product.category)),
          ];
          dispatch(setCategories(uniqueCategories));
        } else {
          console.warn("No categories found.");
          dispatch(setCategories([]));
        }
      });
    };

    fetchCategories();

    return () => off(productsRef);
  }, [dispatch]);

  return (
    <div className="Categories">
      <ul>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <li key={category}>
              <Link to={`/products/category/${category}`}>
                {formatCategory(category)}
              </Link>
            </li>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </ul>
    </div>
  );
};

export default Categories;
