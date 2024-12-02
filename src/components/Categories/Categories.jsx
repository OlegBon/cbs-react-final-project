import "./Categories.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ref, onValue, off } from "firebase/database";
import { database } from "../../firebase-config";
import { setCategories } from "../../data/reducers/categoriesReducer";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const formatCategory = (category) => {
    return category
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  useEffect(() => {
    const productsRef = ref(database, "/products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      if (Array.isArray(data)) {
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        dispatch(setCategories(uniqueCategories));
      } else {
      }
    });

    return () => off(productsRef);
  }, [dispatch]);

  return (
    <div className="Categories">
      <ul>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <li key={category}>
              <a href={`/products/category/${category}`}>
                {formatCategory(category)}
              </a>
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
