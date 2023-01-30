import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import PokeballProducts from "./components/PokeballProducts";
import PotionProducts from "./components/PotionProducts";
import ProductDetails from "./components/ProductDetails";
import ShoppingCartBar from "./components/ShoppingCartBar";

/* const allProducts = {
  citybikes: [
    {
      name: "BMX200",
      price: 280,
      id: "citybike1"
    },
    {
      name: "Gazelle 4T9",
      price: 510,
      id: "citybike2"
    },
    {
      name: "Giant type 5",
      price: 230,
      id: "citybike3"
    },
    {
      name: "Gazelle junior",
      price: 120,
      id: "citybike4"
    },
    {
      name: "Shimano 1290",
      price: 760,
      id: "citybike5"
    },
  ],
  mountainbikes: [
    {
      name: "BMX400",
      price: 450,
      id: "mountainbike1"
    },
    {
      name: "BMX129C",
      price: 340,
      id: "mountainbike2"
    },
    {
      name: "Shimano 908B",
      price: 880,
      id: "mountainbike3"
    },
    {
      name: "Snake series 14",
      price: 1100,
      id: "mountainbike4"
    },
  ],
}; */

function App() {
  const {cartValue, setCartValue} = useState(0);
  const {cartItems, setCartItems} = useState({});

  return (
    <BrowserRouter className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="products" exact element={<ProductsPage />}>
          <Route index element={<PokeballProducts />} />
          <Route path="pokeballs" element={<PokeballProducts />} />
          <Route path="potions" element={<PotionProducts />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>

      </Routes>

      <ShoppingCartBar cartValue={cartValue} cartItems={cartItems} />

    </BrowserRouter>
  );
}

export default App;
