import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCard() {

  const {value, setValue} = useState(5);
  const {quantity, setQuantity} = useState(1);

  const addToCart = event => {
    event.preventDefault();
    console.log("added to cart")
  };

  return (
    <div className="item-card">
      This is an item
      <div className="item-image" />
      <button className="item-quickadd-button" onClick={() => addToCart}>Quick Add</button>
      <Link to="product" className="item-details-button">Details</Link>
    </div>
  );
}
  
  export default ItemCard;
  