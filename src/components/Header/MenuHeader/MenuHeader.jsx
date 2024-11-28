import { Link } from "react-router-dom";
import "./MenuHeader.css";

const MenuHeader = () => {
  return (
    <div className="Menu-Header">
      <Link to="/">
        <p className="Link-Menu-Header">Link</p>
      </Link>
      <Link to="/">
        <p className="Link-Menu-Header">Link</p>
      </Link>
      <Link to="/">
        <p className="Link-Menu-Header">Link</p>
      </Link>
    </div>
  );
};

export default MenuHeader;
