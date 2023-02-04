import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import "../styles/Products.css";


const api = "https://pokeapi.co/api/v2/item?limit=16";

function PokeballProducts({addItemToCart}) {

  const [pokeballs, setPokeballs] = useState([]);

  const fetchData = async () => {
    const data = await fetch(api);
    const items = await data.json();
    setPokeballs(items.results);
  };

  const addItem = item => {
    addItemToCart(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="PokeballProducts">
      <div className="header">Pokeballs</div>
      <ProductList products={pokeballs} addItemToCart={addItem}/>
    </div>
  );
};
  
export default PokeballProducts;
  