import { Link } from "react-router-dom";
import "./ContactHeader.css";

const ContactHeader = () => {
  return (
    <div className="Contact-Header">
      <Link to="tel:+380971234567">
        <p className="Tel-Contact-Header">+380 97 123 4567</p>
      </Link>
      <Link to="mailto:sales@domain.com">
        <p className="Mail-Contact-Header">sales@domain.com</p>
      </Link>
    </div>
  );
};

export default ContactHeader;
