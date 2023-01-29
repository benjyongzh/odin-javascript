import { useState } from "react";
import ProductList from "./ProductList";

const allProducts = [
  {
    name: "BMX200",
    price: 300,
    id: "citybike1"
  },
  {
    name: "BMX150X",
    price: 160,
    id: "citybike2"
  },
  {
    name: "Lame Bike",
    price: 47,
    id: "citybike3"
  },
  {
    name: "Bike For Rich",
    price: 800,
    id: "citybike4"
  }
];

function CityBikesProducts() {

  const [products, setProducts] = useState(allProducts);


  return (
    <div className="CityBikesProducts">
      This is citybikes
      <ProductList products={products}/>
    </div>
  );
}
  
  export default CityBikesProducts;
  