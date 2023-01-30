import ProductList from "./ProductList";
import { useState, useEffect } from "react";

/* const allProducts = [
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
] */

const api = "https://pokeapi.co/api/v2/item?offset=16&limit=13";

function PotionProducts({products}) {

  const [potions, setPotions] = useState({});

  const fetchData = async () => {
    const data = await fetch(api);
    const items = await data.json();
    console.log(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="PotionProducts">
      This is Potions
      {/* <ProductList products={potions}/> */}
    </div>
  );
}
  
export default PotionProducts;
  