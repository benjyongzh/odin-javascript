import { NavLink, Outlet } from "react-router-dom";

function ProductsPage() {
    return (
      <div className="ProductsPage">
        This is a Products page
        <navbar>
        <NavLink to="citybikes">City Bikes</NavLink>
        <NavLink to="mountainbikes">Mountain Bikes</NavLink>
        </navbar>
        <Outlet/>
      </div>
    );
  }
  
  export default ProductsPage;
  