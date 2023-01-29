import { Routes, Route, Link } from "react-router-dom";
import CityBikesProducts from "./CityBikesProducts";
import MountainBikesProducts from "./MountainBikesProducts";

function ProductsPage() {
    return (
      <div className="ProductsPage">
        This is a Products page
        <Link to="/citybikes">City Bikes</Link>
        <Link to="/mountainbikes">Mountain Bikes</Link>
        <Routes>
          <Route path="/citybikes" element={<CityBikesProducts />} />
          <Route path="/mountainbikes" element={<MountainBikesProducts />} />
        </Routes>
      </div>
    );
  }
  
  export default ProductsPage;
  