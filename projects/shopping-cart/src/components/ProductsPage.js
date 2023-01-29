import { NavLink, Outlet } from "react-router-dom";

function ProductsPage() {
    return (
      <div className="ProductsPage">
        This is a Products page
        <nav>
          <NavLink to="citybikes">City Bikes</NavLink>
          <NavLink to="mountainbikes">Mountain Bikes</NavLink>
        </nav>
        <Outlet/>
      </div>
    );
  }
  
  export default ProductsPage;
  