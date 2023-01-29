import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <button className="cart-button">Cart</button>
    </nav>
  );
}

export default Navbar;
