import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";


import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import CityBikesProducts from "./components/CityBikesProducts";
import MountainBikesProducts from "./components/MountainBikesProducts";
import ProductDetails from "./components/ProductDetails";
import ShoppingCartBar from "./components/ShoppingCartBar";

// import RouteSwitch from "./components/RouteSwitch";

function App() {

  const {cartValue, setCartValue} = useState(0);

  return (
    <BrowserRouter className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="products" element={<ProductsPage />}>
          <Route index element={<CityBikesProducts />} />

          <Route path="citybikes" element={<CityBikesProducts />} />

          <Route path="mountainbikes" element={<MountainBikesProducts />} />

          <Route path=":productId" element={<ProductDetails />} />

        </Route>

      </Routes>

      <ShoppingCartBar />

    </BrowserRouter>
  );
}

export default App;
