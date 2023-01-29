import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="products">Products</NavLink>
    </nav>
  );
}

export default Navbar;
