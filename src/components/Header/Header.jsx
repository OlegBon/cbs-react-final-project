import "./Header.css";
import LogoHeader from "./LogoHeader/LogoHeader";
import MenuHeader from "./MenuHeader/MenuHeader";
import ContactHeader from "./ContactHeader/ContactHeader";
import LoginHeader from "./LoginHeader/LoginHeader";
import CartHeader from "./CartHeader/CartHeader";

const Header = () => {
  return (
    <div className="Header">
      <LogoHeader />
      <MenuHeader />
      <ContactHeader />
      <LoginHeader />
      <CartHeader />
    </div>
  );
};

export default Header;
