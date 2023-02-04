import { NavLink, Outlet } from "react-router-dom";
import "../styles/ProductsPage.css";

function ProductsPage() {
    return (
      <div className="ProductsPage">
        <nav>
          <NavLink className="navlink" to="pokeballs">Pokeballs</NavLink>
          <NavLink className="navlink" to="potions">Potions</NavLink>
        </nav>
        <Outlet/>
      </div>
    );
  }
  
  export default ProductsPage;
  