import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar({cartItems, showCartState}) {
  const [showCart, setShowCart] = useState(false);

  // let cartNumber = cartItems.length > 0 ? ` (${cartItems.length})` : ""

  const toggleShowCart = () => {
    setShowCart(state => !state);
    showCartState(showCart);
  };

  return (
    <nav className="navbar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="products">Products</NavLink>
        <button className="cart-button" onClick={() => toggleShowCart()}>
          Cart{
            cartItems.length > 0 ? ` (${cartItems.length})` : ""
          }
        </button>
    </nav>
  );
}

export default Navbar;
