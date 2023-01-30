import { NavLink, Outlet } from "react-router-dom";

function ProductsPage() {
    return (
      <div className="ProductsPage">
        This is a Products page
        <nav>
          <NavLink to="pokeballs">Pokeballs</NavLink>
          <NavLink to="potions">Potions</NavLink>
        </nav>
        <Outlet/>
      </div>
    );
  }
  
  export default ProductsPage;
  