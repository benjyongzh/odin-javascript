import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({cartItems}) {

  let cartNumber = cartItems.length > 0 ? ` (${cartItems.length})` : ""

  return (
    <nav className="navbar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="products">Products</NavLink>
        <button className="cart-button">
          Cart{cartNumber}
        </button>
    </nav>
  );
}

export default Navbar;
