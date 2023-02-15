import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import PokeballProducts from "./components/PokeballProducts";
import PotionProducts from "./components/PotionProducts";
import ProductDetails from "./components/ProductDetails";
import ShoppingCartBar from "./components/ShoppingCartBar";

function App() {
  // const {cartValue, setCartValue} = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const updateCartItems = newItem => {
    console.log(newItem);
    console.log("updateCartItems called");

    if (cartItems.length <= 0) {
      setCartItems([newItem]);
      return;
    };

    let tempCart = Array.from(cartItems);

    for (let i = 0; i < tempCart.length; i++){
      if (tempCart[i].name === newItem.name){

        (tempCart[i].quantity + newItem.quantity <= 0) ?
        tempCart.splice(i, 1) :
        tempCart[i].quantity += newItem.quantity;

        setCartItems(tempCart);
        return;
      };
    };

    setCartItems([...cartItems, {name: newItem.name, price: newItem.price, quantity: newItem.quantity, id: newItem.id}]);
  };

  const appContentClick = event => {
    console.log(event);
    if (event.target){
      setShowCart(false);
    };
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="App">
      <div className="App-Content" /* onClick={event => appContentClick(event)} */>
        <BrowserRouter>

          <Navbar cartItems={cartItems} showCartState={state => setShowCart(state)} />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="products" element={<ProductsPage />}>
              <Route index element={<PokeballProducts addItemToCart={updateCartItems} />} />
              <Route path="pokeballs" element={<PokeballProducts addItemToCart={updateCartItems} />} />
              <Route path="potions" element={<PotionProducts addItemToCart={updateCartItems} />} />
              <Route path=":productId" element={<ProductDetails addItemToCart={updateCartItems} />} />
            </Route>

          </Routes>

        </BrowserRouter>
      </div>

      <ShoppingCartBar cartItems={cartItems} visibility={showCart} />
    </div>

  );
}

export default App;
