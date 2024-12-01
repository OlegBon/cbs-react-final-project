import "./Home.css";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="Shop-Products">
        <Products />
      </div>
    </div>
  );
};

export default Home;
