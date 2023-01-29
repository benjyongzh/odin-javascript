import { useState } from "react";
import ProductList from "./ProductList";

const allProducts = [
  {
    name: "BMX200",
    price: 300,
    id: "mountainbike1"
  },
  {
    name: "BMX150X",
    price: 160,
    id: "mountainbike2"
  },
  {
    name: "Lame Bike",
    price: 47,
    id: "mountainbike3"
  },
  {
    name: "Bike For Rich",
    price: 800,
    id: "mountainbike4"
  },
]

function MountainBikesProducts() {

  const {products, setProducts} = useState(allProducts);


  return (
    <div className="MountainBikesProducts">
      This is Mountainbikes
      <ProductList products={products}/>
    </div>
  );
}
  
  export default MountainBikesProducts;
  