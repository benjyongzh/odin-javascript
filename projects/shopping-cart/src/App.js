import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import CityBikesProducts from "./components/CityBikesProducts";
import MountainBikesProducts from "./components/MountainBikesProducts";

// import RouteSwitch from "./components/RouteSwitch";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route path="citybikes" element={<CityBikesProducts />} />
          <Route path="mountainbikes" element={<MountainBikesProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
