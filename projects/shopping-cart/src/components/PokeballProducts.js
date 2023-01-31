import ProductList from "./ProductList";
import { useState, useEffect } from "react";

/* const allProducts = [
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
]; */

const api = "https://pokeapi.co/api/v2/item?limit=16";

function PokeballProducts({products}) {

  const [pokeballs, setPokeballs] = useState([]);

  const fetchData = async () => {
    const data = await fetch(api);
    const items = await data.json();
    setPokeballs(items.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="PokeballProducts">
      This is Pokeballs
      <ProductList products={pokeballs}/>
    </div>
  );
};
  
export default PokeballProducts;
  