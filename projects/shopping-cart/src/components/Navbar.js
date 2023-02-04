import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="products">Products</NavLink>
        <button className="cart-button">Cart</button>
    </nav>
  );
}

export default Navbar;
