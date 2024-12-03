import { useEffect, useState } from "react";
import "./Home.css";
import Products from "./Products/Products";

const Home = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const storedViewed =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(storedViewed);
  }, []);

  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="Shop-Products">
        <Products />
      </div>
      {recentlyViewed.length > 0 && (
        <div className="Recently-Viewed">
          <h2>Recently Viewed</h2>
          <Products products={recentlyViewed} />
        </div>
      )}
    </div>
  );
};

export default Home;
