import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let navigate = useNavigate();

  const goCart = () => {
    navigate("/cart");
  };

  return (
    <div className="Header">
      <Link to="/">
        <h1>Logo</h1>
        <h3>Motto</h3>
      </Link>
      <button onClick={goCart}>Cart</button>
    </div>
  );
};

export default Header;
