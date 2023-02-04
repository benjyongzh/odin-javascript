import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import "../styles/Products.css";


const api = "https://pokeapi.co/api/v2/item?offset=16&limit=13";

function PotionProducts({addItemToCart}) {

  const [potions, setPotions] = useState([]);

  const fetchData = async () => {
    const data = await fetch(api);
    const items = await data.json();
    setPotions(items.results);
  };

  const addItem = item => {
    addItemToCart(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="PotionProducts">
      <div className="header">Potions</div>
      {<ProductList products={potions} addItemToCart={addItem}/>}
    </div>
  );
}
  
export default PotionProducts;
  