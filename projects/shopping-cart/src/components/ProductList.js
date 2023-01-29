// import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";


function ProductList({products}) {

  console.log(products)

  return (
    <div className="product-list">
    this is the product list
    {
      products.map(item => {
        return (
          <ItemCard
            itemName={item.name}
            itemPrice={item.price}
            key={item.id}
          />
        )
      })
    }
    </div>
  );
}
  
  export default ProductList;
  